import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Empresa } from '../interfaces/Empresa';
import { Conta } from '../interfaces/Conta';

import { ArraysService } from '../services/arrays.service';
import { EmpresaService } from '../services/empresa.service';

import { Subscription } from 'rxjs';

import Swal from 'sweetalert2/dist/sweetalert2.js';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit, OnDestroy {


  public MASKS = utilsBr.MASKS;

  submitted = false;  

  public subscribe: Subscription;

  public idU: string = this.fireAuth.auth.currentUser.uid;
  

  public estados = new Array<string>();
  public bancos = new Array<string>();

  public empresa: Empresa = {};
  public conta: Conta = {};

  public fGroupEmpresa: FormGroup;  

  public formContaValid: boolean;
  public formEmpresaRepresentante: boolean;

  public telefone = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public cep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public rg = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private arraysService: ArraysService,
    private empresaService: EmpresaService,
    private fireAuth: AngularFireAuth,
    private cepService: CepService) {

    //this.idU = this.route.snapshot.params['idU'];

    this.fGroupEmpresa = this.formBuilder.group({
      'documento': [this.empresa.documento, Validators.compose([
        Validators.required,
        Validators.minLength(3),        
      ])],
      'telefone': [this.empresa.telefone, Validators.compose([
        Validators.required,
        Validators.minLength(8),        
      ])],
      'nome': [this.empresa.nome, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'endereco': [this.empresa.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'bairro': [this.empresa.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'cidade': [this.empresa.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'complemento': [this.empresa.complemento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'estado': [this.empresa.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      'cep': [this.empresa.cep, Validators.compose([
        Validators.required,
        Validators.minLength(9),
      ])],
      'numero': [this.empresa.numero, Validators.compose([
        Validators.required,
      ])],
      'emissor': [this.empresa.emissor],
      'rg': [this.empresa.rg],
      'tipo': [this.empresa.tipo],

      'nomeRepresentante': [this.empresa.nomeRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'cpfRepresentante': [this.empresa.cpfRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf
      ])],
      'emissorRepresentante': [this.empresa.emissorRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],

      'idBanco': [this.empresa.idBanco],
      'agencia': [this.empresa.agencia],
      'conta': [this.empresa.conta],
      'titularidade': [this.empresa.titularidade],
      'contaConjunta': [this.empresa.contaConjunta],
      'email': [this.empresa.email],

      'idUsuario': [this.empresa.idUsuario],
      'idEmpresa': [this.empresa.idEmpresa],
    });

    this.buscaEmpresa();
    this.carregaBancos(this.bancos);
    this.carregaEstados(this.estados);
  }

  carregaValoresEmpresa() {
    this.fGroupEmpresa.patchValue(this.empresa);    
  }

  carregaBancos(bancos: Array<string>) {
    this.arraysService.carregaBanco(bancos);
  }
  carregaEstados(estados: Array<string>) {
    this.arraysService.carregaEstado(estados);
  }

  async buscaEmpresa() {
    this.subscribe = this.route.data.subscribe((data: { empresa: Empresa }) => {
      console.log(data);
      this.empresa = data.empresa;
    });
    console.log('buscou', this.empresa);

    this.carregaValoresEmpresa();
  }

  async validaEmpresa() {
    this.empresa = this.fGroupEmpresa.value

    console.log('Antes do update', this.empresa);

    this.empresaService.
        atualizaEmpresa(this.empresa, this.idU).then(() => {
          this.confirmSuccess();
        }).catch((error) => {
          console.log(error);
        });
  }

  get f() { return this.fGroupEmpresa.controls; }

  ngOnInit() {
  }

  onSubmit() {    
    this.submitted = true;

    if (this.fGroupEmpresa.invalid)
      return;

    this.validaEmpresa();
  }

  buscaCep() {
    this.cepService.getCEPCorreios(this.fGroupEmpresa.controls['cep'].value).then(res => {    
      this.fGroupEmpresa.controls['endereco'].setValue(res.logradouro);
      this.fGroupEmpresa.controls['bairro'].setValue(res.bairro);
      this.fGroupEmpresa.controls['cidade'].setValue(res.localidade);
      this.fGroupEmpresa.controls['estado'].setValue(res.uf);
    });
  }
 
  ngOnDestroy() {
  }

  confirmSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Dados atualizados com sucesso!',
      showConfirmButton: true,
    })

  }

}
