import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from 'ng-brazil';
import { BsModalService } from 'ngx-bootstrap/modal/';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Especie } from '../interfaces/Especie';
import { Titulo } from '../interfaces/Titulo';
import { TituloDevedor } from '../interfaces/TituloDevedor';
import { ArraysService } from '../services/arrays.service';
import { CepService } from '../services/cep.service';
import { TituloDevedorService } from '../services/titulo-devedor.service';
import { TituloService } from '../services/titulo.service';
import { ValidaService } from '../services/valida.service';
import { Validacoes } from '../validators/validacao';
import { ProtestoSubFormularioComponent } from './sub-formulario/protesto-sub-formulario.component';


@Component({
  selector: 'app-protesto',
  templateUrl: './protesto.component.html',
  styleUrls: ['./protesto.component.scss']
})
export class ProtestoComponent implements OnInit {
  public MASKS = utilsBr.MASKS;

  submitted = false;

  public bancos = new Array<string>();
  public estados = new Array<string>();

  private posDevedor:number = -1;

  public especies = new Array<Especie>();

  public devedores = new Array<TituloDevedor>();

  public mostrarform: boolean = false;
  public endosso: boolean = false;
  public criandoDevedores: boolean = false;
  public mostraForm: boolean = false;
  public alterando: boolean = false;
  public submittedDevedor: boolean = false;
  public mostraBtn: boolean = false;
  public escondeBtn: boolean = true;

  public fGroupDevedores: FormGroup;
  public fGroupTitulo: FormGroup;

  public devedor: TituloDevedor = { tipoDocumento: "CPF" };

  public titulo: Titulo = { rg: "", tipo: "CPF", pracaPagamento: "FRANCA", tipoProtesto: "COMUM", endosso: "SEM ENDOSSO" };

  private mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  title: string;
  closeBtnName: string;
  list: any[] = [];
  invalido = 'is-invalid';

