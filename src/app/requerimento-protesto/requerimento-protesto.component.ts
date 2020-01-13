import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FuncoesService } from '../services/funcoes.service';
import { Empresa } from '../interfaces/Empresa';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmpresaService } from '../services/empresa.service';
import { ActivatedRoute } from '@angular/router'; //teste
import { LoginService } from '../services/login.service';

import { TituloDevedor } from '../interfaces/TituloDevedor'; //teste
import { Representante } from '../interfaces/Representante'; //teste
import { Lote } from '../interfaces/Lote';
import { LoteService } from '../services/lote.service';
import { TituloService } from '../services/titulo.service';
import { Titulo } from '../interfaces/Titulo';
import { TituloDevedorService } from '../services/titulo-devedor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requerimento-protesto',
  templateUrl: './requerimento-protesto.component.html',
  styleUrls: ['./requerimento-protesto.component.scss']
})

export class RequerimentoProtestoComponent implements OnInit {
  @ViewChild('divRequerimento', {static: false}) divRequerimento: ElementRef;
  private data: any;
  private empresa: Empresa = {};
  private documento: Empresa = {};
  public subscribe: Subscription; //teste

  //teste
  private titulos = new Array<any>();
  private devedores = new Array<TituloDevedor>();
  private entregador: Representante = {};
  private representante: Representante = {};
//teste
  
  private idUsuario: string = this.fireAuth.auth.currentUser.uid;
  private idLote: string;

  private lote:Lote={};

  
  constructor(
    private funcoesService: FuncoesService, 
    private fireAuth: AngularFireAuth,
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private loteService: LoteService,
    private tituloService: TituloService,
    private tituloDevedoreService: TituloDevedorService
  ) {
    this.data = this.funcoesService.DataAtualExtenso();
    this.loginService.menu(false);    

    this.idLote = this.route.snapshot.params['idLote'];
    
    this.buscaLote(); //teste
   }

  ngOnInit() {
    this.empresaService.buscaEmpresa(this.idUsuario).then((empresa) => {
      this.empresa = empresa
    });

    this.empresaService.buscaEmpresa(this.idUsuario).then((documento) => {
      this.documento = documento
    });    
  }

  async buscaLote() {
    await this.loteService.buscaLoteId(this.idLote).then(async (data)=>{
      this.lote = data.data();
      console.log(this.lote);
      await this.buscaTitulos().then(async (data)=>{
        console.log(data);
      });
    });
   
  }

  async buscaTitulos(){
    await this.tituloService.buscaTituloLote(this.idLote).then(async (data)=>{
      
      for(let i = 0; i < data.size; i++){
        this.titulos[i] = data.docs[i].data();
        this.titulos[i].idTitulo = data.docs[i].id;
      }
    });
  }

  async buscaTituloDevedores(){
    for(let x = 0; x < this.titulos.length; x++){
      await this.tituloDevedoreService.buscarDevedoresTitulo(this.titulos[x].idTitulo).then((data)=>{
          for(let y = 0; y < data.size; y++){
            this.devedores[y] = data.docs[y].data();
            this.devedores[y].idTituloDevedor = data.docs[y].id;
            this.titulos[x].devedores[y] = this.devedores[y];
          }
      });
    }

    console.log(this.titulos);
  }



  ImprimirConteudo() {
    this.funcoesService.ImprimirConteudoDiv(this.divRequerimento);
  }

  

}
