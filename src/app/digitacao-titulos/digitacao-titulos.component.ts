import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FuncoesService } from '../services/funcoes.service';
import { ArraysService } from '../services/arrays.service';
import { DevedorService } from '../services/devedor.service';
import { CepService } from '../services/cep.service';
import { ValidaService } from '../services/valida.service';
import { TituloService } from '../services/titulo.service';

import { DigitacaoModalService } from '../services/digitacao-modal.service';
import { LoteService } from '../services/lote.service';
import { TituloDevedorService } from '../services/titulo-devedor.service';
import { EmpresaService } from '../services/empresa.service';

import { Titulo } from '../interfaces/Titulo';
import { Especie } from '../interfaces/Especie';
import { TituloDevedor } from '../interfaces/TituloDevedor';
import { Devedor } from '../interfaces/Devedor';
import { Lote } from '../interfaces/Lote';
import { Endereco } from '../interfaces/Endereco';
import { Empresa } from '../interfaces/Empresa';

import { DigitacaoSubFormularioComponent } from './sub-formulario/digitacao-sub-formulario.component';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';

import { Subscription } from 'rxjs';
import { Validacoes } from '../validators/validacao';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { Representante } from '../interfaces/Representante';

@Component({
  selector: 'app-digitacao-titulos',
  templateUrl: './digitacao-titulos.component.html',
  styleUrls: ['./digitacao-titulos.component.scss']
})

export class DigitacaoTitulosComponent implements OnInit, OnDestroy {

  @ViewChild('divDeclaracao', { static: false }) divDeclaracao: ElementRef;

  submitted = false; //teste
  devSubmitted = false; //teste
  endSubmitted = false;
  buttonAdd = false;
  btnAdd = true;

private email: any;

  private data: any; //em uso

  private subscription: Subscription;

  private empresa: Empresa = {};

  public subscribe: Subscription;

  private representante: Representante = {};

  private mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public MASKS = utilsBr.MASKS;

  public devedor: TituloDevedor = { tipoDocumento: "CPF" };

  public devedores = new Array<TituloDevedor>();
  public devedoresPrint = new Array<TituloDevedor>();

  public enderecos = new Array<Endereco>();

  private endosso: boolean;
  public criandoDevedor: boolean = false;
  public alterando: boolean = false;
  public mostraForm: boolean = false;
  public alterandoTitulo: boolean = false;

  private fGroupTitulo: FormGroup;
  private fGroupDevedores: FormGroup;

  private idLote: string;
  private idEmpresa: string;
  private favorecido: string;

  private lote: Lote = {};

  public titulo: Titulo = {
    endosso: 'S',
  };


  public estados = new Array<string>();

  public especies = new Array<Especie>();

  public titulos = new Array<Titulo>();

  public posicaoAlteracaoTitulo: number;

