import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Cep } from '../interfaces/Cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {  

  constructor(
    private httpClient: HttpClient,
  ) 
  { }

  async getCEPCorreios(cep: string) {        
    let resultCEP: Cep;

    await this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()             
      .then(res => resultCEP = res);        
    
    return resultCEP;
  }

}

