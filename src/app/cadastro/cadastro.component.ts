import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ArraysService } from '../services/arrays.service';

import { Empresa } from '../interfaces/Empresa';
import { Conta } from '../interfaces/Conta';
import { Representante } from '../interfaces/Representante';
import { EmpresaService } from '../services/empresa.service';
import { Usuario } from '../interfaces/Usuario';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CepService } from '../services/cep.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FuncoesService } from '../services/funcoes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subscription:Subscription;

  
  public fGroupEmpresa:FormGroup;
  public fGroupEmpresaRepresentante:FormGroup;
  public fGroupEmpresaConta:FormGroup;
  public fGroupUsuario:FormGroup;

  public estados = new Array<string>();
  public bancos = new Array<string>();

  public senha: string;
  public forcaSenha: string;

  public usuario:Usuario = {};

  public empresa:Empresa = {};
  
  public conta:Conta = {};

  public representante:Representante = {};

  public submitted = false;

  public telefone =  ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public cep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public rg = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/];

  constructor(
    private arraysService:ArraysService,
    private formBuilder:FormBuilder,
    private empresaService:EmpresaService,
    private route: ActivatedRoute,
    private cepService: CepService,
    private funcService:FuncoesService
  ) {

    this.subscription = this.route.queryParamMap.subscribe((params) =>{
        params.get('empresa') || 'None'
        console.log(params);
        this.empresa.email = params.get('email');
        this.empresa.documento = params.get('documento');
        this.empresa.tipo = params.get('tipo');
        this.usuario.email = this.empresa.email;
      });
    
    this.fGroupEmpresa = this.formBuilder.group({
      'documento':[this.empresa.documento, Validators.compose([
      ])],
      'telefone':[this.empresa.telefone, Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
      ])],
      'nome':[this.empresa.nome, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'endereco':[this.empresa.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'bairro':[this.empresa.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'cidade':[this.empresa.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'complemento':[this.empresa.complemento],
      'estado':[this.empresa.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
      ])],
      'cep':[this.empresa.cep, Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])],
      'numero':[this.empresa.numero, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      'emissor':[this.empresa.emissor, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'rg':[this.empresa.rg, Validators.compose([
      ])],
      'email':[this.empresa.email, Validators.compose([
        Validators.required,
      ])],
      'tipo':[this.empresa.tipo, Validators.compose([
        Validators.required,
      ])],
    });

    this.fGroupEmpresaRepresentante = this.formBuilder.group({
      'nomeRepresentante':[this.empresa.nomeRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'rg':[this.empresa.rg, Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
      ])],
      'cpfRepresentante':[this.empresa.cpfRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
      ])],
      'emissorRepresentante':[this.empresa.emissorRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
      ])],
    });

    this.fGroupEmpresaConta = this.formBuilder.group({
      'idBanco':[this.empresa.idBanco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'agencia':[this.empresa.agencia, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ])],
      'conta':[this.empresa.conta, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ])],
      'titularidade':[this.empresa.titularidade, Validators.compose([
        Validators.required,
      ])],
      'contaConjunta':[this.empresa.contaConjunta, Validators.compose([
        Validators.required,
      ])],
    });

    this.fGroupUsuario = this.formBuilder.group({
      'email':[this.usuario.email, Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/),
      ])],
      'senha':[this.usuario.senha, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'confirmaSenha':[this.senha, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])]
    })

    this.carregaBancos(this.bancos);
    this.carregaEstados(this.estados);
    console.log(this.fGroupEmpresa.controls.numero.errors);
  }

  get fEmpresa() { return this.fGroupEmpresa.controls; }
  get fRepresentante() { return this.fGroupEmpresaRepresentante.controls; }
  get fEmpresaConta() { return this.fGroupEmpresaConta.controls; }
  get fUsuario() { return this.fGroupUsuario.controls; }

  carregaBancos(bancos:Array<string>){
    this.arraysService.carregaBanco(bancos);
  }
  carregaEstados(estados:Array<string>){
    this.arraysService.carregaEstado(estados);
  }

  async validaEmpresa(){
    this.submitted = true;
    this.empresa = this.fGroupEmpresa.value;
    this.conta = this.fGroupEmpresaConta.value;
    this.representante = this.fGroupEmpresaRepresentante.value;

    let values:any = this.fGroupUsuario.value;

    this.usuario.senha = values.senha;
    this.usuario.email = values.email;

    this.copiaParaEmpresa();
    

      if(this.usuario.senha == values.confirmaSenha){
          this.empresa = this.fGroupEmpresa.value;
        
          await this.empresaService.criaEmpresaUsuario(this.empresa, this.usuario).then(()=>{
            
          }).catch((error)=>{
            console.log(error);
          }).finally(()=>{
            this.empresaService.buscaEmpresa(this.empresa.idUsuario).then(data=>{
              this.empresa = data;
            });
          });

      }else{
        Swal.fire({
          title: 'As senhas digitadas não são iguais',
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar'
        });
      }
  }

  copiaDeEmpresa(){
    this.conta.agencia = this.empresa.agencia;
    this.conta.idBanco = this.empresa.idBanco;
    this.conta.titularidade = this.empresa.titularidade;
    this.conta.contaConjunta = this.empresa.contaConjunta;
    this.conta.conta = this.empresa.conta;

    this.representante.cpfRepresentante = this.empresa.cpfRepresentante;
    this.representante.nomeRepresentante = this.empresa.nomeRepresentante;
    this.representante.rg = this.empresa.rg;
    this.representante.emissorRepresentante = this.empresa.emissorRepresentante;

  }

  copiaParaEmpresa(){
    this.empresa.agencia = this.conta.agencia;
    this.empresa.idBanco = this.conta.idBanco;
    this.empresa.titularidade = this.conta.titularidade;
    this.empresa.contaConjunta = this.conta.contaConjunta;
    this.empresa.conta = this.conta.conta;

    this.empresa.cpfRepresentante = this.representante.cpfRepresentante;
    this.empresa.nomeRepresentante = this.representante.nomeRepresentante;
    this.empresa.rg = this.representante.rg;
    this.empresa.emissorRepresentante = this.representante.emissorRepresentante;
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  carregaEmpresa(){
    this.fGroupEmpresa.controls['documento'].setValue(this.empresa.documento);
    this.fGroupEmpresa.controls['email'].setValue(this.empresa.email);
    this.fGroupEmpresa.controls['tipo'].setValue(this.empresa.tipo);
  }

  buscarCEP() {    
    this.cepService.getCEPCorreios(this.fGroupEmpresa.controls['cep'].value).then(res => {    
      this.fGroupEmpresa.controls['endereco'].setValue(res.logradouro);
      this.fGroupEmpresa.controls['bairro'].setValue(res.bairro);
      this.fGroupEmpresa.controls['cidade'].setValue(res.localidade);
      this.fGroupEmpresa.controls['estado'].setValue(res.uf);
    });    
  }

  verificarSenhaForte() {
    this.senha = this.fGroupUsuario.controls['senha'].value;
    this.forcaSenha = this.funcService.verificaSenhaForte(this.senha);
  }


}
