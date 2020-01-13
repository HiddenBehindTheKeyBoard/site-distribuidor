import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TituloDevedor } from 'src/app/interfaces/TituloDevedor';

import { Titulo } from 'src/app/interfaces/Titulo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Endereco } from 'src/app/interfaces/Endereco';
import { DigitacaoModalService } from 'src/app/services/digitacao-modal.service';


@Component({
  selector: 'app-sub-formulario',
  templateUrl: './digitacao-sub-formulario.component.html',
  styleUrls: ['./digitacao-sub-formulario.component.scss']
})

export class DigitacaoSubFormularioComponent implements OnInit {
  title: string;
  closeBtnName: string;


  devedor:TituloDevedor={};

  enderecos = new Array<Endereco>();

  titulo: Titulo;

  public endereco:Endereco={};

  invalido = 'is-invalid';


  public fGroupEndereco:FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private toastr: ToastrService,
    private formBuilder:FormBuilder,
    private digitacaoModalService:DigitacaoModalService
  ) {
    console.log(this.titulo);
  }

  ngOnInit() {
  }

  open() {
    Swal.fire('Hello world!');
  }

  open2() {
    //this.toastr.success('Hello world!', 'Toastr fun!', {disableTimeOut: true});
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


  selecionaEndereco(endereco){
    this.endereco = endereco;
    this.digitacaoModalService.setEndereco(this.endereco);
    this.enderecos = [];
    console.log(this.enderecos);
    this.bsModalRef.hide();

  }

  finalizar(){
    this.endereco = {};
    this.digitacaoModalService.setEndereco(this.endereco);
    this.bsModalRef.hide();
  }

}
