import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Titulo } from '../interfaces/Titulo';
import { Router } from '@angular/router';
import { FuncoesService } from 'src/app/services/funcoes.service';

@Component({
  selector: 'informacoes-importantes',
  templateUrl: './informacoes-importantes.component.html',
  styleUrls: ['./informacoes-importantes.component.scss']
})
export class InformacoesImportantesComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  @ViewChild('divInfo', { static: false }) divInfo: ElementRef;

  private idTitulo: string;
  
  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private funcoesService: FuncoesService,
  ) { }

  ngOnInit() {    
  
  }

  abrirProtesto() {
    this.bsModalRef.hide();

    (this.idTitulo) ? this.router.navigate(['/protesto/' + this.idTitulo]) : this.router.navigate(['/protesto']);
  }

  imprimirConteudo() {
    this.funcoesService.ImprimirConteudoDiv(this.divInfo);
  }

}
