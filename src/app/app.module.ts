import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, Routing } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DevedoresComponent } from './devedores/devedores.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { AdesaoComponent } from './adesao/adesao.component';
import { SenhaComponent } from './senha/senha.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DigitacaoTitulosComponent } from './digitacao-titulos/digitacao-titulos.component';
import { PesquisarLotesComponent } from './pesquisar-lotes/pesquisar-lotes.component';
import { PesquisarDevedoresComponent } from './pesquisar-devedores/pesquisar-devedores.component';
import { PosicaoTitulosComponent } from './posicao-titulos/posicao-titulos.component';
import { PosicaoTitulosDevedorComponent } from './posicao-titulos-devedor/posicao-titulos-devedor.component';
import { InformacoesImportantesComponent } from './informacoes-importantes/informacoes-importantes.component';
import { ProtestoComponent } from './protesto/protesto.component';
import { AdicionalCadastroComponent } from './adicional/cadastro/adicional-cadastro.component';
import { AdicionalEdicaoComponent } from './adicional/edicao/adicional-edicao.component';
import { TitulosLoteComponent } from './titulos-lote/titulos-lote.component';
import { ProtestoSubFormularioComponent } from './protesto/sub-formulario/protesto-sub-formulario.component';
import { RequerimentoProtestoComponent } from './requerimento-protesto/requerimento-protesto.component';
import { DevedorCadastroComponent } from './devedores/cadastro/devedor-cadastro.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { TextMaskModule } from 'angular2-text-mask';

import { environment } from 'src/environments/environment.prod';

import { EmpresaResolver } from './guards/empresa.guard.resolve';
import { CadastroComponent } from './cadastro/cadastro.component';

import { LoginService } from './services/login.service';

import { NgBrazil } from 'ng-brazil';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxBarcodeModule } from 'ngx-barcode';
import { LowercaseInputDirective } from './directives/lowercase-input.directive';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { DigitacaoSubFormularioComponent } from './digitacao-titulos/sub-formulario/digitacao-sub-formulario.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ImpressaoFormularioProtestoComponent } from './protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NgxSpinnerModule } from "ngx-spinner";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SidebarModule } from 'ng-sidebar';
import { RodapeComponent } from './rodape/rodape.component';
import { PopoverModule } from 'ngx-bootstrap/popover';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    DevedoresComponent,
    AtualizacaoComponent,
    AdicionalComponent,
    AdesaoComponent,
    SenhaComponent,
    DevedorCadastroComponent,
    TitulosComponent,
    DigitacaoTitulosComponent,
    PesquisarLotesComponent,
    PesquisarDevedoresComponent,
    PosicaoTitulosComponent,
    PosicaoTitulosDevedorComponent,
    InformacoesImportantesComponent,
    ProtestoComponent,
    AdicionalCadastroComponent,
    AdicionalEdicaoComponent,
    TitulosLoteComponent,
    RequerimentoProtestoComponent,
    CadastroComponent,
    ProtestoSubFormularioComponent,
    ImpressaoFormularioProtestoComponent,
    DigitacaoSubFormularioComponent,
    LowercaseInputDirective, 
    UppercaseInputDirective, 
    PaginaNaoEncontradaComponent, 
    RodapeComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,    
    AngularFontAwesomeModule,
    AppRoutingModule,

    ModalModule.forRoot(), 
    AccordionModule.forRoot(),
    Routing,
    AngularFireModule.initializeApp(environment.firebase),
    
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule,

    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,

    ToastrModule.forRoot(),
    NgBrazil,
    NgxBarcodeModule,
    NgxCaptchaModule,
    CurrencyMaskModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    SidebarModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  entryComponents: [
    DevedorCadastroComponent,
    InformacoesImportantesComponent,
    AdicionalCadastroComponent,
    AdicionalEdicaoComponent,
    ProtestoSubFormularioComponent,
    DigitacaoSubFormularioComponent,
    ImpressaoFormularioProtestoComponent
  ],
  providers: [
    AngularFireModule,
    AngularFireAuthModule,    
    EmpresaResolver,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
