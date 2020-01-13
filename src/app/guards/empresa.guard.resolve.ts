import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Empresa } from '../interfaces/Empresa';
import { Observable } from 'rxjs';
import { EmpresaService } from '../services/empresa.service';

@Injectable()

export class EmpresaResolver implements Resolve<Empresa>{

    constructor(private empresaService:EmpresaService){
    }

    resolve(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<any>|Promise<any>|any{

        let id = route.params['idU'];
        return this.empresaService.buscaEmpresa(id);
    }

}