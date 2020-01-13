import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { AdicionalCadastroComponent } from './cadastro/adicional-cadastro.component';
import { AdicionalEdicaoComponent } from './edicao/adicional-edicao.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuarioAdicional } from '../interfaces/UsuarioAdicional';

@Component({
  selector: 'app-adicional',
  templateUrl: './adicional.component.html',
  styleUrls: ['./adicional.component.scss']
})
export class AdicionalComponent implements OnInit {
  mostrargrid: boolean = false;
  bsModalRef: BsModalRef;

  private idxEditado: string;
  public subscribe: Subscription;
  public usuarios = new Array<UsuarioAdicional>();

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,

  ) {
    this.getUsers();
  }

  ngOnInit() {
    this.modalService.onHide.subscribe(() => {

      if (AdicionalEdicaoComponent.userEditado) {
        let idx = this.usuarios.findIndex(index =>
          index.idUsuario == AdicionalEdicaoComponent.userEditado.idUsuario
        );

        this.usuarios[idx] = AdicionalEdicaoComponent.userEditado;
        AdicionalEdicaoComponent.userEditado = null;        
      }

      if (AdicionalCadastroComponent.userCadastrado) {
        
        AdicionalCadastroComponent.userCadastrado = null;        
      }

    });
  }


getUsers() {
  this.subscribe = this.route.data.subscribe((data: { usuarios: UsuarioAdicional }) => {
    this.usuarios.push(...[data.usuarios]);
  });
}

openModalWithComponentCadastrar() {
  const initialState = {
    list: [
      'Open a modal with component',
      'Pass your data',
      'Do something else',
      '...'
    ],
    title: 'Modal with component'
  };
  this.bsModalRef = this.modalService.show(AdicionalCadastroComponent, { initialState });
  this.bsModalRef.content.closeBtnName = 'Close';
}

editarUsuario(index) {
  let user: UsuarioAdicional;
  user = this.usuarios[index];

  console.log(`selecionou a posicao ${index} do array`);

  const initialState = {
    user: user
  };

  this.bsModalRef = this.modalService.show(AdicionalEdicaoComponent, { initialState });
}
}

