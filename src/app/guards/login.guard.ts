import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,     
    private router: Router,
  ){}

  canActivate(): Promise<boolean>{
    return new Promise(resolve=> {          
      this.loginService.auth().onAuthStateChanged(usuario => {
        
        this.loginService.menu(false);
        
        if (usuario) {        
          this.router.navigate(["/home"]);                      
        }          

        resolve(!usuario ? true : false);
      });
    });
  }
  
}
