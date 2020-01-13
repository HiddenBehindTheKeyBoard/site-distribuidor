import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { DevedorCadastroComponent } from './cadastro/devedor-cadastro.component';
import { Devedor } from '../interfaces/Devedor';

import { DevedorService } from '../services/devedor.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.component.html',
  styleUrls: ['./devedores.component.scss']
})


export class DevedoresComponent implements OnInit {
  mostrargrid: boolean = false;
  
  bsModalRef: BsModalRef;

  public devedores = new Array<Devedor>();

  public valorConsulta:string;

  public fGBusca:FormGroup;

  element: HTMLElement;

  constructor(private modalService: BsModalService,
    private devedorService:DevedorService,
      private formBuilder:FormBuilder,
      ) {

    this.fGBusca = this.formBuilder.group({
      'busca':[this.valorConsulta]
    });

  }

  ngOnInit() {
  }

  pesquisar() {
    this.devedores = []
    this.mostrargrid = true;
    this.valorConsulta = this.fGBusca.controls['busca'].value;
    console.log(this.valorConsulta);
      this.buscaPeloNome(this.valorConsulta);
      this.buscaPeloDocumento(this.valorConsulta);

  }

  paginar(){
    this.maisDevedoresPorNome();
    this.maisDevedoresPorDocumento();
  }

  openModalWithComponent() {
    const initialState = {
      editando:false,
    };
    this.bsModalRef = this.modalService.show(DevedorCadastroComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  abrirModalParaEditar(devedorParametro:Devedor) {
    console.log(devedorParametro);
    const initialState = {
      devedorParametro: devedorParametro,
      alterandoDevedor:true,
    };
    this.bsModalRef = this.modalService.show(DevedorCadastroComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  existeDevedor(novoDevedor:Devedor):boolean{
    for(let devedor of this.devedores) {
      if(devedor.idDevedor == novoDevedor.idDevedor || devedor.numeroDocumento == novoDevedor.numeroDocumento) {
        return true;
      }
    }
    return false;
  }

  async buscaPeloNome(str:string) {
    await this.devedorService.buscarDevedoresPorNome(str, LoginService.idEmpresa).then((data)=>{
      console.log('PeloNome',data.size);
      for( let i = 0; i < data.size; i++) {
        let devedor:Devedor = data.docs[i].data();
        devedor.idDevedor = data.docs[i].id;
        if(!this.existeDevedor(devedor)) {
          this.devedores.push(devedor);
        }
      }
      
    });
  }

  async buscaPeloDocumento(str:string) {

    await this.devedorService.buscarDevedoresPorDocumento(str, LoginService.idEmpresa).then((data)=>{
      console.log('PeloDocumento',data.size);
      for( let i = 0; i < data.size; i++) {
        let devedor:Devedor = data.docs[i].data();
        devedor.idDevedor = data.docs[i].id;
        if(!this.existeDevedor(devedor)) {
          this.devedores.push(devedor);
        }
      }
    });
  }
  
  encontrouDevedor(idDevedor:string):number{
    for (let i = 0;i < this.devedores.length; i++) {
      if(this.devedores[i].idDevedor == idDevedor) {
        return i;
      }
    }
    return -1;
  }

  editarDevedor(devedor:Devedor) {
    for(let i = 0; i < this.devedores.length; i++) {
      if(this.devedores[i].numeroDocumento == devedor.numeroDocumento) {
        this.devedores.splice(i, 1);
      }
    }  
  }

  apagarDevedor(idDevedor:string) {
    let encontrou = this.encontrouDevedor(idDevedor);
    this.devedores.splice(encontrou, 1);
    
    this.devedorService.deletaDevedor(idDevedor).then(()=>{
      console.log('devedor Apagado!');
    }).catch((error)=>{
      console.log(error);
    });
  }

  async maisDevedoresPorNome() {
    console.log('passou por aque', this.devedores.length);
    const ultimaPos = this.devedores[this.devedores.length - 1].nomeDevedor;
    console.log(ultimaPos);
    await this.devedorService.buscarMaisDevedoresPorNome(this.valorConsulta, LoginService.idEmpresa, ultimaPos).
      then((data)=>{

        for( let i = 0; i < data.size; i++) {
          let devedor:Devedor = data.docs[i].data();
          devedor.idDevedor = data.docs[i].id;
          if(!this.existeDevedor(devedor)) {
            this.devedores.push(devedor);
          }
        }

      }).catch((error)=>{
        console.log(error);
      });
  }

  async maisDevedoresPorDocumento() {
    const ultimaPos = this.devedores[this.devedores.length -1].numeroDocumento;
    console.log('pesquisando por documento');
    await this.devedorService.buscarMaisDevedoresPorDocumento(this.valorConsulta, LoginService.idEmpresa, ultimaPos).
      then((data) => {
        console.log(data.size);
        for( let i = 0; i < data.size; i++) {
          let devedor:Devedor = data.docs[i].data();
          devedor.idDevedor = data.docs[i].id;
          if(!this.existeDevedor(devedor)) {
            this.devedores.push(devedor);
          }
        }

      }).catch((error) => {
        console.log(error);
      });
  }

  onScroll() {
    this.paginar();
  }
  
}

