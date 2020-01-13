import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsuarioAdicional } from 'src/app/interfaces/UsuarioAdicional';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-edicao',
  templateUrl: './adicional-edicao.component.html',
  styleUrls: ['./adicional-edicao.component.scss']
})
export class AdicionalEdicaoComponent implements OnInit {    
  user: UsuarioAdicional;
  static userEditado: UsuarioAdicional;

  public fGroupUsuario: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private fireAuth: AngularFireAuth,
  ) { 
  }

  ngOnInit() {
    this.fGroupUsuario = this.formBuilder.group({
      'nome': [this.user.nome, Validators.compose([
        Validators.required
      ])],
      'cpf': [this.user.cpf, Validators.compose([
        Validators.required             
      ])],

      // Sem validacao
      'administrador': [this.user.administrador],
      'idUsuario': [this.user.idUsuario],
      'idEmpresa': [this.user.idEmpresa],
      'email': [this.user.email]
    });    
  }

  get f() { return this.fGroupUsuario.controls; }

  salvar() {
    let idU: string = this.fireAuth.auth.currentUser.uid;
    this.user = this.fGroupUsuario.value;    

    this.usuarioService.updateUser(this.user, idU)
      .then(() => {
        AdicionalEdicaoComponent.userEditado = this.user;
        this.bsModalRef.hide();
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
