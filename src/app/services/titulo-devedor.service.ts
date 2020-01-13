import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TituloDevedor } from '../interfaces/TituloDevedor';
import { Devedor } from '../interfaces/Devedor';

@Injectable({
  providedIn: 'root'
})
export class TituloDevedorService {

  static staticDevedor = new Array<TituloDevedor>();


  constructor(private fireStore:AngularFirestore) { }


  async criarTituloDevedor(tituloDevedor:TituloDevedor){
    return await this.fireStore.collection('TituloDevedor').add(tituloDevedor);
  }

  async setarTituloDevedor(tituloDevedor:TituloDevedor, id:string){
    await this.fireStore.collection('TituloDevedor').doc(id).set(tituloDevedor).then(()=>{
      console.log('Titulo salvo com sucesso');
    }).catch((error)=>{
      console.log(error);
    });
  }

  async salvarTituloDevedor(tituloDevedor:TituloDevedor){
    await this.fireStore.collection('TituloDevedor').add(tituloDevedor).then(()=>{
      console.log('titulo devedor criado com sucesso!');
    });
  }

  async buscarDevedoresTitulo(idTitulo:string){
    return await this.fireStore.firestore.collection('TituloDevedor').
      where('idTitulo', '==', idTitulo).
        get();
  }

  async apagarTituloDevedor(idTituloDevedor){
    return this.fireStore.firestore.collection('TituloDevedor').doc(idTituloDevedor).delete();
  }

  async atualizaTituloDevedor(tituloDevedor:TituloDevedor){
    return await this.fireStore.collection('TituloDevedor').
      doc(tituloDevedor.idTituloDevedor).
        update(tituloDevedor);
  }
}