  public CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private formBuilder: FormBuilder,
    private validaService: ValidaService,
    private arraysService: ArraysService,
    private tituloDevedorService: TituloDevedorService,
    private tituloService: TituloService,
    private cepService: CepService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {
    this.carregaApresentanteModal();

    this.especies = this.arraysService.carregaEspecie();
    this.arraysService.carregaBanco(this.bancos);
    this.arraysService.carregaEstado(this.estados);

    this.fGroupTitulo = this.formBuilder.group({
      'nomeCredor': [this.titulo.nomeCredor, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'email': [this.titulo.email, Validators.compose([
        Validators.email,
        Validators.pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)      ])],
      'tipo': [this.titulo.tipo, Validators.compose([
        Validators.required,
      ])],
      'numeroDocumento': [this.titulo.numeroDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf,
      ])],
      'rg': [this.titulo.rg],
      'telefone': [this.titulo.telefone, Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])],
      'cep': [this.titulo.cep, Validators.compose([
        Validators.required,
        Validators.minLength(9),
      ])],
      'endereco': [this.titulo.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'numero': [this.titulo.numero, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      'bairro': [this.titulo.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'cidade': [this.titulo.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'complemento': [this.titulo.complemento],
      'estado': [this.titulo.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      'siglaEspecie': [this.titulo.siglaEspecie, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      'tipoProtesto': [this.titulo.tipoProtesto, Validators.compose([
        Validators.required,
      ])],
      'pracaPagamento': [this.titulo.pracaPagamento, Validators.compose([
        Validators.required,
      ])],
      'dataEmissao': [this.titulo.dataEmissao, Validators.compose([
        Validators.required,
      ])],
      'vencimento': [this.titulo.vencimento, Validators.compose([
        Validators.required,
      ])],
      'numeroTitulo': [this.titulo.numeroTitulo, Validators.compose([
        Validators.required,
      ])],
      'alinea': [this.titulo.alinea],
      'valorOriginalTitulo': [this.titulo.valorOriginalTitulo, Validators.compose([
        Validators.required,
        Validacoes.ValorMinimo(1.00),
      ])],
      'valorProtesto': [this.titulo.valorProtesto, Validators.compose([
        Validators.required,
        Validacoes.ValorMinimo(1.00),
      ])],
      'endosso': [this.titulo.endosso, Validators.compose([
        Validators.required,
      ])],
      'banco': [this.titulo.bancoId],
      'agencia': [this.titulo.agencia],
      'conta': [this.titulo.conta],
      'endossante': [this.titulo.endossante],
      'tipoDocumentoEndossante': [this.titulo.tipoDocumentoEndossante],
      'documentoEndossante': [this.titulo.documentoEndossante],
    });

    this.fGroupDevedores = this.formBuilder.group({
      'nomeDevedor': [this.devedor.nomeDevedor, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'numeroDocumento': [this.devedor.numeroDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf,
      ])],
      'tipoDocumento': [this.devedor.tipoDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4),
      ])],
      'numeroDocumento2': [this.devedor.numeroDocumento2],
      'telefone': [this.devedor.telefone],
      'cep': [this.devedor.cep, Validators.compose([
        Validators.required,
        Validators.minLength(9),
      ])],
      'endereco': [this.devedor.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'numero': [this.devedor.numero, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      'complemento': [this.devedor.complemento],
      'bairro': [this.devedor.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'cidade': [this.devedor.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'estado': [this.devedor.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
    });

  }

  get fTitulo() { return this.fGroupTitulo.controls; }
  get fDevedor() { return this.fGroupDevedores.controls; }


  buscarCEPTitulo() {
    this.cepService.getCEPCorreios(this.fGroupTitulo.controls['cep'].value).then(res => {
      this.fGroupTitulo.controls['endereco'].setValue(res.logradouro);
      this.fGroupTitulo.controls['bairro'].setValue(res.bairro);
      this.fGroupTitulo.controls['cidade'].setValue(res.localidade);
      this.fGroupTitulo.controls['estado'].setValue(res.uf);
    });
  }

  buscarCEPDevedor() {
    this.cepService.getCEPCorreios(this.fGroupDevedores.controls['cep'].value).then(res => {
      this.fGroupDevedores.controls['endereco'].setValue(res.logradouro);
      this.fGroupDevedores.controls['bairro'].setValue(res.bairro);
      this.fGroupDevedores.controls['cidade'].setValue(res.localidade);
      this.fGroupDevedores.controls['estado'].setValue(res.uf);
    });
  }

  carregaDevedor(devedor: TituloDevedor) {
    this.alterando = true;
    this.mostraForm = true;
    this.fGroupDevedores.patchValue(devedor);
    this.devedor = devedor;

    const retorno:any = this.devedorExiste(-1);
    this.posDevedor = retorno.posicao;
    console.log('posição alterada',this.posDevedor);
  }

  apagarDevedor(documento: string) {
    this.devedor.numeroDocumento = documento;
    let resultado: any = this.devedorExiste(-1);

    console.log(resultado);
    if (resultado.encontrou) {
      this.devedores.splice(resultado.posicao, 1);
      this.fGroupDevedores.reset();
      this.devedor = {};

      console.log('encontrou');
    }
  }

  ngOnInit() {

  }

  carregaApresentanteModal() {
    this.route.params.subscribe(data => {
      if (data.id) {
        console.log(data.id)

        if (this.route.params) {
          this.tituloService.getTituloByID(data.id).then(data => {
            this.titulo.nomeCredor = data.nomeCredor;
            this.titulo.email = data.email;
            this.titulo.tipo = data.tipo;
            this.titulo.numeroDocumento = data.numeroDocumento;
            this.titulo.rg = data.rg;
            this.titulo.telefone = data.telefone;
            this.titulo.cep = data.cep;
            this.titulo.endereco = data.endereco;
            this.titulo.numero = data.numero;
            this.titulo.bairro = data.bairro;
            this.titulo.cidade = data.cidade
            this.titulo.complemento = data.complemento;
            this.titulo.estado = data.estado;


            this.fGroupTitulo.controls['nomeCredor'].setValue(this.titulo.nomeCredor);
            this.fGroupTitulo.controls['email'].setValue(this.titulo.email);
            this.fGroupTitulo.controls['tipo'].setValue(this.titulo.tipo);
            this.fGroupTitulo.controls['numeroDocumento'].setValue(this.titulo.numeroDocumento);
            this.fGroupTitulo.controls['rg'].setValue(this.titulo.rg);
            this.fGroupTitulo.controls['telefone'].setValue(this.titulo.telefone);
            this.fGroupTitulo.controls['cep'].setValue(this.titulo.cep);
            this.fGroupTitulo.controls['endereco'].setValue(this.titulo.endereco);
            this.fGroupTitulo.controls['numero'].setValue(this.titulo.numero);
            this.fGroupTitulo.controls['bairro'].setValue(this.titulo.bairro);
            this.fGroupTitulo.controls['cidade'].setValue(this.titulo.cidade);
            this.fGroupTitulo.controls['complemento'].setValue(this.titulo.complemento);
            this.fGroupTitulo.controls['estado'].setValue(this.titulo.estado);
          });
        }
      }
    });

  }

  cancelar() {
    this.fGroupDevedores.reset();
    this.devedor = {};
    this.alterando = false;
    this.mostraForm = false;
    this.criandoDevedores = true;
    this.submittedDevedor = false
  }

  atualizaTipo() {
    const titulo: any = this.fGroupTitulo.value;

    if (titulo.tipo == 'CNPJ') {
      this.fGroupTitulo.controls['rg'].disable();
      this.fGroupTitulo.controls['rg'].reset();

    } else {
      this.fGroupTitulo.controls['rg'].enable();

    }
  }

  alteraValidator(event) {
    this.fGroupTitulo.controls['numeroDocumento'].setValue('');

    let tipo = event.target.value;
    if (tipo == 'CPF') {
      this.fGroupTitulo.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cpf
        ]));
    } else {
      this.fGroupTitulo.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cnpj
        ]));
    }
  }

  alteraValidator2(event) {
    this.fGroupDevedores.controls['numeroDocumento'].setValue('');

    let tipo = event.target.value;
    if (tipo == 'CPF') {
      this.fGroupDevedores.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cpf
        ]));
    } else {
      this.fGroupDevedores.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cnpj
        ]));
    }
  }

  atualizaTipoDevedor() {
    const devedor: any = this.fGroupDevedores.value;
    console.log(devedor);
    if (devedor.tipoDocumento == 'CNPJ') {
      this.fGroupDevedores.controls['numeroDocumento2'].disable();
      this.fGroupDevedores.controls['numeroDocumento2'].reset();
      console.log('passou');
    } else {
      this.fGroupDevedores.controls['numeroDocumento2'].enable();
      console.log('passou2');
    }
  }

  verificaEndosso() {
    console.log('ok');
    const titulo: Titulo = this.fGroupTitulo.value;
    this.titulo.endosso = titulo.endosso;
    console.log(titulo.endosso);

    if (this.titulo.endosso != 'SEM ENDOSSO') {
      this.endosso = true;
    } else {
      this.endosso = false;
    }
  }

  pagamento() {
    if (!this.mostrarform) {
      this.mostrarform = true;
    } else {
      this.fGroupTitulo.controls['banco'].reset();
      this.fGroupTitulo.controls['agencia'].reset();
      this.fGroupTitulo.controls['conta'].reset();
      this.fGroupTitulo.controls['banco'].valid;
      this.fGroupTitulo.controls['agencia'].valid;
      this.fGroupTitulo.controls['conta'].valid;
      this.mostrarform = false;
    }
  }

  verificaCheque() {
    console.log(this.titulo);
    const titulo: any = this.fGroupTitulo.value;
    this.titulo.siglaEspecie = titulo.siglaEspecie;
    console.log(this.titulo.siglaEspecie);
    if (this.titulo.siglaEspecie == "CH") {
      this.titulo.vencimento = "À vista";
      this.fGroupTitulo.controls['alinea'].enable();
    } else {
      this.titulo.vencimento = "";
      this.fGroupTitulo.controls['vencimento'].enable();
      this.fGroupTitulo.controls['alinea'].reset();
    }
    this.fGroupTitulo.controls['vencimento'].setValue(this.titulo.vencimento);
  }

  validarTituloBanco(bancoConta: any): boolean {
    if (this.mostrarform == true) {
      if (this.validaService.validaBanco(bancoConta.banco, bancoConta.conta, bancoConta.agencia)) {
        return true;
      }
    } else {
      this.titulo.bancoId = null;
      this.titulo.conta = "";
      this.titulo.agencia = "";
      return true;
    }
  }

  validaTituloEspecie(): boolean {
    if (this.validaService.validarTituloEspecie(this.titulo)) {
      return true;
    } else {
      return false;
    }
  }

  validarDevedor(): boolean {
    this.devedor = this.fGroupDevedores.value;
    this.submittedDevedor = true;
    if (this.validaService.str(this.devedor.numeroDocumento2) || !this.devedor.numeroDocumento2) {
      if (this.validaService.strN(this.devedor.telefone)) {
        if (this.fGroupDevedores.valid) {
          console.log('ok');
          this.escondeBtn = false;
          return true;
        } else {
          console.log('Devedor Inválido', this.fGroupDevedores.controls['numeroDocumento'].valid);
        }
      } else {
        console.log('telefone');
      }
    } else {
      console.log('rg');
    }
    return false;
  }

  validaTitulo() {
    this.submitted = true;
    let endossante: any;
    let bancoConta: any;
    let form = this.fGroupTitulo.value;

    console.log(form);
    endossante = {};
    endossante.endossante = form.endossante;
    endossante.tipoDocumentoEndossante = form.tipoDocumentoEndossante;
    endossante.documentoEndossante = form.documentoEndossante;

    console.log(form.banco);
    console.log(form.conta);
    console.log(form.agencia);

    bancoConta = {};
    bancoConta.banco = form.banco;
    bancoConta.conta = form.conta;
    bancoConta.agencia = form.agencia;

    this.titulo.endossante = endossante.endossante;
    this.titulo.documentoEndossante = endossante.documentoEndossante;
    this.titulo.tipoDocumentoEndossante = endossante.tipoDocumentoEndossante;

    this.titulo.bancoId = bancoConta.banco;
    this.titulo.conta = bancoConta.conta;
    this.titulo.agencia = bancoConta.agencia;

    console.log(this.titulo.nomeCredor, this.fGroupTitulo.controls['nomeCredor'].valid);
    console.log(this.titulo.numero, this.fGroupTitulo.controls['numero'].valid);
    console.log(this.titulo.numeroDocumento, this.fGroupTitulo.controls['numeroDocumento'].valid);
    console.log(this.titulo.numeroTitulo, this.fGroupTitulo.controls['numeroTitulo'].valid);
    console.log(this.titulo.pracaPagamento, this.fGroupTitulo.controls['pracaPagamento'].valid);
    console.log(this.titulo.rg, this.fGroupTitulo.controls['rg'].valid);
    console.log(this.titulo.siglaEspecie, this.fGroupTitulo.controls['siglaEspecie'].valid);
    console.log(this.titulo.telefone, this.fGroupTitulo.controls['telefone'].valid);
    console.log(this.titulo.tipo, this.fGroupTitulo.controls['tipo'].valid);
    console.log(this.titulo.tipoDocumentoEndossante, this.fGroupTitulo.controls['tipoDocumentoEndossante'].valid);
    console.log(this.titulo.tipoProtesto, this.fGroupTitulo.controls['tipoProtesto'].valid);
    console.log(this.titulo.valorOriginalTitulo, this.fGroupTitulo.controls['valorOriginalTitulo'].valid);
    console.log(this.titulo.valorProtesto, this.fGroupTitulo.controls['valorProtesto'].valid);
    console.log(this.titulo.vencimento, this.fGroupTitulo.controls['vencimento'].valid);

    if (this.fGroupTitulo.valid) {
      if (this.validarTituloBanco(bancoConta)) {
        if (this.validaTituloEspecie()) {
          if (this.validaService.validarEndossante(endossante)) {
            if (this.devedores.length >= 1) {
              if (this.validaService.strN(this.titulo.complemento)) {
                if (form.siglaEspecie == 'CH' && form.alinea.trim().length == 2 || form.siglaEspecie != 'CH' && !form.alinea) {
                  if (form.tipo == 'CPF' && this.validaService.strN(form.rg) || form.tipo == 'CNPJ') {
                    console.log('Valido');
                    this.abrirModal();
                  } else {
                    console.log('tipo inválido');
                  }
                } else {
                  console.log('especie inválida');
                }
              } else {
                console.log('Complemento inválido!');
              }
            } else {
              console.log('Devedor inválido!');
            }
          } else {

            console.log('Endossante Inválido');
          }
        } else {
          console.log('Titulo Especie Inválida')
        }
      } else {
        console.log('Titulo banco Inválido');
      }
    } else {
      console.log('Titulo Formulário Inválido');
    }

  }

  devedorExiste(pos:number): any {
    let retorno: any;
    retorno = {};
    retorno.encontrou = false;
    retorno.posicao = null;
    console.log(pos);
    
    if(pos == -1){
      for (let i = 0; i < this.devedores.length; i++) {
        if (this.devedor.numeroDocumento == this.devedores[i].numeroDocumento) {
          retorno.posicao = i;
          retorno.encontrou = true;
        }
      }
      return retorno;
    }else{
      for (let i = 0; i < this.devedores.length; i++) {
        if (this.devedor.numeroDocumento == this.devedores[i].numeroDocumento && i != pos) {
          retorno.posicao = i;
          retorno.encontrou = true;
        }
      }
      return retorno;
    }
  }

  validaQtdMaxDevedores(): boolean {
    if (this.devedores.length <= 9) {
      return true;
    } else {
      console.log('Quantidade Máxima de devedores igual 10');
      return false
    }
  }

  validaAddDevedor() {
    this.copiaPDevedor();
    let resultado: any = this.devedorExiste(-1);
    this.copiaPDevedor();

    let teste: boolean = true;

    if (!this.validaQtdMaxDevedores()) {
      teste = false;
    }

    if(resultado.encontrou){
      teste = false;
      this.devedorRepetidoError();
    }

    if(!this.validarDevedor()){
      teste = false;
    }
    
    if(teste){
      this.inserirDevedor();
    }
  }

  validaAlterarDevedor() {
    //this.submittedDevedor = true;
    let resultado: any = this.devedorExiste(-1);
    if (this.validaQtdMaxDevedores() && resultado.encontrou && this.validarDevedor()) {
      this.inserirDevedor(resultado.posicao);
    }
  }

  mostrarForm(){
    this.mostraForm = true;
    this.criandoDevedores = true;
  }

  salvaDevedor() {
    this.mostraForm = true;
    
    if (this.criandoDevedores) {
      if (this.alterando) {
        this.validaAlterarDevedor();
        console.log('está Alterando Devedor');

      } else {
        this.validaAddDevedor();
        console.log('está criando novo Devedor');

      }
    }
    this.criandoDevedores = true;

  }

  inserirDevedor(pos?: number) {
    this.submittedDevedor = true;
    if (pos != undefined && pos != null) {
      console.log(pos);
      const resultado:any = this.devedorExiste(pos);
      console.log(resultado.encontrou);
      if(!resultado.encontrou){
        this.devedores[this.posDevedor] = this.devedor;
        this.devedor = {};
        this.alterando = false;
        this.fGroupDevedores.reset();
        this.mostraForm = false;
        this.submittedDevedor = false;
      }else{
        console.log('Devedor já existe');
        this.devedor = {};
        this.alterando = false;
        this.fGroupDevedores.reset();
        this.mostraForm = false;
        this.devedorRepetidoError();

      }
    } else {
      this.devedores.push(this.devedor);
      console.log('valido');
      this.devedor = {};
      this.fGroupDevedores.reset();
      console.log('Criado com sucesso!');
      this.mostraForm = false;
      this.posDevedor = -1;
      this.submittedDevedor = false;
    }
  }

  copiaPDevedor() {
    this.devedor = this.fGroupDevedores.value;
  }

  copiaPTitulo() {
    this.titulo = this.fGroupTitulo.value;
  }

  abrirModal() {
    this.copiaPTitulo();

    const initialState = {
      titulo: this.titulo,
      devedores: this.devedores,
      title: 'Modal with component'
    }
    this.modalService.show(ProtestoSubFormularioComponent, { initialState })
  }

  adressError() {
    Swal.fire({
      icon: 'error',
      title: 'Você não adicionou nenhum devedor!',
    });

  }

  devedorRepetidoError(){
    Swal.fire({
      icon: 'error',
      title: 'Já existe um devedor com este documento!',
    });
  }

  devedorQuantidadeMaximaError(){
    Swal.fire({
      icon: 'error',
      title: 'A quantidade máxima de devedores por título é 10',
    });
  }

  
excluirDev(devedor) {
  console.log(devedor);
  Swal.fire({
    title: 'Deseja realmente excluir este devedor?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#808080',
    confirmButtonText: 'Continuar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    console.log(result)
    if (result.value) {
      this.apagarDevedor(devedor.numeroDocumento);
      this.escondeBtn = true;
    }
  })
}

}
