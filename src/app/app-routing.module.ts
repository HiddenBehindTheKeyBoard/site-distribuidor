import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DevedoresComponent } from './devedores/devedores.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { AdesaoComponent } from './adesao/adesao.component';
import { SenhaComponent } from './senha/senha.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DigitacaoTitulosComponent } from './digitacao-titulos/digitacao-titulos.component';
import { PesquisarLotesComponent } from './pesquisar-lotes/pesquisar-lotes.component';
import { PesquisarDevedoresComponent } from './pesquisar-devedores/pesquisar-devedores.component';
import { ProtestoComponent } from './protesto/protesto.component';
import { TitulosLoteComponent } from './titulos-lote/titulos-lote.component';
import { RequerimentoProtestoComponent } from './requerimento-protesto/requerimento-protesto.component';
import { PosicaoTitulosComponent } from './posicao-titulos/posicao-titulos.component';
import { PosicaoTitulosDevedorComponent } from './posicao-titulos-devedor/posicao-titulos-devedor.component';
import { ImpressaoFormularioProtestoComponent } from './protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { EmpresaResolver } from './guards/empresa.guard.resolve';

import { CadastroComponent } from './cadastro/cadastro.component';

import { UsuarioService } from './services/usuario.service';
import { EmpresaService } from './services/empresa.service';
import { TituloService } from './services/titulo.service';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[LoginGuard],
  },
  {
    path: 'home',
    component: HomeComponent,    
    canActivate:[AuthGuard],
    resolve:{ empresa: EmpresaService }
  },
  {
    path: 'devedores',
    component: DevedoresComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'atualizacao/:idU',
    component: AtualizacaoComponent,
    canActivate:[AuthGuard],
    resolve:{ empresa: EmpresaResolver }
  },
  {
    path: 'adicional',
    component: AdicionalComponent,
    canActivate:[AuthGuard],
    resolve: { usuarios: UsuarioService }
  },
  {
    path: 'adesao',
    component: AdesaoComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'senha',
    component: SenhaComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'titulos',
    component: TitulosComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'digitacao-titulos/:idLote',
    component: DigitacaoTitulosComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'pesquisar-lotes',
    component: PesquisarLotesComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'pesquisar-devedores',
    component: PesquisarDevedoresComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'posicao-titulos',
    component: PosicaoTitulosComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'posicao-titulos-devedor',
    component: PosicaoTitulosDevedorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'protesto/:id',
    component: ProtestoComponent,
  },
  {
    path: 'protesto',
    component: ProtestoComponent,
  },
  {
    path:'cadastro',
    component:CadastroComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'titulos-lote',
    component: TitulosLoteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'requerimento-protesto/:idLote',
    component: RequerimentoProtestoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'impressao-formulario-protesto/:idTitulo',
    component: ImpressaoFormularioProtestoComponent,
   // resolve: { titulo: TituloService }
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  }
];

export const Routing:ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
