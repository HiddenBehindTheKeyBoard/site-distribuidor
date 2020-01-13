import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Devedor } from '../interfaces/Devedor';
import { Endereco } from '../interfaces/Endereco';
import { Telefone } from '../interfaces/Telefone';
import { Email } from '../interfaces/Email';



@Injectable({
  providedIn: 'root'
})
export class DevedorService {

  constructor(private fireStore:AngularFirestore) {}

  async buscarDevedor(idDevedor:string) {
    return await this.fireStore.firestore.collection('Devedor').doc(idDevedor).get();
  }

  async atualizaDevedor(devedor:Devedor) {
    return await this.fireStore.collection('Devedor').doc(devedor.idDevedor).update(devedor);
  }

  async buscaDevedorDocumentoEmpresa(numeroDocumento:string, idEmpresa:string){
    console.log(numeroDocumento.valueOf(), idEmpresa);
    return  await this.fireStore.firestore.
      collection('Devedor').
        where('idEmpresa', '==', idEmpresa).
          where('numeroDocumento', '==', numeroDocumento).
            get();
  }

  async deletaDevedor(idDevedor:string) {
    return await this.fireStore.collection('Devedor').doc(idDevedor).delete();
  }

  async criarDevedor(devedor:Devedor) {
    return await this.fireStore.firestore.collection('Devedor').add(devedor);
  }

  async criarEnderecoDevedor(enderecoDevedor:Endereco) {
    return await this.fireStore.firestore.collection('Endereco').add(enderecoDevedor);
  }

  async criarTelefoneDevedor(telefoneDevedor:Telefone) {
    return await this.fireStore.firestore.collection('Telefone').add(telefoneDevedor);
  }

  async criarEmailDevedor(email:Email){
    return await this.fireStore.firestore.collection('Email').add(email);
  }

  async buscarDevedoresPorNome(nomeDevedor:string, idEmpresa:string) {
    console.log(nomeDevedor);

    return await this.fireStore.firestore.collection('Devedor').
      where('idEmpresa', '==', idEmpresa).
      orderBy('nomeDevedor').
      startAt(nomeDevedor).
      endAt(nomeDevedor + '\uf8ff').
      limit(20).
      get();

  }

  async buscarDevedoresPorDocumento(numeroDocumento:string, idEmpresa:string) {
    console.log(numeroDocumento);
    return await this.fireStore.firestore.collection('Devedor').
      where('idEmpresa', '==', idEmpresa).
      orderBy('numeroDocumento').
      startAt(numeroDocumento).
      endAt(numeroDocumento + '\uf8ff').
      limit(20).
      get();
  }

  async buscarMaisDevedoresPorNome(nomeDevedor:string, idEmpresa:string, ultimoNomeDevedor:string) {
    console.log(nomeDevedor);
    return await this.fireStore.firestore.collection('Devedor').
      where('idEmpresa', '==', idEmpresa).
      orderBy('nomeDevedor').
      startAt(nomeDevedor).
      endAt(nomeDevedor + '\uf8ff').
      startAfter(ultimoNomeDevedor).
      limit(20).
      get();
  }

  async buscarMaisDevedoresPorDocumento(numeroDocumento:string, idEmpresa:string, ultimoDocumentoDevedor:string) {
    console.log(numeroDocumento);
    return await this.fireStore.firestore.collection('Devedor').
      where('idEmpresa', '==', idEmpresa).
        orderBy('numeroDocumento').
        startAt(numeroDocumento).
        endAt(numeroDocumento + '\uf8ff').
        startAfter(ultimoDocumentoDevedor).
        limit(20).
        get();
  }

  async buscarDevedoresTitulo(idTitulo:string) {
    return await this.fireStore.firestore.collection('Devedor').
      where('idTitulo', '==', idTitulo).
      get();
  }

 


  // ENDEREÇO
  async buscarEnderecoDevedor(idDevedor: string) {
    return await this.fireStore.firestore.collection('Endereco').      
    where('idDevedor', '==', idDevedor).
    get();
  }

  async apagarEnderecoDevedor(idEndereco: string) {
    await this.fireStore.collection('Endereco').doc(idEndereco).delete();
  }  
  
  async atualizarEnderecoDevedor(endereco:Endereco) {
    await this.fireStore.collection('Endereco').doc(endereco.idEndereco).update(endereco);
  }


  // EMAIL
  async buscarEmailDevedor(idDevedor: string) {
    return await this.fireStore.firestore.collection('Email').
    where('idDevedor', '==', idDevedor).
    get();
  }

  async atualizarEmailDevedor(endereco: Endereco) {
    await this.fireStore.collection('Endereco').doc(endereco.idEndereco).update(endereco);
  }

  async apagarEmailDevedor(idEmail: string) {
    await this.fireStore.collection('Email').doc(idEmail).delete();
  }


  // TELEFONE
  
  async buscarTelefoneDevedor(idDevedor: string) {
    return await this.fireStore.firestore.collection('Telefone').
    where('idDevedor', '==', idDevedor).
    get();
  }

  async apagarTelefone(idTelefone: string) {
    await this.fireStore.collection('Telefone').doc(idTelefone).delete();
  }
  
  async atualizarTelefoneDevedor(telefone: Telefone) {
    await this.fireStore.collection('Endereco').doc(telefone.idTelefone).update(telefone);
  }



}
