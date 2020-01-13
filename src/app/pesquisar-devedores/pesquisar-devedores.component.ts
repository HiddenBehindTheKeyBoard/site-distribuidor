import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-devedores',
  templateUrl: './pesquisar-devedores.component.html',
  styleUrls: ['./pesquisar-devedores.component.scss']
})
export class PesquisarDevedoresComponent implements OnInit {
  mostrargrid: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  pesquisar() {
    this.mostrargrid = true;
  }
}
