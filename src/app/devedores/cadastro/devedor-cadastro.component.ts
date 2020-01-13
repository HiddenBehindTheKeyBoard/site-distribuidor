import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { utilsBr } from 'js-brasil';

import { NgBrazilValidators } from 'ng-brazil';

import { BsModalRef } from 'ngx-bootstrap/modal';

import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Devedor } from 'src/app/interfaces/Devedor';
import { Email } from 'src/app/interfaces/Email';
import { Endereco } from 'src/app/interfaces/Endereco';
import { Telefone } from 'src/app/interfaces/Telefone';
import { ArraysService } from 'src/app/services/arrays.service';
import { CepService } from 'src/app/services/cep.service';
import { DevedorService } from 'src/app/services/devedor.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './devedor-cadastro.component.html',
  styleUrls: ['./devedor-cadastro.component.scss']
})
export class DevedorCadastroComponent implements OnInit {
  public MASKS = utilsBr.MASKS;

  title: string;
  closeBtnName: string;
  list: any[] = [];
  invalido = 'is-invalid';

  submitted = false;
  submittedEnd = false;


  // DADOS ENVIADOS DA CONSULTA DE DEVEDORES
  devedorParametro:Devedor;

  alterandoDevedor:boolean;



  private idEmpresa = LoginService.idEmpresa;
  private idUsuario = this.fireAuth.auth.currentUser.uid;

  public mostrartableadress: boolean = false;
  public mostrartablephone: boolean = false;
  public mostrartableemail: boolean = false;

  public alterando: boolean = false;

  public mostrarButtonAdd: boolean = true;
  public mostrarButtonAlt: boolean = false;

  public fGroupDevedor: FormGroup;
  public fGroupEndereco: FormGroup;
  public fGroupTelefone: FormGroup;
  public fGroupEmail: FormGroup;

  //teste
  private devedor: Devedor = {};

  public enderecos = new Array<Endereco>();
  private endereco: Endereco = {};

  public telefones = new Array<Telefone>();
  private telefone: Telefone = {};

  public emails = new Array<Email>();
  private email: Email = {};

  public estados = new Array<string>();

