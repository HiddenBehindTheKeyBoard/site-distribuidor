import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Empresa } from '../interfaces/Empresa';
import { Conta } from '../interfaces/Conta';
import { Representante } from '../interfaces/Representante';
import { Usuario } from '../interfaces/Usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseError } from 'firebase';
import { UsuarioAdicional } from '../interfaces/UsuarioAdicional';
import { UsuarioService } from './usuario.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService implements Resolve<any> {
  static emitirEmpresa = new EventEmitter<Empresa>();
  private usuario: UsuarioAdicional = {};

  constructor(
    private fireStore: AngularFirestore, 
    private fireAuth: AngularFireAuth,
    private usuarioService: UsuarioService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let idUsuario: string = this.fireAuth.auth.currentUser.uid;
    return this.buscaEmpresa(idUsuario);    
  }

  async atualizaEmpresa(empresa:Empresa, idUsuario:string) {    
      await this.fireStore.collection('Empresa').doc(idUsuario).update(empresa)
        .then(() => {          
          console.log('empresa salva!');

          this.usuario.administrador = 'SIM';
          this.usuario.cpf = empresa.documento;          
          this.usuario.email = empresa.email;
          this.usuario.nome = empresa.nome;
          this.usuario.idUsuario = idUsuario;  
          this.usuario.idEmpresa = empresa.idEmpresa;                
          
          this.usuarioService.updateUser(this.usuario, idUsuario).then(() => {
            console.log('usuario salvo!');
            return;
          }).catch((error: FirebaseError)=> {
            console.log(error);
          });  

        }).catch((error: FirebaseError)=> {
          console.log(error);
        });  
  }

  async buscaEmpresa(idU:string){
    let empresa:Empresa;

    await this.fireStore.firestore.collection('Empresa').doc(idU).get().then((data)=>{  
      empresa = data.data();
      
      EmpresaService.emitirEmpresa.emit(empresa);

    }).catch((error)=>{
      console.log(error);
    });
    
    return empresa;
  }

  async buscarEmpresa(idEmpresa:string){
    return await this.fireStore.firestore.collection('Empresa').doc(idEmpresa).get();
  }

  async criaEmpresaUsuario(empresa:Empresa, usuario:Usuario){
    try {
      await this.fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(async (usuario) => {        
        empresa.email = usuario.user.email;
        empresa.idUsuario = usuario.user.uid;
        empresa.idEmpresa = usuario.user.uid;
        console.log('idEmpresa:',empresa.idEmpresa);

        LoginService.idEmpresa = empresa.idEmpresa;
        
        await this.fireStore.collection('Empresa').doc(empresa.idUsuario).set(empresa).then(async ()=>{          

          this.usuario.administrador = 'SIM';
          this.usuario.cpf = empresa.documento;          
          this.usuario.email = empresa.email;
          this.usuario.nome = empresa.nome;
          this.usuario.idUsuario = empresa.idUsuario;  
          this.usuario.idEmpresa = empresa.idEmpresa;
          console.log('Usuario', this.usuario);
          console.log('idEmpresa', empresa.idEmpresa);
          console.log('idUsuario', empresa.idUsuario);
          await this.usuarioService.setUser(this.usuario, empresa.idUsuario).then(() => {
            console.log('empresa salva!');
            return;
          }).catch((error:FirebaseError)=>{
            console.log(error);            
          });        

        }).catch((error: FirebaseError)=>{
          console.log(error);
        });

      }).catch((error: FirebaseError)=>{
        console.log(error);
      });

    } catch(error){
      console.log(error);
    }

  }

  verificaVaziaConta(conta:Conta){
    if(!conta.agencia || conta.agencia == ""){
      if(!conta.conta || conta.conta == ""){
        if(!conta.idBanco || conta.idBanco == ""){
          return true;
        }
      }
    }
  }

  verificaVazioRepresentante(representante:Representante){
    if(!representante.cpfRepresentante || representante.cpfRepresentante == ""){
      if(!representante.emissorRepresentante || representante.emissorRepresentante == ""){
        if(!representante.nomeRepresentante || representante.nomeRepresentante == ""){
          if(!representante.rg || representante.rg == ""){
            return true;
          }
        }
      }
    }
  }
  
}
