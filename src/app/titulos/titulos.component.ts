import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { LoteService } from '../services/lote.service';
import { FuncoesService } from '../services/funcoes.service';

import { LoginService } from '../services/login.service';
import { EmpresaService } from '../services/empresa.service';

import { Lote } from '../interfaces/Lote';
import { Empresa } from '../interfaces/Empresa';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  private lote:Lote={status:'TODOS OS LOTES'};

  private lotes = new Array<Lote>();

  private empresa:Empresa={};
  
  private fGroupLote:FormGroup;
  
  constructor(private router: Router,
                private loteService:LoteService, 
                  private funcoeService:FuncoesService, 
                    private fireAuth:AngularFireAuth,
                      private empresaService:EmpresaService, 
                        private formBuilder:FormBuilder,
                          private spinner: NgxSpinnerService) {
                      this.buscaEmpresa();
                      this.fGroupLote = this.formBuilder.group({
                        'status':[this.lote.status, Validators.compose([
                          Validators.required,
                        ])]
                      });
                      
  }

  ngOnInit() {
  }
  

  async buscaEmpresa() {
    console.log('idEmpresa',LoginService.idEmpresa);
    await this.empresaService.buscaEmpresa(LoginService.idEmpresa).then(async (empresa)=>{
      this.empresa = empresa;
      this.lote.responsavel = empresa.nome;
      this.alterandoConsultaLote();
    }).catch((error)=>{
      console.log(error);
    });

  }

  iniciaNovoLote() {
    this.lote.idUsuario = this.fireAuth.auth.currentUser.uid;
    this.lote.idEmpresa = LoginService.idEmpresa;
    this.lote.dataAbertura = this.funcoeService.DataAtual();
    this.lote.numeroLote = null;
    this.lote.qtdTitulo = 0;
    this.lote.responsavel = this.empresa.nome;
    this.lote.status = "EM ABERTO";
    this.lote.valorTotalTitulo = 0;
    this.lote.dataFechamnto = null;
  }

  AbrirLote() {

    Swal.fire({
      title: 'Confirma a abertura de um novo lote?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this.abrirLote();
      }
    })
  }

  async alterandoConsultaLote(){
    const status : string = this.fGroupLote.controls['status'].value;
    console.log(status);
    this.lotes =[];
    if(status == 'TODOS OS LOTES'){
      await this.buscarTodosLotes();
    }else{
      await this.buscarStatusLote();
    }
  }


  async buscarStatusLote(){
    const status : string = this.fGroupLote.controls['status'].value;
    this.spinner.show();
      if(this.lotes.length == 0) {
        await this.loteService.buscarLoteStatus(this.empresa.idEmpresa, status).then((data)=> { 
          console.log(data.docs[0].data);
          for(let i = 0; i < data.size; i++) {
            this.lotes.push(data.docs[i].data());
            this.lotes[i].idLote = data.docs[i].id;
          }

        }).catch(( error)=> {
          console.log('error na consulta buscar status lote', error);
        }).finally(()=>{
          setTimeout(()=>{
            this.spinner.hide();
          },1000);
        });

      }else{

        this.loteService.paginarLoteStatus(this.empresa.idEmpresa, status, this.lotes[this.lotes.length-1].numeroLote).then((data)=> {

          for(let i = 0; i < data.size; i++) {
            this.lotes.push(data.docs[i].data());
            this.lotes[i].idLote = data.docs[i].id;
          }

        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          setTimeout(()=>{
            this.spinner.hide();
          },1000);
        });
      }

  }

  async buscarTodosLotes(){
    if(this.lotes.length == 0) {

      this.spinner.show();

      await this.loteService.buscarLoteEmpresa(this.empresa.idEmpresa).then((data)=> { 

        for(let i = 0; i < data.size; i++) {
          this.lotes.push(data.docs[i].data());
          this.lotes[i].idLote = data.docs[i].id;
        }

      }).catch((error)=> {
        console.log('error na consulta buscar status lote', error);
      }).finally(()=>{

        setTimeout(()=>{
          this.spinner.hide();
        },1000);
        
      })

    }else{
      this.spinner.show();
      this.loteService.paginarLoteEmpresa(this.empresa.idEmpresa, this.lotes[this.lotes.length-1].numeroLote).then((data)=> {
        for(let i = 0; i < data.size; i++) {
          this.lotes.push(data.docs[i].data());
          this.lotes[i].idLote = data.docs[i].id;
        }
      }).catch((error)=>{
          console.log(error);
      }).finally(()=>{
        setTimeout(()=>{
          this.spinner.hide();
        },1000);
      })
    }
  }

  async onScroll(){
    const status : string = this.fGroupLote.controls['status'].value;
    if(status == 'TODOS OS LOTES'){
      await this.buscarTodosLotes();
    }else{
      await this.buscarStatusLote();
    }
  }
  
  async abrirLote() {
    this.iniciaNovoLote();
    
    await this.loteService.criaLote(this.lote).then((docRef)=>{
      this.lote.idLote = docRef.id;
      this.router.navigate(['/digitacao-titulos'+'/'+this.lote.idLote]);
    });
  }

  apagarLoteArray(idLote){
    for(let i = 0; i < this.lotes.length; i++){
      if(this.lotes[i].idLote == idLote){
        this.lotes.splice(i,1);
      }
    }  
  }  

  async apagarLote(idLote){
    await this.loteService.apagarLoteId(idLote);
      this.apagarLoteArray(idLote);

  }
  
  editarLote(idLote){
    this.router.navigate(['/digitacao-titulos'+'/'+idLote]);
  }
}