  private posAlteracaoEndereco: number;
  private posAlteracaoEmail: number;
  private posAlteracaoTelefone: number;
  public CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    public bsModalRef: BsModalRef,
    private cepService: CepService,
    private formBuilder: FormBuilder,
    private arraysService: ArraysService,
    // private fireStore: AngularFirestore,
    private devedorService: DevedorService,
    private fireAuth: AngularFireAuth,
    private router:Router

  ) {

    //DEVEDOR
    this.fGroupDevedor = this.formBuilder.group({
      'idUsuario': [this.devedor.idUsuario],
      'idDevedor': [this.devedor.idDevedor],
      'idEmpresa': [this.devedor.idEmpresa],

      'tipoDocumento': [this.devedor.tipoDocumento, Validators.compose([
        Validators.required,
      ])],
      'numeroDocumento': [this.devedor.numeroDocumento, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        NgBrazilValidators.cpf, //teste
      ])],
      'nomeDevedor': [this.devedor.nomeDevedor, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'tipoDocumento2': [this.devedor.tipoDocumento2],
      'numeroDocumento2': [this.devedor.numeroDocumento2],
    });

    //ENDEREÇO
    this.fGroupEndereco = this.formBuilder.group({
      'idEndereco': [this.endereco.idEndereco],
      'idDevedor': [this.endereco.idDevedor],

      'logradouro': [this.endereco.endereco, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'bairro': [this.endereco.bairro, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'localidade': [this.endereco.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'complemento': [this.endereco.complemento],
      'uf': [this.endereco.estado, Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      'cep': [this.endereco.cep, Validators.compose([
        Validators.required,
        Validators.minLength(9),
      ])],
      'numero': [this.endereco.numero, Validators.compose([
        Validators.required,
      ])],
    });

    //TELEFONE
    this.fGroupTelefone = this.formBuilder.group({
      'idTelefone': [this.telefone.idTelefone],
      'idDevedor': [this.telefone.idDevedor],
      'telefone': [this.telefone.telefone],
    });

    //EMAIL
    this.fGroupEmail = this.formBuilder.group({
      'idDevedor': [this.email.idDevedor],
      'idEmail': [this.email.idEmail, Validators.compose([
        Validators.required
      ])],
      'email': [this.email.email],
    });

    this.carregaEstados(this.estados);

    setTimeout(() => {
      this.alterando = this.alterandoDevedor;
      if(this.alterandoDevedor){
        this.devedor = this.devedorParametro;
        this.fGroupDevedor.patchValue(this.devedor);
        this.carregaEnderecosDevedor();
        this.carregarEmailsDevedor();
        this.carregaTelefonesDevedor();
      }
    }, 100);

  }

  async carregaEnderecosDevedor() {
    await this.devedorService.buscarEnderecoDevedor(this.devedor.idDevedor)
    .then((data)=> {
      console.log(data.size, 'size');
      for(let i = 0; i < data.size; i++) {
        
        let endereco:Endereco = data.docs[i].data();
        this.enderecos[i] = endereco;
        this.enderecos[i].idEndereco = data.docs[i].id;
        console.log(this.enderecos[i]);
      }
     
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  async carregarEmailsDevedor() {
    await this.devedorService.buscarEmailDevedor(this.devedor.idDevedor)
      .then((data)=>{
        for(let  i = 0; i < data.size; i++) {
          this.emails[i] = data.docs[i].data();
          this.emails[i].idEmail = data.docs[i].id;
        }
      }).catch((error)=>{
        console.log(error);
      })
  }

  async carregaTelefonesDevedor() {
    await this.devedorService.buscarTelefoneDevedor(this.devedor.idDevedor).
    then((data)=>{
      for(let i = 0; i < data.size;  i++) {
        this.telefones[i] = data.docs[i].data();
        this.telefones[i].idTelefone = data.docs[i].id;
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  carregaEstados(estados: Array<string>) {
    this.arraysService.carregaEstado(estados);
  }

  // VERIFICAÇÃO DE DADOS
  copiaPEndereco() {
    this.endereco = this.fGroupEndereco.value;
  }

  copiaPTelefone() {
    this.telefone = this.fGroupTelefone.value;
  }

  copiaPEmail() {
    this.email = this.fGroupEmail.value;
  }

  // ENVIO DO FORM
  onSubmitDev() {
    this.submitted = true;

    if (this.fGroupDevedor.valid) {
      if (this.enderecos.length == 0) {
        this.mensagem('É necessário um endereço para o devedor!');
        return;
      }

      this.validaDevedor();
    }
  }

  async validaDevedor() {
    let devedorRepetido: Devedor = {};

    this.devedor = this.fGroupDevedor.value;
    this.devedor.idEmpresa = this.idEmpresa;
    this.devedor.idUsuario = this.idUsuario;
    
    if(this.alterandoDevedor){
      await this.devedorService.atualizaDevedor(this.devedor)
        .then(() => {
          this.confirmSuccess();
        })
        .catch((error) => {
          console.log(error);
        });
    }else {
      await this.devedorService.buscaDevedorDocumentoEmpresa(this.devedor.numeroDocumento, 
        this.devedor.idEmpresa).then((data) => {    
        if (data.docs.length > 0) {        
          devedorRepetido = data.docs[0].data();
        }      
      });
  
      if (devedorRepetido.idDevedor) {
        this.mensagem('O devedor já existe, adicione um novo!');
        return;
      }
      console.log(this.enderecos, this.telefones, this.emails, this.devedor)
      await this.devedorService.criarDevedor(this.devedor)
        .then(async (docRef) => {
          const idDevedor = docRef.id;

          for (let i = 0; i < this.enderecos.length; i++) {
            this.enderecos[i].idDevedor = idDevedor;

            await this.devedorService.criarEnderecoDevedor(this.enderecos[i]).then(() => {
            }).catch((error) => {
            });
          }

          for (let i = 0; i < this.telefones.length; i++) {
            this.telefones[i].idDevedor = idDevedor;
            await this.devedorService.criarTelefoneDevedor(this.telefones[i]).then(() => {
            }).catch((error) => {
            });
          }

          for (let i = 0; i < this.emails.length; i++) {
            this.emails[i].idDevedor = idDevedor
            await this.devedorService.criarEmailDevedor(this.emails[i]).then(() => {
            }).catch((error) => {
            });
          }
        }).catch((error) => {
          console.log(error);
        }).finally(()=>{
          this.confirmSuccess();
        })
    }
      
  }

  get f() { return this.fGroupDevedor.controls; }
  get fend() { return this.fGroupEndereco.controls; }


  ngOnInit() {
    this.fGroupDevedor.controls['tipoDocumento'].setValue('CPF');
  }

  buscarCep() {
    this.cepService.getCEPCorreios(this.fGroupEndereco.controls['cep'].value).then(res => {
      this.fGroupEndereco.controls['logradouro'].setValue(res.logradouro);
      this.fGroupEndereco.controls['bairro'].setValue(res.bairro);
      this.fGroupEndereco.controls['localidade'].setValue(res.localidade);
      this.fGroupEndereco.controls['uf'].setValue(res.uf);
    });

  }  

  mensagem(title, icon?){
    icon !== undefined ? 
    Swal.fire({title:title, icon:icon}) : 
    Swal.fire({title:title, icon:'error'});
  }

  confirmSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Dados cadastrados com sucesso!',
      showConfirmButton: true,
    }).then(()=>{
      this.router.navigate(['/devedores']);
    })

  }

  alteraValidator(event) {
    this.fGroupDevedor.controls['numeroDocumento'].setValue('');

    let tipo = event.target.value;
    if (tipo == 'CPF') {
      this.fGroupDevedor.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cpf
        ]));
    } else {
      this.fGroupDevedor.controls['numeroDocumento']
        .setValidators(Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          NgBrazilValidators.cnpj
        ]));
    }
  }


  //ENDEREÇO

  // ok
  enderecoExiste(endereco: Endereco, pos:number): number {
    let posicao: number = -1;

    if(pos === -1){
      for( let  i = 0; i < this.enderecos.length; i++){
        if( endereco.cep == this.enderecos[i].cep &&
            endereco.bairro == this.enderecos[i].bairro &&
            endereco.endereco == this.enderecos[i].endereco &&
            endereco.numero == this.enderecos[i].numero) {
          console.log('endereco');

          posicao = i;
        }
      }
      return posicao;
    }else{
      for( let  i = 0; i < this.enderecos.length; i++){
        if( endereco.cep == this.enderecos[i].cep &&
            endereco.bairro == this.enderecos[i].bairro &&
            endereco.endereco == this.enderecos[i].endereco &&
            endereco.numero == this.enderecos[i].numero && 
            i != this.posAlteracaoEndereco) {
          console.log('endereco');

          posicao = i;
        }
      }
      return posicao;
    }
  }
  // ok
  editarEndereco(pEndereco: Endereco) {
    this.fGroupEndereco.patchValue(pEndereco);
    this.endereco = pEndereco;
    this.mostrarButtonAdd = false;
    this.mostrarButtonAlt = true;
    this.posAlteracaoEndereco = this.enderecoExiste(pEndereco, -1);
  }
  // ok
  async salvarEnderecoEditado() {
    this.endereco = this.fGroupEndereco.value;

    if(this.enderecoExiste(this.endereco, this.posAlteracaoEndereco) === -1) {

      if(this.alterandoDevedor) { // CASO O USUÁRIO ESTEJA ATUALIZANDO OS DEVEDORES !!!
        await this.devedorService.atualizarEnderecoDevedor(this.endereco).then(()=>{

          this.enderecos[this.posAlteracaoEndereco] = this.endereco;
          this.limparEndereco();
          this.mostrarButtonAdd = true;
          this.mostrarButtonAlt = false;
          this.submitted = false;
          this.submittedEnd = false;

        });
      }else { // CASO O USUÁRIO AINDA NÃO TENHA CRIADO NENHUM DEVEDOR !!!

        this.enderecos[this.posAlteracaoEndereco] = this.endereco;
        this.limparEndereco();
        this.mostrarButtonAdd = true;
        this.mostrarButtonAlt = false;
        this.submitted = false;
        this.submittedEnd = false;
      }
    } else {
      this.mensagem('Endereço já existe !');
    }
  }

  //ok
  async excluirEndereco(endereco: Endereco) {
    const pos = this.enderecoExiste(endereco, -1);

    if(this.alterandoDevedor) { 
      await this.devedorService.apagarEnderecoDevedor(this.enderecos[pos].idEndereco)
        .then( ()=> {
          this.enderecos.splice(pos, 1);
        }).catch((error) => {
          console.log(error);
        });
    }else{
      this.enderecos.splice(pos, 1);
    }
  }

  //ok
  async adicionarEndereco() {

    this.endereco = this.fGroupEndereco.value;

    this.submittedEnd = true;

    if (this.fGroupEndereco.valid) {

      if (this.enderecoExiste(this.endereco,-1) == -1) {

        if (this.alterandoDevedor) {

          this.mostrartableadress = true;
          
          this.endereco.idDevedor  = this.devedor.idDevedor;
          
          console.log(' O endereço não existe! ');
          await this.devedorService.criarEnderecoDevedor(this.endereco).then((data)=>{
            this.endereco.idEndereco = data.id;
            this.enderecos.push(this.endereco);
            this.submittedEnd = false;
            this.limparEndereco();
          });

        }else{
          this.enderecos.push(this.endereco);
          this.submittedEnd = false;
          this.limparEndereco();
        }

      }else{
        this.mensagem('O endereço já existe, adicione um novo!');
      }

    }
  }

  limparEndereco() {
    this.fGroupEndereco.reset();
  }



  // TELEFONE
  //ok
  telefoneExiste(telefone: Telefone, pos:number): number {
    let posicao: number = -1;

    if(pos === -1){
      
      for( let  i = 0; i < this.telefones.length; i++){

        if(telefone.telefone === this.telefones[i].telefone) {
          posicao = i;
        }
      }
      return posicao;

    }else{

      for( let  i = 0; i < this.telefones.length; i++){
        
        if( telefone.telefone === this.telefones[i].telefone && pos != i) {
          posicao = i;
        }

      }
      
      return posicao;
    }
  }

  //ok
  editarTelefone(pTelefone: Telefone) {
    
    this.fGroupTelefone.patchValue(pTelefone);
    this.telefone = pTelefone;
    this.mostrarButtonAdd = false;
    this.mostrarButtonAlt = true;
    
    console.log(this.telefone);

    this.posAlteracaoTelefone = this.telefoneExiste(pTelefone, -1);
    console.log(this.posAlteracaoTelefone);
  }

  //ok
  async salvarTelefoneEditado() {
    this.telefone = this.fGroupTelefone.value;

    if(this.telefoneExiste(this.telefone, this.posAlteracaoTelefone) === -1){
      
      if(this.alterandoDevedor) {
        
        this.telefone.idDevedor = this.devedor.idDevedor;

        await this.devedorService.criarTelefoneDevedor(this.telefone)
          .then((data) => {

            this.telefones[this.posAlteracaoTelefone] = this.telefone;

            this.limparTelefone();
            this.mostrarButtonAdd = true;
            this.mostrarButtonAlt = false;
            this.submitted = false;
            this.submittedEnd = false;
          })
          .catch((error) => {
            console.log(error);
          });

      }else {
        
        this.telefones[this.posAlteracaoTelefone] = this.telefone;

        this.limparTelefone();
        this.mostrarButtonAdd = true;
        this.mostrarButtonAlt = false;
        this.submitted = false;
        this.submittedEnd = false;
      }

    }else{
      this.mensagem('Telefone já existe!');
    }
  }

  //ok
  excluirTelefone(telefone: Telefone) {

    const pos = this.telefoneExiste(telefone, -1);

    if(this.alterandoDevedor){
      this.devedorService.apagarTelefone(telefone.idTelefone)
        .then(() => {
          this.telefones.splice(pos, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      this.telefones.splice(pos, 1);
    }
  }

  //ok
  async adicionarTelefone() {
    this.telefone = this.fGroupTelefone.value;

   

    if (this.telefoneExiste(this.telefone, -1) == -1) {

      if(this.alterandoDevedor) {

        this.telefone.idDevedor = this.devedor.idDevedor;

        await this.devedorService.criarTelefoneDevedor(this.telefone)
          .then((docRefTelefone) => {
            
            this.telefone.idTelefone = docRefTelefone.id;
            this.mostrartablephone = true;
            this.telefones.push(this.telefone);
            this.limparTelefone();

          })
          .catch((error) => {
            console.log(error);
          });
      }else{


        this.mostrartablephone = true;
        this.telefones.push(this.telefone);
        this.limparTelefone();
      }

    }else{
      this.mensagem('O telefone já existe, adicione um novo!');
    }
  }

  limparTelefone() {
    this.fGroupTelefone.reset();
  }

  // EMAIL
  //ok
  emailExiste(correio: Email, pos: number): number {
    let posicao: number = -1;

    if(pos != -1) {
      for(let i = 0; i < this.emails.length; i++) {
        if(correio.email === this.emails[i].email) {
          posicao = i;
        }
      }

    }else{
      for(let i = 0; i < this.emails.length; i++) {
        if(correio.email === this.emails[i].email && pos != i) {
          posicao = i;
        }
      }
    }

    return posicao;
  }
  //ok
  editarEmail(pEmail: Email) {
    this.fGroupEmail.patchValue(pEmail);
    this.email = pEmail;
    this.mostrarButtonAdd = false;
    this.mostrarButtonAlt = true;
    this.posAlteracaoEmail = this.emailExiste(pEmail, -1);
  }

  //ok
  async salvarEmailEditado() {
    this.email = this.fGroupEmail.value;

    if(this.emailExiste(this.email, this.posAlteracaoEmail) == -1){

      if(this.alterandoDevedor) {

        await this.devedorService.atualizarEmailDevedor(this.email)
          .then(()=>{
            this.emails[this.posAlteracaoEmail] = this.email;
            this.limparEmail();
            this.mostrarButtonAdd = true;
            this.mostrarButtonAlt = false;
            this.submitted = false;
            this.submittedEnd = false;
          })
          .catch((error)=>{
            console.log(error);
          });

      }else {
        this.emails[this.posAlteracaoEmail] = this.email;
        this.limparEmail();
        this.mostrarButtonAdd = true;
        this.mostrarButtonAlt = false;
        this.submitted = false;
        this.submittedEnd = false;
      }
        
    }else{
      this.mensagem('E-mail que está tentando inserir já existe!');
    }
  }
  //ok
  excluirEmail(email: Email) {
    let pos = this.emailExiste(email, -1);

    if(this.alterandoDevedor) {
      this.devedorService.apagarEmailDevedor(this.email.idEmail)
        .then(()=>{
          this.emails.splice(pos, 1);
        }).catch((error) =>{
            console.log(error);
        });

    }else{
      this.emails.splice(pos, 1);
    }
  }

  //ok
  async adicionarEmail() {
    this.email = this.fGroupEmail.value;
  
    if (this.emailExiste(this.email, -1) == -1) {

      if(this.alterandoDevedor) {
        
        this.email.idDevedor = this.devedor.idDevedor;
        
        await this.devedorService.criarEmailDevedor(this.email)
          .then((docRefEmail) => {
            this.email.idEmail = docRefEmail.id;
            this.mostrartableemail = true;
            this.emails.push(this.email);
            this.limparEmail();
            console.log(this.emails);
          });
      }else{
        this.mostrartableemail = true;
        this.emails.push(this.email);
        this.limparEmail();
        console.log(this.emails);
      }

    }else {

      this.mensagem('O e-mail já existe, adicione um novo!');
    }

  }

  limparEmail() {
    this.fGroupEmail.reset();
  }


    //EXCLUIR ENDEREÇO
  excluirAdress(endereco) {

    Swal.fire({
      title: 'Deseja realmente excluir o endereço?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#808080',
      confirmButtonText: 'Continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this.excluirEndereco(endereco);
      }
    })
  }


  //EXCLUIR TELEFONE
  excluirTel(telefone) {

    Swal.fire({
      title: 'Deseja realmente excluir o telefone?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#808080',
      confirmButtonText: 'Continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this.excluirTelefone(telefone);
      }
    })
  }

  //EXCLUIR E-MAIL
  excluirAdressEmail(email) {

    Swal.fire({
      title: 'Deseja realmente excluir o email?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#808080',
      confirmButtonText: 'Continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this.excluirEmail(email);
      }
    })
  }
  



}
