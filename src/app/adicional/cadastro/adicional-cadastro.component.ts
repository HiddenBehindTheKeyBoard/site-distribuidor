import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsuarioAdicional } from 'src/app/interfaces/UsuarioAdicional';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';
import { FirebaseError } from 'firebase';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './adicional-cadastro.component.html',
  styleUrls: ['./adicional-cadastro.component.scss']
})
export class AdicionalCadastroComponent implements OnInit {
  submitted = false;  

  private user: UsuarioAdicional = {};
  static userCadastrado: UsuarioAdicional;
  
  public fGroupUsuario: FormGroup;
  
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,    
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.fGroupUsuario = this.formBuilder.group({
      'nome': [this.user.nome, Validators.compose([
        Validators.required
      ])],
      'cpf': [this.user.cpf, Validators.compose([
        Validators.required
      ])],            

      'email': [''],
      'senha': [''],
      'confirmaSenha': [''],

      // Sem validacao
      'administrador': ['NÃO'],
    });
    
  }

  get f() { return this.fGroupUsuario.controls; }

  onSubmit() {    
    this.submitted = true;    

    if (this.fGroupUsuario.invalid)
      return;

    this.newUsuario();
  }

  newUsuario() {    
    let senha = this.fGroupUsuario.controls['senha'].value;
    let confirmaSenha = this.fGroupUsuario.controls['confirmaSenha'].value;

    if (senha === confirmaSenha) {
      let usuario: Usuario = {};
      let usuarioAdicional: UsuarioAdicional = {};

      usuario.email = this.fGroupUsuario.controls['email'].value;
      usuario.senha = this.fGroupUsuario.controls['senha'].value;

      usuarioAdicional.administrador = this.fGroupUsuario.controls['administrador'].value;
      usuarioAdicional.cpf = this.fGroupUsuario.controls['cpf'].value;
      usuarioAdicional.email = this.fGroupUsuario.controls['email'].value;
      usuarioAdicional.nome = this.fGroupUsuario.controls['nome'].value;

      this.loginService.setNewUser(usuario, usuarioAdicional)
        .then(res => {
          console.log(res);
        }).catch((error: FirebaseError) => {
          console.log(error);
        })
    }
    
  }

}
