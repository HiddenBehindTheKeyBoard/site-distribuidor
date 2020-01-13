import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.scss']
})
export class SenhaComponent implements OnInit {
  public formGroupNovaSenha:FormGroup;  

  public senhaAtual:string;
  public senhaNova:string;
  public senhaNova2:string;

  private email = this.fireAuth.auth.currentUser.email;

  constructor(
    private fireAuth:AngularFireAuth, 
    private loginService:LoginService, 
    private formBuilder:FormBuilder
  ) { 
    this.formGroupNovaSenha =this.formBuilder.group({
      'senhaNova':[this.senhaNova, Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(8)
      ])],
      'senhaNova2':[this.senhaNova, Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(8)
      ])],
      'senhaAtual':[this.senhaNova, Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(8)
      ])],

      recaptcha: ['', Validators.required]
    });

  } 

  ngOnInit() {    
  }

  carregaSenhas(){
    this.formGroupNovaSenha.controls['senhaAtual'].setValue([this.senhaAtual]);
    this.formGroupNovaSenha.controls['senhaNova2'].setValue([this.senhaNova2]);
    this.formGroupNovaSenha.controls['senhaNova'].setValue([this.senhaNova]);
  }

  async alterarSenha(){
    let senhas:any = this.formGroupNovaSenha.value;
    if(senhas.senhaNova == senhas.senhaNova2){
      await this.loginService.alteraSenha(this.email, senhas.senhaAtual, senhas.senhaNova).
        then(()=>{
        }).catch((error)=>{
          console.log(error);
        });
    }
  }



}
