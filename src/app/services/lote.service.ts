import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lote } from '../interfaces/Lote';


@Injectable({
  providedIn: 'root'
})
export class LoteService {

  constructor(private fireStore:AngularFirestore) { }

  async criaLote(lote:Lote) {
    return await this.fireStore.collection('Lote').add(lote);
  }

  async buscaLote(idEmpresa:string) {
    return await this.fireStore.firestore.collection('Lote').
      where('idEmpresa', '==', idEmpresa).
        orderBy('numeroLote').
          limit(20).get();
  }

  async buscarLoteStatus(idEmpresa:string, status:string) {
    console.log(idEmpresa, status);

    return await this.fireStore.firestore.collection('Lote').
      where('idEmpresa', '==', idEmpresa).
        where('status', '==', status).
          orderBy('numeroLote').
            limit(20).
              get();
  }

  async paginarLoteStatus(idEmpresa:string, status:string, ultimoNumeroLote:number){
    return await this.fireStore.firestore.collection('Lote').
      where('idEmpresa', '==', idEmpresa).
        where('status', '==', status).
          orderBy('numeroLote').
            startAfter(ultimoNumeroLote).
              limit(20).
                get();

  }

  buscaLoteId(idLote:string) {
    return this.fireStore.firestore.collection('Lote').doc(idLote).get();
  }

  async paginaBuscaLote(idEmpresa:string, numeroLote) {
    return await this.fireStore.firestore.collection('Lote').
      where('idEmpresa', '==', idEmpresa).
        orderBy('numeroLote').
          startAfter(numeroLote).
            limit(20).
              get();
  }

  async qtdLote(idEmpresa:string) {
    let qtdLote:number;
    await this.fireStore.firestore.collection('Lote').
    where('idEmpresa', '==', idEmpresa).get().then((data)=>{
      qtdLote = data.size;
      console.log(qtdLote);
      return qtdLote;
    });
    
    return qtdLote;
    
  }

  async apagarLoteId(idLote:string) {
    await this.fireStore.collection('Lote').doc(idLote).delete().then(()=>{
      console.log('Lote apagado com sucesso')
    }).catch((error)=>{
      console.log(error);
    })
  }

  async atualizaLote(idLote:string, lote:Lote) {
    console.log('idlote',idLote, 'lote', lote);
    return await this.fireStore.firestore.collection('Lote').doc(idLote).update(lote);
  }

  async buscarLoteEmpresa(idEmpresa:string){
    return await this.fireStore.firestore.
      collection('Lote').
        where('idEmpresa', '==', idEmpresa).
          orderBy('numeroLote').
            get();
  }

  async paginarLoteEmpresa(idEmpresa:string, ultimoNumeroLote:number){
    return await this.fireStore.firestore.
      collection('Lote').
        where('idEmpresa', '==', idEmpresa).
          orderBy('numeroLote').
            startAfter(ultimoNumeroLote).
              get();
  }
}
