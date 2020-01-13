import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Representante } from '../interfaces/Representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private fireStore:AngularFirestore) {}


  async criaRepresentante(representante:Representante){
    return this.fireStore.collection('Representante').add(representante);
  }
}
