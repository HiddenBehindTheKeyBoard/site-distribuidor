import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../interfaces/Usuario';

import { LoginService } from '../services/login.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { InformacoesImportantesComponent } from '../informacoes-importantes/informacoes-importantes.component';

import { Empresa } from '../interfaces/Empresa';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { ValidaService } from '../services/valida.service';


import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _opened: boolean = false;
  
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  public MASKS = utilsBr.MASKS;

  submittedUser = false;
  submittedCad = false;

  bsModalRef: BsModalRef;

  public formGroupUsuario: FormGroup;
  public formGroupCadastro: FormGroup;

  private usuario: Usuario = {};
  private empresa: Empresa = {};

  public existeEmail: boolean = false;
  public existeDocumento: boolean = false;
  constructor(
    private modalService: BsModalService,
    private fireAuth: AngularFireAuth,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private validaService: ValidaService,
  ) {
    this.formGroupUsuario = this.formBuilder.group({
      'email': [this.usuario.email, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)
      ])],
      'senha': [this.usuario.senha, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });

    this.formGroupCadastro = this.formBuilder.group({
      'email': [this.empresa.email, Validators.compose([
        Validators.pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/),
        Validators.required,
        Validators.email
      ])],
      'documento': [{
        value: this.empresa.documento,
        disabled: false
      },
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        NgBrazilValidators.cpf
      ])],
      'tipo': [this.empresa.tipo, Validators.compose([
        Validators.required
      ])],
    });

    this.formGroupCadastro.controls['tipo'].setValue('CPF');
  }

  get fUser() { return this.formGroupUsuario.controls; }
  get fCad() { return this.formGroupCadastro.controls; }

  ngOnInit() {
  }

  onSubmitUser() {
    this.submittedUser = true;

    if (this.formGroupUsuario.invalid)
      return;

    this.login();
  }

  onSubmitCad() {
    this.submittedCad = true;

    if (this.formGroupCadastro.invalid)
      return;

    this.enviarUsuario();
  }

  login() {
    this.usuario = this.formGroupUsuario.value;

    this.loginService.login(this.usuario).then(() => {
      this.loginService.menu(true);
      this.router.navigate(["/home"]);
    }).catch((err) => {
      console.log(err)
      this.toastr.error('Tente novamente...', 'Usuário ou senha inválido!');
    });
  }

  openModal() {
    const initialState = {
      list: [],
      title: ''
    };
    this.bsModalRef = this.modalService.show(InformacoesImportantesComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }



  async validarEmail() {
    this.empresa = this.formGroupUsuario.value;
    if (this.formGroupUsuario.controls['email'].valid) {
      console.log('opa');
      await this.loginService.redefinirSenhaEmail(this.empresa.email);
    }
  }

  async enviarUsuario() {
    console.log('ok')
    const transferencia: any = this.formGroupCadastro.value;
    this.empresa.email = transferencia.email;
    this.empresa.documento = transferencia.documento;
    this.empresa.tipo = transferencia.tipo;

    if (this.formGroupCadastro.valid && this.empresa.tipo == 'CPF' || this.formGroupCadastro.valid && this.empresa.tipo == 'CNPJ'
    ) {
      console.log('ok')
      await this.validaService.emailExiste(this.empresa.email).then(async (dataEmail) => {
        console.log('dataEmail:' + dataEmail.empty);

        if (dataEmail.empty) {

          await this.validaService.documentoExiste(this.empresa.documento).then((dataDocumento) => {
            console.log('dataEmail:' + dataDocumento.empty);
            if (dataDocumento.empty) {
              this.existeDocumento = false;
              console.log('formGroupCadastro valido');
              this.router.navigate(['/cadastro'], { queryParams: this.empresa });
            } else {
              Swal.fire({
                title: 'O ' + this.formGroupCadastro.controls['tipo'].value + ' já está em Uso',
                icon: 'error',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar'
              });
            }
          });
        } else {
          Swal.fire({
            title: 'Email já está em uso!',
            icon: 'error',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar'
          });
          console.log(this.existeEmail);
        }
      });
    }

  }

  alteraValidator(tipo) {
    this.formGroupCadastro.controls['documento'].setValue('');

    if (tipo == 'CPF') {
      this.formGroupCadastro.controls['documento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cpf
        ]));
    } else {
      this.formGroupCadastro.controls['documento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cnpj
        ]));
    }
  }


}
