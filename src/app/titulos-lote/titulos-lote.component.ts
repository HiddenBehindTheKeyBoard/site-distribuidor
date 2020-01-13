import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FuncoesService } from '../services/funcoes.service';

@Component({
  selector: 'app-titulos-lote',
  templateUrl: './titulos-lote.component.html',
  styleUrls: ['./titulos-lote.component.scss']
})
export class TitulosLoteComponent implements OnInit {
  @ViewChild('divDeclaracao', {static: false}) divDeclaracao: ElementRef;
  private data: any;

  constructor(private funcoesService: FuncoesService) {
    this.data = this.funcoesService.DataAtualExtenso();
   }

  ngOnInit() {
  }

  ImprimirConteudo() {
    this.funcoesService.ImprimirConteudoDiv(this.divDeclaracao);
  }

}
