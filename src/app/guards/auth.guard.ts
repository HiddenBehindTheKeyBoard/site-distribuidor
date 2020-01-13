import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private usuarioService: UsuarioService
    ) { }

  canActivate() : Promise<boolean>{

    return new Promise(resolve =>{
      this.loginService.auth().onAuthStateChanged(async usuario => {      
        this.loginService.menu(true);

        if (!usuario) {
          this.router.navigate(["/"]);          
        } else {
           await this.usuarioService.getUser(usuario.uid).then(res => {            
            LoginService.idEmpresa = res.idEmpresa;
            console.log(`idE: ${res.idEmpresa}`);
          });
        }   

        resolve(usuario ? true : false);
      })
    });

  }
}
