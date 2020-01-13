import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FuncoesService } from '../services/funcoes.service';
import { EmpresaService } from '../services/empresa.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Empresa } from '../interfaces/Empresa';

@Component({
  selector: 'app-adesao',
  templateUrl: './adesao.component.html',
  styleUrls: ['./adesao.component.scss']
})
export class AdesaoComponent implements OnInit {
  @ViewChild('divTermo', { static: false }) divTermo: ElementRef;
  private data: any;
  private empresa: Empresa = {};
  private documento: Empresa = {};

  private idU: string = this.fireAuth.auth.currentUser.uid;

  constructor(
    private funcoesService: FuncoesService,
    private fireAuth: AngularFireAuth,
    private empresaService: EmpresaService, 
  ) {
    this.data = this.funcoesService.DataAtualExtenso();
  }

  ngOnInit() {
    this.empresaService.buscaEmpresa(this.idU).then((empresa) => {
      this.empresa = empresa
    })

    this.empresaService.buscaEmpresa(this.idU).then((documento) => {
      this.documento = documento
    })
  }

  ImprimirConteudo() {
    this.funcoesService.ImprimirConteudoDiv(this.divTermo);
  }

}
