import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Empresa } from '../interfaces/Empresa';
import { EmpresaService } from '../services/empresa.service';
import { FuncoesService } from '../services/funcoes.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private data: any;
  private nome: any;
  private email: any;
  private adressEmail: Empresa = {};

  private empresa: Empresa= {};
  public subscribe: Subscription;  

  private idU: string = this.fireAuth.auth.currentUser.uid;

  constructor(
    private funcoesService: FuncoesService,     
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private fireAuth: AngularFireAuth,
  ) {
    this.data = this.funcoesService.DataAtualExtenso();          
    this.getEmpresa();
  } 

  ngOnInit() {  
    this.empresaService.buscaEmpresa(this.idU).then((adressEmail) => {
      this.adressEmail = adressEmail
    })      
  }

  getEmpresa() {
    this.subscribe = this.route.data.subscribe((data: { empresa: Empresa }) => {
      this.empresa = data.empresa;
      this.nome = this.empresa.nome;
    });
  }

  
}
