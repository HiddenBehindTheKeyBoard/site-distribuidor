import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-lotes',
  templateUrl: './pesquisar-lotes.component.html',
  styleUrls: ['./pesquisar-lotes.component.scss']
})
export class PesquisarLotesComponent implements OnInit {
  mostrargrid: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  pesquisar() {
    this.mostrargrid = true;
  }

}
