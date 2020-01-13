import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Titulo } from '../interfaces/Titulo';
import { Lote } from '../interfaces/Lote';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  static staticTitulo: Titulo = {};

  constructor(private fireStore:AngularFirestore) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {    
    return this.getDadosCompletoTituloByID(route.params.id);    
  }

  criaTitulo(titulo: Titulo) {
    return this.fireStore.collection('Titulo').add(titulo);
  }

  async buscaTituloLote(idLote:string){
    return await this.fireStore.firestore.
      collection('Titulo').
        where('idLote', '==', idLote).
          get();
  }
  
  async getDadosCompletoTituloByID(idTitulo: string) {
    let titulo: any;

    await this.fireStore.firestore.collection('Titulo').doc(idTitulo).get()
      .then(async dataTitulo => {        

        await this.fireStore.firestore.collection('TituloDevedor')
          .where('idTitulo', '==', dataTitulo.id).get()
          .then(async dataDevedores => {
            
            let devedores = new Array<any>();
            dataDevedores.docs.map((devedor) => {
              devedores.push(devedor.data());                                          
            });

            let entregador = await this.fireStore.firestore.collection('Representante')
              .where('idTitulo', '==', dataTitulo.id)
              .where('tipo', '==', 'ENTREGADOR')
              .get()
              .then(dataEntregador => {
                return (dataEntregador.docs[0]) ? dataEntregador.docs[0].data() : undefined;
              });

            let representante = await this.fireStore.firestore.collection('Representante')
              .where('idTitulo', '==', dataTitulo.id)
              .where('tipo', '==', 'REPRESENTANTE')
              .get()
              .then(dataRepresentante => {
                return (dataRepresentante.docs[0]) ? dataRepresentante.docs[0].data() : undefined;
              });

            titulo = {
              dados: dataTitulo.data(),
              devedores: devedores,
              entregador: entregador,
              representante: representante
            }            
          });        
      });

    return titulo;
  }

  async getTituloByID(idTitulo: string) {
    let titulo: Titulo = {};

    await this.fireStore.firestore.collection('Titulo').doc(idTitulo).get()
      .then(dataTitulo => {        
        if (dataTitulo)
          titulo = dataTitulo.data();
      });

    return titulo;
  }

  async apagarTitulo(idTitulo:string){
    await this.fireStore.collection('Titulo').doc(idTitulo).delete();
  }
  async atualizaTitulo(idTitulo:string, titulo:Titulo){
    return await this.fireStore.firestore.collection('Titulo').doc(idTitulo).update(titulo);
  }

}
