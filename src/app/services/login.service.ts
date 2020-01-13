import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Usuario } from '../interfaces/Usuario';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UsuarioAdicional } from '../interfaces/UsuarioAdicional';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioService } from './usuario.service';
import { FirebaseError } from 'firebase';
@Injectable()

export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  static idEmpresa: string;  
  static credential: any;

  constructor(
    private fireAuth: AngularFireAuth,
    private usuarioService: UsuarioService
  ) {}

  login(usuario: Usuario) {        
    return this.fireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha).then(async res => {      
      LoginService.credential = res;           

      await this.usuarioService.getUser(res.user.uid).then(res => {
        LoginService.idEmpresa = res.idEmpresa;            
      });
      
    });
  }

  auth() {        
    return this.fireAuth.auth;
  }

  menu(ativo: boolean) {    
    this.mostrarMenuEmitter.emit(ativo);
  }
  
  logout(){
    return this.fireAuth.auth.signOut();
  }  

  async redefinirSenhaEmail(email:string){
    await this.fireAuth.auth.sendPasswordResetEmail(email).then(()=>{
      console.log('Email enviado com sucesso!');
      
    }).catch((error)=>{

      console.log(error);
    });    
  }

  async alteraSenha(email:string, senhaAtual:string, senhaNova:string){
    console.log(email);
    await this.fireAuth.auth.signInWithEmailAndPassword(email , senhaAtual).then(()=>{
      console.log('ok')
      this.fireAuth.auth.currentUser.updatePassword(senhaNova).then(()=>{
        this.PasswordSuccess();
      }).catch((error)=>{
        console.log(error);
      });
    }).catch((error)=>{
      console.log(error);
    });
    
  }

  PasswordSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Senha alterada com sucesso!',
      showConfirmButton: false,
      timer: 1600
    })

  }

  async setNewUser(usuario: Usuario, usuarioAdicional: UsuarioAdicional) {
    try {               
      let user = this.fireAuth.auth.currentUser;      
      let credential = LoginService.credential;

      await this.fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(async (usuario) => {

        usuarioAdicional.idUsuario = usuario.user.uid;
        usuarioAdicional.idEmpresa = LoginService.idEmpresa;

        console.log(usuarioAdicional);
        
        await this.usuarioService.addUser(usuarioAdicional, usuarioAdicional.idUsuario).then(() => {
          console.log('usuario salvo!');


          this.logout();

          console.log(credential);
          user.reauthenticateWithCredential(credential.user);
                    
          // Now you can use that to reauthenticate                   

          return;
        }).catch((error: FirebaseError) => {
          console.log(error);
        });

      }).catch((error: FirebaseError) => {
        console.log(error);
      });

    } catch (error) {
      console.log(error);
    }
  }
  
}
