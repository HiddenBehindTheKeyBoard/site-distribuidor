import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Endereco } from 'src/app/interfaces/Endereco';
import { Titulo } from 'src/app/interfaces/Titulo';
import { TituloDevedor } from 'src/app/interfaces/TituloDevedor';
import { FuncoesService } from 'src/app/services/funcoes.service';
import { TituloService } from 'src/app/services/titulo.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InformacoesImportantesComponent } from 'src/app/informacoes-importantes/informacoes-importantes.component';
import { Representante } from 'src/app/interfaces/Representante';



@Component({
  selector: 'app-impressao-formulario-protesto',
  templateUrl: './impressao-formulario-protesto.component.html',
  styleUrls: ['./impressao-formulario-protesto.component.scss']
})
export class ImpressaoFormularioProtestoComponent implements OnInit {

  bsModalRef: BsModalRef;
  private titulo: any;
  private devedores = new Array<TituloDevedor>();
  private entregador: Representante = {};
  private representante: Representante = {};

  @ViewChild('divRequeriment', { static: false }) divRequeriment: ElementRef;

  barcode = '0000022301'

  public enderecoPrint: Endereco = {}
  public subscribe: Subscription;

  constructor (
    private modalService: BsModalService,
    private funcoesService: FuncoesService,
    private tituloService: TituloService,
    private route: ActivatedRoute
  ) {    

    setTimeout(() => {
      this.getTitulo();
    }, 5000);
  }

  ngOnInit() {        
  }

  getTitulo() {
    this.subscribe = this.route.data.subscribe((data: { titulo: any }) => {
      console.log(data.titulo);

      this.titulo = data.titulo;
      this.devedores.push(...data.titulo.devedores);      

      if (data.titulo.representante) 
        this.representante = data.titulo.representante;
      
      if (data.titulo.entregador)
        this.entregador = data.titulo.entregador;
        console.log(this.entregador);      
    });
  }

  abrirImpressao() {

    Swal.fire({
      title: 'ATENÇÃO!',
      text: 'Imprima o Formulário em 2 vias.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#5A6268',
      confirmButtonText: 'Sim, Continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this.ImprimirConteudo();
      }
    })
  }
  
  ImprimirConteudo() {
    this.funcoesService.ImprimirConteudoDiv(this.divRequeriment);
  }

  openModal(setApresentante: Boolean) {    
    let idTitulo: string;

    if (setApresentante) {
      idTitulo = this.titulo.dados.idTitulo;      
    }    

    const initialState = {
      idTitulo: idTitulo,      
    };

    this.bsModalRef = this.modalService.show(InformacoesImportantesComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }    

}
