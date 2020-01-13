import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioAdicional } from '../interfaces/UsuarioAdicional';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';
import { FirebaseError } from 'firebase';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements Resolve<any>{
  private users: UsuarioAdicional[] = [];

  constructor(
    private fireStore: AngularFirestore,
    private fireAuth: AngularFireAuth,    
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let idU: string = this.fireAuth.auth.currentUser.uid;
    return this.getUser(idU);    
  }

  async setUser(usuario: UsuarioAdicional, idU: string) {
    await this.fireStore.firestore.collection('Usuario').doc(idU).set(usuario);
  }

  async addUser(usuario: UsuarioAdicional, idU: string) {
    await this.fireStore.collection('Usuario').doc(idU).set(usuario);
  }

  async updateUser(usuario: UsuarioAdicional, idU: string) {
    await this.fireStore.firestore.collection('Usuario').doc(idU).update(usuario);
  }

  async getUser(idU: string) {
    let user: UsuarioAdicional;
    
    await this.fireStore.firestore.collection('Usuario').doc(idU).get()
      .then((data) => {
        user = data.data();
      });

    return user;
  }

  async deleteUser(usuario: UsuarioAdicional, idU: string) {
    await this.fireStore.firestore.collection('Usuario').doc(idU).delete();
  }

}
