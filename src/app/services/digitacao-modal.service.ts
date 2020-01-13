import { Injectable } from '@angular/core';
import { Endereco } from '../interfaces/Endereco';

@Injectable({
  providedIn: 'root'
})
export class DigitacaoModalService {

  static endereco:Endereco={};
  
  constructor() { }


  setEndereco(endereco:Endereco):void{
    DigitacaoModalService.endereco = endereco;
  }

  getEndereco():Endereco{
    return DigitacaoModalService.endereco;
  }
}
