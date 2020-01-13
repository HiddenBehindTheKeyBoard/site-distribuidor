import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CepService } from 'src/app/services/cep.service';
import { ArraysService } from 'src/app/services/arrays.service';


import Swal from 'sweetalert2/dist/sweetalert2.js';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TituloDevedor } from 'src/app/interfaces/TituloDevedor';
import { ValidaService } from 'src/app/services/valida.service';
import { Titulo } from 'src/app/interfaces/Titulo';
import { Representante } from 'src/app/interfaces/Representante';
import { TituloService } from 'src/app/services/titulo.service';
import { TituloDevedorService } from 'src/app/services/titulo-devedor.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-sub-formulario',
  templateUrl: './protesto-sub-formulario.component.html',
  styleUrls: ['./protesto-sub-formulario.component.scss']
})
export class ProtestoSubFormularioComponent implements OnInit {
  public MASKS = utilsBr.MASKS;

  public submitted:boolean = false;;

  title: string;
  closeBtnName: string;

  devedores = new Array<TituloDevedor>();

  titulo: Titulo;

  invalido = 'is-invalid';

  public CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  private representante:Representante={};
  private entregador:Representante={};
  public estados = new Array<string>();
  
  public fGroupRepresentante:FormGroup;
  public fGroupEntregador:FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private cepService: CepService,
    private formBuilder: FormBuilder,
    private arraysService: ArraysService,
    private toastr: ToastrService,
    private validaService:ValidaService,
    private tituloService:TituloService,
    private tituloDevedorService:TituloDevedorService,
    private representanteService:RepresentanteService,
    private router: Router,
  ) {

    this.fGroupRepresentante = this.formBuilder.group({
      'nomeRepresentante':[this.representante.nomeRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'cpfRepresentante':[this.representante.cpfRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf,
      ])],
      'tipo':[this.representante.tipo],
      'rg':[this.representante.rg],
      'telefone':[this.representante.telefone],
      'cep':[this.representante.cep, Validators.compose([
        Validators.minLength(9),
      ])],
      'endereco':[this.representante.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'numero':[this.representante.numero, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      'complemento':[this.representante.complemento],
      'bairro':[this.representante.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'cidade':[this.representante.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'estado':[this.representante.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
    });

    this.fGroupEntregador = this.formBuilder.group({
      'nomeRepresentante':[this.entregador.nomeRepresentante, Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      'cpfRepresentante':[this.entregador.cpfRepresentante, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf,
      ])],
      'tipo':[this.entregador.tipo],
      'rg':[this.entregador.rg],
      'telefone':[this.entregador.telefone],
      'cep':[this.entregador.cep, Validators.compose([
        Validators.minLength(9),
        Validators.required,
      ])],
      'endereco':[this.entregador.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'numero':[this.entregador.numero, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      'complemento':[this.entregador.complemento],
      'bairro':[this.entregador.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      'cidade':[this.entregador.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'estado':[this.entregador.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
    });

    console.log(this.titulo);
    console.log(this.devedores);
    this.carregaEstados(this.estados);
  }

  get fRepresentante() { return this.fGroupRepresentante.controls; }
  get fEntregador() { return this.fGroupEntregador.controls; }


  ngOnInit() {
  }

  buscarCEPRepresentante() {
    this.cepService.getCEPCorreios(this.fGroupRepresentante.controls['cep'].value).then(res => {    
      this.fGroupRepresentante.controls['endereco'].setValue(res.logradouro);
      this.fGroupRepresentante.controls['bairro'].setValue(res.bairro);
      this.fGroupRepresentante.controls['cidade'].setValue(res.localidade);
      this.fGroupRepresentante.controls['estado'].setValue(res.uf);
    });
  }

  buscarCEPEntregador(){
    this.cepService.getCEPCorreios(this.fGroupEntregador.controls['cep'].value).then(res => {    
      this.fGroupEntregador.controls['endereco'].setValue(res.logradouro);
      this.fGroupEntregador.controls['bairro'].setValue(res.bairro);
      this.fGroupEntregador.controls['cidade'].setValue(res.localidade);
      this.fGroupEntregador.controls['estado'].setValue(res.uf);
    });
  }

  validarRepresentante():boolean{
    this.representante = this.fGroupRepresentante.value;
    if(this.validaService.str(this.representante.rg)|| !this.representante.rg){
      if(this.validaService.strN(this.representante.telefone)){
        if(this.fGroupRepresentante.valid){
          console.log('ok');
          return true;
        }else{
          console.log('formulario');
        }
      }else{
        console.log('telefone');
      }
    }else{
      console.log('rg');
    }
    return false;
  }

  validarEntregador():boolean{
    this.entregador = this.fGroupRepresentante.value;
    if(this.validaService.str(this.entregador.rg)|| !this.entregador.rg){
      if(this.validaService.strN(this.entregador.telefone)){
        if(this.fGroupRepresentante.valid){
          console.log('ok');
          return true;
        }else{
          console.log('formulario');
        }
      }else{
        console.log('telefone');
      }
    }else{
      console.log('rg');
    }
    return false;
  }

  carregaEstados(estados:Array<string>){
    this.arraysService.carregaEstado(estados);
  }

  copiaRepresentanteTitulo(rep:Representante){
    rep.nomeRepresentante = this.titulo.nomeCredor;
    rep.cpfRepresentante = this.titulo.numeroDocumento;
    rep.rg = this.titulo.rg;
    rep.telefone = this.titulo.telefone;

    rep.complemento = this.titulo.complemento;
    rep.cep = this.titulo.cep;
    rep.endereco = this.titulo.endereco;
    rep.bairro =  this.titulo.bairro;
    rep.cidade =  this.titulo.cidade;
    rep.estado = this.titulo.estado;
    rep.numero = this.titulo.numero;
  }

  copiarRepresentante(){
    console.log(this.titulo);
    console.log(this.devedores);
    if(this.titulo.tipo == 'CPF'){ //CPF
      this.copiaRepresentanteTitulo(this.representante);
      this.fGroupRepresentante.patchValue(this.representante);
    }else{
      console.log('Não foi possível copiar pois o titulo é uma pessoa Jurídica');
    }

  }

  copiarEntregador(){

    if(this.titulo.tipo == 'CPF'){ //CPF
      this.copiaRepresentanteTitulo(this.entregador);
      this.fGroupEntregador.patchValue(this.entregador);
    }else{
      console.log('Não foi possível copiar pois o titulo é uma pessoa Jurídica');
    }

    console.log(this.titulo);
    console.log(this.devedores);

  }



  open() {
    Swal.fire('Hello world!');
  }

  open2() {
    //this.toastr.success('Hello world!', 'Toastr fun!', {disableTimeOut: true});
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  async criarDados() {
    this.submitted = true;
    // this.fGroupEntregador.patchValue(this.entregador);
    this.entregador = this.fGroupEntregador.value;
    console.log(this.entregador);
    this.fGroupRepresentante.patchValue(this.representante);
    console.log(this.fGroupRepresentante.valid);
    this.submitted = true;
    console.log(this.submitted)
    if(this.fGroupEntregador.valid){
      if(this.fGroupRepresentante.valid && this.titulo.tipo == 'CNPJ' || this.titulo.tipo == 'CPF'){
        await this.tituloService.criaTitulo(this.titulo).then(async (docRef)=>{
          console.log(this.titulo);
          console.log(docRef.id);

          TituloService.staticTitulo = this.titulo;

          for(let i = 0; i < this.devedores.length; i++){
            this.devedores[i].idTitulo = docRef.id;
            
            await this.tituloDevedorService.criarTituloDevedor(this.devedores[i]).then(()=>{
              console.log('titulo devedor criado com sucesso!');

              TituloDevedorService.staticDevedor.push(...this.devedores);          
            });
          }

          this.entregador.idTitulo = docRef.id;
          this.entregador.tipo = 'ENTREGADOR';

          await this.representanteService.criaRepresentante(this.entregador).then(()=>{
            console.log('Entregador criado');
            console.log(this.entregador);
          }).catch((error)=>{
            console.log(error);
          });

          if(this.titulo.tipo == 'CNPJ'){
            this.representante = this.fGroupRepresentante.value;

            this.representante.idTitulo = docRef.id;
            this.representante.tipo = 'REPRESENTANTE';

            await this.representanteService.criaRepresentante(this.representante).then(()=>{
              console.log('representante criado'); 
              console.log(this.representante);
            }).catch((error)=>{
              console.log(error);
              console.log(' deu pau ao criar o representante!');
            });
          }
          this.router.navigate(['/impressao-formulario-protesto/' + docRef.id]);
          
        });
      }
    }
  }

}
