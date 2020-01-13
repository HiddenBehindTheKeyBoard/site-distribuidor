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

}
