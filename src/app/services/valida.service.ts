import { Injectable } from '@angular/core';
import { Titulo } from '../interfaces/Titulo';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ValidaService {

  constructor(private fireStore:AngularFirestore) { }

  validaBanco(banco:string, conta:string, agencia:string):boolean{

    console.log(banco);
    console.log(conta);
    console.log(agencia);
    if(banco != null && conta != null && agencia != null){
      if( banco.trim().length >= 3 && banco.trim().length <= 120){
        if( conta.length <= 10 && conta.length >= 1){
          if( agencia.length <= 10 && agencia.length >= 1){
            return true
          }else{
            console.log('agencia Inválida');
          }
        }else{
          console.log('conta inválida')
        }
      }else{
        console.log('idBanco Inválido');
        console.log(banco);
      }
    }else{
      console.log('undidefined');
    }
    return false;
  }

  validarTituloEspecie(titulo:Titulo):boolean{
    if(titulo.siglaEspecie == 'CH' && titulo.alinea.trim().length >=3 && titulo.alinea.length <= 50){
      return true;
    }else if(titulo.siglaEspecie != 'CH'){
      titulo.alinea = "";
      return true;
    }else{
      return false;
    }
  }

  validarEndossante(endossante:any):boolean{
    console.log(endossante);
    if(endossante!=null){
      if(endossante.endossante != null && endossante.tipoDocumentoEndossante != null && endossante.documentoEndossante != null && endossante != undefined){
        if(endossante.endossante.trim().length >= 3 && endossante.endossante.trim().length <= 50){
          if(endossante.tipoDocumentoEndossante == 'CPF' || endossante.tipoDocumentoEndossante == 'CNPJ' ){
            if(endossante.documentoEndossante.trim().length >= 3 && endossante.documentoEndossante.trim().length <= 50){
              return true;
            }else{
              console.log('Documento do endosante inválido');
              return false;
            }
          }else{
            console.log('Tipo documento do endosante inválido');
            return false;
          }
        }else{
          console.log('Documento do endosante inválido');
          return false;
        }
      }else{
        return true;
      }
    }else{
      return true;
    }
  }

  strN(palavras:string):boolean{
    if(this.str(palavras) || !palavras){
      return true;
    }else{
      return false;
    }
  }
  
  str(palavras:string):boolean{
    if(palavras && palavras.trim().length>=3 && palavras.length <= 50){
      return true;
    }else{
      return false;
    }
  }

  async emailExiste(email:string){
    return await this.fireStore.firestore.
      collection('Empresa').
        where('email', '==', email).
          get();
  }


  async documentoExiste(numeroDocumento:string){
    
    return await this.fireStore.firestore.
      collection('Empresa').
        where('documento', '==', numeroDocumento).
          get();
  }
}