  public CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private funcoesService: FuncoesService,
    private formBuilder: FormBuilder,
    private arraysService: ArraysService,
    private devedorService: DevedorService,
    private cepService: CepService,
    private validaService: ValidaService,
    private modalService: BsModalService,
    private digitacaoModalService: DigitacaoModalService,
    private tituloService: TituloService,
    private tituloDevedorService: TituloDevedorService,
    private loteService: LoteService,
    private route: ActivatedRoute,
    private empresaService: EmpresaService) {
  
    this.idLote = this.route.snapshot.params['idLote'];
    this.buscaLote();
      
    this.buscarTitulosLote();

    this.data = this.funcoesService.DataAtualExtenso();

    this.especies = this.arraysService.carregaEspecie();
    this.arraysService.carregaEstado(this.estados);

    this.fGroupTitulo = this.formBuilder.group({
      'siglaEspecie': [this.titulo.siglaEspecie, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      'tipoProtesto': [this.titulo.tipoProtesto],
      'pracaPagamento': [this.titulo.pracaPagamento],
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
      'favorecido': [this.titulo.favorecido, Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(3),
      ])],
      'endossante': [this.titulo.endossante],
      'tipoDocumentoEndossante': [this.titulo.tipoDocumentoEndossante],
      'documentoEndossante': [this.titulo.documentoEndossante],
      'idTitulo': [this.titulo.idTitulo],
      'idEmpresa': [this.titulo.idEmpresa],
      'idLote': [this.titulo.idLote]
    });


    this.fGroupDevedores = this.formBuilder.group({
      'nomeDevedor': [this.devedor.nomeDevedor, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'tipoDocumento': [this.devedor.tipoDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4),
      ])],
      'numeroDocumento': [this.devedor.numeroDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf,

      ])],
      'tipoDocumento2': [this.devedor.tipoDocumento2],
      'numeroDocumento2': [this.devedor.numeroDocumento2],
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

    this.subscription = this.modalService.onHidden.subscribe(() => {
      this.copiaEnderecoPDevedor(this.digitacaoModalService.getEndereco());
      this.fGroupDevedores.patchValue(this.devedor);
    });
  }

  get fTitulo() { return this.fGroupTitulo.controls; }
  get fDevedor() { return this.fGroupDevedores.controls; }



  alteraValidator(event) {
    this.fGroupTitulo.controls['numeroDocumento'].setValue('');

    let tipo = event.target.value;
    if (tipo === 'CPF') {
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
    if (tipo === 'CPF') {
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

  async buscarTitulosLote() {
    await this.tituloService.buscaTituloLote(this.idLote).then((data) => {
      for (let i = 0; i < data.size; i++) {
        let titulo: Titulo = {};
        titulo = data.docs[i].data();
        titulo.idTitulo = data.docs[i].id;
        this.titulos.push(titulo);
      }

      console.log(this.titulos);

    }).catch(error => {
      console.log(error);
    });
  }

  carregaFavorecido(){
    if(this.empresa.tipo ===  'CPF') {
      this.favorecido = this.empresa.nome;
      console.log(this.favorecido);
      console.log('CPF');
    }else{
      this.favorecido = this.empresa.nomeRepresentante;
    }
    this.fGroupTitulo.controls['favorecido'].setValue(this.favorecido);
  }

  async buscaLote() {
    await this.loteService.buscaLoteId(this.idLote).then((lote) => {
      this.lote = lote.data();
      this.idEmpresa = this.lote.idEmpresa;
      console.log(this.lote);
    });

    await this.empresaService.buscarEmpresa(this.idEmpresa).then((data) => {
      const empresa: Empresa = data.data();
      this.empresa = empresa;
      this.carregaFavorecido();
      console.log(this.favorecido)
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  iniciaDevedor() {
    this.criandoDevedor = true;
    this.devedor = {};
    this.devedor = { tipoDocumento: "CPF" };
    this.btnAdd = true; //teste
    console.log(this.devedor.tipoDocumento);
  }

  validarDevedor(): boolean {
    
    this.devedor = this.fGroupDevedores.value;
    console.log(this.devedor);
    if (this.validaService.str(this.devedor.numeroDocumento2) || !this.devedor.numeroDocumento2) {
      if (this.fGroupDevedores.valid) {
        console.log('ok');
        return true;
      } else {
        this.devSubmitted = true; //teste
        console.log('Devedor Inválido');
        console.log(this.fGroupDevedores.controls['numeroDocumento'].value)
        console.log(this.fGroupDevedores.controls['numeroDocumento2'].valid)
        console.log(this.fGroupDevedores.controls['tipoDocumento'].valid)
        console.log(this.fGroupDevedores.controls['tipoDocumento2'].valid)
        console.log(this.fGroupDevedores.controls['nomeDevedor'].valid)
      }
    } else {
      console.log('rg');
    }
    return false;
  }

  devedorExiste(posDevedorAlteracao:number): number {

    let retorno:number = -1;

    if(posDevedorAlteracao ===  -1){
      for (let i = 0; i < this.devedores.length; i++) {
        if (this.devedor.numeroDocumento ===  this.devedores[i].numeroDocumento) {
          retorno = i;
        }
      }
    }else{
      for (let i = 0; i < this.devedores.length; i++) {
        if (this.devedor.numeroDocumento ===  this.devedores[i].numeroDocumento && i !==  posDevedorAlteracao) {
          retorno = i;
        }
      }
      return retorno;
    }


    return retorno;
  }

  validaQtdMaxDevedores(): boolean {
    if (this.devedores.length <= 9) {
      return true;
    } else {
      console.log('Quantidade Máxima de devedores igual 10');
      return false
    }
  }

  async criarTituloDevedor(){
    await this.tituloDevedorService.criarTituloDevedor(this.devedor).then((data)=>{
      this.devedor.idTituloDevedor = data.id;
    });
  }
  async atualizaTituloDevedor(devedor:TituloDevedor){
    await this.tituloDevedorService.atualizaTituloDevedor(devedor);
  }
  
  async inserirDevedor(pos?: number) {

    if(pos !== null && pos !== undefined){ //QUANDO O USUÁRIO ESTIVER ALTERANDO UM DEVEDOR

      const resultado: number = this.devedorExiste(pos);

      if(resultado === -1){ // devedor não encontrado

        this.carregaDevedor(this.devedor);// colocando o valor do form no objeto

        this.devedor.idTitulo = this.titulo.idTitulo;

        if(this.alterandoTitulo){
          
          if(this.devedor.idTituloDevedor !== null){
          
            await this.atualizaTituloDevedor(this.devedor).then(()=>{
              this.devedores[pos] = this.devedor;
              this.cancelar();
              this.btnAdd = false;
            });
          }

        }else{
          this.devedores[pos] = this.devedor;
          this.cancelar();
          this.btnAdd = false;
        }
        
      }else{
        this.mensagem('Já existe devedor com esse documento!');
        console.log('Já existe devedor com esse documento!');
      }
    }else{ //QUANDO O USUÁRIO ESTIVER CRIANDO UM DEVEDOR

      const resultado: number = this.devedorExiste(-1);

      if(resultado === -1){ // devedor não encontrado

        this.carregaDevedor(this.devedor);// colocando o valor do form no objeto

        this.devedor.idTitulo = this.titulo.idTitulo;

        if(this.alterandoTitulo){

          this.devedor.idTitulo = this.titulo.idTitulo;

          await this.criarTituloDevedor().then(()=>{
            this.devedores.push(this.devedor);
            this.cancelar();
            this.btnAdd = false;
          });
        }else{
          this.devedores.push(this.devedor);
          this.cancelar();
          this.btnAdd = false;
        }

      }else{
        this.mensagem('Já existe devedor com esse documento!');
        console.log('Já existe devedor com esse documento!');
      }
    }

  }

//Validando campos devedor e chamando o metodo inserirDevedor
  validaAlterarDevedor() {
    let resultado = this.devedorExiste(-1);

    if (this.validaQtdMaxDevedores() && this.validarDevedor()) {
      this.inserirDevedor(resultado);
    }
  }
    
  validaAddDevedor() {
    this.copiaPDevedor();
    if (this.validaQtdMaxDevedores() && this.validarDevedor()) {
      this.inserirDevedor();
    }
  }
  
  //verificando se o usuários está criando ou alterando um devedor e chamando validação
  criarOuAlterar(devedor: TituloDevedor) {
    // this.mostraForm = true;
    if (this.criandoDevedor) {
      if (this.alterando) {
        console.log(devedor.idTituloDevedor);
        this.devedor = this.fGroupDevedores.value;
        this.devedor.idTituloDevedor = devedor.idTituloDevedor;
        this.validaAlterarDevedor();
        console.log('está Alterando Devedor');
      } else {
        this.validaAddDevedor();
        console.log('está criando novo Devedor');
      }
    }
    // this.criandoDevedor = true;
    this.buttonAdd = true;
 
  }

  copiaPDevedor() {
    this.devedor = this.fGroupDevedores.value;
  }

  atualizaTipoDevedor() {
    const devedor: any = this.fGroupDevedores.value;
    console.log(devedor);
    if (devedor.tipoDocumento === 'CNPJ') {
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

    if (this.titulo.endosso !== 'S') {
      this.endosso = true;
    } else {
      this.endosso = false;
    }
  }

  verificaCheque() {
    console.log(this.titulo);
    const titulo: any = this.fGroupTitulo.value;
    this.titulo.siglaEspecie = titulo.siglaEspecie;
    console.log(this.titulo.siglaEspecie);
    if (this.titulo.siglaEspecie === "CH") {
      this.titulo.vencimento = "À vista";
      this.fGroupTitulo.controls['alinea'].enable();
    } else {
      this.titulo.vencimento = "";
      this.fGroupTitulo.controls['vencimento'].enable();
      this.fGroupTitulo.controls['alinea'].reset();
    }
    this.fGroupTitulo.controls['vencimento'].setValue(this.titulo.vencimento);
  }

  verificaTipoDevedor() {
    this.devedor = this.fGroupDevedores.value;
    if (this.devedor.tipoDocumento === 'CNPJ') {
      this.fGroupDevedores.controls['numeroDocumento2'].reset();
      this.fGroupDevedores.controls['numeroDocumento2'].disable();
      this.devedor.numeroDocumento2 = null;
      this.devedor.tipoDocumento2 = null;
      this.fGroupDevedores.controls['numeroDocumento2'].reset();

    } else {
      this.fGroupDevedores.controls['tipoDocumento2'].enable();
    }
  }

  async imprimirConteudo(titulo) {
    await this.tituloDevedorService.buscarDevedoresTitulo(titulo.idTitulo).then((data) => {
      data.forEach((res) => {
        this.devedoresPrint.push(res.data());
        
        setTimeout(() => {
          this.funcoesService.ImprimirConteudoDiv(this.divDeclaracao);
        }, 500);
      });
    }).catch((error) => {
      console.log(error);
    });
  }  

  async buscaDevedor() {
    const devedorId: Devedor = this.fGroupDevedores.value;
    console.log(devedorId.numeroDocumento)
    if (devedorId.numeroDocumento !== null && devedorId.numeroDocumento !== undefined) {

      await this.devedorService.buscaDevedorDocumentoEmpresa(devedorId.numeroDocumento, this.idEmpresa).then(async (data) => {
        if (data.size > 0 && data !== undefined) {

          const idDevedor = data.docs[0].id;
          this.devedor = data.docs[0].data();
          await this.devedorService.buscarEnderecoDevedor(idDevedor).then(data => {
            
            // Encontrou mais de um endereço abre o modal para escolher um deles
            if (data.size > 1) {
              for (let i = 0; i < data.size; i++) {
                let enderecoEncontrado = data.docs[0].data();
                const endereco: Endereco = enderecoEncontrado;
                endereco.estado = enderecoEncontrado.uf;
                endereco.cidade = enderecoEncontrado.localidade;
                endereco.endereco = enderecoEncontrado.logradouro;

                console.log(data.docs[i].data());
                this.enderecos.push(endereco);
              }
              this.abrirModal();
              console.log(this.enderecos);
            } else { // encontrou apenas um endereco passa o endereço para o endereço

              let enderecoEncontrado = data.docs[0].data();
              const endereco: Endereco = enderecoEncontrado;
              endereco.estado = enderecoEncontrado.uf;
              endereco.cidade = enderecoEncontrado.localidade;
              endereco.endereco = enderecoEncontrado.logradouro;
              console.log(data.docs[0].data());
              this.copiaEnderecoPDevedor(endereco);
            }
          }).catch((error) => {
            console.log(error);
          });
        } else {
          console.log('Devedor não Encontrado!');
        }
      }).catch((error) => {
        console.log(error, 'dado não encontrado');
      });

      this.fGroupDevedores.patchValue(this.devedor);
    } else {
      console.log('O documento do devedor está vazio!');
    }

  }

  copiaEnderecoPDevedor(endereco: Endereco) {
    this.devedor.endereco = endereco.endereco;
    this.devedor.estado = endereco.estado;
    this.devedor.cidade = endereco.cidade;
    this.devedor.complemento = endereco.complemento;
    this.devedor.numero = endereco.numero;
    this.devedor.bairro = endereco.bairro;
    this.devedor.cep = endereco.cep;
    console.log(endereco.estado);
  }

  abrirModal() {
    const initialState = {
      devedor: this.devedor,
      enderecos: this.enderecos,
      title: 'Modal with component'
    }

    this.modalService.show(DigitacaoSubFormularioComponent, { initialState })
    this.enderecos = [];
  }

  async cancelar() {
    this.criandoDevedor = false;
    this.alterando = false;
    this.devSubmitted = false;
        // this.devedor = null;
    // this.devedor.tipoDocumento = "CPF";
    // this.devedor.numeroDocumento = null;
    this.fGroupDevedores.reset();
    this.fGroupDevedores.controls['tipoDocumento'].setValue('CPF');
    this.buttonAdd = false;
    console.log(this.devedor.tipoDocumento);
  

  }

  carregaDevedor(devedor: Devedor) {
    this.btnAdd = false; //teste
    this.alterando = true;
    this.mostraForm = true;
    this.criandoDevedor = true;
    this.fGroupDevedores.patchValue(devedor);
    this.devedor = devedor;
    console.log(this.mostraForm);
  }

  buscarCEPDevedor() {
    this.cepService.getCEPCorreios(this.fGroupDevedores.controls['cep'].value).then(res => {
      this.fGroupDevedores.controls['endereco'].setValue(res.logradouro);
      this.fGroupDevedores.controls['bairro'].setValue(res.bairro);
      this.fGroupDevedores.controls['cidade'].setValue(res.localidade);
      this.fGroupDevedores.controls['estado'].setValue(res.uf);
    });
  }

  apagarDevedor(numeroDocumento: string) {
    this.devedor.numeroDocumento = numeroDocumento;
    console.log('documento desejado Apagar',numeroDocumento);
    let resultado: number = this.devedorExiste(-1);

    if (resultado !== -1) {
      this.tituloDevedorService.apagarTituloDevedor(this.devedores[resultado].idTituloDevedor).then(()=>{
        this.devedores.splice(resultado, 1);
        this.cancelar();
        this.devedor = {};
      }).catch((error)=>{
        console.log(error);
      });

    }
  }

  valorTotalTitulo(): number {
    let saldo: number = 0; console.log(saldo);
    for (let i = 0; i < this.titulos.length; i++) {
      saldo = saldo + this.titulos[i].valorProtesto;
      console.log(saldo);
    }
    return saldo;
  }

  qtdTitulos(): number {
    let contador: number
    for (let i = 0; i <= this.titulos.length; i++) {
      contador = i;
    }
    return contador;
  }

  encontraTitulo(titulo: Titulo, posicao: number): number {
    let resultado:number = -1;

    if (posicao === -1) {
      for (let i = 0; i < this.titulos.length; i++) {

        if (
          this.titulos[i].dataEmissao === titulo.dataEmissao &&
          this.titulos[i].siglaEspecie === titulo.siglaEspecie &&
          this.titulos[i].numeroTitulo === titulo.numeroTitulo &&
          this.titulos[i].valorProtesto === titulo.valorProtesto) {

          console.log('Título já existe');
          console.log('encontrou na posicao:', i);
          console.log(this.devedores.length);
          console.log(posicao, this.posicaoAlteracaoTitulo);
          resultado = i;
          return resultado;
        }
      }

      return resultado;
    } else {

      for (let i = 0; i < this.titulos.length; i++) {

        if (
          this.titulos[i].dataEmissao === titulo.dataEmissao &&
          this.titulos[i].siglaEspecie === titulo.siglaEspecie &&
          this.titulos[i].numeroTitulo === titulo.numeroTitulo &&
          this.titulos[i].valorProtesto === titulo.valorProtesto &&
          i !== posicao) {

         console.log('encontrou na posicao:', i, posicao, this.posicaoAlteracaoTitulo);
         resultado = i;
          return resultado;
        }
      }

      return resultado;
    }
  }

  validaTitulo(): boolean {
    if (this.fGroupTitulo.valid) {
      this.submitted = false;
      return true;
    } else {
      return false;
    }
  }

  criaEndossante() {
    let endossante: any = {};
    endossante.endossante = this.fGroupTitulo.controls['endossante'].value;
    endossante.tipoDocumentoEndossante = this.fGroupTitulo.controls['tipoDocumentoEndossante'].value;
    endossante.documentoEndossante = this.fGroupTitulo.controls['documentoEndossante'].value;

    return endossante;
  }

  limpaTitulo() {
    this.fGroupTitulo.reset();
    this.carregaFavorecido();
  }

  // PEGA O TÍTULO DO ARRAY NO HTML E MUDA O ESTADO PARA ALTERANDO TÍTULO
  async carregaTitulo(titulo: Titulo) {
    this.fGroupTitulo.patchValue(titulo);
    this.titulo = titulo;
    this.criandoDevedor = false;
    this.alterandoTitulo = true;
    console.log(this.titulo);
    await this.buscaDevedoresTitulo(titulo.idTitulo).then(() => {
      console.log(this.devedores);
    });

  }

  // BUSCA OS DEVEDORES DO TÍTULO ATRAVÉS DO ID DO TÍTULO
  async buscaDevedoresTitulo(idTitulo: string) {
    console.log(idTitulo);
    await this.tituloDevedorService.buscarDevedoresTitulo(idTitulo).then((data) => {
      this.devedores = [];
      for (let i = 0; i < data.size; i++) {
        let devedor: TituloDevedor = data.docs[i].data();
        devedor.idTituloDevedor = data.docs[i].id;
        console.log(devedor.idTitulo);
        this.devedores.push(devedor);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  //ELIMINA O TÍTULO E ATUALIZA OS DADOS DO LOTE NO BANCO DE DADOS
  async apagarTitulo(titulo: Titulo) {
    console.log(titulo);

    console.log(titulo.idTitulo);

    await this.tituloService.apagarTitulo(titulo.idTitulo).then(async () => {
      this.devedores = [];
      this.fGroupTitulo.reset();
      this.titulo = {};
      this.titulos.splice(this.encontraTitulo(titulo, -1), 1);
      this.atualizaDadosLote();
      await this.loteService.atualizaLote(this.idLote, this.lote).then(() => {
        console.log('Lote apagado com sucesso e atualizado com sucesso');
      });

    }).catch((error) => {
      console.log(error);
    });
  }

  // BUSCA O TÍTULO NO ARRAY E SEUS DEVEDORES NO BANCO DE DADOS
  async carregarTitulo(titulo: Titulo) {
    await this.carregaTitulo(titulo);

    this.titulo = titulo;
    this.alterandoTitulo = true;

    // mostrando a posição de alteração do array
    this.posicaoAlteracaoTitulo = this.encontraTitulo(titulo, -1);
    console.log(this.posicaoAlteracaoTitulo);
  }

  // FAZ OS TESTES DE VALIDADE DO TÍTULO E CASO VÁLIDO ENVIA PARA O BANCO DE DADOS
  async salvarTitulo() {
    this.titulo = this.fGroupTitulo.value;
    //this.submitted = true;
    this.titulo.idLote = this.idLote;
    console.log(this.posicaoAlteracaoTitulo);

    // VALIDANDO O TÍTULO E VERIFICANDO SE EXISTE ALGUM DEVEDOR
    if (this.validaTitulo() && this.devedores.length > 0) {      
      // VERIFICANDO SE ESTÁ ALTERANDO UM TÍTULO
      if (this.alterandoTitulo) {

        if(this.encontraTitulo(this.titulo, this.posicaoAlteracaoTitulo) === -1){
          
          this.titulos[this.posicaoAlteracaoTitulo] = this.titulo;

          await this.tituloService.atualizaTitulo(this.titulo.idTitulo, this.titulo).then(async () => {
            this.atualizaDadosLote();
            
            await this.loteService.atualizaLote(this.idLote, this.lote).then(() => {

              console.log('lote Atualizado!');
              this.alterandoTitulo = false;
              this.limpaTitulo();
          
              this.limpaDevedores();
              this.criandoDevedor = false;
            }).catch(error => {
              console.log(error);
            });

          }).catch((error) => {
            console.log(error);
          });

        } else {

          this.mensagem('Título já existe!');
          console.log(this.devedores.length);
        }
          
      } else {

        console.log(this.devedores.length);
        if(this.encontraTitulo(this.titulo, -1) === -1 ) {
          
          await this.tituloService.criaTitulo(this.titulo).then(async (docRefTitulo) => {
            this.titulo.idTitulo = docRefTitulo.id;
            this.titulos.push(this.titulo);
            for (let i = 0; i < this.devedores.length; i++) {

              this.devedores[i].idTitulo = docRefTitulo.id;
              
              await this.tituloDevedorService.criarTituloDevedor(this.devedores[i]).
              then((docRefDevedor) => {
                this.devedores[i].idTituloDevedor = docRefDevedor.id;
                console.log('Criado com sucesso!');
                this.limpaDevedores();
                this.limpaTitulo();
              }).catch((error)=>{

                console.log(error);
              });
              this.atualizaDadosLote();
              await this.loteService.atualizaLote(this.idLote, this.lote)
              .then(()=>{
                console.log('Lote atualizado com sucesso!');
              })
              .catch((error)=>{
                console.log(error);
              })
            }
          });

        }else{
          console.log('Título Já existe');
          this.mensagem('Título já existe!');
          console.log(this.devedores.length);
        }

      }
    } else {

      console.log('Formulário Titulo inválido!');
      console.log(this.titulo.siglaEspecie, this.fGroupTitulo.controls['siglaEspecie'].valid);
      console.log(this.titulo.tipoProtesto, this.fGroupTitulo.controls['tipoProtesto'].valid);
      console.log(this.titulo.pracaPagamento, this.fGroupTitulo.controls['pracaPagamento'].valid);
      console.log(this.titulo.dataEmissao, this.fGroupTitulo.controls['dataEmissao'].valid);
      console.log(this.titulo.vencimento, this.fGroupTitulo.controls['vencimento'].valid);
      console.log(this.titulo.numeroTitulo, this.fGroupTitulo.controls['numeroTitulo'].valid);
      console.log(this.titulo.alinea, this.fGroupTitulo.controls['alinea'].valid);
      console.log(this.titulo.valorOriginalTitulo, this.fGroupTitulo.controls['valorOriginalTitulo'].valid);
      console.log(this.titulo.valorProtesto, this.fGroupTitulo.controls['valorProtesto'].valid);
      console.log(this.titulo.tipoProtesto, this.fGroupTitulo.controls['tipoProtesto'].valid);
      console.log(this.titulo.valorOriginalTitulo, this.fGroupTitulo.controls['valorOriginalTitulo'].valid);
      console.log(this.titulo.endosso, this.fGroupTitulo.controls['endosso'].valid);
      console.log(this.titulo.favorecido, this.fGroupTitulo.controls['favorecido'].valid);
      console.log(this.titulo.endossante, this.fGroupTitulo.controls['endossante'].valid);
      console.log(this.titulo.tipoDocumentoEndossante, this.fGroupTitulo.controls['tipoDocumentoEndossante'].valid);
      console.log(this.titulo.documentoEndossante, this.fGroupTitulo.controls['documentoEndossante'].valid);

    }

    
  }

  limpaDevedores() {
    this.fGroupDevedores.reset();
    this.devedores = [];
  }

  atualizaDadosLote() {
    this.lote.qtdTitulo = this.qtdTitulos();
    this.lote.valorTotalTitulo = this.valorTotalTitulo();
  }

  cancelarAlteracaoTitulo() {
    this.devedores = [];
    this.devedor = {};
    this.fGroupTitulo.reset();
    this.fGroupDevedores.reset();
  }

  debtError() {
    Swal.fire({
      icon: 'error',
      title: 'Você não adicionou nenhum devedor!',
    })

  }

  debtExist() {
    Swal.fire({
      icon: 'error',
      title: 'Devedor já existe!',
    })

  }

  mensagem(msg, icone?) {

      icone !== undefined ?  
      Swal.fire({ icon: icone, title:msg}) :
      Swal.fire({ icon: 'error', title:msg});
    
  }

  getTitulo() {
    this.subscribe = this.route.data.subscribe((data: { titulo: any }) => {
      console.log(data.titulo);

      this.titulo = data.titulo;
      this.devedores.push(...data.titulo.devedores);

      if (data.titulo.representante)
        this.representante = data.titulo.representante;
    });  
  }
} 