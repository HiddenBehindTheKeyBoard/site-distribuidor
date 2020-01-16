import { Injectable, ElementRef } from '@angular/core';

export interface DataAtualExtenso {
  dia: number;
  mes: string;
  ano: number;
}

export interface DataAtual {
  dia: number;
  mes: number;
  ano: number;
}

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {
  private dataAtualExtenso: DataAtualExtenso;
  private dataAtual: DataAtual;

  constructor() { }

  DataAtualExtenso() {  
    let monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
    var data = new Date();

    this.dataAtualExtenso = {
      dia: data.getDate(),
      mes: monName[data.getMonth()],
      ano: data.getFullYear()
    }

    return this.dataAtualExtenso;
  }

  DataAtual() {      
    var data = new Date();

    this.dataAtual = {
      dia: data.getDate(),
      mes: data.getMonth() + 1,
      ano: data.getFullYear()
    }
    
    return this.dataAtual;
  }

  ImprimirConteudoDiv(div: ElementRef) {
    var html, page;

    html = div.nativeElement.innerHTML;

    page = window.open("", "_blank", "scrollbars=1,width=1000");
    page.document.write(html);
    page.window.print();
    page.document.close();
    page.focus();
  }

  verificaSenhaForte(senha: string): string  {
    let forcaSenha: number=0;


    if(senha.length >= 6) {
      forcaSenha += 25;  
    }

    if(senha.length >= 8 ) {
      forcaSenha += 15;
    }

    if(senha.match(/[a-z]+/)) {
      forcaSenha += 15;
    }

    if(senha.match(/[A-Z]+/)) {
      forcaSenha += 15;
    }
    
    if(senha.match(/[!@#$%¨&*())-.,/\|{}[]+-^´`| <>:?"]/)) {
      forcaSenha+= 15;
    }

    if(senha.match(/[1234567890]/)) {
      forcaSenha += 15;
    }
    // verificando força da sneha e retornando o nome;
    if(forcaSenha < 50) {
      return 'Fraca';
    }

    if(forcaSenha >= 50 && forcaSenha <= 75) {
      return 'Média';
    }

    if(forcaSenha > 75) {
      return 'Forte';
    }

  }
}
