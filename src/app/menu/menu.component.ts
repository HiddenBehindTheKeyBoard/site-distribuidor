import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Empresa } from '../interfaces/Empresa';
import { EmpresaService } from '../services/empresa.service';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private empresa: Empresa = {}; //teste

  public idU: string = this.fireAuth.auth.currentUser.uid;

  constructor(
    private empresaService: EmpresaService,
    private loginService: LoginService,
    private fireAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
    this.empresaService.buscaEmpresa(this.idU).then((empresa) => {
      console.log(empresa)
      this.empresa = empresa
    })      
  }

  async sair() {
    await this.loginService.logout();
    this.router.navigate(['/']);
    console.log('metodo acionado');
  }
}
