function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adesao/adesao.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adesao/adesao.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdesaoAdesaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TERMO DE ADESAO -->\n<section class=\"adesao\">\n  <h2>Termo de Adesão ao Sistema</h2>\n  <div class=\"termo_adesao\" #divTermo style=\"line-height: 1.4em;\">\n    <h3 style=\"text-align: center; font-size: 24pt;\">Termo de Adesão</h3>\n    <p>Pelo presente termo, <strong class=\"upper-text\" style=\"text-transform: uppercase;\"> {{empresa.nome}}</strong>, <strong class=\"upper-text\" style=\"text-transform: uppercase;\">{{documento.documento}}</strong>, manifesta\n      sua adesão ao sistema \"Web Protesto\", disponibilizado pelo serviço distribuidor mantido pelos tabeliães de\n      protesto da comarca de Franca, Estado de São Paulo, nos termos do artigo 7º, parágrafo único, da Lei Federal\n      9.492, de 10 de setembro de 1997, na seguinte forma:</p><br>\n    <p>1) O Sistema \"Web Protesto\" é disponibilizado gratuitamente pelo serviço ditribuidor de protesto de Franca, com\n      acesso pelo endereço eletrônico <a href=\"http://www.titulosdefranca.com.br\">http://www.titulosdefranca.com.br</a>, o qual permite a\n      preparação de lotes de títulos e documentos de dívida para encaminhamento a protesto, na forma da Lei Ferderal nº\n      9.492, de 10 de setembro de 1997.</p>\n    <p>2) O recebimento eletrônico dos lotes e o consequente encaminhamento dos títulos e documentos de dívida aos\n      tabelionatos depende da validação do cadastro do apresentante que pretende aderir ao sistema \"Web Protesto\",\n      mediante a apresentação de via impressa e assinada deste termo e de cópia do documento de identidade do\n      apresentante ou de seu representante legal, se pessoa jurídica. Caso exista dúvida quanto à autenticidade da\n      documentação poderá ser solicitada prova suficiente ao esclarecimento do fato.</p>\n    <p>3) A senha de acesso será gerada pelo próprio titular e será de seu exclusivo controle, uso e conhecimento. As\n      informações enviadas em meio eletrônico após a validação do cadastro são admitidas pelas partes na forma do artigo\n      10, § 2º, da Medida Provisória nº 2.200-2, de 24 de agosto de 2001.</p>\n    <p>4) Os títulos e documentos de dívida serão entregues no guichê próprio do serviço distribuidor ou, se cabível,\n      poderão ser enviadas indicações por meio eletrônico.</p>\n    <p>5) Após o recebimento e processamento dos lotes, o procedimento observará as disposições da Lei Federal nº 9.492,\n      de 10 de setembro de 1997, e da Lei Estadual nº 11.331/2002, de 26 de dezembro de 2002.</p>\n    <p class=\"present-day\" style=\"text-align: center; margin: 35px 0;\">FRANCA, {{data.dia}} de {{data.mes}} de {{data.ano}}.</p>\n    <p style=\"text-align: center; margin: 35px 0;\"><strong class=\"upper-text\" style=\"text-transform: uppercase;\">{{empresa.nome}}: {{documento.documento}}</strong></p>\n    <hr style=\"width: 420px; margin: 35px auto; background-color: #111;\">\n    <p style=\"text-align: center;\"><strong>Importante:</strong> Entregue este termo no serviço distribuidor, situado à <strong>AVENIDA MAJOR NICACIO, Nº\n        1836 - CENTRO - FRANCA/SP</strong>, acompanhado de copia do documento de identidade do apresentante ou de seu\n      representante legal, se pessoa jurídica. </p>\n  </div>\n\n  <!-- BOTÃO IMPRESSÃO -->\n  <div class=\"btn-adesao-container\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-adesao\" data-toggle=\"tooltip\"\n      (click)=\"ImprimirConteudo()\" value=\"imprimir\" data-placement=\"bottom\"\n      title=\"Imprimir Termo de Adesão\" popover=\"Imprimir termo de adesão\"\n      triggers=\"mouseenter:mouseleave\">Imprimir</button>\n  </div>\n</section>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/adicional.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/adicional.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdicionalAdicionalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- PESQUISA DEVEDORES -->\n<section class=\"cl-devedores\">\n  <div class=\"titledebt\">\n    <h2>Meus Usuários</h2>\n    <p>Pesquise pelo nome do usuário ou pelo documento (<strong>somente números</strong>).</p>\n  </div>\n  <form>\n    <div class=\"input-group ms-2\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Pesquisar nome ou documento\"\n        aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" maxlength=\"100\" >\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon1\"\n          (click)=\"pesquisar()\" popover=\"Pesquisar\"\n          triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Pesquisar</button>\n      </div>\n      <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\" (click)=\"openModalWithComponentCadastrar()\" popover=\"Novo cadastro\"\n      triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cadastrar</button>\n    </div>\n  </form>\n</section>\n\n\n<!-- TABELA DEVEDORES-->\n<table class=\"table table-sm table-striped table-bordered\">\n\n  <thead class=\"title-table\">\n    <tr>\n      <th colspan=\"3\" scope=\"col\">Nome </th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">CPF</th>\n      <th scope=\"col\">Admin</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let user of usuarios; let idx = index\">\n      <th colspan=\"3\" scope=\"row\"> {{ user.nome }} </th>\n      <td width=\"280\"> {{ user.email }} </td>\n      <td width=\"150\"> {{ user.cpf }} </td>      \n      <td width=\"50\"> {{ user.administrador }} </td>\n      <td width=\"40\" class=\"table-icon\">\n        <fa name=\"pencil\" popover=\"Editar registro\"\n        triggers=\"mouseenter:mouseleave\" size=\"2x\" (click)=\"editarUsuario(idx)\"></fa>\n      </td>\n      <td width=\"40\" class=\"table-icon\">\n        <fa name=\"ban\" popover=\"Bloquear usuário\"\n        triggers=\"mouseenter:mouseleave\"size=\"2x\"></fa>\n      </td>\n    </tr>    \n\n  </tbody>\n\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/cadastro/adicional-cadastro.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/cadastro/adicional-cadastro.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdicionalCadastroAdicionalCadastroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- MODAL CADASTRO DE USUÁRIOS -->\n<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Cadastro de Usuários</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fechar Sem Salvar Dados\" size=\"2x\"></fa>\n    </td>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <form id=\"form-container\" [formGroup]=\"fGroupUsuario\">\n\n    <!--  FORM-IDENTIFICAÇÃO -->\n    <div id=\"identificacao\">\n      <fieldset>\n        <legend>Identificação do Usuário</legend>\n        <div class=\"form-identificacao\">\n          <div class=\"form-group col-10\">\n            <label for=\"inputNome\">Nome do Usuário</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputNome\" required maxlength=\"50\" placeholder=\"\"\n              formControlName=\"nome\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n          </div>\n\n          <div class=\"form-group col-8\">\n            <label for=\"inputCpfNumber\">CPF</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCpfNumero\" required placeholder=\"\"\n              formControlName=\"cpf\" [ngClass]=\"{ 'is-invalid': submitted && f.cpf.errors }\">\n          </div>\n\n          <!-- <div class=\"form-group col-8\">\n            <label for=\"inputRgNumber\">RG</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputRgNumero\" required placeholder=\"\">\n          </div>\n\n          <div class=\"form-group col-8\">\n            <label for=\"inputIssuingOrgan\">Emissor/UF</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputOrgaoEmissor\" placeholder=\"\">\n          </div> -->\n\n        </div>\n      </fieldset>\n    </div> <!-- FIM FORM-IDENTIFICAÇÃO -->\n\n\n    <!-- ACESSO AO SITE -->\n    <div id=\"acesso\">\n      <fieldset>\n        <legend>Acesso ao Site</legend>\n        <div class=\"form-acesso\">\n          <div class=\"form-group col-10\">\n            <label for=\"inputNewEmail\">Email</label>\n            <input type=\"email\" class=\"form-control lower-text\" id=\"inputNewEmail\" required maxlength=\"50\" placeholder=\"\"\n              formControlName=\"email\">\n          </div>\n\n          <div class=\"form-group col-8\">\n            <label for=\"inputNewSenha1\">Senha (Máx. 8 Caracteres)</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputNewSenha1\" maxlength=\"8\" required placeholder=\"\"\n              formControlName=\"senha\">\n          </div>\n\n          <div class=\"form-group col-8\">\n            <label for=\"inputNewSenha2\">Confirme a Senha</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputNewSenha2\" maxlength=\"8\" required placeholder=\"\"\n              formControlName=\"confirmaSenha\">\n          </div>\n\n          <!-- <div class=\"form-group col-8\">\n            <label for=\"inputAdm\">Administrador</label>\n            <select id=\"inputAdm\" class=\"form-control\">\n              <option selected>NÃO</option>\n              <option>SIM</option>\n            </select>\n          </div> -->\n\n        </div>\n      </fieldset>\n    </div> <!-- FIM FORM-ACESSO AO SITE -->\n\n  </form>\n</div><!-- FIM MODAL -->\n\n\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" (click)=\"newUsuario()\">Salvar Dados do Usuário</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/edicao/adicional-edicao.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/edicao/adicional-edicao.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdicionalEdicaoAdicionalEdicaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edição de Usuários</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" popover=\"Fechar sem salvar os dados\"\n      triggers=\"mouseenter:mouseleave\" size=\"2x\"></fa>\n    </td>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"fGroupUsuario\" id=\"form-container\">\n    <div id=\"identificacao form-row\">\n      <fieldset>\n        <legend>Identificação do Usuário</legend>\n        <div class=\"form-identificacao form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputUserName\">Nome do Usuário</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputNomeUsuario\" required maxlength=\"50\" placeholder=\"\"\n              formControlName=\"nome\" [ngClass]=\"{ 'is-invalid': f.nome.errors }\">\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCpfNumber\">CPF</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCpfNumero\" required placeholder=\"\"\n              formControlName=\"cpf\" [ngClass]=\"{ 'is-invalid': f.cpf.errors }\">\n          </div>\n        </div>\n      </fieldset>\n    </div> <!-- FIM FORM-IDENTIFICAÇÃO -->\n\n  </form>\n</div><!-- FIM MODAL -->\n\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" (click)=\"salvar()\" popover=\"Salvar\"\n  triggers=\"mouseenter:mouseleave\">Salvar Dados do Usuário</button>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ELEMENTOS GLOBAIS -->\n<menu *ngIf=\"mostrarMenu\"></menu>\n\n<router-outlet></router-outlet>\n\n<!-- RODAPE -->\n<rodape *ngIf=\"mostrarMenu\"></rodape>\n<!-- FIM ELEMENTOS GLOBAIS -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/atualizacao/atualizacao.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atualizacao/atualizacao.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAtualizacaoAtualizacaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ATUALIZAR CADASTRO -->\n<div class=\"form-container\">\n  <form [formGroup]=\"fGroupEmpresa\">\n    <fieldset>\n      <legend>Informações do Cadastrado</legend>\n   \n      <div class=\"form-row\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputDocument\">Documento</label>\n          <input type=\"tel\" formControlName=\"documento\" [attr.disabled]=\"true\" class=\"form-control\" id=\"inputDocument\"\n            placeholder=\"\" maxlength=\"18\">\n        </div>\n        <div class=\"form-group col-md-5\">\n          <label for=\"inputName\">Nome / Razão Social</label>\n          <input type=\"text\" formControlName=\"nome\" class=\"form-control\" id=\"inputName1\" placeholder=\"\" maxlength=\"50\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n          <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nome.errors.required\">Nome ou Razão Social são obrigatórios</div>\n            <div *ngIf=\"f.nome.errors.minlength\">O nome deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\" *ngIf=\"empresa.tipo == 'CPF'\">\n          <label for=\"inputRg\">RG (Pessoa Física)</label>\n          <input type=\"tel\" formControlName=\"rg\" class=\"lower-text\" class=\"form-control\"\n            id=\"inputRg\" placeholder=\"\" maxlength=\"14\">\n        </div>\n        <div class=\"form-group col-md-1\" *ngIf=\"empresa.tipo == 'CPF'\">\n          <label for=\"inputEmissor\">Emissor/UF</label>\n          <input type=\"text\" formControlName=\"emissor\" class=\"form-control\" id=\"inputEmissor\" maxlength=\"7\" placeholder=\"\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputTelefone\">Telefone</label>\n          <input type=\"tel\" formControlName=\"telefone\" class=\"form-control\" maxlength=\"15\" id=\"inputTelefone\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.telefone.errors }\">\n          <div *ngIf=\"submitted && f.telefone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.telefone.errors.required\">Telefone é obrigatório</div>\n            <div *ngIf=\"f.telefone.errors.minlength\">Digite um n° de telefone válido</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n          <label for=\"inputCep\">CEP</label>\n          <input type=\"tel\" pattern=\"^\\d{5}-\\d{3}$\" [textMask]=\"{mask: cep}\" formControlName=\"cep\" class=\"form-control\" id=\"inputCep\"\n            placeholder=\"\"  maxlength=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.cep.errors }\">\n          <div *ngIf=\"submitted && f.cep.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cep.errors.required\">Cep é obrigatório</div>\n            <div *ngIf=\"f.cep.errors.minlength\">Digite um cep válido</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2 btn-cep\">\n          <button type=\"button\" class=\"btn btn-primary btn-cep-search\" (click)=\"buscaCep()\" popover=\"Localizar Endereço\"\n          triggers=\"mouseenter:mouseleave\">Buscar</button>\n        </div>\n        <div class=\"form-group col-md-5\">\n          <label for=\"inputAddress\">Endereço</label>\n          <input type=\"text\" formControlName=\"endereco\" class=\"form-control\" id=\"inputAdress\"\n            placeholder=\"\" maxlength=\"60\" [ngClass]=\"{ 'is-invalid': submitted && f.endereco.errors }\">\n          <div *ngIf=\"submitted && f.endereco.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.endereco.errors.required\">Endereço é obrigatório</div>\n            <div *ngIf=\"f.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputNumber2\">Número</label>\n          <input type=\"text\" formControlName=\"numero\" maxlength=\"7\" class=\"form-control\" id=\"inputNumber2\" placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.numero.errors }\">\n          <div *ngIf=\"submitted && f.numero.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.numero.errors.required\">Número é obrigatório</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"inputAddress2\">Bairro</label>\n          <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" id=\"inputAdress2\" placeholder=\"\"\n            maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.bairro.errors }\">\n          <div *ngIf=\"submitted && f.bairro.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.bairro.errors.required\">Bairro é obrigatório</div>\n            <div *ngIf=\"f.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"inputCity\">Cidade</label>\n          <input type=\"text\" formControlName=\"cidade\" class=\"form-control\" id=\"inputCity\" placeholder=\"\" maxlength=\"50\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.cidade.errors }\">\n          <div *ngIf=\"submitted && f.cidade.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cidade.errors.required\">Cidade é obrigatório</div>\n            <div *ngIf=\"f.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-1\">\n          <label for=\"inputState\">Estado</label>\n          <select formControlName=\"estado\" id=\"inputCount\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.estado.errors }\">\n            <option value=\"null\">UF</option>\n            <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n          </select>\n          <div *ngIf=\"submitted && f.estado.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.estado.errors.required\">Estado é obrigatório</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputComplement\">Complemento</label>\n          <input type=\"text\" formControlName=\"complemento\" class=\"form-control\" id=\"inputComplement\"\n            placeholder=\"\" maxlength=\"20\">\n        </div>\n      </div>\n    </fieldset> <!-- FIM INFORMAÇÕES DO CADASTRADO -->\n\n    <!-- FORM2 DADOS DO REPRESENTANTE LEGAL-->\n    <fieldset>\n      <legend>Dados do Representante Legal</legend>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-5\">\n          <label for=\"inputName2\">Nome</label>\n          <input type=\"text\" formControlName=\"nomeRepresentante\" class=\"form-control\" id=\"inputName2\" placeholder=\"\"\n            maxlength=\"60\" [ngClass]=\"{ 'is-invalid': submitted && f.nomeRepresentante.errors }\">\n          <div *ngIf=\"submitted && f.nomeRepresentante.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nomeRepresentante.errors.required\">Nome do representante é obrigatório</div>\n            <div *ngIf=\"f.nomeRepresentante.errors.minlength\">Nome deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputCpf\">CPF</label>\n          <input type=\"tel\" [textMask]=\"{mask: MASKS.cpf.textMask}\" formControlName=\"cpfRepresentante\" class=\"form-control\"\n            id=\"inputCpf\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.cpfRepresentante.errors }\">\n          <div *ngIf=\"submitted && f.cpfRepresentante.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cpfRepresentante.errors.required\">CPF é obrigatório</div>\n            <div *ngIf=\"f.cpfRepresentante.errors.pattern\">O CPF digitado está inválido</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputRg2\">RG</label>\n          <input type=\"tel\" formControlName=\"rg\" class=\"lower-text\"\n            class=\"form-control\" id=\"inputRg2\" placeholder=\"\" maxlength=\"12\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.rg.errors }\">\n          <div *ngIf=\"submitted && f.rg.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.rg.errors.required\">RG é obrigatório</div>\n            <div *ngIf=\"f.rg.errors.minlength\">RG deve ter 9 caracteres</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputEmissor2\">Emissor</label>\n          <input type=\"text\" formControlName=\"emissorRepresentante\" class=\"form-control\" id=\"inputEmissor2\"\n            maxlength=\"7\" [ngClass]=\"{ 'is-invalid': submitted && f.emissorRepresentante.errors }\">\n          <div *ngIf=\"submitted && f.emissorRepresentante.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.emissorRepresentante.errors.required\">Emissor é obrigatório</div>\n            <div *ngIf=\"f.emissorRepresentante.errors.minlength\">Emissor deve ter no mínimo 3 caracteres</div>\n          </div>\n        </div>\n      </div>\n    </fieldset> <!-- FIM DADOS DO REPRESENTANTE LEGAL -->\n\n    <!-- CONTA PARA CRÉDITO FORM3 -->\n    <fieldset>\n      <legend>Conta para Crédito (Opcional)</legend>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputEstado\">Selecione um Banco da lista</label>\n          <select id=\"inputCount\" formControlName=\"idBanco\" class=\"form-control\">\n            <option selected=\"selected\" value=\"null\">Selecione...</option>\n            <option *ngFor=\"let nomeBanco of bancos\" [(value)]=\"nomeBanco\">{{nomeBanco}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputAgency\">Ag. (Sem dígito)</label>\n          <input type=\"text\" formControlName=\"agencia\" class=\"lower-text\" class=\"form-control\" id=\"inputAgency\"\n            placeholder=\"\" maxlength=\"10\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputCount2\">Conta (Com dígito)</label>\n          <input type=\"text\" formControlName=\"conta\" class=\"lower-text\" class=\"form-control\" id=\"inputCount2\"\n            placeholder=\"\" maxlength=\"10\">\n        </div>\n\n\n        <!-- RADIO BUTTONS TITULARIDADE -->\n        <div class=\"form-group form-check-set\">\n          <label class=\"radio-title\">Titularidade:</label>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\" for=\"gridCheck\" popover=\"Selecione a titularidade da conta\"\n            triggers=\"mouseenter:mouseleave\" placement=\"bottom\">\n              Sim\n            </label>\n            <input class=\"form-check-input\" formControlName=\"titularidade\" [(checked)]=\"empresa.titularidade\"\n              value=\"true\" type=radio id=\"opcao1\" name=\"titularidade\">\n            <label class=\"form-check-label\" for=\"gridCheck\" popover=\"Selecione a titularidade da conta\"\n            triggers=\"mouseenter:mouseleave\" placement=\"bottom\">\n              Não\n            </label>\n            <input class=\"form-check-input\" formControlName=\"titularidade\" [(checked)]=\"!empresa.titularidade\"\n              value=\"false\" type=\"radio\" id=\"opcao2\" name=\"titularidade\">\n          </div>\n        </div> <!-- FIM RADIO BUTTONS TITULARIDADE -->\n\n\n        <!-- RADIO BUTTONS CONTA CONJUNTA -->\n        <div class=\"form-group form-check-set\">\n          <label class=\"radio-title\">Conta conjunta:</label>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\" for=\"gridCheck\" popover=\"Selecione o tipo de conta\"\n            triggers=\"mouseenter:mouseleave\" placement=\"bottom\">\n              Sim\n            </label>\n            <input class=\"form-check-input\" formControlName=\"contaConjunta\" [(checked)]=\"empresa.contaConjunta\"\n              value=\"true\" type=\"radio\" id=\"opcao1\" name=\"contaConjunta\">\n            <label class=\"form-check-label\" for=\"gridCheck\" popover=\"Selecione o tipo de conta\"\n            triggers=\"mouseenter:mouseleave\" placement=\"bottom\">\n              Não\n            </label>\n            <input class=\"form-check-input\" formControlName=\"contaConjunta\" [(checked)]=\"!empresa.contaConjunta\"\n              value=\"false\" type=\"radio\" id=\"opcao2\" name=\"contaConjunta\">\n          </div>\n        </div> <!-- FIM RADIO BUTTONS CONTA CONJUNTA -->\n\n      </div>\n    </fieldset> <!-- FIM CONTA PARA CRÉDITO FORM3-->\n   \n  </form>\n    <!-- BOTÕES -->\n  <div class=\"btn-cadastro\">\n    <button class=\"btn btn-primary btn-atualizacao\" (click)=\"onSubmit()\" popover=\"Salvar alterações\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Salvar Alterações</button>\n    <button class=\"btn btn-secondary btn-atualizacao\" [routerLink]=\"'/home'\" popover=\"Cancelar\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cancelar</button>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCadastroCadastroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-container\">\n    <form [formGroup]=\"fGroupEmpresa\">\n      <fieldset>\n        <legend>Informações do Cadastro</legend>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputDocument\">Documento</label>\n              <input type=\"tel\" formControlName=\"documento\" [attr.disabled]=\"true\" class=\"form-control\" id=\"inputDocument\" placeholder=\"\" maxlength=\"18\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.documento.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.documento.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.documento.errors.required\">Documento é obrigatório</small>\n                <small *ngIf=\"fEmpresa.documento.errors.minlength\">Digite um documento válido</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-5\">\n              <label for=\"inputName\">Nome / Razão Social</label>\n              <input type=\"text\" formControlName=\"nome\" class=\"form-control\" id=\"inputName1\" placeholder=\"\" maxlength=\"50\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.nome.errors }\" >\n              <div *ngIf=\"submitted && fEmpresa.nome.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.nome.errors.required\">Nome é obrigatório</small>\n                <small *ngIf=\"fEmpresa.nome.errors.minlength\">Nome deve ter no mínimo 3 caracteres</small>\n              </div>\n            </div>\n            <div *ngIf=\"empresa.tipo == 'CPF'\" class=\"form-group col-md-2\">\n              <label for=\"inputRg\">RG (Pessoa Física)</label>\n              <input formControlName=\"rg\" class=\"form-control\" id=\"inputRg\" placeholder=\"\" maxlength=\"14\">\n            </div>\n            <div *ngIf=\"empresa.tipo == 'CPF'\" class=\"form-group col-md-1\">\n              <label for=\"inputEmissor\">Emissor/UF</label>\n              <input type=\"text\" formControlName=\"emissor\" maxlength=\"10\" class=\"form-control\" id=\"inputEmissor\" placeholder=\"\">\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputTelefone\">Telefone</label>\n              <input type=\"tel\" maxlength=\"15\" formControlName=\"telefone\" class=\"form-control\" id=\"inputTelefone\">\n            </div>\n          </div>\n  \n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label for=\"inputCep\">CEP</label>\n              <input type=\"tel\" [textMask]=\"{mask: cep}\" formControlName=\"cep\" class=\"form-control\" id=\"inputCep\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.cep.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.cep.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.cep.errors.required\">CEP é obrigatório</small>\n                <small *ngIf=\"fEmpresa.cep.errors.minlength\">Digite um CEP válido</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 btn-cep\">\n              <button (click)=\"buscarCEP()\" class=\"btn btn-primary btn-cep-search\" popover=\"Localizar Endereço\"\n              triggers=\"mouseenter:mouseleave\">Buscar</button>\n            </div>\n            <div class=\"form-group col-md-5\">\n              <label for=\"inputAddress\">Endereço</label>\n              <input type=\"text\" formControlName=\"endereco\" class=\"form-control\" id=\"inputAdress\" placeholder=\"Rua dos bobos\" maxlength=\"50\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.endereco.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.endereco.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.endereco.errors.required\">Endereço é obrigatório</small>\n                <small *ngIf=\"fEmpresa.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputNumber2\">Número</label>\n              <input type=\"text\" formControlName=\"numero\" class=\"form-control\" id=\"inputNumber2\" placeholder=\"\" maxlength=\"10\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.numero.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.numero.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.numero.errors.required\">Número é obrigatório</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"inputAddress2\">Bairro</label>\n              <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" id=\"inputAdress2\" placeholder=\"\" maxlength=\"50\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.bairro.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.bairro.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.bairro.errors.required\">Bairro é obrigatório</small>\n                <small *ngIf=\"fEmpresa.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"inputCity\">Cidade</label>\n              <input type=\"text\" formControlName=\"cidade\" class=\"form-control\" id=\"inputCity\" placeholder=\"\" maxlength=\"50\"\n              [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.cidade.errors }\">\n              <div *ngIf=\"submitted && fEmpresa.cidade.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.cidade.errors.required\">Cidade é obrigatório</small>\n                <small *ngIf=\"fEmpresa.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-1\">\n              <label for=\"inputState\">Estado</label>\n              <select  [ngClass]=\"{ 'is-invalid': submitted && fEmpresa.estado.errors }\" formControlName=\"estado\" id=\"inputCount\" class=\"form-control\">\n                <option value=\"null\">UF</option>\n                <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n              </select>\n              <div *ngIf=\"submitted && fEmpresa.estado.errors\" class=\"invalid-feedback\">\n                <small *ngIf=\"fEmpresa.estado.errors.required\">Estado é obrigatório</small>\n              </div>\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputComplement\">Complemento</label>\n              <input type=\"text\" formControlName=\"complemento\" class=\"form-control\" id=\"inputComplement\" placeholder=\"Apartamento, hotel, casa, etc.\"\n                maxlength=\"50\">\n            </div>\n          </div>\n      </fieldset> <!-- FIM FORM1 -->\n    </form>\n  \n    <!-- FORM2 DADOS -->\n    <form *ngIf=\"empresa.tipo == 'CNPJ'\" [formGroup]=\"fGroupEmpresaRepresentante\">\n      <fieldset>\n        <legend>Dados do Representante Legal</legend>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-5\">\n            <label for=\"inputName2\">Nome</label>\n            <input type=\"text\" formControlName=\"nomeRepresentante\" class=\"form-control\" id=\"inputName2\" placeholder=\"Nome\" maxlength=\"60\">\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputCpf\">CPF</label>\n            <input type=\"tel\" [textMask]=\"{mask: cpf}\" formControlName=\"cpfRepresentante\" class=\"form-control\" id=\"inputCpf\" placeholder=\"\">\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputRg2\">RG</label>\n            <input type=\"tel\" [textMask]=\"{mask: rg}\" formControlName=\"rg\" class=\"lower-text\" class=\"form-control\" id=\"inputRg2\" placeholder=\"\" >\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmissor2\">Emissor</label>\n            <input type=\"text\" formControlName=\"emissorRepresentante\" class=\"form-control\" id=\"inputEmissor2\" maxlength=\"50\">\n          </div>\n        </div>\n      </fieldset> <!-- FIM FORM2 -->\n    </form>\n    <!-- CONTA FORM3 -->\n    <form [formGroup]=\"fGroupEmpresaConta\">\n      <fieldset>\n        <legend>Conta para Crédito (Opcional)</legend>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEstado\">Selecione um Banco da lista</label>\n            <select id=\"inputCount\" formControlName=\"idBanco\" class=\"form-control\">\n              <option selected=\"selected\" value=\"null\">Selecione...</option>\n              <option *ngFor=\"let nomeBanco of bancos\" [(value)]=\"nomeBanco\">{{nomeBanco}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAgency\">Ag. (Sem dígito)</label>\n            <input type=\"text\" formControlName=\"agencia\" class=\"lower-text\" class=\"form-control\" id=\"inputAgency\" placeholder=\"\" maxlength=\"4\">\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputCount2\">Conta (Com dígito)</label>\n            <input type=\"text\" formControlName=\"conta\" class=\"lower-text\" class=\"form-control\" id=\"inputCount2\" placeholder=\"\" maxlength=\"10\">\n          </div>\n          \n          <div class=\"form-group form-check-set\">\n            <label>Titularidade:</label>\n            <div class=\"form-check form-check-inline\">\n              <label class=\"form-check-label\" for=\"gridCheck\">\n                Sim\n              </label>\n              <input class=\"form-check-input\" formControlName=\"titularidade\" [(checked)]=\"empresa.titularidade\" value=\"true\" type=radio id=\"opcao1\" name=\"titularidade\">\n              <label class=\"form-check-label\" for=\"gridCheck\">\n                Não\n              </label>\n              <input class=\"form-check-input\" formControlName=\"titularidade\" [(checked)]=\"empresa.titularidade\" value=\"false\" type=\"radio\" id=\"opcao2\" name=\"titularidade\">\n            </div>\n          </div>\n  \n          <div class=\"form-group form-check-set\">\n            <label>Conta conjunta:</label>\n            <div class=\"form-check form-check-inline\">\n              <label class=\"form-check-label\" for=\"gridCheck\">\n                Sim\n              </label>\n              <input class=\"form-check-input\" formControlName=\"contaConjunta\" [(checked)]=\"empresa.contaConjunta\" value=\"true\" type=\"radio\" id=\"opcao1\" name=\"contaConjunta\">\n              <label class=\"form-check-label\" for=\"gridCheck\">\n                Não\n              </label>\n              <input class=\"form-check-input\" formControlName=\"contaConjunta\" [(checked)]=\"empresa.contaConjunta\" value=\"false\" type=\"radio\" id=\"opcao2\" name=\"contaConjunta\">\n            </div>\n          </div>\n  \n        </div>\n      </fieldset> <!-- FIM FORM3-->\n    </form>\n    \n    <form [formGroup]=\"fGroupUsuario\">\n      <fieldset>\n        <legend>Dados para Acesso ao Site</legend>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-5\">\n            <label for=\"inputName2\">E-mail</label>\n            <input type=\"email\" [attr.disabled]=\"true\" formControlName=\"email\" class=\"form-control\" id=\"inputName2\" placeholder=\"Nome\" maxlength=\"120\"> \n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputCpf\">Senha</label>\n            <input type=\"password\" formControlName=\"senha\" class=\"lower-text\" class=\"form-control\" id=\"inputCpf\" maxlength=\"50\"\n            [ngClass]=\"{ 'is-invalid': submitted && fUsuario.senha.errors }\"> \n            <div *ngIf=\"submitted && fUsuario.senha.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fUsuario.senha.required\">Senha é obrigatório</small>\n              <small *ngIf=\"fUsuario.senha.minlength\">Senha deve ter no mínimo 6 caracteres</small>\n            </div>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputCpf\">Confirmação</label>\n            <input type=\"password\" formControlName=\"confirmaSenha\" class=\"form-control\" id=\"inputCpf\" \n            [ngClass]=\"{ 'is-invalid': submitted && fUsuario.confirmaSenha.errors }\" maxlength=\"50\">\n            <div *ngIf=\"submitted && fUsuario.confirmaSenha.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fUsuario.confirmaSenha.required\"> Confirmação de senha é obrigatório </small>\n              <small *ngIf=\"fUsuario.confirmaSenha.minlength\"> Confirmação de senha deve ter no mínimo 6 caracteres </small>\n            </div>\n          </div>\n        </div>\n      </fieldset> \n    </form>\n    <div class=\"btn-cadastro\">\n      <button type=\"submit\" class=\"btn btn-primary btn-atualizacao\" (click)=\"validaEmpresa()\" type=\"submit\" popover=\"Criar usuário\"\n      triggers=\"mouseenter:mouseleave\">Criar Usuário</button>\n      <button class=\"btn btn-secondary btn-atualizacao\" [routerLink]=\"'/'\" type=\"submit\" popover=\"Voltar\"\n      triggers=\"mouseenter:mouseleave\">Voltar</button >\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/cadastro/devedor-cadastro.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/cadastro/devedor-cadastro.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDevedoresCadastroDevedorCadastroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Cadastro de Devedores</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" popover=\"Fechar sem salvar os dados\"\n      triggers=\"mouseenter:mouseleave\"  size=\"2x\"></fa>\n    </td>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <form [formGroup]=\"fGroupDevedor\" id=\"form-container\">\n    <div id=\"identificacao\">\n      <fieldset>\n        <legend>1. Identificação do Devedor</legend>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n\n\n            <label for=\"inputDocumentTypeLabel\">Tipo Doc.1</label>\n            <select (change)=\"alteraValidator($event)\" formControlName=\"tipoDocumento\" id=\"inputTipoDocumento\"\n              class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.tipoDocumento.errors }\">\n              <option>CPF</option>\n              <option>CNPJ</option>\n            </select>\n\n            <div *ngIf=\"submitted && f.tipoDocumento.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.tipoDocumento.errors.required\">CPF ou CNPJ são obrigatórios</div>\n            </div>\n          </div>\n\n\n          <!-- CPF -->\n          <div *ngIf=\"f.tipoDocumento.value == 'CPF'\" class=\"form-group col-md-2\">\n            <label for=\"NumberDocument2\">N° do CPF</label>\n            <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument1\"\n              aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumento.errors }\" [textMask]=\"{mask: MASKS.cpf.textMask}\">\n            <div *ngIf=\"submitted && f.numeroDocumento.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.numeroDocumento.errors.required\">Documento é obrigatório</div>\n              <div *ngIf=\"f.numeroDocumento.errors.cpf\">O CPF digitado está inválido</div>\n            </div>\n          </div>\n\n\n          <!-- CNPJ  -->\n          <div *ngIf=\"f.tipoDocumento.value == 'CNPJ'\" class=\"form-group col-md-2\">\n            <label for=\"NumberDocument2\">N° do CNPJ</label>\n            <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument2\"\n              aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumento.errors }\" [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n            <div *ngIf=\"submitted && f.numeroDocumento.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.numeroDocumento.errors.required\">Documento é obrigatório</div>\n              <div *ngIf=\"f.numeroDocumento.errors.cnpj\">O CNPJ digitado está inválido</div>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputDebtName\">Nome do Devedor</label>\n            <input formControlName=\"nomeDevedor\" type=\"text\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\"\n              maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.nomeDevedor.errors }\" uppercase>\n\n            <div *ngIf=\"submitted && f.nomeDevedor.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.nomeDevedor.errors.required\">Nome ou Razão Social são obrigatórios</div>\n              <div *ngIf=\"f.nomeDevedor.errors.minlength\">Nome deve ter no mínimo 3 caracteres</div>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputDocumentTypeLabel2\">Tipo Doc. 2</label>\n            <select formControlName=\"tipoDocumento2\" id=\"inputTipoDocumento2\" class=\"form-control\">\n              <option selected></option>\n              <option>RG</option>\n              <option>RNE</option>\n            </select>\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDocumentNumberLabel2\">N° Documento 2</label>\n            <input formControlName=\"numeroDocumento2\" type=\"tel\" class=\"form-control\" id=\"inputNumeroDocumento2\"\n              maxlength=\"14\" placeholder=\"\">\n          </div>\n        </div>\n      </fieldset>\n    </div>\n  </form> <!-- FIM FORM-IDENTIFICAÇÃO -->\n\n\n  <!-- ABAS NAVEGAÇÃO -->\n  <div class=\"abas-container\">\n    <accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\n\n\n      <!-- FORM ENDEREÇO -->\n      <accordion-group [isOpen]=\"true\">\n\n        <div accordion-heading>\n          <h5>2. Endereço</h5>\n        </div>\n        <form [formGroup]=\"fGroupEndereco\" id=\"form-adress-cont\">\n\n\n          <div class=\"endereco-container\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                <label for=\"inputCepAdress\">CEP</label>\n                <input formControlName=\"cep\" type=\"text\" pattern=\"^\\d{5}-\\d{3}$\" [textMask]=\"{mask: CEP}\"\n                  class=\"form-control\" id=\"inputCep\" placeholder=\"\"\n                  [ngClass]=\"{ 'is-invalid': submittedEnd && fend.cep.errors }\">\n\n                <div *ngIf=\"submittedEnd && fend.cep.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.cep.errors.required\">Cep é obrigatório</div>\n                  <div *ngIf=\"fend.cep.errors.minlength\">Digite um cep válido</div>\n                </div>\n              </div>\n\n              <div class=\"form-group btn-cep\">\n                <button class=\"btn btn-primary btn-cep-search\" (click)=\"buscarCep()\" popover=\"Localizar Endereço\"\n                triggers=\"mouseenter:mouseleave\" >Buscar</button>\n              </div>\n\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputAdress\">Endereço</label>\n                <input formControlName=\"logradouro\" type=\"text\" class=\"form-control\" id=\"inputEndereco\" placeholder=\"\"\n                  maxlength=\"60\" [ngClass]=\"{ 'is-invalid': submittedEnd && fend.logradouro.errors }\">\n\n                <div *ngIf=\"submittedEnd && fend.logradouro.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.logradouro.errors.required\">Endereço é obrigatório</div>\n                  <div *ngIf=\"fend.logradouro.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</div>\n                </div>\n              </div>\n\n              <div class=\"form-group col-md-2\">\n                <label for=\"inputAdressNumber\">Número</label>\n                <input formControlName=\"numero\" type=\"text\" class=\"form-control\" id=\"inputNumero\" maxlength=\"7\"\n                  placeholder=\"\" [ngClass]=\"{ 'is-invalid': submittedEnd && fend.numero.errors }\">\n                <div *ngIf=\"submittedEnd && fend.numero.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.numero.errors.required\">Número é obrigatório</div>\n                </div>\n              </div>\n\n              <div class=\"form-group col-md-2\">\n                <label for=\"inputComplement\">Complemento</label>\n                <input formControlName=\"complemento\" type=\"text\" class=\"form-control\" id=\"inputComplemento\"\n                  maxlength=\"20\" placeholder=\"\">\n              </div>\n\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputNeighborhood\">Bairro</label>\n                <input formControlName=\"bairro\" type=\"text\" class=\"form-control\" id=\"inputBairro\" maxlength=\"50\"\n                  placeholder=\"\" [ngClass]=\"{ 'is-invalid': submittedEnd && fend.bairro.errors }\">\n\n                <div *ngIf=\"submittedEnd && fend.bairro.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.bairro.errors.required\">Bairro é obrigatório</div>\n                  <div *ngIf=\"fend.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</div>\n                </div>\n              </div>\n\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputCity\">Cidade</label>\n                <input formControlName=\"localidade\" type=\"text\" class=\"form-control\" id=\"inputCidade\" maxlength=\"50\"\n                  placeholder=\"\" [ngClass]=\"{ 'is-invalid': submittedEnd && fend.localidade.errors }\">\n\n                <div *ngIf=\"submittedEnd && fend.localidade.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.localidade.errors.required\">Cidade é obrigatório</div>\n                  <div *ngIf=\"fend.localidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</div>\n                </div>\n              </div>\n\n              <div class=\"form-group col-md-1\">\n                <label for=\"inputStateLabel\">Estado</label>\n                <select formControlName=\"uf\" id=\"inputEstado\" class=\"form-control\"\n                  [ngClass]=\"{ 'is-invalid': submittedEnd && fend.uf.errors }\">\n                  <option value=\"null\"></option>\n                  <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n                </select>\n\n                <div *ngIf=\"submittedEnd && fend.uf.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fend.uf.errors.required\">Estado é obrigatório</div>\n                </div>\n              </div>\n\n              <div class=\"form-group col-md-2 btn-add\">\n                <button *ngIf=\"mostrarButtonAdd\" class=\"btn btn-primary btn-add-email\" (click)=\"adicionarEndereco()\" popover=\"Adicionar Endereço\"\n                triggers=\"mouseenter:mouseleave\" >Adicionar</button>\n                <button *ngIf=\"mostrarButtonAlt\" class=\"btn btn-secondary btn-add-tel\" (click)=\"salvarEnderecoEditado()\" popover=\"Salvar Alterações\"\n                triggers=\"mouseenter:mouseleave\" >Salvar</button>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- TABELA ENDEREÇO DEVEDORES -->\n          <table *ngIf=\"enderecos.length > 0\" class=\"table table-sm table-striped table-bordered\">\n            <thead class=\"title-table\">\n              <tr>\n                <th scope=\"col\">Cep</th>\n                <th scope=\"col\">Endereço</th>\n                <th scope=\"col\">Bairro</th>\n                <th scope=\"col\">Cidade</th>\n                <th scope=\"col\">Estado</th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let endereco of enderecos\">\n                <td>{{endereco.cep}}</td>\n                <td>{{endereco.logradouro}}, {{endereco.numero}} {{endereco.complemento}}</td>\n                <td>{{endereco.bairro}}</td>\n                <td>{{endereco.localidade}} </td>\n                <td>{{endereco.uf}}</td>\n                <td width=\"50\" class=\"table-icon\">\n                  <fa name=\"pencil\" popover=\"Editar Endereço\"\n                  triggers=\"mouseenter:mouseleave\" size=\"2x\" (click)=\"editarEndereco(endereco)\"></fa>\n                </td>\n                <td width=\"50\" class=\"table-icon\">\n                  <fa name=\"trash\" popover=\"Excluir Endereço\"\n                  triggers=\"mouseenter:mouseleave\" size=\"2x\" (click)=\"excluirAdress(endereco)\"></fa>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </form> <!-- FIM FORM-ENDEREÇO -->\n      </accordion-group>\n\n\n      <!--FORM TELEFONE-->\n      <accordion-group>\n\n        <div accordion-heading>\n          <h5>3. Telefone (Opcional)</h5>\n        </div>\n        <form [formGroup]=\"fGroupTelefone\" id=\"form-tel-cont\">\n\n          <div class=\"telefone-container\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                <label for=\"inputPhone\">Telefone</label>\n                <input type=\"tel\" formControlName=\"telefone\" id=\"telephone\" class=\"form-control\" id=\"inputTelefone\" minlength=\"8\" maxlength=\"15\" placeholder=\"\">\n              </div>\n\n              <div class=\"form-group col-md-2 btn-add\">\n                <button *ngIf=\"mostrarButtonAdd\" class=\"btn btn-primary btn-add-tel\" (click)=\"adicionarTelefone()\" popover=\"Adicionar Telefone\"\n                triggers=\"mouseenter:mouseleave\" >Adicionar</button>\n                <button *ngIf=\"mostrarButtonAlt\" class=\"btn btn-secondary btn-add-tel\" (click)=\"salvarTelefoneEditado()\" popover=\"Salvar Alterações\"\n                triggers=\"mouseenter:mouseleave\" >Salvar</button>\n              </div>\n            </div>\n          </div>\n\n          <!-- TABELA TELEFONE DEVEDORES -->\n          <table *ngIf=\"telefones.length > 0\" class=\"table table-sm table-striped table-bordered table-medium\">\n            <thead class=\"title-table\">\n              <tr>\n                <th scope=\"col\">Telefone(s)</th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let telefone of telefones\">\n                <td>{{telefone.telefone}}</td>\n                <td width=\"50px\" class=\"table-icon\">\n                  <fa name=\"pencil\" popover=\"Editar Telefone\"\n                  triggers=\"mouseenter:mouseleave\"  size=\"2x\" (click)=\"editarTelefone(telefone)\"></fa>\n                </td>\n                <td width=\"50px\" class=\"table-icon\">\n                  <fa name=\"trash\" popover=\"Excluir Telefone\"\n                  triggers=\"mouseenter:mouseleave\"  size=\"2x\" (click)=\"excluirTel(telefone)\"></fa>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </form> <!-- FIM FORM-TELEFONE-->\n      </accordion-group>\n\n\n      <!-- FORM-EMAIL-->\n      <accordion-group>\n\n        <div accordion-heading>\n          <h5>4. E-mail (Opcional)</h5>\n        </div>\n        <form [formGroup]=\"fGroupEmail\" id=\"form-email-cont\">\n\n\n          <div class=\"email-container\">\n            <div class=\"form-row\">\n              <div id=\"references\" class=\"form-group col-md-4\">\n                <label for=\"inputEmailAdress\">Email</label>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control lower-text\" id=\"inputEmail\"\n                 maxlength=\"50\" placeholder=\"\">\n              </div>\n\n              <div class=\"form-group col-md-2 btn-add\">\n                <button *ngIf=\"mostrarButtonAdd\" class=\"btn btn-primary btn-add-email\" (click)=\"adicionarEmail()\" popover=\"Adicionar Email\"\n                triggers=\"mouseenter:mouseleave\" >Adicionar</button>\n                <button *ngIf=\"mostrarButtonAlt\" class=\"btn btn-secondary btn-add-email\" (click)=\"salvarEmailEditado()\" popover=\"Salvar Alterações\"\n                triggers=\"mouseenter:mouseleave\" >Salvar</button>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- TABELA EMAIL DEVEDORES -->\n          <table *ngIf=\"emails.length > 0\" class=\"table table-sm table-striped table-bordered table-medium\">\n            <thead class=\"title-table\">\n              <tr>\n                <th scope=\"col\">Email(s)</th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let email of emails\">\n                <td>{{email.email}}</td>\n                <td width=\"50px\" class=\"table-icon\">\n                  <fa name=\"pencil\" popover=\"Editar Email\"\n                  triggers=\"mouseenter:mouseleave\"  size=\"2x\" (click)=\"editarEmail(email)\"></fa>\n                </td>\n                <td width=\"50px\" class=\"table-icon\">\n                  <fa name=\"trash\" popover=\"Excluir Email\"\n                  triggers=\"mouseenter:mouseleave\" size=\"2x\" (click)=\"excluirAdressEmail(email)\"></fa>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </form>\n\n        <!--FIM FORM-EMAIL-->\n      </accordion-group>\n    </accordion>\n\n  </div>\n  <!--FIM ABAS PAINEIS -->\n\n</div><!-- FIM MODAL-BODY -->\n\n<!-- BOTÃO -->\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" (click)=\"onSubmitDev()\" popover=\"Salvar informações do devedor\"\n  triggers=\"mouseenter:mouseleave\" >Salvar Dados do Devedor</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/devedores.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/devedores.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDevedoresDevedoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- PESQUISA DEVEDORES -->\n<section class=\"cl-devedores\">\n  <div class=\"titledebt\">\n    <h2>Cadastro de Devedores</h2>\n    <p>Pesquise pelo nome do devedor ou pelo documento (<strong>somente números</strong>).</p>\n  </div>\n  <form [formGroup]=\"fGBusca\">\n    <div class=\"input-group ms-2\">\n      <input  formControlName=\"busca\" type=\"text\" class=\"form-control\" placeholder=\"Pesquisar nome ou documento\"\n        aria-label=\"Recipient's username\" aria-describedby=\"button-addon1\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon1\" popover=\"Pesquisar Devedor\"\n        triggers=\"mouseenter:mouseleave\"  placement=\"bottom\"\n          (click)=\"pesquisar()\" >Pesquisar</button>\n      </div>\n      <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon3\" popover=\"Cadastrar Devedor\"\n      triggers=\"mouseenter:mouseleave\"  placement=\"bottom\"\n        (click)=\"openModalWithComponent()\">Cadastrar</button>\n    </div>\n  </form>\n</section>\n\n\n<!-- TABELA DE PESQUISA -->\n<table *ngIf=\"mostrargrid && devedores.length > 0\" class=\"table table-sm table-striped table-bordered\">\n  <thead class=\"title-table\">\n    <tr>\n      <th colspan=\"5\" scope=\"col\">Nome do Devedor</th>\n      <th scope=\"col\">Tipo 1</th>\n      <th scope=\"col\">Documento 1</th>\n      <th scope=\"col\">Tipo 2</th>\n      <th scope=\"col\">Documento 2</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let devedor of devedores\">\n      <th colspan=\"5\" scope=\"row\">{{devedor.nomeDevedor}}</th>\n      <td width=\"65\">{{devedor.tipoDocumento}}</td>\n      <td width=\"60\">{{devedor.numeroDocumento}}</td>\n      <td width=\"65\">{{devedor.tipoDocumento2}}</td>\n      <td width=\"60\">{{devedor.numeroDocumento2}}</td>\n      <td width=\"40\" class=\"table-icon\">\n        <fa name=\"pencil\" (click)=\"abrirModalParaEditar(devedor)\" popover=\"Editar Devedor\"\n        triggers=\"mouseenter:mouseleave\" size=\"2x\"></fa>\n      </td>\n      <td width=\"40\" class=\"table-icon\">\n        <fa name=\"trash\" (click)=\"apagarDevedor(devedor.idDevedor)\" popover=\"Excluir Devedor\"\n        triggers=\"mouseenter:mouseleave\" size=\"2x\"></fa>\n      </td>\n    </tr>\n  </tbody>\n  <div infiniteScroll\n    [infiniteScrollDistance]=\"2\"\n    [infiniteScrollThrottle]=\"1000\"\n    (scrolled)=\"onScroll()\">\n  </div>\n</table>\n<!-- \n<div>\n  <ngx-datatable class=\"material\" \n  [rows]=\"rows\" \n  [columns]=\"columns\"\n  [scrollbarV]=\"true\">\n  </ngx-datatable>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/digitacao-titulos.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/digitacao-titulos.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDigitacaoTitulosDigitacaoTitulosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- DIGITACAO DE TITULOS -->\n<form [formGroup]=\"fGroupTitulo\" class=\"form-container\">\n  <h2>Digitação de Títulos | Lote Nº 8719 {{email}}</h2>\n  <fieldset class=\"form-1\">\n\n    <legend>1. Dados do Título</legend>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\" (click)=\"verificaCheque()\" (blur)=\"verificaCheque()\">\n        <label for=\"inputData\">Espécie do Título</label>\n        <select formControlName=\"siglaEspecie\" (click)=\"verificaCheque()\" (blur)=\"verificaCheque()\" class=\"custom-select\" id=\"inputDados\" \n        [ngClass]=\"{ 'is-invalid': submitted && fTitulo.siglaEspecie.errors }\">\n          <option value=\"Selecione\">Selecione</option>\n          <option *ngFor=\"let especie of especies\" [(value)]=\"especie.sigla\">{{especie.especie}}</option>\n        </select>\n        <div *ngIf=\"submitted && fTitulo.siglaEspecie.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.siglaEspecie.errors.required\">Espécie é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputTypeP\">Tipo de Protesto</label>\n        <select formControlName=\"tipoProtesto\" class=\"custom-select\" id=\"inputTipoProtesto\">\n          <option value=\"C\"selected>Comum</option>\n          <option value=\"F\">Falimentar</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-sm-2\">\n        <label for=\"inputLocalPayment\">Praça de Pagamento</label>\n        <select formControlName=\"pracaPagamento\" class=\"custom-select\" id=\"inputPracaPagamento\">\n          <option value=\"Franca\"selected>Franca</option>\n          <option value=\"Restinga\">Restinga</option>\n          <option value=\"Cristais Paulista\">Cristais Paulista</option>\n          <option value=\"Ribeirão Corrente\">Ribeirão Corrente</option>\n          <option value=\"São José da Bela Vista\">São José da Bela Vista</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-sm-2\">\n        <label for=\"inputDateEmission\">Data de Emissão</label>\n        <input formControlName=\"dataEmissao\"  type=\"text\" class=\"form-control\" id=\"inputDataEmissao\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fTitulo.dataEmissao.errors }\" [textMask]=\"{mask: mask}\">\n        <div *ngIf=\"submitted && fTitulo.dataEmissao.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.dataEmissao.errors.required\">Emissão é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-sm-2\">\n        <label for=\"inputTitleNumber\">Número do Título</label>\n        <input type=\"tel\" formControlName=\"numeroTitulo\" maxlength=\"15\" class=\"form-control\" id=\"inputNumeroTitulo\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroTitulo.errors }\">\n        <div *ngIf=\"submitted && fTitulo.numeroTitulo.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numeroTitulo.errors.required\">Nº do título é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-sm-1\">\n        <label for=\"inputLine\">Alínea</label>\n        <input type=\"text\" maxlength=\"2\" formControlName=\"alinea\" [attr.disabled]=\"titulo.siglaEspecie != 'CH'\" class=\"form-control\" id=\"inputAlinea\" placeholder=\"\" >\n      </div>\n      <div class=\"form-group col-sm-2\">\n        <label for=\"inputDateExpiration\">Vencimento</label>\n        <input formControlName=\"vencimento\" maxlength=\"15\" [attr.disabled]=\"titulo.siglaEspecie == 'CH'\" type=\"text\" class=\"form-control\" id=\"inputDataExpericao\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fTitulo.vencimento.errors }\" [textMask]=\"{mask: mask}\">\n        <div *ngIf=\"submitted && fTitulo.vencimento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.vencimento.errors.required\">Vencimento é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-sm-3\">\n        <label for=\"inputOriginalValue\">Valor Original do Título</label>\n        <input type=\"text\" formControlName=\"valorOriginalTitulo\"  maxlength=\"15\" class=\"form-control\" id=\"inputValorOriginal\" \n        maxlength=\"15\" currencyMask\n            [options]=\"{align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control\"\n            id=\"inputValorOriginal\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.valorOriginalTitulo.errors }\">\n            <div *ngIf=\"submitted && fTitulo.valorOriginalTitulo.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fTitulo.valorOriginalTitulo.errors.required\">Valor é obrigatório</small>\n              <small *ngIf=\"fTitulo.valorOriginalTitulo.errors.minlength\">O valor deve ser maior que R$ 1,00</small>\n            </div>\n      </div>\n\n      <div class=\"form-group col-sm-2\">\n        <label for=\"inputValueProtest\">Valor a Protestar</label>\n        <input type=\"text\" formControlName=\"valorProtesto\" maxlength=\"15\" class=\"form-control\" id=\"inputValorProtesto\" \n        maxlength=\"15\" currencyMask\n            [options]=\"{align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control\"\n            id=\"inputValorProtesto\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.valorProtesto.errors }\">\n            <div *ngIf=\"submitted && fTitulo.valorProtesto.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fTitulo.valorProtesto.errors.required\">Valor é obrigatório</small>\n              <small *ngIf=\"fTitulo.valorProtesto.errors.valorPermitido\">O valor deve ser maior que R$ 1,00</small>\n            </div>\n      </div>\n      \n      <div class=\"form-group col-sm-2\" (change)=\"verificaEndosso()\">\n        <label for=\"inputEndorsement\">Endosso</label>\n        <select formControlName=\"endosso\" (change)=\"verificaEndosso()\" class=\"custom-select\" id=\"inputEndosso\">\n          <option value=\"S\" selected>Sem Endosso</option>\n          <option value=\"M\">Mandato</option>\n          <option value=\"T\">Translativo</option>\n        </select>\n      </div>     \n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputCity\">Favorecido</label>\n        <input type=\"text\" formControlName=\"favorecido\" class=\"form-control\" id=\"inputCidade\" placeholder=\"\">\n      </div>\n\n      <div *ngIf=\"endosso\" class=\"form-group col-md-2\" (click)=\"atualizaTipo()\">\n        <label for=\"inputValueProtest\">Tp. Documento</label>\n        <select formControlName=\"tipoDocumentoEndossante\" (change)=\"alteraValidator($event)\" (blur)=\"atualizaTipo()\" class=\"custom-select\" id=\"inputEndosso\">\n          <option value=\"CPF\" selected>CPF</option>\n          <option value=\"CNPJ\">CNPJ</option>\n        </select>\n      </div>\n\n      <!-- TESTE -->\n      <div *ngIf=\"endosso\" class=\"form-group col-md-2\" (click)=\"atualizaTipo()\">\n        <label for=\"inputValueProtest\">Tipo Doc.</label>\n        <select (change)=\"alteraValidator($event)\" formControlName=\"tipoDocumentoEndossante\" (blur)=\"atualizaTipo()\" class=\"custom-select \"\n          id=\"inputEndosso\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.tipoDocumentoEndossante.errors }\">\n          <option value=\"CPF\">CPF</option>\n          <option value=\"CNPJ\">CNPJ</option>\n        </select>\n        <div *ngIf=\"submitted && fTitulo.tipoDocumentoEndossante.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.tipoDocumentoEndossante.errors.required\">Documento é obrigatório</small>\n        </div>\n      </div>\n\n      <!-- CPF -->\n      <div *ngIf=\"fTitulo.tipoDocumentoEndossante.value == 'CPF'\" class=\"form-group col-md-2\">\n        <label for=\"NumberDocument1\">N° do CPF</label>\n        <input formControlName=\"documentoEndossante\" class=\"form-control lower-text\" id=\"NumberDocument1\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cpf.textMask}\">\n        <div *ngIf=\"submitted && fTitulo.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.cpf\">O CPF digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- CNPJ  -->\n      <div *ngIf=\"fTitulo.tipoDocumentoEndossante.value == 'CNPJ'\" class=\"form-group col-md-2\">\n        <label for=\"inputAgency\">N° do CNPJ</label>\n        <input formControlName=\"documentoEndossante\" class=\"form-control lower-text\" id=\"NumberDocument2\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n        <div *ngIf=\"submitted && fTitulo.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.cnpj\">O CNPJ digitado está inválido</small>\n        </div>\n      </div>\n<!-- fim teste-->\n\n      <!-- <div *ngIf=\"endosso\" class=\"form-group col-md-2\">\n        <label for=\"inputAgency\">Nº Documento</label>\n        <input formControlName=\"documentoEndossante\" type=\"text\" maxlength=\"18\" class=\"form-control\" id=\"inputAgencia\" placeholder=\"\">\n      </div> -->\n\n      <div *ngIf=\"endosso\" class=\"form-group col-md-6\">\n        <label for=\"inputCountNumber\">Nome do endossante</label>\n        <input formControlName=\"endossante\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputNameEndossante\" placeholder=\"\">\n      </div>\n\n    </div> \n  </fieldset><!-- FIM FORM-1-->\n</form>\n\n\n<!-- DIGITACAO DE TITULOS -->\n<form [formGroup]=\"fGroupDevedores\"  class=\"form-container\">\n  <fieldset class=\"form-2\">\n    <legend>2. Devedor(es)</legend>\n  \n    <div class=\"container-icon form-row\" *ngIf=\"devedores.length > 0\">\n      <table class=\"table table-sm table-striped table-bordered\">\n        <thead class=\"title-table\">\n          <tr>\n            <th scope=\"col-4\">Nome</th>\n            <th scope=\"col-2\">Documento</th>\n            <th scope=\"col-2\">Cidade</th>\n            <th name=\"alterar\" title=\"Altera\" data-toggle=\"tooltip\" data-placement=\"top\" scope=\"col-1\"></th>\n            <th name=\"trash\" title=\"Apagar\" data-toggle=\"tooltip\" data-placement=\"top\" scope=\"col-1\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let devedor of devedores\">\n            <td width=\"2\" scope=\"row\">{{devedor.nomeDevedor}}</td>\n            <td width=\"70\">{{devedor.numeroDocumento}}</td>\n            <td width=\"65\">{{devedor.cidade}}</td>\n            <td name=\"trash\" title=\"alterar\" data-toggle=\"tooltip\" data-placement=\"top\" scope=\"col-1\" width=\"40\" class=\"table-icon\">\n              <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" size=\"2x\" (click)=\"carregaDevedor(devedor)\"></fa>\n            </td>\n            <td name=\"trash\" title=\"Apagar\" data-toggle=\"tooltip\" data-placement=\"top\" scope=\"col-1\" width=\"40\" class=\"table-icon\">\n              <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" size=\"2x\" (click)=\"apagarDevedor(devedor.numeroDocumento)\"></fa>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngIf=\"criandoDevedor\" class=\"form-row\"  (click)=\"atualizaTipoDevedor()\">\n      <div class=\"form-group col-md-2\"  (click)=\"verificaTipoDevedor()\">\n        <label for=\"DocumentTypeLabel\">Tp. Documento</label>\n        <select formControlName=\"tipoDocumento\" id=\"DocumentType\" class=\"form-control\" (change)=\"alteraValidator2($event)\" (blur)=\"atualizaTipoDevedor()\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.tipoDocumento.errors }\">\n          <option value=\"CPF\">CPF</option>\n          <option value=\"CNPJ\">CNPJ</option>\n        </select>\n        <div *ngIf=\"devSubmitted && fDevedor.tipoDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.tipoDocumento.errors.required\">Documento é obrigatório</small>\n        </div>\n      </div>\n\n       <!-- CPF -->\n       <div *ngIf=\"fDevedor.tipoDocumento.value == 'CPF'\" class=\"form-group col-md-3\">\n        <label for=\"NumberDocument2\">N° do CPF</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n          [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cpf.textMask}\">\n        <div *ngIf=\"devSubmitted && fDevedor.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.cpf\">O CPF digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- CNPJ  -->\n      <div *ngIf=\"fDevedor.tipoDocumento.value == 'CNPJ'\" class=\"form-group col-md-3\">\n        <label for=\"NumberDocument2\">N° do CNPJ</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n          [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n        <div *ngIf=\"devSubmitted && fDevedor.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.cnpj\">O CNPJ digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- <div class=\"form-group col-md-3\">\n        <label for=\"inputDocumentNumber\">N° Documento</label>\n        <input formControlName=\"numeroDocumento\" type=\"text\" maxlength=\"20\" class=\"form-control\" id=\"inputNumeroDocumento\" placeholder=\"\">\n      </div> -->\n\n      <div class=\"form-group col-md-2 btn-devedor\">\n        <button class=\"btn btn-primary\" (click)=\"buscaDevedor()\" type=\"submit\">Buscar Devedor</button>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputDebtName\">Nome do Devedor</label>\n        <input formControlName=\"nomeDevedor\" type=\"text\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.nomeDevedor.errors }\" maxlength=\"50\">\n        <div *ngIf=\"devSubmitted && fDevedor.nomeDevedor.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.nomeDevedor.errors.required\">Nome do devedor é obrigatório</small>\n          <small *ngIf=\"fDevedor.nomeDevedor.errors.minLength\">O tamanho mínimo do devedor é 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\" *ngIf=\"devedor.tipoDocumento != 'CNPJ'\">\n        <label for=\"inputTypeDocumentLabel2\">Tp. Documento 2</label>\n        <select formControlName=\"tipoDocumento2\" id=\"inputTypeDocument2\" class=\"form-control\">\n          <option value=\"RG\">RG</option>\n          <option value=\"RNE\">RNE</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputDocumentNumber2\">N° Documento 2</label>\n        <input formControlName=\"numeroDocumento2\" type=\"text\" class=\"form-control\" id=\"inputNumeroDocumento2\" placeholder=\"\" maxlength=\"14\">\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressCep\">CEP</label>\n        <input type=\"text\" formControlName=\"cep\" class=\"form-control\" id=\"inputCep\" placeholder=\"\"\n        pattern=\"^\\d{5}-\\d{3}$\"\n          [textMask]=\"{mask: CEP}\" [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.cep.errors }\">\n          <div *ngIf=\"devSubmitted && fDevedor.cep.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fDevedor.cep.errors.required\">Cep é obrigatório</small>\n            <small *ngIf=\"fDevedor.cep.errors.minlength\">Digite um cep válido</small>\n          </div>\n      </div>\n\n      <div class=\"btn-cep-search form-group col-md-2\">\n        <button (click)=\"buscarCEPDevedor()\" class=\"btn btn-outline-primary\" type=\"submit\">Buscar</button>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputAdress\">Endereço</label>\n        <input type=\"text\" formControlName=\"endereco\" class=\"form-control\" id=\"inputEndereco\" placeholder=\"\" maxlength=\"50\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.endereco.errors }\">\n        <div *ngIf=\"devSubmitted && fDevedor.endereco.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.endereco.errors.required\">Endereço é obrigatório</small>\n          <small *ngIf=\"fDevedor.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputNumberAdress\">Número</label>\n        <input type=\"tel\" formControlName=\"numero\" class=\"form-control\" id=\"inputNumero\" placeholder=\"\" maxlength=\"7\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.numero.errors }\">\n        <div *ngIf=\"devSubmitted && fDevedor.numero.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numero.errors.required\">Número é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputComplement\">Complemento</label>\n        <input type=\"text\" formControlName=\"complemento\" class=\"form-control\" id=\"inputComplemento\" placeholder=\"\" maxlength=\"20\">\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputNeighborhood\">Bairro</label>\n        <input type=\"text\" formControlName=\"bairro\" class=\"form-control\" id=\"inputBairro\" placeholder=\"\" maxlength=\"50\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.bairro.errors }\">\n        <div *ngIf=\"devSubmitted && fDevedor.bairro.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.bairro.errors.required\">Bairro é obrigatório</small>\n          <small *ngIf=\"fDevedor.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputCity\">Cidade</label>\n        <input type=\"text\" formControlName=\"cidade\" class=\"form-control\" id=\"inputCidade\" placeholder=\"\" maxlength=\"50\"\n        [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.cidade.errors }\">\n        <div *ngIf=\"devSubmitted && fDevedor.cidade.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.cidade.errors.required\">Cidade é obrigatório</small>\n          <small *ngIf=\"fDevedor.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-1\">\n        <label for=\"inputStateLabel\">Estado</label>\n        <select formControlName=\"estado\" id=\"inputEstado\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': devSubmitted && fDevedor.estado.errors }\">\n          <option value=\"null\">UF</option>\n          <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n        </select>\n        <div *ngIf=\"devSubmitted && fDevedor.estado.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.estado.errors.required\">Estado é obrigatório</small>\n        </div>\n      </div>\n    \n    <div *ngIf=\"btnAdd \" class=\"btn-wrapper\">\n      <button   class=\"btn btn-primary btn-send1\" type=\"submit\" (click)=\"criarOuAlterar(devedor)\" >Salvar Devedor</button>\n      <button class=\"btn btn-secondary btn-send2\" type=\"submit\" (click)=\"cancelar()\" >Cancelar </button>\n    </div>\n\n    </div><!--  FORM-2 -->\n    <div class=\"form-row\">\n      <button *ngIf=\"!criandoDevedor\" (click)=\"iniciaDevedor()\" class=\"btn btn-primary btn-create\" type=\"submit\" >Criar Devedores</button>\n    </div>\n\n    <div *ngIf=\"alterando\" class=\"form-group btn-cadastro col-md-6\">\n      <button class=\"btn btn-primary btn-send1\" type=\"submit\" (click)=\"criarOuAlterar(devedor)\" >Salvar Alterações</button>\n      <button class=\"btn btn-secondary btn-send2\" type=\"submit\" (click)=\"cancelar()\" >Cancelar </button>\n    </div>\n    <!-- <div class=\"form-group btn-cadastro col-md-2\">\n      <button *ngIf=\"devedores.length > 0 && !alterandoTitulo\" class=\"btn btn-primary btn-add\" (click)=\"adicionaTitulo()\" type=\"submit\">Adicionar Título</button>\n    </div> -->\n    <div class=\"btn-wrapper\">\n      <button class=\"btn btn-primary btn-send\" (click)=\"salvarTitulo()\" *ngIf=\"alterandoTitulo\" type=\"submit\">Salvar Título</button>\n      <button class=\"btn btn-secondary btn-send\" (click)=\"cancelarAlteracaoTitulo(titulo)\" *ngIf=\"alterandoTitulo\" type=\"submit\">Cancelar Título</button>\n    </div>\n    \n    <div class=\"value-table\">\n      <p>Quantidade de títulos no lote: {{lote.qtdTitulo}}</p>\n      <p>Total a protestar neste lote: R$ {{lote.valorTotalTitulo | number:'1.2-2'}}</p>\n    </div>\n\n    <!-- TABELA DEVEDORES-->\n    <table  class=\"table table-sm table-striped table-bordered\">\n      <thead class=\"title-table\" >\n        <tr >\n          <th scope=\"col\">Identif. Título </th>\n          <th scope=\"col\">Espécie</th>\n          <th scope=\"col\">N° do Título</th>\n          <th scope=\"col\">Valor Original</th>\n          <th scope=\"col\">Valor a Protestar</th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n\n      <tbody  *ngFor=\"let titulo of titulos\">\n        <tr>\n          <td>{{titulo.numeroTitulo}}</td>\n          <td>{{titulo.siglaEspecie}}</td>\n          <td>{{titulo.numeroTitulo}}</td>\n          <td> {{titulo.valorOriginalTitulo}}</td>\n          <td> {{titulo.valorProtesto}}</td>\n          <td class=\"table-icon\">\n            <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Declaração (Indicação)\" size=\"2x\" (click)=\"imprimirConteudo(titulo)\"></fa>\n          </td>\n          <td class=\"table-icon\">\n            <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" (click)=\"carregarTitulo(titulo)\" title=\"Editar Título\" size=\"2x\"></fa>\n          </td>\n          <td class=\"table-icon\">\n            <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" (click)=\"apagarTitulo(titulo)\" title=\"Excluir o Título\" size=\"2x\"></fa>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"btn-wrapper\">\n      <button *ngIf=\"devedores.length > 0\" class=\"btn btn-primary btn-send btn-add-title\" (click)=\"salvarTitulo()\" type=\"submit\">Adicionar Título</button>\n      <button *ngIf=\"devedores.length > 0\" class=\"btn btn-primary btn-send\" type=\"submit\" [routerLink]=\"'/requerimento-protesto/' + idLote\" >Finalizar Lote</button>\n      <button class=\"btn btn-secondary btn-exit\" type=\"button\" [routerLink]=\"'/titulos'\">Sair da Digitação</button>\n    </div>\n  </fieldset>  \n</form>\n\n\n\n<!-- DECLARAÇÃO DE INDICAÇÃO/ OCULTA --> \n<section class=\"declaracao-container collapse\">\n\n  <div class=\"declaracao-body\" #divDeclaracao>\n    <h2>Ao Central Distribuidora de Títulos para Protesto de Franca </h2>\n\n    <h3>Ref.: Protesto de Duplicata Mercantil por Indicação </h3>\n\n    <p>\n      Na qualidade de: <strong>SACADOR</strong>, solicitamos o protesto do título abaixo, por Indicação, nos termos da\n      Lei nº 5.474 de\n      18/07/68, com redação dada pela Lei nº 6.458 de 1º/11/77 e artigo 21 e parágrafos da Lei nº 9.492 de 10/09/97.\n    </p>\n\n    <h4> Devedor(es)</h4>\n\n    <table class=\"table table-sm table-bordered\" style=\"text-align: left; margin-bottom: 30px;\">\n      <tbody>\n        <tr *ngFor=\"let devedor of devedoresPrint\">\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">SACADO:</span> {{ devedor.nomeDevedor }}</td>\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">CNPJ/CPF:</span> {{devedor.numeroDocumento}}</td>\n        </tr>\n\n        <tr>\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">ENDEREÇO:</span> {{devedor.endereco}}, {{devedor.numero}} {{devedor.complemento}}</td>\n          <td colspan=\"3\"><span style=\"font-weight: bold;\">BAIRRO:</span> {{devedor.bairro}}</td>\n        </tr>\n\n        <tr>\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">CIDADE:</span> {{devedor.cidade}}</td>\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">CEP:</span> {{devedor.cep}}</td>\n        </tr>\n\n        <tr>\n          <td><span style=\"font-weight: bold;\">EMISSÃO:</span> 15/11/2019 </td>\n          <td><span style=\"font-weight: bold;\">VENCTO.:</span> 05/12/2019 </td>\n          <td><span style=\"font-weight: bold;\">PRAÇA DE PAGTO.:</span> FRANCA</td>\n        </tr>\n\n        <tr>\n          <td><span style=\"font-weight: bold;\">VALOR:</span> R$ 400,00 </td>\n          <td><span style=\"font-weight: bold;\">SALDO:</span> R$ 400,00</td>\n          <td><span style=\"font-weight: bold;\">Nº DA DUPLICATA:</span> 3</td>\n        </tr>\n\n        <tr >\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">SACADOR:</span>   </td>\n          <td colspan=\"2\"><span style=\"font-weight: bold;\">ENDOSSOS:</span> EM ENDOSSO</td>\n        </tr>\n\n        <tr>\n          <td><span style=\"font-weight: bold;\">ENDEREÇO:</span> RUA THOMAZ GONZAGA, 1869 3 ANDAR</td>\n          <td><span style=\"font-weight: bold;\">CNPJ/CPF:</span> 39142875862 </td>\n          <td><span style=\"font-weight: bold; padding-bottom: 5px;\">TELEFONE:</span> 992452216</td>\n        </tr>\n      </tbody>\n    </table> \n\n    <p class=\"declaracao\"><strong>Declaramos, para os devidos fins, sob as penas da Lei, que os documentos originais (ou\n        suas cópias\n        autenticadas),\n        que comprovam a venda mercantil, bem como o comprovante da entrega e do recebimento da(s) mercadoria(s)\n        correspondente(s), são mantidos em nosso poder, comprometendo-nos a exibi-los, sempre que exigidos, no lugar\n        onde\n        for determinado, especialmente se sobrevir sustação judicial do protesto.</strong>\n    </p>\n\n    <p><span style=\"font-weight: bold;\">Sem mais, firmamo-nos,</span>\n    </p>\n    <p style=\"margin: 40px 0 70px 0;\">FRANCA(SP), {{data.dia}} de {{data.mes}} de {{data.ano}}.</p>\n    <p style=\"text-align:center;  width: 500px; margin: auto; margin-bottom: 40px;border-top: 1px solid; font: bold 10px Arial;\">\n      (Assinatura da Empresa sob carimbo)\n    </p>\n  </div>\n</section> \n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDigitacaoTitulosSubFormularioDigitacaoSubFormularioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- MODAL FORMULÁRIO PROTESTO -->\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Pesquisa de Devedor</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"finalizar()\">\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fechar Sem Salvar Dados\" size=\"2x\"></fa>\n    </td>\n  </button>\n</div>\n\n<!-- FORMULÁRIO BODY -->\n<div class=\"modal-body\">\n  <fieldset>\n    <legend>Identificação do Devedor</legend>\n    <table class=\"table table-sm table-striped table-bordered\">\n      <thead class=\"title-table\">\n        <tr>\n          <th scope=\"col-4\">Tipo Doc 1</th>\n          <th scope=\"col-2\">Documento</th>\n          <th scope=\"col-2\">Nome</th>\n          <th *ngIf=\"devedor.tipoDocumento == 'CPF'\" scope=\"col-2\">Tipo Doc 2</th>\n          <th *ngIf=\"devedor.tipoDocumento == 'CPF'\" scope=\"col-2\">Documento 2</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td width=\"2\" scope=\"row\">{{devedor.tipoDocumento}}</td>\n          <td width=\"70\">{{devedor.numeroDocumento}}</td>\n          <td width=\"60\">{{devedor.nomeDevedor}}</td>\n          <td *ngIf=\"devedor.tipoDocumento == 'CPF'\" width=\"65\">{{devedor.tipoDocumento2}}</td>\n          <td *ngIf=\"devedor.tipoDocumento == 'CPF'\" width=\"65\">{{devedor.numeroDocumento2}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</div>\n<div class=\"modal-body\">\n  <fieldset>\n    <legend>Endereços do Devedor</legend>\n    <table class=\"table table-sm table-striped table-bordered\">\n      <thead class=\"title-table\">\n        <tr>\n          <th scope=\"col-4\">CEP</th>\n          <th scope=\"col-2\">Endereço</th>\n          <th scope=\"col-2\">Bairro</th>\n          <th scope=\"col-2\">Cidade</th>\n          <th scope=\"col-1\">UF</th>\n          <th scope=\"col-1\">Escolher</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let endereco of enderecos\">\n          <td width=\"2\">{{endereco.cep}}</td>\n          <td width=\"40\">{{endereco.endereco}}</td>\n          <td width=\"40\">{{endereco.bairro}}</td>\n          <td width=\"40\">{{endereco.cidade}}</td>\n          <td width=\"40\">{{endereco.estado}}</td>\n          <td width=\"40\" >\n            <button class=\"btn btn-success\"(click)=\"selecionaEndereco(endereco)\">Escolher esse endereço</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</div>\n<!-- MODAL RODAPÉ -->\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"finalizar()\">Finalizar Digitação</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--- HOME --->\n<main class=\"principal shadow\">\n  <p>Olá<strong class=\"upper-text\"> {{nome}}</strong>, seja bem vindo(a)! - {{data.dia}} de {{data.mes}} de {{data.ano}}.<br><br>\n\n    Flexibilidade e agilidade com tecnologia avançada definem o \"<strong>Web Protesto</strong>\", que foi criado com a missão de aproximar os cartórios do dia-a-dia de sua empresa ou negócios, transformando o tramite de protesto em um processo rápido, e simples.<br><br>\n      \n      Nos menus acima, disponibilizamos todas as ferramentas necessárias para digitação e controle dos seus títulos, inclusive com acompanhamento diário das baixas.<br><br>\n      \n      Tudo organizado de forma intuitiva e clara, para melhor utilização do site.</p>  \n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/informacoes-importantes/informacoes-importantes.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informacoes-importantes/informacoes-importantes.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInformacoesImportantesInformacoesImportantesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Atenção | Informações Importantes</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fechar Sem Salvar Dados\" size=\"2x\"></fa>\n    </td>\n  </button>\n</div>\n<div class=\"modal-body\" >\n  <div style=\"height: 400px; overflow-y: scroll;\" #divInfo>\n    <h3>O APRESENTANTE DECLARA TER PLENO CONHECIMENTO DAS SEGUINTES INFORMAÇÕES: </h3>\n    <p>1. O Apresentante declara estar ciente de que o fornecimento intencional de qualquer informação ou dados\n      inveridicos ou incorretos constantes do pedido de protesto, especialmente no que se refere aos números do CPF/CNPJ\n      e endereços (do credor e do devedor) acarretará sua responsabilidade civil por perdaS e danos materiais e morais e\n      também sua responsabilidade penal (vide art. 15, § 2°, da Lei n° 9.492/1997, abaixo transcrito). Art. 15 - § 2° -\n      Aquele que fornecer endereço incorreto, agindo de má-fé, responderá por perdas e danos, sem prejuízo de outras\n      sanções civis, administrativas ou penais.\n    </p>\n\n    <p>2. Quando apresentado para protesto cheque pagável fora da praça de competência territorial do Tabelionato, o\n      Apresentante deverá juntar comprovante idôneo que o emitente reside nesta Comarca.</p>\n\n    <p>3. Tratando-se de cheque emitido há mais de um ano, necessária a exibição de comprovante de endereço fornecido\n      pelo banco em papel timbrado e identificação do signatário, facultando-se ao Apresentante o fornecimento de outro\n      endereço devidamente comprovado, se declarar que o indicado pelo banco está desatualizado. Portanto, constando\n      outro endereço do devedor neste formulário que não o fornecido pelo banco, significará que o Apresentante está\n      declarando, sob as penas da Lei, que o endereço fornecido pelo banco está desatualizado, devendo prevalecer o\n      fornecido neste formulário.</p>\n\n    <p>4. O Apresentante deverá acompanhar (por telefone ou pela internet) a tramitação do pedido de protesto junto\n      ao Tabelionato ao qual foi distribuído o título ou documento de dívida. Sendo pago o título ou documento de\n      divida,\n      o valor será colocado à disposição doApresentante no primeiro dia útil subsequente ao do recebimento.</p>\n\n    <p>5. OS ENDEREÇOS DEVEM SER MANTIDOS ATUALIZADOS - Os endereços do Apresentante e da pessoa que levar o título ou\n      documento de dívida para ser protocolizado deverão ser mantidos atualizados junto ao Tabelionato ao qual for\n      distribuído o pedido do protesto.</p>\n\n    <p>6. TITULOS PAGOS DENTRO DO PRAZO NO TABELIONATO</p>\n\n    <p>6.1. Sendo pago o título ou documento de divida, o dinheiro ou o cheque de liquidação será colocado à disposição\n      do Apresentante no primeiro dia útil subsequente ao do recebimento, mas somente lhe será entregue mediante recibo\n      passado pelo Apresentante ou pessoa autorizada. Considera-se pessoa autorizada aquela que exibir a 2a via original\n      deste formulário constando o protocolo de apresentação a protesto.</p>\n\n    <p>6.2. A critério do Tabelião e desde que autorizado pelo Apresentante, o valor do título ou documento de dívida\n      poderá ser creditado, mediante depósito, em conta bancária indicada peloApresentante.\n    </p>\n\n    <p>6.3. O Tabelião poderá inutilizar, seis meses depois da data do pagamento, os títulos e os documentos de dívida\n      não retirados pelo devedor ou interessado.</p>\n\n    <p>7. RETIRADA SEM PROTESTO (DESISTÊNCIA) - Para retirar o título ou documento de dívida antes da lavratura do\n      protesto (desistência do protesto) é necessário pedido escrito do Apresentante, que será exibido no Tabelionato\n      competente juntamente com a 2a via original deste formulário.</p>\n\n\n    <p>8. TITULOS PROTESTADOS E DEVOLVIDOS POR IRREGULARIDADE - Os títulos e documentos de dívida protestados e\n      respectivos instrumentos de protesto, bem como os devolvidos por irregularidade formal permanecerão à disposição\n      dos interessados por dez anos, contados da protocolização. Findo esse prazo serão inutilizados independentemente\n      de prévia autorização.</p>\n\n    <p>9. TÍTULOS SUSTADOS JUDICIALMENTE - Os mandados e os títulos ou documentos de divida sustados judicialmente podem\n      ser inutilizados peio Tabelião, independentemente de prévia autorização, desde que conservados microfilmes ou\n      imagens gravadas por processo eletrônico e decorridos dez anos do recebimento da ordem judicial sem comunicação\n      sobre a resolução definitiva do processo. Sobrevindo ordem ulterior de protesto, o registro será efetuado à vista\n      da reprodução de microfilme ou da imagem gravada por processo eletrônico.</p>\n\n    <p>10. PROTESTO ESPECIAL PARA FINS FALIMENTARES - O protesto especial, para fins falimentares, deverá ser solicitado\n      por escrito no Tabelionato de protesto onde se situa o principal estabelecimento do devedor.</p>\n\n    <p>11. SEM DEPÓSITO PREVI() —Aapresentação a protesto está dispensada de depósito prévio dos emolumentos e despesas,\n      os quais serão devidos somente quando: a) da desistência do protesto; b) do pagamento ou aceite do título; c) do\n      cancelamento do protesto; e d) da sustação tornada definitiva. </p>\n\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <div class=\"mfooter-container\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"abrirProtesto()\" popover=\"Aceitar\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Aceitar</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" popover=\"Imprimir\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\" (click)=\"imprimirConteudo()\" >Imprimir</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\" popover=\"Cancelar\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cancelar</button>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Container for sidebar(s) + page content -->\n<ng-sidebar-container style=\"height: 100vh;\">\n\n  <!-- SIDEBAR -->\n  <ng-sidebar \n    [closeOnClickOutside]=\"'true'\"\n    [showBackdrop]=\"'true'\"\n    [mode]=\"'over'\"\n    [position]=\"'right'\"    \n    [(opened)]=\"_opened\">\n\n    <div class=\"cadastro-sidebar\">\n      <!-- CADASTRO -->\n      <form [formGroup]=\"formGroupCadastro\" class=\"sign-up\" (ngSubmit)=\"onSubmitCad()\">\n        <h2>NOVO USUÁRIO</h2>\n        <div class=\"form-group\">\n          <label for=\"InputEmail2\">Endereço de email</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control lower-text\" id=\"InputEmail2\"\n            aria-describedby=\"emailHelp\" placeholder=\"Digite seu email\" maxlength=\"50\"\n            [ngClass]=\"{ 'is-invalid': submittedCad && fCad.email.errors }\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Nunca vamos compartilhar seu email, com ninguém.</small>\n\n          <div *ngIf=\"submittedCad && fCad.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fCad.email.errors.required\">E-mail é obrigatório</div>\n            <div *ngIf=\"fCad.email.errors.email\">Digite um endereço de e-mail válido</div>\n          </div>\n\n          <div *ngIf=\"existeEmail\" class=\"invalid-feedback\">Email já está em uso</div>\n        </div>\n\n        <div class=\"form-check form-check-inline\">\n          <input type=\"radio\" formControlName=\"tipo\" value=\"CPF\" class=\"form-check-input lower-text\" id=\"Check1\"\n            name=\"tipo\" (click)=\"alteraValidator('CPF')\">\n          <label class=\"form-check-label\" for=\"Check1\">CPF</label>\n        </div>\n\n        <div class=\"form-check form-check-inline\">\n          <input type=\"radio\" formControlName=\"tipo\" value=\"CNPJ\" class=\"form-check-input lower-text\" id=\"Check2\"\n            name=\"tipo\" (click)=\"alteraValidator('CNPJ')\">\n          <label class=\"form-check-label\" for=\"Check2\">CNPJ</label>\n        </div>\n\n        <!-- CPF -->\n        <div *ngIf=\"fCad.tipo.value == 'CPF'\" class=\"form-group\">\n          <input formControlName=\"documento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n            aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n            [ngClass]=\"{ 'is-invalid': submittedCad && fCad.documento.errors }\" [textMask]=\"{mask: MASKS.cpf.textMask}\">\n          <div *ngIf=\"submittedCad && fCad.documento.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fCad.documento.errors.required\">Documento é obrigatório</div>\n            <div *ngIf=\"fCad.documento.errors.cpf\">O CPF digitado está inválido</div>\n            <div *ngIf=\"existeDocumento\">Documento digitado já está em uso</div>\n          </div>\n        </div>\n\n        <!-- CNPJ -->\n        <div *ngIf=\"fCad.tipo.value == 'CNPJ'\" class=\"form-group\">\n          <input formControlName=\"documento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n            aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n            [ngClass]=\"{ 'is-invalid': submittedCad && fCad.documento.errors }\"\n            [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n          <div *ngIf=\"submittedCad && fCad.documento.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fCad.documento.errors.required\">Documento é obrigatório</div>\n            <div *ngIf=\"fCad.documento.errors.cnpj\">O CNPJ digitado está inválido</div>\n            <div *ngIf=\"existeDocumento\">Documento digitado já está em uso</div>\n          </div>\n        </div>\n\n        <button class=\"btn btn-primary shadow btn-cadastro\" popover=\"Iniciar o cadastro no sistema\"\n        triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >Cadastro</button>\n      </form>\n    </div>    \n  </ng-sidebar>\n\n  <!-- PAGE CONTENT -->\n  <div ng-sidebar-content>\n    <div class=\"header\">\n      <div>\n        <button class=\"btn btn-outline-light shadow btn-cad\" (click)=\"_toggleSidebar()\"  popover=\"Iniciar o cadastro no sistema\"\n        triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cadastre-se</button>\n      </div>\n\n      <div class=\"inner-header\">\n        <h1>CENTRAL DISTRIBUIDORA DE</h1>\n        <span> TÍTULOS PARA PROTESTO</span>\n      </div>\n\n      <!-- ONDAS -->\n      <div>\n        <svg class=\"waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          viewBox=\"0 24 150 28\" preserveAspectRatio=\"none\" shape-rendering=\"auto\">\n          <defs>\n            <path id=\"gentle-wave\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\" />\n          </defs>\n          <g class=\"parallax\">\n            <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"0\" fill=\"rgba(255,255,255,0.7\" />\n            <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"3\" fill=\"rgba(255,255,255,0.5)\" />\n            <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"5\" fill=\"rgba(255,255,255,0.3)\" />\n            <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"7\" fill=\"#fff\" />\n          </g>\n        </svg>\n      </div>\n      <!-- FIM ONDAS-->\n\n    </div>\n    <!-- HEADER FIM -->\n\n\n    <!-- ÁREA DE LOGIN -->\n    <div class=\"login-container\">\n      <div class=\"ilustration-container\">\n        <img src=\"/assets/images/ilustration_sign_up.svg\">\n      </div>\n\n      <!-- LOGIN -->\n      <form [formGroup]=\"formGroupUsuario\" class=\"login\" (ngSubmit)=\"onSubmitUser()\">\n        <h2>JÁ SOU CADASTRADO</h2>\n        <div class=\"form-group\">\n          <label for=\"InputEmail\">Endereço de e-mail</label>\n          <input formControlName=\"email\" type=\"email\" class=\"lower-text form-email form-control\" id=\"InputEmail1\"\n            aria-describedby=\"emailHelp\" placeholder=\"Digite seu email\" maxlength=\"50\"\n            [ngClass]=\"{ 'is-invalid': submittedUser && fUser.email.errors }\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Nunca vamos compartilhar seu email, com ninguém.</small>\n          <div *ngIf=\"submittedUser && fUser.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fUser.email.errors.required\">E-mail é obrigatório</div>\n            <div *ngIf=\"fUser.email.errors.email\">Digite um endereço de e-mail válido</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"InputPassword\">Senha</label>\n          <input formControlName=\"senha\" type=\"password\" class=\"lower-text form-control\" id=\"InputPassword\"\n            placeholder=\"Digite sua Senha\" maxlength=\"6\"\n            [ngClass]=\"{ 'is-invalid': submittedUser && fUser.senha.errors }\" required>\n          <div *ngIf=\"submittedUser && fUser.senha.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fUser.senha.errors.required\">Senha é obrigatório</div>\n            <div *ngIf=\"fUser.senha.errors.minlength\">A Senha deve ter no mínimo 6 caracteres</div>\n          </div>\n        </div>\n\n        <div class=\"form-check-inline btn-login-cont\">\n          <button class=\"btn-login btn btn-primary shadow\" popover=\"Acessar o sistema\"\n          triggers=\"mouseenter:mouseleave\" placement=\"bottom\" [adaptivePosition]=\"false\" >Entrar</button>\n          <button (click)=\"validarEmail()\" type=\"submit\" class=\"btn-password btn btn-secondary shadow\" popover=\"Clique para resetar a senha de acesso\"\n          triggers=\"mouseenter:mouseleave\" placement=\"bottom\"  [adaptivePosition]=\"false\" >Esqueci a\n            Senha</button>\n\n        </div>\n\n        <div class=\"form-check-inline\">\n                  </div>\n      </form>\n\n    </div>\n\n\n    <!-- WEB FORMULÁRIO -->\n    <section class=\"web-form\">\n      <div class=\"web-form-overlay\">\n        <div class=\"title-container\">\n          <h2>WEB</h2> <span class=\"text-title\">PROTESTO</span>\n        </div>\n        <p class=\"text-destaque\">\n          O sistema Web Protesto é recomendável para usuários frequentes. <br>\n          Permite agilizar a apresentação de documentos de dívida para<br> protesto e disponibiliza ferramentas de\n          controle\n          em\n          nosso site.\n          <br>Caso pretenda apresentar apenas um documento,<br> utilize o formulário abaixo para agilizar o atendimento:\n        </p>\n        <div class=\"form-print\" (click)=\"openModal()\" popover=\"Digitar títulos utilizando o formulário eletrônico de protesto\"\n        triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >\n          <fa class=\"print\" name=\"print\" size=\"3x\"></fa>\n          <p>FORMULÁRIO </p>\n          <span class=\"text-print\">DE PROTESTO</span>\n        </div>\n      </div>\n    </section>\n\n    <!-- CARDS PARCEIROS -->\n    <section class=\"cards-container\">\n      <div class=\"title-cards\">\n        <h2>CARTÓRIOS DE </h2><span>PROTESTOS DE FRANCA - SP</span>\n      </div>\n      <div class=\"card-deck\">\n        <div class=\"card card1 shadow-drop-center\">\n          <img class=\"card-img-top\" src=\"/assets/images/image_card_1.png\" alt=\"Imagem 1° Oficial de Registro\">\n          <h3 class=\"card-title\">1° Oficial de Registro</h3>\n          <hr>\n          <p class=\"text-center\">Rua Washington Luis, 1901 - Boa Esperança Fone (16) 3712-4888</p>\n          <hr class=\"hr-down\">\n          <a href=\"http://www.1registrodefranca.com.br/\" target=\"_blank\" class=\"btn btn-outline-secondary\" popover=\"Consultar\"\n          triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >Consultar</a>\n        </div>\n\n        <div class=\"card card2 shadow-drop-center\">\n          <img class=\"card-img-top\" src=\"/assets/images/image_card_2.png\" alt=\"Imagem 1° Tabelião de Protesto\">\n          <h3 class=\"card-title\">1° Tabelião de Protesto</h3>\n          <hr>\n          <p class=\"text-center\">Rua Padre Anchieta, 1888 - Centro Franca Fone (16) 3722-0716</p>\n          <hr class=\"hr-down\">\n          <a href=\"http://www.1notasfranca.com.br/www.1notasfranca.com.br/index.html\" target=\"_blank\"\n            class=\"btn btn-outline-secondary\" popover=\"Consultar\"\n            triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >Consultar</a>\n        </div>\n\n        <div class=\"card card3 shadow-drop-center\">\n          <img class=\"card-img-top\" src=\"/assets/images/image_card_3.png\" alt=\"Imagem 2° Tabelião de Protesto\">\n          <h3 class=\"card-title\">2° Tabelião de Protesto</h3>\n          <hr>\n          <p class=\"text-center\">Rua Campos Salles, 1908 - Centro Franca Fone (16) 3722-2718</p>\n          <hr class=\"hr-down\">\n          <a href=\"http://www.contartnotariado.com.br/\" target=\"_blank\" class=\"btn btn-outline-secondary\" popover=\"Consultar\"\n          triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >Consultar</a>\n        </div>\n      </div>\n    </section>\n\n    <rodape></rodape>\n  </div>\n</ng-sidebar-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- HEADER -->\n<div class=\"header\">\n  <div class=\"inner-header\">\n    <nav class=\"menu-container\">\n      <ul class=\"menu\">\n        <li [routerLink]=\"'/home'\">\n          <p><a>HOME</a></p>\n        </li>\n\n        <li>\n          <div class=\"dropdown\">\n            <p class=\"drop-btn \" active>MEU CADASTRO</p>\n            <div class=\"dropdown-content\">\n              <a [routerLink]=\"['/atualizacao', idU]\">Atualizar Cadastro</a>\n              <a [routerLink]=\"'/adicional'\">Usuário Adicional</a>\n              <a [routerLink]=\"'/adesao'\">Termo de Adesão</a>\n              <a [routerLink]=\"'/senha'\">Alterar Minha Senha</a>\n            </div>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"dropdown\">\n            <p class=\"drop-btn \">MEUS TÍTULOS</p>\n            <div class=\"dropdown-content\">\n              <a href=\"#\" [routerLink]=\"'/titulos'\">Digitar Títulos</a>\n              <div>\n                <a class=\"dropdown-down\">\n                  <p class=\"drop-btn-dow\">Pesquisas</p>\n                  <div class=\"dropdown-content-down1\">\n                    <a [routerLink]=\"'/pesquisar-lotes'\">Pesquisar Lotes</a>\n                    <a [routerLink]=\"'/pesquisar-devedores'\">Pesquisar Devedores</a>\n                  </div>\n                </a>\n              </div>\n              <div>\n                <a class=\"dropdown-down\">\n                  <p class=\"drop-btn-dow\">Relatórios</p>\n                  <div class=\"dropdown-content-down2\">\n                    <a [routerLink]=\"'/posicao-titulos'\">Posição de Títulos</a>\n                    <a [routerLink]=\"'/posicao-titulos-devedor'\">Posição de Títulos Por Devedor</a>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </li>\n\n        <li [routerLink]=\"'/devedores'\">\n          <p><a>MEUS DEVEDORES</a></p>\n        </li>\n\n        <li (click)=\"sair()\">\n          <p><a>SAIR</a></p>\n        </li>\n      </ul>\n    </nav>\n\n    <div class=\"side-info\">\n      <fa name=\"user\" popover=\"Usuário logado\"\n      triggers=\"mouseenter:mouseleave\" size=\"2x\"></fa>\n      <p> {{ empresa.email }} </p>\n    </div>\n  </div>\n\n</div>\n<!-- HEADER FIM -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginaNaoEncontradaPaginaNaoEncontradaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pagina-nao-encontrada works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-devedores/pesquisar-devedores.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-devedores/pesquisar-devedores.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPesquisarDevedoresPesquisarDevedoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- PESQUISAR DEVEDORES -->\n<form class=\"devedores-container\">\n  <fieldset>\n    <legend>Pesquisar Devedores</legend>\n    <div class=\"form-group col-md-5\">\n      <label for=\"formGroupNameDev\">Nome do Devedor</label>\n      <input type=\"password\" class=\"form-control\" id=\"NameDev\" maxlength=\"8\" placeholder=\"\">\n    </div>\n\n    <div class=\"form-group col-md-5\">\n      <label for=\"formGroupDocument\">Documento</label>\n      <input type=\"password\" class=\"form-control\" id=\"formGroupDocument\" maxlength=\"8\" placeholder=\"\">\n    </div>\n\n    <div class=\"form-group col-md-5\">\n      <label for=\"inputOcorrencia\">Ocorrência</label>\n      <select id=\"inputOcorrencia\" class=\"form-control\">\n        <option selected>Todas</option>\n        <option>Em Aberto</option>\n        <option>Retirado</option>\n        <option>Pago Micro Empresa</option>\n        <option>Protestado</option>\n        <option>Sustado</option>\n        <option>Sustado Definitivo</option>\n        <option>Irregular</option>\n        <option>Título Aceito</option>\n        <option>Protesto Cancelado</option>\n        <option>Título Aceito</option>\n        <option>Digitado - Aguardando Apontamento</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-md-3\">\n      <button type=\"button\" class=\"btn-search-debt btn btn-primary shadow\" (click)=\"pesquisar()\">Pesquisar</button>\n    </div>\n\n  </fieldset>\n</form>\n\n<!-- TABELA -->\n<table *ngIf=\"mostrargrid\" class=\"table table-sm table-striped table-bordered\">\n  <thead class=\"title-table\">\n    <tr>\n      <th scope=\"col\">Dt. Digitação</th>\n      <th scope=\"col\">Espécie</th>\n      <th scope=\"col\">N° do Título</th>\n      <th scope=\"col\">Valor Original</th>\n      <th scope=\"col\">Valor a Protestar</th>\n      <th scope=\"col\">Devedore(es)</th>\n      <th scope=\"col\">Baixa</th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>01/01/2019</td>\n      <td>DS</td>\n      <td>33427</td>\n      <td>R$ 257,60</td>\n      <td>R$ 257,60</td>\n      <td>KATILENE CALCADOS CNPJ 06306174000163</td>\n      <td>PAGO</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Editar Título\" size=\"2x\"\n          [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td colspan=\"11\" scope=\"col\">\n        <nav aria-label=\"Navegação de página títulos\">\n          <ul class=\"pagination pagination-md\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Anterior</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Próximo</a></li>\n          </ul>\n        </nav>\n      </td>\n    </tr>\n  </tbody>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-lotes/pesquisar-lotes.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-lotes/pesquisar-lotes.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPesquisarLotesPesquisarLotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TÍTULOS APONTADOS -->\n<section class=\"lotes-container \">\n  <h2>Pesquisar Lotes de Títulos Apontados</h2>\n  <fieldset>\n    <legend>Critérios de Busca</legend>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3 form-inline\">\n        <label for=\"formGroupPeriodStard\">No Período de:</label>\n        <input type=\"date\" class=\"form-control\" id=\"Period\" maxlength=\"8\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-sm-3 form-inline\">\n        <label for=\"formGroupPeriodEnd\">Até:</label>\n        <input type=\"date\" class=\"form-control\" id=\"PeriodEnd\" maxlength=\"8\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3 form-inline\">\n        <label for=\"formGroupLoteStart\">Do Lote:</label>\n        <input type=\"text\" class=\"form-control form-lote\" id=\"LoteStart\" maxlength=\"8\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-3 form-inline\">\n        <label for=\"formGroupLoteEnd\">Até:</label>\n        <input type=\"text\" class=\"form-control form-lote\" id=\"LoteEnd\" maxlength=\"8\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-group mb-5 form-inline form-select\">\n      <label for=\"formGroupLotesEstado\">Status do Lote:</label>\n      <select id=\"inputEstado\" class=\"form-control fcontrol-target\">\n        <option selected>Todos os Lotes</option>\n        <option>Em Aberto</option>\n        <option>Fechado - Aguardando Entrega</option>\n        <option>Em Andamento</option>\n        <option>Resultado Disponível</option>\n        <option>Resultado Entregue</option>\n        <option>Rejeitado Distribuidor</option>\n      </select>\n    </div>\n\n    <div class=\"btn-search-ta\">\n      <button class=\"btn btn-primary btn-pesquisa-ta\" type=\"submit\" (click)=\"pesquisar()\">Pesquisar</button>\n    </div>\n  </fieldset>\n</section>\n\n\n<!-- TABELA -->\n<table *ngIf=\"mostrargrid\" class=\"table table-sm table-striped table-bordered\">\n  <thead class=\"title-table\">\n    <tr>\n      <th scope=\"col\">Lote </th>\n      <th scope=\"col\">Dt. Abertura</th>\n      <th scope=\"col\">Responsável</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Dt. Fechamento</th>\n      <th scope=\"col\">Qtde. Títulos</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME .</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n          [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td>0000</td>\n      <td>01/01/2019</td>\n      <td>ECOLIXO TRANSP. GESTAO AMB. EIRELI-ME</td>\n      <td>FECHADO - AGUARDANDO ENTREGA</td>\n      <td>01/01/2019</td>\n      <td>2</td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Exibir Títulos do Lote\" size=\"2x\"\n        [routerLink]=\"'/titulos-lote'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n\n    <tr>\n      <td colspan=\"11\" scope=\"col\">\n        <nav aria-label=\"Navegação de página títulos\">\n          <ul class=\"pagination pagination-md\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Anterior</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Próximo</a></li>\n          </ul>\n        </nav>\n      </td>\n    </tr>\n  </tbody>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosicaoTitulosDevedorPosicaoTitulosDevedorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- POSIÇÃO DE TÍTULOS -->\n<section class=\"ptitulos-container \">\n    <div class=\"ptitulos-container-sub\">\n    <div>\n      <h2>Posição de Títulos Apontados Por Devedor</h2>\n      <p><strong>Informe o período em que os títulos foram apontados e o documento do devedor para emissão do relatório.</strong>.</p>\n    </div>\n  \n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3 form-inline\">\n        <label for=\"formGroupStartIn\">Iniciar em:</label>\n        <input type=\"date\" class=\"form-control\" id=\"StartIn\" maxlength=\"8\" placeholder=\"\">\n      </div>\n  \n      <div class=\"form-group col-sm-3 form-inline\">\n        <label for=\"formGroupEndIn\">Finalizar em:</label>\n        <input type=\"date\" class=\"form-control\" id=\"formGroupEndIn\" maxlength=\"8\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-sm-3 form-inline\">\n          <label for=\"formGroupDocument\">Documento:</label>\n          <input type=\"text\" class=\"form-control\" id=\"Document\" maxlength=\"14\" placeholder=\"\">\n        </div>\n  \n      <div class=\"btn-search\">\n        <button class=\"btn btn-primary btn-pesquisa\" type=\"submit\">Aplicar Filtro</button>\n      </div>\n    </div>\n  \n    <div class=\"btn-print\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-print\" data-toggle=\"tooltip\"\n        OnClick=\"javascript:window.print();\" value=\"imprimir\" data-placement=\"bottom\"\n        title=\"Imprimir Termo de Adesão\">Imprimir</button>\n    </div>\n  </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos/posicao-titulos.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos/posicao-titulos.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosicaoTitulosPosicaoTitulosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- POSIÇÃO DE TÍTULOS -->\n<section class=\"ptitulos-container \">\n  <div class=\"ptitulos-container-sub\">\n    <div>\n      <h2>Posição de Títulos Apontados</h2>\n      <p><strong>Informe o período em que os títulos foram apontados para emissão do relatório.</strong>.</p>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3 form-inline\">\n        <label for=\"formGroupStart\">Iniciar em:</label>\n        <input type=\"date\" class=\"form-control\" id=\"Start\" maxlength=\"8\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-sm-3 form-inline\">\n        <label for=\"formGroupEnd\">Finalizar em:</label>\n        <input type=\"date\" class=\"form-control\" id=\"End\" maxlength=\"8\" placeholder=\"\">\n      </div>\n\n      <div class=\"btn-search\">\n        <button class=\"btn btn-primary btn-pesquisa\" type=\"submit\">Aplicar Filtro</button>\n      </div>\n    </div>\n\n    <!-- BUTTON IMPRESSÃO -->\n    <div class=\"btn-press\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"buttonPrint\" data-toggle=\"tooltip\"\n        OnClick=\"javascript:window.print();\" value=\"imprimir\" data-placement=\"bottom\"\n        title=\"Imprimir Termo de Adesão\">Imprimir</button>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/protesto.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/protesto.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProtestoProtestoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- FORMULÁRIO DE PROTESTO -->\n<form [formGroup]=\"fGroupTitulo\" class=\"form-container\">\n  <h2>Formulário de Protesto</h2>\n  <fieldset class=\"form-1\">\n    <legend>1. Dados do Apresentante/Credor</legend>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputName\">Nome do Credor <b>(Sem Abreviações)</b></label>\n        <input type=\"text\" formControlName=\"nomeCredor\" maxlength=\"50\" class=\"form-control\" id=\"inputEmissor\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.nomeCredor.errors }\">\n        <div *ngIf=\"submitted && fTitulo.nomeCredor.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.nomeCredor.errors.required\">Nome do Credor é obrigatório</small>\n          <small *ngIf=\"fTitulo.nomeCredor.errors.minlength\">Nome do Credor deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputName\">Email</label>\n        <input type=\"email\" formControlName=\"email\" maxlength=\"50\" class=\"form-control lower-text\" id=\"inputEmail\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.email.errors }\">\n          <div *ngIf=\"submitted && fTitulo.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fTitulo.email.errors.email\">Digite um endereço de e-mail válido</div>\n          </div>\n      </div>\n\n      <div class=\"form-group col-md-2\" (click)=\"atualizaTipo()\">\n        <label for=\"inputTypeDocument\">Tipo Doc.</label>\n        <select (change)=\"alteraValidator($event)\" formControlName=\"tipo\" (blur)=\"atualizaTipo()\" class=\"custom-select \"\n          id=\"inputGroupSelect01\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.tipo.errors }\">\n          <option value=\"CPF\">CPF</option>\n          <option value=\"CNPJ\">CNPJ</option>\n        </select>\n        <div *ngIf=\"submitted && fTitulo.tipo.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.tipo.errors.required\">Documento é obrigatório</small>\n        </div>\n      </div>\n\n      <!-- CPF -->\n      <div *ngIf=\"fTitulo.tipo.value == 'CPF'\" class=\"form-group col-md-2\">\n        <label for=\"NumberDocument1\">N° do CPF</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument1\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cpf.textMask}\">\n        <div *ngIf=\"submitted && fTitulo.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.cpf\">O CPF digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- CNPJ  -->\n      <div *ngIf=\"fTitulo.tipo.value == 'CNPJ'\" class=\"form-group col-md-2\">\n        <label for=\"NumberDocument2\">N° do CNPJ</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument2\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n        <div *ngIf=\"submitted && fTitulo.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fTitulo.numeroDocumento.errors.cnpj\">O CNPJ digitado está inválido</small>\n        </div>\n      </div>\n\n      <!-- <div class=\"form-group col-md-2\">\n        <label for=\"inputNumber\">Nº Documento</label>\n        <input formControlName=\"numeroDocumento\" type=\"tel\" maxlength=\"18\" class=\"form-control\" id=\"inputNumero\" placeholder=\"\">\n      </div> -->\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputNumberRg\">RG</label>\n        <input formControlName=\"rg\" maxlength=\"14\" type=\"text\" class=\"form-control lower-text\" id=\"inputNumeroRg\"\n          placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputNumberTel\">Telefone</label>\n        <input type=\"text\" formControlName=\"telefone\" maxlength=\"15\" class=\"form-control\" id=\"inputNumeroTel\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.telefone.errors }\">\n        <div *ngIf=\"submitted && fTitulo.telefone.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.telefone.errors.required\">Telefone é obrigatório</small>\n          <small *ngIf=\"fTitulo.telefone.errors.minlength\">Digite um n° de telefone válido</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputCepNumber\">CEP</label>\n        <input type=\"text\" formControlName=\"cep\" class=\"form-control\" id=\"inputCepNumero\" placeholder=\"\"\n          pattern=\"^\\d{5}-\\d{3}$\" [textMask]=\"{mask: CEP}\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.cep.errors }\">\n        <div *ngIf=\"submitted && fTitulo.cep.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.cep.errors.required\">Cep é obrigatório</small>\n          <small *ngIf=\"fTitulo.cep.errors.minlength\">Digite um cep válido</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2 btn-cep\">\n        <button (click)=\"buscarCEPTitulo()\" class=\"btn btn-primary btn-atualizacao\" type=\"submit\" popover=\"Localizar Endereço\"\n        triggers=\"mouseenter:mouseleave\" >Buscar</button>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAdress\">Endereço</label>\n        <input formControlName=\"endereco\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputEndereco\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.endereco.errors }\">\n        <div *ngIf=\"submitted && fTitulo.endereco.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.endereco.errors.required\">Endereço é obrigatório</small>\n          <small *ngIf=\"fTitulo.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressNumber\">Número</label>\n        <input type=\"tel\" formControlName=\"numero\" maxlength=\"7\" class=\"form-control\" id=\"inputEnderecoNumero\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numero.errors }\">\n        <div *ngIf=\"submitted && fTitulo.numero.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.numero.errors.required\">Número é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressComplement\">Complemento</label>\n        <input type=\"text\" formControlName=\"complemento\" maxlength=\"20\" class=\"form-control\"\n          id=\"inputEnderecoComplemento\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAdressB\">Bairro</label>\n        <input type=\"text\" formControlName=\"bairro\" maxlength=\"50\" class=\"form-control\" id=\"inputEnderecoBairro\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.bairro.errors }\">\n        <div *ngIf=\"submitted && fTitulo.bairro.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.bairro.errors.required\">Bairro é obrigatório</small>\n          <small *ngIf=\"fTitulo.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressCity\">Cidade</label>\n        <input type=\"text\" formControlName=\"cidade\" maxlength=\"50\" class=\"form-control\" id=\"inputEnderecoCidade\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.cidade.errors }\">\n        <div *ngIf=\"submitted && fTitulo.cidade.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.cidade.errors.required\">Cidade é obrigatório</small>\n          <small *ngIf=\"fTitulo.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputState\">Estado</label>\n        <select formControlName=\"estado\" class=\"custom-select\" id=\"inputEstado\"\n          [ngClass]=\"{ 'is-invalid': submitted && fTitulo.estado.errors }\">\n          <option value=\"null\">UF</option>\n          <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n        </select>\n        <div *ngIf=\"submitted && fTitulo.estado.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fTitulo.estado.errors.required\">Estado é obrigatório</small>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"opcao1\" name=\"mostrarform\" (click)=\"pagamento()\">\n        <label class=\"form-check-label\" for=\"gridCheck\">\n          <strong>Em caso de pagamento, o Tabelião poderá creditar o valor em conta bancária do apresentante.<br>\n            Portanto,\n            fica autorizado o depósito na conta do apresentante indicado.\n          </strong>\n        </label>\n      </div>\n\n      <div *ngIf=\"mostrarform\" class=\"form-group col-md-6\">\n        <label for=\"inputState\">Banco</label>\n        <select formControlName=\"banco\" class=\"custom-select\" id=\"inputEstado\">\n          <option selected=\"selected\" value=\"null\">Selecione...</option>\n          <option *ngFor=\"let nomeBanco of bancos\" [(value)]=\"nomeBanco\">{{nomeBanco}}</option>\n        </select>\n      </div>\n\n      <div *ngIf=\"mostrarform\" class=\"form-group col-md-2\">\n        <label for=\"inputAgency\">Agência s/ Dígito</label>\n        <input formControlName=\"agencia\" maxlength=\"15\" type=\"text\" class=\"form-control lower-text\" id=\"inputAgencia\"\n          placeholder=\"\">\n      </div>\n\n      <div *ngIf=\"mostrarform\" class=\"form-group col-md-2\">\n        <label for=\"inputCountNumber\">Nº da Conta c/ Dígito</label>\n        <input formControlName=\"conta\" maxlength=\"15\" type=\"text\" class=\"form-control lower-text\" id=\"inputNumeroConta\"\n          placeholder=\"\">\n      </div>\n    </div>\n  </fieldset> <!-- FIM FORM-DADOS CREDOR-->\n\n\n  <!-- FORM DADOS TÍTULO -->\n  <fieldset class=\"form-2\">\n    <div class=\"form-row\">\n      <legend>2. Dados do Título</legend>\n      <div class=\"form-row\">\n\n        <div class=\"form-group col-md-4\" (click)=\"verificaCheque()\" (blur)=\"verificaCheque()\">\n          <label for=\"inputData\">Espécie do Título</label>\n          <select formControlName=\"siglaEspecie\" (click)=\"verificaCheque()\" (blur)=\"verificaCheque()\"\n            class=\"custom-select\" id=\"inputDados\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.siglaEspecie.errors }\">\n            <option *ngFor=\"let especie of especies\" [(value)]=\"especie.sigla\">{{especie.especie}}</option>\n          </select>\n          <div *ngIf=\"submitted && fTitulo.siglaEspecie.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.siglaEspecie.errors.required\">Espécie é obrigatório</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputTypeP\">Tipo de Protesto</label>\n          <select formControlName=\"tipoProtesto\" class=\"custom-select\" id=\"inputTipoProtesto\">\n            <option value=\"COMUM\">COMUM</option>\n            <option value=\"FALIMENTAR\">FALIMENTAR</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-sm-3\">\n          <label for=\"inputLocalPayment\">Praça de Pagamento</label>\n          <select formControlName=\"pracaPagamento\" class=\"custom-select\" id=\"inputPracaPagamento\">\n            <option value=\"FRANCA\">FRANCA</option>\n            <option value=\"RESTINGA\">RESTINGA</option>\n            <option value=\"CRISTAIS PAULISTA\">CRISTAIS PAULISTA</option>\n            <option value=\"RIBEIRÃO CORRENTE\">RIBEIRÃO CORRENTE</option>\n            <option value=\"SÃO JOSÉ DA BOA VISTA\">SÃO JOSÉ DA BOA VISTA</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-sm-2\">\n          <label for=\"inputDateEmission\">Data de Emissão</label>\n          <input formControlName=\"dataEmissao\" type=\"text\" class=\"form-control\" id=\"inputDataEmissao\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.dataEmissao.errors }\" [textMask]=\"{mask: mask}\">\n          <div *ngIf=\"submitted && fTitulo.dataEmissao.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.dataEmissao.errors.required\">Emissão é obrigatório</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-sm-2\">\n          <label for=\"inputDateExpiration\">Vencimento</label>\n          <input formControlName=\"vencimento\" [attr.disabled]=\"titulo.siglaEspecie == 'CH'\" type=\"text\"\n            class=\"form-control\" id=\"inputDataExpericao\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.vencimento.errors }\" [textMask]=\"{mask: mask}\">\n          <div *ngIf=\"submitted && fTitulo.vencimento.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.vencimento.errors.required\">Vencimento é obrigatório</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-sm-2\">\n          <label for=\"inputTitleNumber\">Número do Título</label>\n          <input type=\"tel\" formControlName=\"numeroTitulo\" maxlength=\"30\" class=\"form-control\" id=\"inputNumeroTitulo\"\n            placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fTitulo.numeroTitulo.errors }\">\n          <div *ngIf=\"submitted && fTitulo.numeroTitulo.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.numeroTitulo.errors.required\">Nº do título é obrigatório</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-sm-1\">\n          <label for=\"inputLine\">Alínea</label>\n          <input type=\"text\" maxlength=\"2\" formControlName=\"alinea\" [attr.disabled]=\"titulo.siglaEspecie != 'CH'\"\n            class=\"form-control\" id=\"inputAlinea\" placeholder=\"\">\n        </div>\n\n        <div class=\"form-group col-sm-2\">\n          <label for=\"inputOriginalValue\">Valor Original do Título</label>\n          <input type=\"text\" formControlName=\"valorOriginalTitulo\" maxlength=\"15\" currencyMask\n            [options]=\"{align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control\"\n            id=\"inputValorOriginal\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.valorOriginalTitulo.errors }\">\n          <div *ngIf=\"submitted && fTitulo.valorOriginalTitulo.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.valorOriginalTitulo.errors.required\">Valor é obrigatório</small>\n            <small *ngIf=\"fTitulo.valorOriginalTitulo.errors.minlength\">O valor deve ser maior que R$ 1,00</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-sm-2\">\n          <label for=\"inputValueProtest\">Valor a Protestar</label>\n          <input type=\"text\" formControlName=\"valorProtesto\" maxlength=\"15\" currencyMask\n            [options]=\"{align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\" class=\"form-control\"\n            id=\"inputValorProtesto\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fTitulo.valorProtesto.errors }\">\n          <div *ngIf=\"submitted && fTitulo.valorProtesto.errors\" class=\"invalid-feedback\">\n            <small *ngIf=\"fTitulo.valorProtesto.errors.required\">Valor é obrigatório</small>\n            <small *ngIf=\"fTitulo.valorProtesto.errors.valorPermitido\">O valor deve ser maior que R$ 1,00</small>\n          </div>\n        </div>\n\n        <div class=\"form-group col-sm-2\" (click)=\"verificaEndosso()\">\n          <label for=\"inputEndorsement\">Endosso</label>\n          <select formControlName=\"endosso\" (blur)=\"verificaEndosso()\" class=\"custom-select\" id=\"inputEndosso\">\n            <option value=\"SEM ENDOSSO\">SEM ENDOSSO</option>\n            <option value=\"MANDATO\">MANDATO</option>\n            <option value=\"TRANSLATIVO\">TRANSLATIVO</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div *ngIf=\"endosso\" class=\"form-group col-md-2\">\n        <label for=\"inputValueProtest\">Tp. Documento</label>\n        <select formControlName=\"tipoDocumentoEndossante\" class=\"custom-select\" id=\"inputEndosso\">\n          <option value=\"CPF\" selected>CPF</option>\n          <option value=\"CNPJ\">CNPJ</option>\n        </select>\n      </div>\n\n      <div *ngIf=\"endosso\" class=\"form-group col-md-2\">\n        <label for=\"inputAgency\">Nº Documento</label>\n        <input formControlName=\"documentoEndossante\" type=\"text\" maxlength=\"18\" class=\"form-control\" id=\"inputAgencia\"\n          placeholder=\"\">\n      </div>\n\n      <div *ngIf=\"endosso\" class=\"form-group col-md-6\">\n        <label for=\"inputCountNumber\">Endossante</label>\n        <input formControlName=\"endossante\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputNumeroConta\"\n          placeholder=\"\">\n      </div>\n    </div>\n  </fieldset> <!-- FIM FORM-DADOS TÍTULO-->\n</form>\n\n\n<!-- FORM DEVEDORES -->\n<form [formGroup]=\"fGroupDevedores\" class=\"form-container\">\n  <fieldset class=\"form-3\">\n    <legend>3. Devedor(es)</legend>\n    <!--ICONES-->\n    <div class=\"form-row\">\n      <button class=\"btn btn-primary btn-create\" (click)=\"mostrarForm()\" *ngIf=\"!mostraForm\" popover=\"Adicionar Devedor\"\n      triggers=\"mouseenter:mouseleave\" placement=\"right\">Criar Devedores</button>\n    </div>\n    \n    <div class=\"form-row\">\n      <table *ngIf=\"devedores.length > 0 && !alterando\" class=\"table table-sm table-striped table-bordered\">\n        <thead class=\"title-table\">\n          <tr>\n            <th scope=\"col\">Nome</th>\n            <th scope=\"col\">Documento</th>\n            <th scope=\"col\">Telefone</th>\n            <th scope=\"col\">Cidade</th>\n            <th scope=\"col\" name=\"alterar\" popover=\"Alterar devedor\"\n            triggers=\"mouseenter:mouseleave\" ></th>\n            <th scope=\"col\" name=\"trash\" popover=\"Excluir devedor\"\n            triggers=\"mouseenter:mouseleave\" ></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let devedor of devedores\">\n            <td width=\"70\" scope=\"row\">{{devedor.nomeDevedor}}</td>\n            <td width=\"60\">{{devedor.numeroDocumento}}</td>\n            <td width=\"50\">{{devedor.telefone}}</td>\n            <td width=\"70\">{{devedor.cidade}}</td>\n            <td width=\"20\" class=\"table-icon\"\n              scope=\"col-1\" width=\"40\" class=\"table-icon\">\n              <fa name=\"pencil\" popover=\"Editar devedor\"\n              triggers=\"mouseenter:mouseleave\" placement=\"bottom\" size=\"2x\" (click)=\"carregaDevedor(devedor)\">\n              </fa>\n            </td>\n            <td width=\"20\"\n              scope=\"col-1\" width=\"40\" class=\"table-icon\">\n              <fa name=\"trash\" popover=\"Excluir devedor\"\n              triggers=\"mouseenter:mouseleave\" placement=\"bottom\" size=\"2x\"\n                (click)=\"excluirDev(devedor)\"></fa>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"form-row\" *ngIf=\"mostraForm\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputDebtorName\">Nome do Devedor <b>(Sem Abreviaçãoes)</b></label>\n        <input formControlName=\"nomeDevedor\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputNomeDevedor\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.nomeDevedor.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.nomeDevedor.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.nomeDevedor.errors.required\">Nome do devedor é obrigatório</small>\n          <small *ngIf=\"fDevedor.nomeDevedor.errors.minLength\">O tamanho mínimo do devedor é 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\" (click)=\"atualizaTipoDevedor()\">\n        <label for=\"inputCity\">Tp. Documento</label>\n        <select formControlName=\"tipoDocumento\" (change)=\"alteraValidator2($event)\" (blur)=\"atualizaTipoDevedor()\"\n          id=\"inputEstado\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.tipoDocumento.errors }\">\n          <option value=\"CNPJ\">CNPJ</option>\n          <option value=\"CPF\">CPF</option>\n        </select>\n        <div *ngIf=\"submittedDevedor && fDevedor.tipoDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.tipoDocumento.errors.required\">Documento é obrigatório</small>\n        </div>\n      </div>\n\n      <!-- CPF -->\n      <div *ngIf=\"fDevedor.tipoDocumento.value == 'CPF'\" class=\"form-group col-md-2\">\n        <label for=\"NumberDocument2\">N° do CPF</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CPF\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cpf.textMask}\">\n        <div *ngIf=\"submittedDevedor && fDevedor.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.cpf\">O CPF digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- CNPJ  -->\n      <div *ngIf=\"fDevedor.tipoDocumento.value == 'CNPJ'\" class=\"form-group col-md-2\">\n        <label for=\"NumberDocument2\">N° do CNPJ</label>\n        <input formControlName=\"numeroDocumento\" class=\"form-control lower-text\" id=\"NumberDocument\"\n          aria-describedby=\"emailHelp\" placeholder=\"N° do CNPJ\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.numeroDocumento.errors }\"\n          [textMask]=\"{mask: MASKS.cnpj.textMask}\">\n        <div *ngIf=\"submittedDevedor && fDevedor.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.required\">Documento é obrigatório</small>\n          <small *ngIf=\"fDevedor.numeroDocumento.errors.cnpj\">O CNPJ digitado está inválido</small>\n        </div>\n      </div>\n\n\n      <!-- <div class=\"form-group col-md-2\">\n        <label for=\"inputDebtorName\">N° Documento</label>\n        <input formControlName=\"numeroDocumento\" type=\"tel\" maxlength=\"15\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\" [ngClass]=\"{ 'is-invalid': submitted && fDevedor.numeroDocumento.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.numeroDocumento.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"fDevedor.numeroDocumento.errors.required\">Número do documento é obrigatório</div>\n          <div *ngIf=\"fDevedor.numeroDocumento.errors.minLength\"></div>\n        </div>\n      </div> -->\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputRgNumber\">RG</label>\n        <input formControlName=\"numeroDocumento2\" maxlength=\"14\" type=\"text\" class=\"form-control\" id=\"inputRg\"\n          placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputTelephone\">Telefone</label>\n        <input formControlName=\"telefone\" type=\"tel\" minlength=\"8\" maxlength=\"15\" class=\"form-control\"\n          id=\"inputTelefone\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputCepNumber\">CEP</label>\n        <input formControlName=\"cep\" type=\"text\" class=\"form-control\" id=\"inputCep\" pattern=\"^\\d{5}-\\d{3}$\"\n          [textMask]=\"{mask: CEP}\" placeholder=\"\" \n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.cep.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.cep.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.cep.errors.required\">Cep é obrigatório</small>\n          <small *ngIf=\"fDevedor.cep.errors.minlength\">Digite um cep válido</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2 btn-cep\">\n        <button class=\"btn btn-primary btn-atualizacao\" (click)=\"buscarCEPDevedor()\" type=\"submit\" popover=\"Localizar Endereço\"\n        triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Buscar</button>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAdress\">Endereço</label>\n        <input formControlName=\"endereco\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputEndereco\"\n          placeholder=\"\" [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.endereco.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.endereco.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.endereco.errors.required\">Endereço é obrigatório</small>\n          <small *ngIf=\"fDevedor.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdress\">Número</label>\n        <input formControlName=\"numero\" type=\"tel\" maxlength=\"7\" class=\"form-control\" id=\"inputNumber\" placeholder=\"\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.numero.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.numero.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.numero.errors.required\">Número é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputComplement\">Complemento</label>\n        <input formControlName=\"complemento\" type=\"text\" maxlength=\"20\" class=\"form-control\" id=\"inputComplemento\"\n          placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputNeighborhood\">Bairro</label>\n        <input type=\"text\" formControlName=\"bairro\" maxlength=\"50\" class=\"form-control\" id=\"inputBairro\" placeholder=\"\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.bairro.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.bairro.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.bairro.errors.required\">Bairro é obrigatório</small>\n          <small *ngIf=\"fDevedor.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputCity\">Cidade</label>\n        <input type=\"text\" formControlName=\"cidade\" maxlength=\"50\" class=\"form-control\" id=\"inputCidade\" placeholder=\"\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.cidade.errors }\">\n        <div *ngIf=\"submittedDevedor && fDevedor.cidade.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.cidade.errors.required\">Cidade é obrigatório</small>\n          <small *ngIf=\"fDevedor.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputCity\">Estado</label>\n        <select formControlName=\"estado\" id=\"inputEstado\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submittedDevedor && fDevedor.estado.errors }\">\n          <option value=\"null\">UF</option>\n          <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n        </select>\n        <div *ngIf=\"submittedDevedor && fDevedor.estado.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fDevedor.estado.errors.required\">Estado é obrigatório</small>\n        </div>\n      </div>\n    </div>\n  </fieldset> <!-- FIM FORM-DEVEDORES-->\n  <div class=\"btn-wrapper\">\n    <button class=\"btn btn-primary btn-save\" *ngIf=\"criandoDevedores && mostraForm\" (click)=\"salvaDevedor()\"\n      type=\"submit\" popover=\"Salvar devedor\"\n      triggers=\"mouseenter:mouseleave\" placement=\"bottom\" >\n      Salvar\n    </button>\n    <button class=\"btn btn-secondary btn-cancel\" (click)=\"cancelar()\" *ngIf=\"mostraForm\" popover=\"Cancelar\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cancelar</button>\n  </div>\n\n  <div class=\"btn-wrapper\" *ngIf=\"!mostraForm\" >\n    <button class=\"btn btn-primary btn-save-dev\" *ngIf=\"devedores.length > 0\"  (click)=\"validaTitulo()\" type=\"submit\" popover=\"Continuar digitação\"\n      triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Avançar digitação</button>\n    <button *ngIf=\"!mostraBtn && devedores.length > 0\" class=\"btn btn-secondary btn-cancel-dev1\" [routerLink]=\"'/'\" type=\"submit\" popover=\"Cancelar digitação e sair da página\"\n      triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cancelar digitação</button>\n    <button *ngIf=\"escondeBtn\" class=\"btn btn-secondary btn-cancel-dev2\" [routerLink]=\"'/'\" type=\"submit\" popover=\"Cancelar digitação e sair da página\"\n    triggers=\"mouseenter:mouseleave\" placement=\"bottom\">Cancelar digitação</button>\n  </div>\n\n  <div class=\"info-container\">\n    <div class=\"info-item-1\">\n      <h3>Sem Depósito</h3>\n      <p>As custas/emolumentos serão pagas quando:</p>\n      <ol>\n        <li>1. Da desistência do protesto</li>\n        <li> 2. Do pagamento do título </li>\n        <li>3. Do aceite do título</li>\n        <li>4. Do cancelamento do protesto </li>\n        <li>5. Da sustação judicial definitiva </li>\n      </ol>\n    </div>\n\n    <div class=\"info-item-2\">\n      <h3>PARA RETIRAR O TÍTULO ANTES DA LAVRATURA DO PROTESTO<br>\n        É NECESSÁRIO OFICIO DO PORTADOR EM PAPEL TIMBRADO<br>\n        JUNTO COM ESTE PROTOCOLO.</h3>\n    </div>\n\n\n    <div class=\"info-item-3\">\n      <p><strong>OBRIGATÓRIO A APRESENTAÇÃO DO R.G. (ORIGINAL OU CÓPIA) DO CREDOR E DO PORTADOR</strong></p>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProtestoSubFormularioImpressaoFormularioProtestoImpressaoFormularioProtestoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- REQUERIMENTO DE PROTESTO -->\n\n<section class=\"requeriment\" #divRequeriment style=\"box-sizing: border-box;\">\n  <div class=\"requeriment-body\">\n    <div class=\"requeriment-header\">\n      <h2 style=\"font: bold 14px Arial; border-bottom: 1px solid; padding-bottom: 10px; text-align: center;\">FORMULÁRIO DE APRESENTAÇÃO A\n        PROTESTO DE TÍTULO OU DOCUMENTO DE DÍVIDA</h2>\n\n      <p style=\"float: left; margin: 10px 0 0 10px;\">\n        Cendival Disdivibuidora de Títulos para Protesto de Franca<br>\n        AVENIDA MAJOR NICACIO, Nº 1836 - CENdivO - FRANCA - SP.<br>\n        Tel.: (16) 3724-4878.<br>\n        Horário de Atendimento: de segunda a sexta-feira das 12:00h às 16:00h.\n      </p>\n      <div style=\"float: right; margin: 0 10px 0 0; \">\n        <ngx-barcode [bc-value]=\"barcode\" [bc-height]=\"50\" [bc-display-value]=\"true\"></ngx-barcode>\n      </div>\n    </div>\n\n    <!-- GRADE REQUERIMENTO -->\n    <div style=\"clear: both; float:left; border: 1px solid;\">\n\n      <div class=\"container\">\n        <div class=\"row\" style=\"height: 45px;\">\n          <div style=\"width: 100%; float: left; height: 100%;\">\n            <label style=\"float: left; padding: 5px;\">O apresentante abaixo qualificado requer o apontamento a protesto do\n              título/documento de\n              dívida abaixo, nos termos da lei nº 9.492, de 10 de setembro de 1997, informando para tanto os seguintes\n              dados:</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 80%; height: 100%; float: left; border: 1px solid; border-right: none; border-left: none;\">\n            <label style=\"float: left; padding-left: 5px;\">Credor / Apresentante:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.nomeCredor}} </p>\n          </div>\n          <div style=\"width: 136px;  height: 100%; float: left; border: 1px solid; border-right: none;\">\n            <label style=\"float: left; padding-left: 5px;\">Telefone:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.telefone}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 50%; float: left; height: 100%; border: 1px solid; border-right: none; border-left: none;\">\n            <label style=\"float: left; padding-left: 5px;\">RG:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.rg}}</p>\n          </div>\n          <div style=\"width: 49.5%; float: left; height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\">CPF/CNPJ:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.numeroDocumento}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\"> \n          <div style=\"width: 100%; float: left; height: 100%; \">\n            <label  style=\"float: left; padding-left: 5px;\">Endereço:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.endereco}}, {{titulo.dados.numero}} {{titulo.dados.complemento}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"float: left; width: 18.5%; height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\">CEP:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.cep}}</p>\n          </div>\n          <div  style=\"float: left; width: 35%; height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\" >Bairro:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.bairro}}</p>\n          </div>\n          <div style=\"float: left; width: 35%; height: 100%; border: 1px solid;\" >\n            <label style=\"float: left; padding-left: 5px;\">Cidade:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.cidade}}</p>\n          </div>\n          <div  style=\"float: left; width: 10%; height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\">UF:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.estado}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%; float: left; height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\">E-mail:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.email}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 25px;\">\n          <div style=\"width: 100%; float: left; height: 100%; border: 1px solid; text-align: center;  padding-top: 5px;\">\n            <label  style=\"width: 100%;\">DADOS DO TÍTULO OU DOCUMENTO DE DÍVIDA</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%; float: left; height: 100%;\">\n            <label  style=\"float: left; padding-left: 5px;\">Tipo de Protesto:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.tipoProtesto}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 9%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Espécie</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.siglaEspecie}}</p>\n          </div>\n          <div style=\"width: 16%;  float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Número do Título</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.numeroTitulo}}</p>\n          </div>\n          <div style=\"width: 12%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Emissão</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.dataEmissao}}</p>\n          </div>\n          <div style=\"width: 12%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Vencimento</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.vencimento}}</p>\n          </div>\n          <div style=\"width: 14%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Valor Original</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">R$ {{titulo.dados.valorOriginalTitulo}},00</p>\n          </div>\n          <div style=\"width: 16%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Valor a Protestar</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">R$ {{titulo.dados.valorProtesto}},00</p>\n          </div>\n          <div style=\"width: 16%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Endosso</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{titulo.dados.endosso}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 25px;\">\n          <div style=\"width: 100%; float: left; height: 100%; text-align: center; padding-top: 5px;\">\n            <label style=\"width: 100%; float: left;\">DADOS DO(S) DEVEDOR(ES)</label>\n            <p></p>\n          </div>\n        </div>\n\n        <span *ngFor=\"let devedor of devedores; let idx = index\">        \n          <div class=\"row\" style=\"height: 35px;\">\n            <div style=\"width: 60%; height: 35px; float: left; height: 100%; border: 1px solid; border-left: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">Devedor {{ idx + 1 }} </label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ devedor.nomeDevedor }}</p>\n            </div>\n            <div style=\"width: 20%;  float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">CPF/CNPJ:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.numeroDocumento}}</p>\n            </div>\n            <div style=\"width: 15%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">RG:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.numeroDocumento2}}</p>\n            </div>\n          </div>\n\n\n          <div class=\"row\" style=\"height: 35px;\">\n            <div style=\"width: 50%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">Endereço:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.endereco}}, {{devedor.numero}} {{devedor.complemento}}</p>\n            </div>\n            <div style=\"width: 48.5%;  float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px; \">Bairro:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.bairro}}</p>\n            </div>\n          </div>\n\n\n          <div class=\"row\" style=\"height: 35px;\">\n            <div style=\"width: 15%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">CEP:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.cep}}</p>\n            </div>\n            <div style=\"width: 40%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">Cidade:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.cidade}}</p>\n            </div>\n            <div style=\"width: 10%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">UF:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.estado}}</p>\n            </div>\n            <div style=\"width: 18.5%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n              <label  style=\"float: left; padding-left: 5px;\">Telefone:</label>\n              <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{devedor.telefone}}</p>\n            </div>\n          </div>\n        </span>\n\n        <div class=\"row\" style=\"height: 60px;\">\n          <div style=\"width: 100%; float: left; height: 100%;\">\n            <label style=\"float: left; padding-left: 5px;\">Outras Informações: Documento pagável em FRANCA (SP). Os dados fornecidos são de\n              responsabilidade do apresentante.\n               O Apresentante declara que conferiu os dados ora fornecidos e que tem\n              pleno conhecimento das informações constantes no endereço: \n              <a href=\"http://titulosdefranca.com.br/\">http://titulosdefranca.com.br/</a>.</label>\n            <p>\n            </p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 25px;\">\n          <div style=\"width: 100%; float: left; height: 100%; border: 1px solid; text-align: center; padding-top: 5px;\">\n            <label  style=\"width: 100%; float: left;\">REPRESENTANTE LEGAL / PROCURADOR</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%; float: left; height: 100%; border: 1px solid;\">\n            <label  style=\"float: left; padding-left: 5px;\">Nome do Representante Legal ou Procurador</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ representante.nomeRepresentante }}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 50%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">RG</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.rg}}</p>\n          </div>\n          <div style=\"width: 48.5%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">CPF:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.cpfRepresentante}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%; float: left;  height: 100%;\">\n            <label  style=\"float: left; padding-left: 5px;\">Endereço:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.endereco}}, {{representante.numero}} {{representante.complemento}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 18%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">CEP:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.cep}}</p>\n          </div>\n          <div style=\"width: 35%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Bairro:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.bairro}}</p>\n          </div>\n          <div style=\"width: 35%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Cidade:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.cidade}}</p>\n          </div>\n          <div style=\"width: 10%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">UF:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{representante.estado}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%;  float: left; height: 100%; border: 1px solid;\">\n            <label  style=\"float: left; padding-left: 5px;\">Assinatura do Credor / Representante Legal / Procurador</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 25px;\">\n          <div style=\"width: 100%; float: left;  height: 100%; border: 1px solid; text-align: center; padding-top: 5px;\">\n            <label  style=\"width: 100%; float: left;\">PESSOA QUE DEU ENTRADA NESTE PEDIDO DE PROTESTO</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%;  float: left; height: 100%;\">\n            <label  style=\"float: left; padding-left: 5px;\">Nome completo da pessoa que protocolará o título no cartório / disdivibuidor de protesto</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\"> {{ entregador.nomeRepresentante }} </p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 28%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">RG:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{entregador.rg}}</p>\n          </div>\n          <div style=\"width: 40%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">CPF:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.cpfRepresentante }}</p>\n          </div>\n          <div style=\"width: 30%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Telefone:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.telefone }}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%;  float: left; height: 100%; border: 1px solid;\">\n            <label  style=\"float: left; padding-left: 5px;\">Endereço:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.endereco }}, {{entregador.numero}} {{entregador.complemento}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 18%; float: left; height: 100%; border: 1px solid; border-left: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">CEP:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.cep }}</p>\n          </div>\n          <div style=\"width: 35%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Bairro:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.bairro }}</p>\n          </div>\n          <div style=\"width: 35%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">Cidade:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.cidade }}</p>\n          </div>\n          <div style=\"width: 10%; float: left; height: 100%; border: 1px solid; border-right: none;\">\n            <label  style=\"float: left; padding-left: 5px;\">UF:</label>\n            <p style=\"float: left; clear: left; margin-top: 0px; padding-left: 5px;\">{{ entregador.estado }}</p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"height: 35px;\">\n          <div style=\"width: 100%; float: left;  height: 100%; border: 1px solid;\">\n            <label style=\"float: left; padding-left: 5px;\">Assinatura de quem protocolará o título no cartório / disdivibuidor de protesto</label>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"row footer\" style=\"height: 25px;\">\n          <div style=\"width: 100%;  float: left; height: 100%; border: 1px solid;  padding-top: 5px;\">\n            <label>Importante: Imprima esse Requerimento em 2 vias para Endivega no Cartório/Disdivibuidor de\n              Protesto.</label>\n            <p>\n            </p>\n          </div>\n        </div>\n\n      </div>\n    </div> <!-- FIM GRADE REQUERIMENTO -->\n  </div>\n</section>\n\n<!-- BOTÕES -->\n<div class=\"btn-wrapper\">\n  <button class=\"btn btn-outline-secondary btn-print\" (click)=\"abrirImpressao()\" popover=\"Imprimir formulário (altere a quantidade de cópias para 2 nas propriedades de impressão\"\n  triggers=\"mouseenter:mouseleave\" >Imprimir</button>\n  <button class=\"btn btn-primary btn-new\" type=\"submit\" (click)=\"openModal()\" popover=\"Digitar novo título\"\n  triggers=\"mouseenter:mouseleave\" >Novo\n    Título</button>\n  <button class=\"btn btn-primary btn-new-return\" type=\"submit\"  (click)=\"openModal(true)\" popover=\"Digitar novo título com o mesmo apresentante\"\n  triggers=\"mouseenter:mouseleave\" >Novo Título (Com o\n    mesmo\n    Apresentante)</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/protesto-sub-formulario.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/protesto-sub-formulario.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProtestoSubFormularioProtestoSubFormularioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- MODAL FORMULÁRIO PROTESTO -->\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Formulário de Protesto</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <td width=\"40\" class=\"table-icon2\">\n      <fa name=\"window-close\" size=\"2x\" popover=\"Fechar sem salvar os dados\"\n      triggers=\"mouseenter:mouseleave\" ></fa>\n    </td>\n  </button>\n</div>\n\n<!-- FORMULÁRIO ENTREGADOR -->\n<div class=\"modal-body\">\n  <form [formGroup]=\"fGroupEntregador\" id=\"form-container\">\n    <div id=\"identificacao\">\n      <fieldset>\n        <legend>Dados da pessoa que levará o título para ser protocolizado no Cartório/Distribuidor - Pode ser\n          preenchido no momento da protocolização</legend>\n          <hr>\n\n        <!-- FORM-ROW1 -->\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputDocumentTypeLabel\">Nome (<span>sem abreviações</span>)</label>\n            <input formControlName=\"nomeRepresentante\" type=\"text\" class=\"form-control\" id=\"inputNumeroDocumento\" placeholder=\"\" \n            [ngClass]=\"{ 'is-invalid': submitted && fEntregador.nomeRepresentante.errors }\" maxlength=\"50\">\n            <div *ngIf=\"submitted && fEntregador.nomeRepresentante.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fEntregador.nomeRepresentante.errors.required\">Nome do Credor é obrigatório</small>\n              <small *ngIf=\"fEntregador.nomeRepresentante.errors.minLength\">Nome do Credor deve ter no mínimo 3 caracteres</small>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDocumentNumber\">CPF </label>\n            <input formControlName=\"cpfRepresentante\" type=\"tel\" class=\"form-control\" id=\"inputNumeroDocumento\" placeholder=\"\"\n            [textMask]=\"{mask: MASKS.cpf.textMask}\" [ngClass]=\"{ 'is-invalid': submitted && fEntregador.cpfRepresentante.errors }\" >\n            <div *ngIf=\"submitted && fEntregador.cpfRepresentante.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fEntregador.cpfRepresentante.errors.required\">Documento é obrigatório</small>\n              <small *ngIf=\"fEntregador.cpfRepresentante.errors.cpf\">O CPF digitado está inválido</small>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDebtName\">RG</label>\n            <input formControlName=\"rg\" type=\"text\" maxlength=\"14\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\">\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDocumentTypeLabel2\">Telefone</label>\n            <input formControlName=\"telefone\" type=\"tel\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\" minlength=\"8\" maxlength=\"15\">\n          </div>\n\n          <div class=\"form-group col-md-3 wrapper-btn-copy\">\n            <button (click)=\"copiarEntregador()\" class=\"btn btn-primary btn-copy\" popover=\"Copiar dados do apresentante\"\n            triggers=\"mouseenter:mouseleave\" >Copiar dados do Apresentante</button>\n          </div>\n        </div>\n      </fieldset>\n    </div> <!-- FIM FORM-ROW1 -->\n    \n    <!-- FORM-ENDERECO1 -->\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputCepAdress\">CEP</label>\n        <input formControlName=\"cep\" type=\"tel\" class=\"form-control\" id=\"inputCep\" placeholder=\"\" pattern=\"^\\d{5}-\\d{3}$\" [textMask]=\"{mask: CEP}\"\n         [ngClass]=\"{ 'is-invalid': submitted && fEntregador.cep.errors }\">\n        <div *ngIf=\"submitted && fEntregador.cep.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.cep.errors.required\">Cep é obrigatório</small>\n          <small *ngIf=\"fEntregador.cep.errors.minlength\">Digite um cep válido</small>\n        </div>\n      </div>\n\n      <div class=\"form-group btn-cep\">\n        <button type=\"search\" class=\"btn btn-primary btn-cep-search\" (click)=\"buscarCEPEntregador()\" popover=\"Localizar Endereço\"\n        triggers=\"mouseenter:mouseleave\" >Buscar</button>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputAdress\">Endereço</label>\n        <input formControlName=\"endereco\" type=\"text\" class=\"form-control\" maxlength=\"50\" id=\"inputEndereco\" placeholder=\"\" \n        [ngClass]=\"{ 'is-invalid': submitted && fEntregador.endereco.errors }\">\n        <div *ngIf=\"submitted && fEntregador.endereco.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.endereco.errors.required\">Endereço é obrigatório</small>\n          <small *ngIf=\"fEntregador.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressNumber\">Número</label>\n        <input formControlName=\"numero\" type=\"tel\" class=\"form-control\" id=\"inputNumero\" placeholder=\"\" maxlength=\"7\"\n         [ngClass]=\"{ 'is-invalid': submitted && fEntregador.numero.errors }\">\n        <div *ngIf=\"submitted && fEntregador.numero.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.numero.errors.required\">Número é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-custom\">\n        <label for=\"inputComplement\">Complemento</label>\n        <input formControlName=\"complemento\" type=\"text\" class=\"form-control\" maxlength=\"50\" id=\"inputComplemento\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputNeighborhood\">Bairro</label>\n        <input formControlName=\"bairro\" type=\"text\" class=\"form-control\" maxlength=\"50\" id=\"inputBairro\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fEntregador.bairro.errors }\">\n        <div *ngIf=\"submitted && fEntregador.bairro.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.bairro.errors.required\">Bairro é obrigatório</small>\n          <small *ngIf=\"fEntregador.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputCity\">Cidade</label>\n        <input formControlName=\"cidade\" type=\"text\" class=\"form-control\" id=\"inputCidade\" placeholder=\"\" maxlength=\"50\"\n        [ngClass]=\"{ 'is-invalid': submitted && fEntregador.cidade.errors }\">\n        <div *ngIf=\"submitted && fEntregador.cidade.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.cidade.errors.required\">Cidade é obrigatório</small>\n          <small *ngIf=\"fEntregador.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-1\">\n        <label for=\"inputStateLabel\">Estado</label>\n        <select formControlName=\"estado\" id=\"inputEstado\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && fEntregador.cidade.errors }\">\n          <option value=\"null\"></option>\n          <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n        </select>\n        <div *ngIf=\"submitted && fEntregador.estado.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fEntregador.estado.errors.required\">Estado é obrigatório</small>\n        </div>\n      </div>\n    </div> <!-- FIM FORM-ENDERECO1 -->\n  </form>\n</div>\n\n\n<!-- FORMULÁRIO REPRESENTANTE -->\n<div class=\"modal-body\" *ngIf=\"titulo.tipo == 'CNPJ' \">\n  <form  [formGroup]=\"fGroupRepresentante\" id=\"form-container\">\n    <div id=\"identificacao\">\n      <fieldset>\n        <legend>Dados do Representante Legal/Procurador</legend>\n          <hr>\n\n        <!-- FORM-ROW2 -->\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputDocumentTypeLabel\">Nome (<span>sem abreviações</span>)</label>\n            <input formControlName=\"nomeRepresentante\" type=\"text\" class=\"form-control\" maxlength=\"50\" id=\"inputNumeroDocumento\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.nomeRepresentante.errors }\">\n            <div *ngIf=\"submitted && fRepresentante.nomeRepresentante.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fRepresentante.nomeRepresentante.errors.required\">Nome do Credor é obrigatório</small>\n              <small *ngIf=\"fRepresentante.nomeRepresentante.errors.minlength\">Nome do Credor deve ter no mínimo 3 caracteres</small>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDocumentNumber\">CPF </label>\n            <input formControlName=\"cpfRepresentante\" type=\"tel\" class=\"form-control\" id=\"inputNumeroDocumento\" placeholder=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.cpfRepresentante.errors }\" [textMask]=\"{mask: MASKS.cpf.textMask}\">\n            <div *ngIf=\"submitted && fRepresentante.cpfRepresentante.errors\" class=\"invalid-feedback\">\n              <small *ngIf=\"fRepresentante.cpfRepresentante.errors.required\">Documento é obrigatório</small>\n              <small *ngIf=\"fRepresentante.cpfRepresentante.errors.cpf\">O CPF digitado está inválido</small>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDebtName\">RG</label>\n            <input formControlName=\"rg\" type=\"text\" maxlength=\"14\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\">\n          </div>\n\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputDocumentTypeLabel2\">Telefone</label>\n            <input formControlName=\"telefone\" type=\"tel\" class=\"form-control\" id=\"inputNomeDevedor\" placeholder=\"\" minlength=\"8\" maxlength=\"15\">\n          </div>\n\n          <div class=\"form-group col-md-3 wrapper-btn-copy\">\n            <button (click)=\"copiarRepresentante()\" class=\"btn btn-primary btn-copy\" popover=\"Copiar dados do apresentante\"\n            triggers=\"mouseenter:mouseleave\" >Copiar dados do Apresentante</button>\n          </div>\n        </div>\n      </fieldset>\n    </div> <!-- FIM FORM-ROW2 -->\n\n\n    <!-- FORM-ENDERECO2 -->\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputCepAdress\">CEP</label>\n        <input formControlName=\"cep\" type=\"tel\" class=\"form-control\" id=\"inputCep\" placeholder=\"\" pattern=\"^\\d{5}-\\d{3}$\" [textMask]=\"{mask: CEP}\"\n        [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.cep.errors }\">\n        <div *ngIf=\"submitted && fRepresentante.cep.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.cep.errors.required\">Cep é obrigatório</small>\n          <small *ngIf=\"fRepresentante.cep.errors.minlength\">Digite um cep válido</small>\n        </div>\n      </div>\n\n      <div class=\"form-group btn-cep\">\n        <button type=\"search\" class=\"btn btn-primary btn-cep-search\" (click)=\"buscarCEPRepresentante()\" popover=\"Localizar Endereço\"\n        triggers=\"mouseenter:mouseleave\" >Buscar</button>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputAdress\">Endereço</label>\n        <input formControlName=\"endereco\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputEndereco\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.endereco.errors }\">\n        <div *ngIf=\"submitted && fRepresentante.endereco.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.endereco.errors.required\">Endereço é obrigatório</small>\n          <small *ngIf=\"fRepresentante.endereco.errors.minlength\">Endereço deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputAdressNumber\">Número</label>\n        <input formControlName=\"numero\" type=\"tel\" maxlength=\"7\" class=\"form-control\" id=\"inputNumero\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.numero.errors }\">\n        <div *ngIf=\"submitted && fRepresentante.numero.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.numero.errors.required\">Número é obrigatório</small>\n          <small *ngIf=\"fRepresentante.numero.errors.required\">Número é obrigatório</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-custom\">\n        <label for=\"inputComplement\">Complemento</label>\n        <input formControlName=\"complemento\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputComplemento\" placeholder=\"\">\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputNeighborhood\">Bairro</label>\n        <input formControlName=\"bairro\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputBairro\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.bairro.errors }\">\n        <div *ngIf=\"submitted && fRepresentante.bairro.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.bairro.errors.required\">Bairro é obrigatório</small>\n          <small *ngIf=\"fRepresentante.bairro.errors.minlength\">Bairro deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputCity\">Cidade</label>\n        <input formControlName=\"cidade\" type=\"text\" maxlength=\"50\" class=\"form-control\" id=\"inputCidade\" placeholder=\"\"\n        [ngClass]=\"{ 'is-invalid': submitted && fRepresentante.cidade.errors }\">\n        <div *ngIf=\"submitted && fRepresentante.cidade.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.cidade.errors.required\">Cidade é obrigatório</small>\n          <small *ngIf=\"fRepresentante.cidade.errors.minlength\">Cidade deve ter no mínimo 3 caracteres</small>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-1\">\n        <label for=\"inputStateLabel\">Estado</label>\n        <select formControlName=\"estado\" id=\"inputEstado\" class=\"form-control\">\n          <option value=\"null\"></option>\n          <option *ngFor=\"let uf of estados\" [(value)]=\"uf\">{{uf}}</option>\n        </select>\n        <div *ngIf=\"submitted && fRepresentante.estado.errors\" class=\"invalid-feedback\">\n          <small *ngIf=\"fRepresentante.estado.errors.required\">Estado é obrigatório</small>\n        </div>\n      </div>\n    </div> <!-- FIM FORM-ENDERECO2 -->\n  </form>\n</div>\n\n<!-- MODAL RODAPÉ -->\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\"  (click)=\"criarDados()\" popover=\"Finalizar digitação\"\n  triggers=\"mouseenter:mouseleave\" >Finalizar Digitação</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/requerimento-protesto/requerimento-protesto.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requerimento-protesto/requerimento-protesto.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequerimentoProtestoRequerimentoProtestoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- REQUERIMENTO DE PROTESTO -->\n<section class=\"requeriment\" #divRequerimento style=\"width: 1024px; margin: auto;\">\n  <div class=\"requeriment-body\" style=\"border: 1px solid;\">\n    <div class=\"requeriment-header\" style=\"text-align: center;\">\n      <h2 style=\"font: bold 14px Arial;\">Central Distribuidora de Títulos para Protesto de Franca</h2>\n      <h3 style=\"font: bold 12px Arial;\">Requerimento de Protesto</h3>\n      <h4 style=\"font: bold 12px Arial; margin-top: 5px;\">Lote: 0000</h4>\n      <p style=\"text-align: justify; font: 12px Arial; margin: 15px 10px;\"><span style=\"font: bold 12px Arial; text-transform: uppercase;\">{{empresa.nome}}, CPF: {{empresa.documento}}</span> vem\n        requerer as providências necessárias para protesto de títulos\n        incluídos no lote a seguir discriminado, conforme informações enviadas em meio eletrônico estando ciente da\n        responsabilidade quanto a veracidade dessas informações.</p>\n    </div>\n\n    <!-- TABELA REQUERIMENTO -->\n    <table class=\"table table-sm table-bordered\" style=\"font: 10px Arial; max-width: 1024px; margin: auto; margin-bottom: 2rem; text-align: center;\">\n      <thead class=\"title-table\" style=\"background-color: #bfc0c5;\">\n        <tr>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial; width: 80px;\">ID Título </th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial; width: 60px;\">Espécie</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial;\">Número do Título</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial;\">Dt. Emissão</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial;\">Vencimento</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial; width: 105;\">Valor Original R$</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial; width: 105;\">Valor a Protestar R$</th>\n          <th scope=\"col\" style=\"border: 1px solid; font: bold 10px Arial; width: 100px;\">Endosso</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr>\n          <td  style=\"border: 1px solid; font: 10px Arial;\">00000</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\">DM</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\">1ab</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\">15/11/2019</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\">05/12/2019</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\"> R$ 290,25</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\"> R$ 290,25</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\">SEM ENDOSSO</td>\n        </tr>\n\n        <tr>\n          <td colspan=\"2\" style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Tipo de Protesto:</span> COMUM</td>\n          <td colspan=\"4\" style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Devedor (1):</span></td>\n          <td colspan=\"2\" style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">CPF:</span> 391.428.758-62</td>\n        </tr>\n\n        <tr>\n          <td style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">CEP:</span> 14400540</td>\n          <td colspan=\"3\" style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Ender.:</span> RUA THOMAZ GONZAGA, 1869</td>\n          <td colspan=\"2\" style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Bairro:</span> CENTRO</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Cidade:</span> FRANCA</td>\n          <td style=\"border: 1px solid; font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">UF:</span> SP</td>\n        </tr>\n        <tr>\n          <td colspan=\"9\" style=\"border: 1px solid; font: 10px Arial;\">\n            <div class=\"separator\" style=\" height: 20px; background-color: #E4E9EF;\"></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n<!-- CAMPOS PREENCHIMENTO -->\n  <div class=\"requeriment-footer\">\n    <div class=\"left-info-table\" style=\" margin: 20px 0 50px 0;\">\n      <p style=\"font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Qtde. de títulos neste requerimento:</span> 2</p>\n      <p style=\"font: 10px Arial;\"><span style=\"font: bold 10px Arial;\">Total a protestar neste requerimento:</span> R$ 900,00</p>\n    </div>\n    <p class=\"border-top-none\" style=\"text-align:center; width: 500px; margin: auto; margin-bottom: 40px; font:10px Arial;\">FRANCA, {{data.dia}} de {{data.mes}} de {{data.ano}}.</p>\n    <p class=\"top-b\" style=\"text-align:center;  width: 500px; margin: auto; margin-bottom: 40px;border-top: 1px solid; font: bold 10px Arial;\">BERNARDO NASCIMENTO</p>\n    <p class=\"top-b\" style=\"text-align:center; width: 500px; margin: auto; border-top: 1px solid; font: bold 10px Arial;\">Nome da pessoa que deu entrada no pedido de protesto</p>\n    <p class=\"w-none\" style=\"text-align:center; float: left; width:216px; border-top: 1px solid; margin: 30px 0 30px 0; font: bold 10px Arial;\">CPF</p>\n    <p class=\"w-none\" style=\"text-align:center; float: left; width:216px; border-top: 1px solid; margin:30px 0 30px 25px; font: bold 10px Arial;\">RG</p>\n    <p class=\"w-none\" style=\"text-align:center; float: left; width:216px; border-top: 1px solid; margin:30px 0 30px 25px; font: bold 10px Arial;\">Telefone</p>\n\n    <p class=\"top-b\" style=\"text-align:center;  width: 500px; margin: auto; margin-bottom: 40px;border-top: 1px solid; clear: both; margin-top: 40px; font: bold 10px Arial;\">Endereço</p>\n    <p class=\"top-b\" style=\"text-align:center;  width: 500px; margin: auto; margin-bottom: 40px;border-top: 1px solid; font: bold 10px Arial;\">Assinatura</p>\n  </div>\n</section>\n\n<!-- BOTÕES -->\n<div class=\"btn-wrapper\">\n  <button class=\"btn btn-primary btn-print\" (click)=\"ImprimirConteudo()\" type=\"submit\">Imprimir Requerimento</button>\n  <button class=\"btn btn-secondary btn-close\" type=\"submit\" [routerLink]=\"'/titulos'\">Voltar</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rodape/rodape.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rodape/rodape.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRodapeRodapeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"footer\">\n    <ul>\n        <li>\n            <div class=\"footer-component\">\n                <fa name=\"map-marker\" size=\"2x\"></fa>\n                <p class=\"text-right\">Endereço: <span> Avenida Major Nicacio, Nº 1836 - Centro - Franca - SP</span>\n                </p>\n                <br>\n            </div>\n        </li>\n\n        <li>\n            <div class=\"footer-component\">\n                <fa name=\"history\" size=\"2x\"></fa>\n                <p class=\"text-right\">Horário: <span>Segunda à Sexta - 12:00h às 16:00h</span></p><br>\n            </div>\n        </li>\n\n        <li>\n            <div class=\"footer-component\">\n                <fa name=\"phone\" size=\"2x\"></fa>\n                <p class=\"text-right\">Telefone: <span>(16) 3724-4878</span></p><br>\n            </div>\n        </li>\n    </ul>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/senha/senha.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/senha/senha.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSenhaSenhaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ALTERAR SENHA -->\n<form [formGroup]=\"formGroupNovaSenha\"  class=\"password-container\" >\n  <fieldset>\n    <legend>Alterar Senha de Acesso</legend>\n    <p>A senha deve ter no máximo 8 caracteres.</p>\n\n    <div class=\"form-group col-md-3 feedback-group\">\n      <label for=\"formGroupPassword\">Senha Atual</label>\n      <input type=\"password\" formControlName=\"senhaAtual\" class=\"form-control\" id=\"formGroupPassword\" maxlength=\"8\" placeholder=\"\" required>\n      <div class=\"feedback\">\n            Por favor, informe a senha atual.\n          </div>\n    </div>\n\n    <div class=\"form-group col-md-3\">\n      <label for=\"formGroupPassword2\">Nova Senha</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"senhaNova\" id=\"formGroupPassword2\" required maxlength=\"8\" placeholder=\"\">\n    </div>\n\n    <div class=\"form-group col-md-3\">\n      <label for=\"formGroupPassword2\">Repita a Nova Senha</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"senhaNova2\" id=\"formGroupPassword2\" required maxlength=\"8\" placeholder=\"\">\n    </div>\n\n    <!-- <div>\n      <ngx-recaptcha2 #captchaElement\n        [siteKey]=\"siteKey\"\n        (reset)=\"handleReset()\"\n        (expire)=\"handleExpire()\"\n        (load)=\"handleLoad()\"\n        (success)=\"handleSuccess($event)\"\n        [useGlobalDomain]=\"false\"\n        [size]=\"size\"\n        [hl]=\"lang\"\n        [theme]=\"theme\"\n        [type]=\"type\"\n        formControlName=\"recaptcha\">\n      </ngx-recaptcha2>\n    </div>     -->\n\n    <div class=\"form-group col-md-3\">\n      <button type=\"submit\" [disabled]=\"!formGroupNovaSenha.valid\" (click)=\"alterarSenha()\" class=\"btn-password btn btn-primary shadow\" popover=\"Alterar senha de acesso\"\n      triggers=\"mouseenter:mouseleave\">Alterar Senha</button>\n    </div>\n  </fieldset>\n</form>\n\n<div class=\"ilustration-pw-container\">\n  <img src=\"/assets/images/ilustration_pw.svg\">\n</div>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/titulos-lote/titulos-lote.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/titulos-lote/titulos-lote.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTitulosLoteTitulosLoteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TÍTULOS DO LOTE -->\n<section class=\"tlotes-container \">\n  <h2>Lote Nº 0000 | Status: EM ANDAMENTO</h2>\n\n  <!-- TABELA -->\n  <table class=\"table table-sm table-striped table-bordered\">\n    <thead class=\"title-table\">\n      <tr>\n        <th scope=\"col\">Digitação </th>\n        <th scope=\"col\">Espécie</th>\n        <th scope=\"col\">N° Título</th>\n        <th scope=\"col\">Vlr. Original</th>\n        <th scope=\"col\">Vlr. a Protestar</th>\n        <th scope=\"col\">Devedor(es)</th>\n        <th scope=\"col\">Cart</th>\n        <th scope=\"col\">Dt. Protocolo</th>\n        <th scope=\"col\">Protocolo</th>\n        <th scope=\"col\">Baixa</th>\n        <th scope=\"col\"></th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n\n      <tr>\n        <td>01/01/2019</td>\n        <td>DS</td>\n        <td>2045</td>\n        <td>R$ 152,60</td>\n        <td>R$ 152,60</td>\n        <td>Devedor (1): AMAZONAS INDUSTRIA E COMERCIO LTDA CNPJ 47959697000358</td>\n        <td>3</td>\n        <td>26/11/2019</td>\n        <td>111</td>\n        <td>Em Aberto</td>\n        <td class=\"table-icon\">\n          <fa name=\"print\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\" (click)=\"ImprimirConteudo(DivDeclaracao)\"></fa>\n        </td>\n        <td class=\"table-icon\">\n          <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Imprimir Desistência (Retirada do Título)\"\n            size=\"2x\"></fa>\n        </td>\n      </tr>\n\n      <tr>\n        <td colspan=\"12\" scope=\"col\">\n          <nav aria-label=\"Navegação de página títulos\">\n            <ul class=\"pagination pagination-md\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Anterior</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Próximo</a></li>\n            </ul>\n          </nav>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"btn-wrapper\">\n    <button class=\"btn btn-secondary btn-before\" type=\"button\" [routerLink]=\"'/pesquisar-lotes'\">Voltar</button>\n  </div>\n\n\n  <!-- DECLARAÇÃO DE INDICAÇÃO/ OCULTA-->\n  <div class=\"declaracao-container collapse\">\n    <div class=\"declaracao-body\" #divDeclaracao>\n      <h2>Ao Central Distribuidora de Títulos para Protesto de Franca </h2>\n\n      <h3>Ref.: Protesto de Duplicata Mercantil por Indicação </h3>\n\n      <p>\n        Na qualidade de: <strong>SACADOR</strong>, solicitamos o protesto do título abaixo, por Indicação, nos termos da\n        Lei nº 5.474 de\n        18/07/68, com redação dada pela Lei nº 6.458 de 1º/11/77 e artigo 21 e parágrafos da Lei nº 9.492 de 10/09/97.\n      </p>\n\n      <h4> Devedor(es)</h4>\n\n      <table class=\"table table-sm table-bordered\" style=\"text-align: left; margin-bottom: 30px;\">\n        <tbody>\n          <tr>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">SACADO:</span> BERNARDO JUSTINO FRANCA</td>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">CNPJ/CPF:</span> 38641134824</td>\n          </tr>\n\n          <tr>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">ENDEREÇO:</span> RUA CLODOMIRO FERREIRA DA S, 1</td>\n            <td colspan=\"3\"><span style=\"font-weight: bold;\">BAIRRO:</span> JARDIM</td>\n          </tr>\n\n          <tr>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">CIDADE:</span> FRANCA - SP </td>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">CEP:</span> 1440241</td>\n          </tr>\n\n          <tr>\n            <td><span style=\"font-weight: bold;\">EMISSÃO:</span> 15/11/2019 </td>\n            <td><span style=\"font-weight: bold;\">VENCTO.:</span> 05/12/2019 </td>\n            <td><span style=\"font-weight: bold;\">PRAÇA DE PAGTO.:</span> FRANCA</td>\n          </tr>\n\n          <tr>\n            <td><span style=\"font-weight: bold;\">VALOR:</span> R$ 400,00 </td>\n            <td><span style=\"font-weight: bold;\">SALDO:</span> R$ 400,00</td>\n            <td><span style=\"font-weight: bold;\">Nº DA DUPLICATA:</span> 3</td>\n          </tr>\n\n          <tr>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">SACADOR:</span> BERNARDO NASCIMENTO </td>\n            <td colspan=\"2\"><span style=\"font-weight: bold;\">ENDOSSOS:</span> EM ENDOSSO</td>\n          </tr>\n\n          <tr>\n            <td><span style=\"font-weight: bold;\">ENDEREÇO:</span> RUA THOMAZ GONZAGA, 1869 3 ANDAR</td>\n            <td><span style=\"font-weight: bold;\">CNPJ/CPF:</span> 39142875862 </td>\n            <td><span style=\"font-weight: bold;\">TELEFONE:</span> 992452216</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p class=\"declaracao\"><strong>Declaramos, para os devidos fins, sob as penas da Lei, que os documentos originais\n          (ou\n          suas cópias\n          autenticadas),\n          que comprovam a venda mercantil, bem como o comprovante da entrega e do recebimento da(s) mercadoria(s)\n          correspondente(s), são mantidos em nosso poder, comprometendo-nos a exibi-los, sempre que exigidos, no lugar\n          onde\n          for determinado, especialmente se sobrevir sustação judicial do protesto.</strong>\n      </p>\n\n      <p><span style=\"font-weight: bold;\">Sem mais, firmamo-nos,</span>\n      </p>\n      <p style=\"margin: 40px 0 70px 0;\">FRANCA(SP), {{data.dia}} de {{data.mes}} de {{data.ano}}.</p>\n      <p\n        style=\"text-align:center;  width: 500px; margin: auto; margin-bottom: 40px;border-top: 1px solid; font: bold 10px Arial;\">\n        (Assinatura da Empresa sob carimbo)\n      </p>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/titulos/titulos.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/titulos/titulos.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTitulosTitulosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- PESQUISA TITULOS -->\n<section class=\"cl-titulos\">\n  <div class=\"titledigital\">\n    <h2>Meus Títulos | Lotes Digitados</h2>\n  </div>\n  <form [formGroup]=\"fGroupLote\">\n    <div class=\"input-group ms-2\" (change)=\"alterandoConsultaLote()\">\n      <label class=\"form-check-label\" for=\"inlineCheckbox1\">Exibir:</label>\n      <select formControlName=\"status\" class=\"custom-select\" id=\"inputGroupSelect01\">\n        <option value=\"TODOS OS LOTES\">Todos os Lotes</option>\n        <option value=\"EM ABERTO\">Em Aberto</option>\n        <option value=\"FECHADO - AGUARDANDO ENTREGA\">Fechado - Aguardando Entrega</option>\n        <option value=\"EM ANDAMENTO\">Em Andamento</option>\n        <option value=\"RESULTADO Disponível\">Resultado Disponível</option>\n        <option value=\"RESULTADO ENTREGUE\">Resultado Entregue</option>\n        <option value=\"REJEITADO DISTRIBUIDOR\">Rejeitado Distribuidor</option>\n      </select>\n      <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon\" (click)=\"AbrirLote()\">Novo Lote de Títulos</button>\n    </div>\n  </form>\n</section>\n\n\n<!-- TABELA -->\n<table class=\"table table-sm table-striped table-bordered\">\n  <thead class=\"title-table\">\n    <tr>\n      <th scope=\"col\">Lote </th>\n      <th scope=\"col\">Dt. Abertura</th>\n      <th scope=\"col\">Responsável</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Dt. Fechamento</th>\n      <th scope=\"col\">Qtde. Títulos</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let lote of lotes\">\n      <td>{{lote.numeroLote}}</td>\n      <td>{{lote.dataAbertura.dia}}/{{lote.dataAbertura.mes}}/{{lote.dataAbertura.ano}}</td>\n      <td>{{lote.responsavel}}</td>\n      <td>{{lote.status}}</td>\n      <td><div *ngIf=\"lote.data != null\">{{lote.dataFechamento.dia}}/{{lote.dataFechamento.mes}}/{{lote.dataFechamento.ano}}</div></td>\n      <td>{{lote.qtdTitulo}}</td>\n      <td class=\"table-icon\">\n        <fa name=\"upload\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Fazer Upload de Arquivos Para o Lote\"\n          size=\"2x\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"pencil\" data-toggle=\"tooltip\" data-placement=\"top\" (click)=\"editarLote(lote.idLote)\" title=\"Abrir Digitação de Títulos\" size=\"2x\"  [routerLink]=\"'/digitacao-titulos'\"></fa>\n      </td>\n      <td class=\"table-icon\">\n        <fa name=\"trash\" data-toggle=\"tooltip\" data-placement=\"top\" (click)=\"apagarLote(lote.idLote)\" title=\"Remover o Lote\" size=\"2x\"></fa>\n      </td>\n    </tr>\n    <ngx-spinner\n      bdColor=\"rgba(51,51,51,0.8)\"\n      size=\"medium\"\n      color=\"#fff\"\n      type=\"ball-clip-rotate\">\n    </ngx-spinner>\n  </tbody>\n\n  <div infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"1000\" (scrolled)=\"onScroll()\">\n</div>\n</table>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/adesao/adesao.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/adesao/adesao.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdesaoAdesaoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === TERMO DE ADESAO === */\n.adesao {\n  width: 900px;\n  margin: 0 auto; }\n.adesao h2 {\n  margin-bottom: 50px; }\n.adesao .termo_adesao {\n  height: 400px;\n  overflow-y: scroll; }\n.termo_adesao h3 {\n  text-align: center;\n  margin-bottom: 30px; }\n.termo_adesao a {\n  font-weight: bold;\n  color: red;\n  text-decoration: none; }\n/* === BOTÃO === */\n.adesao .btn-adesao-container {\n  margin: 0 auto;\n  width: 170px; }\n.btn-adesao .btn {\n  width: 150px;\n  margin-top: 20px; }\n.btn-adesao-container .btn {\n  width: 150px;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRlc2FvL2FkZXNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRlc2FvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxhZGVzYW9cXGFkZXNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBZiw0QkFBQTtBQUNEO0VBQ0ksWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUdsQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixxQkFBcUIsRUFBQTtBQUl2QixrQkFBQTtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdkO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRlc2FvL2FkZXNhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBURVJNTyBERSBBREVTQU8gPT09ICovXG4uYWRlc2FvIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uYWRlc2FvIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuXG4uYWRlc2FvIC50ZXJtb19hZGVzYW8ge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cblxuLnRlcm1vX2FkZXNhbyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4udGVybW9fYWRlc2FvIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi8qID09PSBCT1TDg08gPT09ICovXG4uYWRlc2FvIC5idG4tYWRlc2FvLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTcwcHg7IH1cblxuLmJ0bi1hZGVzYW8gLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4uYnRuLWFkZXNhby1jb250YWluZXIgLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuIiwiIC8qID09PSBURVJNTyBERSBBREVTQU8gPT09ICovXG4uYWRlc2FvICB7XG4gICAgd2lkdGg6IDkwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWRlc2FvIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmFkZXNhbyAudGVybW9fYWRlc2FvIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGVybW9fYWRlc2FvIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGVybW9fYWRlc2FvIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi8qID09PSBCT1TDg08gPT09ICovXG4uYWRlc2FvIC5idG4tYWRlc2FvLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5idG4tYWRlc2FvIC5idG4ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnRuLWFkZXNhby1jb250YWluZXIgLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/adesao/adesao.component.ts":
  /*!********************************************!*\
    !*** ./src/app/adesao/adesao.component.ts ***!
    \********************************************/

  /*! exports provided: AdesaoComponent */

  /***/
  function srcAppAdesaoAdesaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdesaoComponent", function () {
      return AdesaoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AdesaoComponent =
    /*#__PURE__*/
    function () {
      function AdesaoComponent(funcoesService, fireAuth, empresaService) {
        _classCallCheck(this, AdesaoComponent);

        this.funcoesService = funcoesService;
        this.fireAuth = fireAuth;
        this.empresaService = empresaService;
        this.empresa = {};
        this.documento = {};
        this.idU = this.fireAuth.auth.currentUser.uid;
        this.data = this.funcoesService.DataAtualExtenso();
      }

      _createClass(AdesaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.empresaService.buscaEmpresa(this.idU).then(function (empresa) {
            _this.empresa = empresa;
          });
          this.empresaService.buscaEmpresa(this.idU).then(function (documento) {
            _this.documento = documento;
          });
        }
      }, {
        key: "ImprimirConteudo",
        value: function ImprimirConteudo() {
          this.funcoesService.ImprimirConteudoDiv(this.divTermo);
        }
      }]);

      return AdesaoComponent;
    }();

    AdesaoComponent.ctorParameters = function () {
      return [{
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divTermo', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AdesaoComponent.prototype, "divTermo", void 0);
    AdesaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adesao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adesao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adesao/adesao.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adesao.component.scss */
      "./src/app/adesao/adesao.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"]])], AdesaoComponent);
    /***/
  },

  /***/
  "./src/app/adicional/adicional.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/adicional/adicional.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdicionalAdicionalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === USUÁRIOS === */\n.cl-devedores {\n  margin-bottom: 3rem; }\n.titledebt {\n  margin-left: 230px; }\n.input-group {\n  width: 40%;\n  margin-left: 230px;\n  z-index: 1; }\n.input-group #button-addon1 {\n  margin-right: 5px;\n  border-radius: 0 3px 3px 0; }\n/* === TABELA USUÁRIOS === */\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 6rem; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRpY2lvbmFsL2FkaWNpb25hbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRpY2lvbmFsL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxhZGljaW9uYWxcXGFkaWNpb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIscUJBQUE7QUFDQTtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBO0FBSTVCLDRCQUFBO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRpY2lvbmFsL2FkaWNpb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBVU1XDgVJJT1MgPT09ICovXG4uY2wtZGV2ZWRvcmVzIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTsgfVxuXG4udGl0bGVkZWJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4OyB9XG5cbi5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgei1pbmRleDogMTsgfVxuXG4uaW5wdXQtZ3JvdXAgI2J1dHRvbi1hZGRvbjEge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7IH1cblxuLyogPT09IFRBQkVMQSBVU1XDgVJJT1MgPT09ICovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtOyB9XG5cbi50YWJsZSAudGl0bGUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1OyB9XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIi8qID09PSBVU1XDgVJJT1MgPT09ICovXG4uY2wtZGV2ZWRvcmVzIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnRpdGxlZGVidCB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQtZ3JvdXAgI2J1dHRvbi1hZGRvbjEge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG59XG5cblxuLyogPT09IFRBQkVMQSBVU1XDgVJJT1MgPT09ICovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuXG4udGFibGUgLnRpdGxlLXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzBjNTtcbn1cblxuLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/adicional/adicional.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/adicional/adicional.component.ts ***!
    \**************************************************/

  /*! exports provided: AdicionalComponent */

  /***/
  function srcAppAdicionalAdicionalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdicionalComponent", function () {
      return AdicionalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal/ */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cadastro/adicional-cadastro.component */
    "./src/app/adicional/cadastro/adicional-cadastro.component.ts");
    /* harmony import */


    var _edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edicao/adicional-edicao.component */
    "./src/app/adicional/edicao/adicional-edicao.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdicionalComponent =
    /*#__PURE__*/
    function () {
      function AdicionalComponent(modalService, route) {
        _classCallCheck(this, AdicionalComponent);

        this.modalService = modalService;
        this.route = route;
        this.mostrargrid = false;
        this.usuarios = new Array();
        this.getUsers();
      }

      _createClass(AdicionalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.modalService.onHide.subscribe(function () {
            if (_edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__["AdicionalEdicaoComponent"].userEditado) {
              var idx = _this2.usuarios.findIndex(function (index) {
                return index.idUsuario == _edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__["AdicionalEdicaoComponent"].userEditado.idUsuario;
              });

              _this2.usuarios[idx] = _edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__["AdicionalEdicaoComponent"].userEditado;
              _edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__["AdicionalEdicaoComponent"].userEditado = null;
            }

            if (_cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdicionalCadastroComponent"].userCadastrado) {
              _cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdicionalCadastroComponent"].userCadastrado = null;
            }
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this3 = this;

          this.subscribe = this.route.data.subscribe(function (data) {
            var _this3$usuarios;

            (_this3$usuarios = _this3.usuarios).push.apply(_this3$usuarios, [data.usuarios]);
          });
        }
      }, {
        key: "openModalWithComponentCadastrar",
        value: function openModalWithComponentCadastrar() {
          var initialState = {
            list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
            title: 'Modal with component'
          };
          this.bsModalRef = this.modalService.show(_cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdicionalCadastroComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
        }
      }, {
        key: "editarUsuario",
        value: function editarUsuario(index) {
          var user;
          user = this.usuarios[index];
          console.log("selecionou a posicao ".concat(index, " do array"));
          var initialState = {
            user: user
          };
          this.bsModalRef = this.modalService.show(_edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_4__["AdicionalEdicaoComponent"], {
            initialState: initialState
          });
        }
      }]);

      return AdicionalComponent;
    }();

    AdicionalComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    AdicionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adicional',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adicional.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/adicional.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adicional.component.scss */
      "./src/app/adicional/adicional.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AdicionalComponent);
    /***/
  },

  /***/
  "./src/app/adicional/cadastro/adicional-cadastro.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/adicional/cadastro/adicional-cadastro.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdicionalCadastroAdicionalCadastroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MODAL CADASTRO DE DEVEDORES*/\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header h4 {\n  margin-left: 380px; }\n.modal-header .close span {\n  width: 25px;\n  height: 25px; }\n#identificacao {\n  width: 350px;\n  float: left;\n  margin-left: 100px; }\n#identificacao legend, #acesso legend {\n  margin-left: 15px; }\n#acesso {\n  width: 350px;\n  float: right;\n  margin-right: 50px; }\n.modal-footer {\n  background-color: #e4e9ef;\n  clear: both; }\n.modal-footer .btn {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRpY2lvbmFsL2NhZGFzdHJvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxhZGljaW9uYWxcXGNhZGFzdHJvXFxhZGljaW9uYWwtY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQUE7QUFDQTtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBS3RCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRpY2lvbmFsL2NhZGFzdHJvL2FkaWNpb25hbC1jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIENBREFTVFJPIERFIERFVkVET1JFUyovXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbn1cblxuLm1vZGFsLWhlYWRlciBoNCB7XG4gIG1hcmdpbi1sZWZ0OiAzODBweDtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Ugc3BhbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgI2lkZW50aWZpY2FjYW8ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIH1cblxuICAjaWRlbnRpZmljYWNhbyBsZWdlbmQsICNhY2Vzc28gbGVnZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gICNhY2Vzc28ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuXG4gIH1cblxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/adicional/cadastro/adicional-cadastro.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/adicional/cadastro/adicional-cadastro.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdicionalCadastroComponent */

  /***/
  function srcAppAdicionalCadastroAdicionalCadastroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdicionalCadastroComponent", function () {
      return AdicionalCadastroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");

    var AdicionalCadastroComponent =
    /*#__PURE__*/
    function () {
      function AdicionalCadastroComponent(bsModalRef, formBuilder, loginService) {
        _classCallCheck(this, AdicionalCadastroComponent);

        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.submitted = false;
        this.user = {};
        this.list = [];
      }

      _createClass(AdicionalCadastroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fGroupUsuario = this.formBuilder.group({
            'nome': [this.user.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'cpf': [this.user.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'email': [''],
            'senha': [''],
            'confirmaSenha': [''],
            // Sem validacao
            'administrador': ['NÃO']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          if (this.fGroupUsuario.invalid) return;
          this.newUsuario();
        }
      }, {
        key: "newUsuario",
        value: function newUsuario() {
          var senha = this.fGroupUsuario.controls['senha'].value;
          var confirmaSenha = this.fGroupUsuario.controls['confirmaSenha'].value;

          if (senha === confirmaSenha) {
            var usuario = {};
            var usuarioAdicional = {};
            usuario.email = this.fGroupUsuario.controls['email'].value;
            usuario.senha = this.fGroupUsuario.controls['senha'].value;
            usuarioAdicional.administrador = this.fGroupUsuario.controls['administrador'].value;
            usuarioAdicional.cpf = this.fGroupUsuario.controls['cpf'].value;
            usuarioAdicional.email = this.fGroupUsuario.controls['email'].value;
            usuarioAdicional.nome = this.fGroupUsuario.controls['nome'].value;
            this.loginService.setNewUser(usuario, usuarioAdicional).then(function (res) {
              console.log(res);
            }).catch(function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.fGroupUsuario.controls;
        }
      }]);

      return AdicionalCadastroComponent;
    }();

    AdicionalCadastroComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }];
    };

    AdicionalCadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adicional-cadastro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/cadastro/adicional-cadastro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adicional-cadastro.component.scss */
      "./src/app/adicional/cadastro/adicional-cadastro.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])], AdicionalCadastroComponent);
    /***/
  },

  /***/
  "./src/app/adicional/edicao/adicional-edicao.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/adicional/edicao/adicional-edicao.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdicionalEdicaoAdicionalEdicaoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MODAL EDICAO DE USUARIOS*/\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header h4 {\n  margin-left: 380px; }\n.modal-header .close span {\n  width: 25px;\n  height: 25px; }\n#identificacao {\n  width: 350px;\n  float: left;\n  margin-left: 100px; }\n.modal-footer {\n  background-color: #e4e9ef;\n  clear: both; }\n.modal-footer .btn {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRpY2lvbmFsL2VkaWNhby9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxcYWRpY2lvbmFsXFxlZGljYW9cXGFkaWNpb25hbC1lZGljYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQUE7QUFDQTtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRpY2lvbmFsL2VkaWNhby9hZGljaW9uYWwtZWRpY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgRURJQ0FPIERFIFVTVUFSSU9TKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmO1xufVxuXG4ubW9kYWwtaGVhZGVyIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSBzcGFuIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAjaWRlbnRpZmljYWNhbyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/adicional/edicao/adicional-edicao.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/adicional/edicao/adicional-edicao.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdicionalEdicaoComponent */

  /***/
  function srcAppAdicionalEdicaoAdicionalEdicaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdicionalEdicaoComponent", function () {
      return AdicionalEdicaoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AdicionalEdicaoComponent_1;

    var AdicionalEdicaoComponent = AdicionalEdicaoComponent_1 =
    /*#__PURE__*/
    function () {
      function AdicionalEdicaoComponent(bsModalRef, formBuilder, usuarioService, fireAuth) {
        _classCallCheck(this, AdicionalEdicaoComponent);

        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.fireAuth = fireAuth;
      }

      _createClass(AdicionalEdicaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fGroupUsuario = this.formBuilder.group({
            'nome': [this.user.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'cpf': [this.user.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            // Sem validacao
            'administrador': [this.user.administrador],
            'idUsuario': [this.user.idUsuario],
            'idEmpresa': [this.user.idEmpresa],
            'email': [this.user.email]
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this4 = this;

          var idU = this.fireAuth.auth.currentUser.uid;
          this.user = this.fGroupUsuario.value;
          this.usuarioService.updateUser(this.user, idU).then(function () {
            AdicionalEdicaoComponent_1.userEditado = _this4.user;

            _this4.bsModalRef.hide();
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.fGroupUsuario.controls;
        }
      }]);

      return AdicionalEdicaoComponent;
    }();

    AdicionalEdicaoComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }];
    };

    AdicionalEdicaoComponent = AdicionalEdicaoComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edicao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adicional-edicao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adicional/edicao/adicional-edicao.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adicional-edicao.component.scss */
      "./src/app/adicional/edicao/adicional-edicao.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])], AdicionalEdicaoComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: Routing, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Routing", function () {
      return Routing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _devedores_devedores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./devedores/devedores.component */
    "./src/app/devedores/devedores.component.ts");
    /* harmony import */


    var _atualizacao_atualizacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./atualizacao/atualizacao.component */
    "./src/app/atualizacao/atualizacao.component.ts");
    /* harmony import */


    var _adicional_adicional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./adicional/adicional.component */
    "./src/app/adicional/adicional.component.ts");
    /* harmony import */


    var _adesao_adesao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./adesao/adesao.component */
    "./src/app/adesao/adesao.component.ts");
    /* harmony import */


    var _senha_senha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./senha/senha.component */
    "./src/app/senha/senha.component.ts");
    /* harmony import */


    var _titulos_titulos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./titulos/titulos.component */
    "./src/app/titulos/titulos.component.ts");
    /* harmony import */


    var _digitacao_titulos_digitacao_titulos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./digitacao-titulos/digitacao-titulos.component */
    "./src/app/digitacao-titulos/digitacao-titulos.component.ts");
    /* harmony import */


    var _pesquisar_lotes_pesquisar_lotes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pesquisar-lotes/pesquisar-lotes.component */
    "./src/app/pesquisar-lotes/pesquisar-lotes.component.ts");
    /* harmony import */


    var _pesquisar_devedores_pesquisar_devedores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pesquisar-devedores/pesquisar-devedores.component */
    "./src/app/pesquisar-devedores/pesquisar-devedores.component.ts");
    /* harmony import */


    var _protesto_protesto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./protesto/protesto.component */
    "./src/app/protesto/protesto.component.ts");
    /* harmony import */


    var _titulos_lote_titulos_lote_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./titulos-lote/titulos-lote.component */
    "./src/app/titulos-lote/titulos-lote.component.ts");
    /* harmony import */


    var _requerimento_protesto_requerimento_protesto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./requerimento-protesto/requerimento-protesto.component */
    "./src/app/requerimento-protesto/requerimento-protesto.component.ts");
    /* harmony import */


    var _posicao_titulos_posicao_titulos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./posicao-titulos/posicao-titulos.component */
    "./src/app/posicao-titulos/posicao-titulos.component.ts");
    /* harmony import */


    var _posicao_titulos_devedor_posicao_titulos_devedor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./posicao-titulos-devedor/posicao-titulos-devedor.component */
    "./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.ts");
    /* harmony import */


    var _protesto_sub_formulario_impressao_formulario_protesto_impressao_formulario_protesto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component */
    "./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.ts");
    /* harmony import */


    var _guards_login_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./guards/login.guard */
    "./src/app/guards/login.guard.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_empresa_guard_resolve__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./guards/empresa.guard.resolve */
    "./src/app/guards/empresa.guard.resolve.ts");
    /* harmony import */


    var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./cadastro/cadastro.component */
    "./src/app/cadastro/cadastro.component.ts");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _services_titulo_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"]]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
      resolve: {
        empresa: _services_empresa_service__WEBPACK_IMPORTED_MODULE_25__["EmpresaService"]
      }
    }, {
      path: 'devedores',
      component: _devedores_devedores_component__WEBPACK_IMPORTED_MODULE_5__["DevedoresComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'atualizacao/:idU',
      component: _atualizacao_atualizacao_component__WEBPACK_IMPORTED_MODULE_6__["AtualizacaoComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
      resolve: {
        empresa: _guards_empresa_guard_resolve__WEBPACK_IMPORTED_MODULE_22__["EmpresaResolver"]
      }
    }, {
      path: 'adicional',
      component: _adicional_adicional_component__WEBPACK_IMPORTED_MODULE_7__["AdicionalComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
      resolve: {
        usuarios: _services_usuario_service__WEBPACK_IMPORTED_MODULE_24__["UsuarioService"]
      }
    }, {
      path: 'adesao',
      component: _adesao_adesao_component__WEBPACK_IMPORTED_MODULE_8__["AdesaoComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'senha',
      component: _senha_senha_component__WEBPACK_IMPORTED_MODULE_9__["SenhaComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'titulos',
      component: _titulos_titulos_component__WEBPACK_IMPORTED_MODULE_10__["TitulosComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'digitacao-titulos/:idLote',
      component: _digitacao_titulos_digitacao_titulos_component__WEBPACK_IMPORTED_MODULE_11__["DigitacaoTitulosComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'pesquisar-lotes',
      component: _pesquisar_lotes_pesquisar_lotes_component__WEBPACK_IMPORTED_MODULE_12__["PesquisarLotesComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'pesquisar-devedores',
      component: _pesquisar_devedores_pesquisar_devedores_component__WEBPACK_IMPORTED_MODULE_13__["PesquisarDevedoresComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'posicao-titulos',
      component: _posicao_titulos_posicao_titulos_component__WEBPACK_IMPORTED_MODULE_17__["PosicaoTitulosComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'posicao-titulos-devedor',
      component: _posicao_titulos_devedor_posicao_titulos_devedor_component__WEBPACK_IMPORTED_MODULE_18__["PosicaoTitulosDevedorComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'protesto/:id',
      component: _protesto_protesto_component__WEBPACK_IMPORTED_MODULE_14__["ProtestoComponent"]
    }, {
      path: 'protesto',
      component: _protesto_protesto_component__WEBPACK_IMPORTED_MODULE_14__["ProtestoComponent"]
    }, {
      path: 'cadastro',
      component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["CadastroComponent"],
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"]]
    }, {
      path: 'titulos-lote',
      component: _titulos_lote_titulos_lote_component__WEBPACK_IMPORTED_MODULE_15__["TitulosLoteComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'requerimento-protesto/:idLote',
      component: _requerimento_protesto_requerimento_protesto_component__WEBPACK_IMPORTED_MODULE_16__["RequerimentoProtestoComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    }, {
      path: 'impressao-formulario-protesto/:idTitulo',
      component: _protesto_sub_formulario_impressao_formulario_protesto_impressao_formulario_protesto_component__WEBPACK_IMPORTED_MODULE_19__["ImpressaoFormularioProtestoComponent"],
      resolve: {
        titulo: _services_titulo_service__WEBPACK_IMPORTED_MODULE_26__["TituloService"]
      }
    }, {
      path: '**',
      component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_27__["PaginaNaoEncontradaComponent"]
    }];

    var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(loginService) {
        _classCallCheck(this, AppComponent);

        this.loginService = loginService;
        this.mostrarMenu = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loginService.mostrarMenuEmitter.subscribe(function (mostrar) {
            _this5.mostrarMenu = mostrar;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _devedores_devedores_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./devedores/devedores.component */
    "./src/app/devedores/devedores.component.ts");
    /* harmony import */


    var _atualizacao_atualizacao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./atualizacao/atualizacao.component */
    "./src/app/atualizacao/atualizacao.component.ts");
    /* harmony import */


    var _adicional_adicional_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./adicional/adicional.component */
    "./src/app/adicional/adicional.component.ts");
    /* harmony import */


    var _adesao_adesao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./adesao/adesao.component */
    "./src/app/adesao/adesao.component.ts");
    /* harmony import */


    var _senha_senha_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./senha/senha.component */
    "./src/app/senha/senha.component.ts");
    /* harmony import */


    var _titulos_titulos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./titulos/titulos.component */
    "./src/app/titulos/titulos.component.ts");
    /* harmony import */


    var _digitacao_titulos_digitacao_titulos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./digitacao-titulos/digitacao-titulos.component */
    "./src/app/digitacao-titulos/digitacao-titulos.component.ts");
    /* harmony import */


    var _pesquisar_lotes_pesquisar_lotes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pesquisar-lotes/pesquisar-lotes.component */
    "./src/app/pesquisar-lotes/pesquisar-lotes.component.ts");
    /* harmony import */


    var _pesquisar_devedores_pesquisar_devedores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pesquisar-devedores/pesquisar-devedores.component */
    "./src/app/pesquisar-devedores/pesquisar-devedores.component.ts");
    /* harmony import */


    var _posicao_titulos_posicao_titulos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./posicao-titulos/posicao-titulos.component */
    "./src/app/posicao-titulos/posicao-titulos.component.ts");
    /* harmony import */


    var _posicao_titulos_devedor_posicao_titulos_devedor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./posicao-titulos-devedor/posicao-titulos-devedor.component */
    "./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.ts");
    /* harmony import */


    var _informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./informacoes-importantes/informacoes-importantes.component */
    "./src/app/informacoes-importantes/informacoes-importantes.component.ts");
    /* harmony import */


    var _protesto_protesto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./protesto/protesto.component */
    "./src/app/protesto/protesto.component.ts");
    /* harmony import */


    var _adicional_cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./adicional/cadastro/adicional-cadastro.component */
    "./src/app/adicional/cadastro/adicional-cadastro.component.ts");
    /* harmony import */


    var _adicional_edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./adicional/edicao/adicional-edicao.component */
    "./src/app/adicional/edicao/adicional-edicao.component.ts");
    /* harmony import */


    var _titulos_lote_titulos_lote_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./titulos-lote/titulos-lote.component */
    "./src/app/titulos-lote/titulos-lote.component.ts");
    /* harmony import */


    var _protesto_sub_formulario_protesto_sub_formulario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./protesto/sub-formulario/protesto-sub-formulario.component */
    "./src/app/protesto/sub-formulario/protesto-sub-formulario.component.ts");
    /* harmony import */


    var _requerimento_protesto_requerimento_protesto_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./requerimento-protesto/requerimento-protesto.component */
    "./src/app/requerimento-protesto/requerimento-protesto.component.ts");
    /* harmony import */


    var _devedores_cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./devedores/cadastro/devedor-cadastro.component */
    "./src/app/devedores/cadastro/devedor-cadastro.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_36___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__);
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _guards_empresa_guard_resolve__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./guards/empresa.guard.resolve */
    "./src/app/guards/empresa.guard.resolve.ts");
    /* harmony import */


    var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./cadastro/cadastro.component */
    "./src/app/cadastro/cadastro.component.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_barcode__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ngx-barcode */
    "./node_modules/ngx-barcode/index.js");
    /* harmony import */


    var _directives_lowercase_input_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./directives/lowercase-input.directive */
    "./src/app/directives/lowercase-input.directive.ts");
    /* harmony import */


    var _directives_uppercase_input_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./directives/uppercase-input.directive */
    "./src/app/directives/uppercase-input.directive.ts");
    /* harmony import */


    var _digitacao_titulos_sub_formulario_digitacao_sub_formulario_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./digitacao-titulos/sub-formulario/digitacao-sub-formulario.component */
    "./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.ts");
    /* harmony import */


    var ngx_captcha__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ngx-captcha */
    "./node_modules/ngx-captcha/fesm2015/ngx-captcha.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ng2-currency-mask */
    "./node_modules/ng2-currency-mask/index.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__);
    /* harmony import */


    var _protesto_sub_formulario_impressao_formulario_protesto_impressao_formulario_protesto_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component */
    "./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.ts");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_53___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_53__);
    /* harmony import */


    var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./rodape/rodape.component */
    "./src/app/rodape/rodape.component.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _devedores_devedores_component__WEBPACK_IMPORTED_MODULE_12__["DevedoresComponent"], _atualizacao_atualizacao_component__WEBPACK_IMPORTED_MODULE_13__["AtualizacaoComponent"], _adicional_adicional_component__WEBPACK_IMPORTED_MODULE_14__["AdicionalComponent"], _adesao_adesao_component__WEBPACK_IMPORTED_MODULE_15__["AdesaoComponent"], _senha_senha_component__WEBPACK_IMPORTED_MODULE_16__["SenhaComponent"], _devedores_cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_30__["DevedorCadastroComponent"], _titulos_titulos_component__WEBPACK_IMPORTED_MODULE_17__["TitulosComponent"], _digitacao_titulos_digitacao_titulos_component__WEBPACK_IMPORTED_MODULE_18__["DigitacaoTitulosComponent"], _pesquisar_lotes_pesquisar_lotes_component__WEBPACK_IMPORTED_MODULE_19__["PesquisarLotesComponent"], _pesquisar_devedores_pesquisar_devedores_component__WEBPACK_IMPORTED_MODULE_20__["PesquisarDevedoresComponent"], _posicao_titulos_posicao_titulos_component__WEBPACK_IMPORTED_MODULE_21__["PosicaoTitulosComponent"], _posicao_titulos_devedor_posicao_titulos_devedor_component__WEBPACK_IMPORTED_MODULE_22__["PosicaoTitulosDevedorComponent"], _informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_23__["InformacoesImportantesComponent"], _protesto_protesto_component__WEBPACK_IMPORTED_MODULE_24__["ProtestoComponent"], _adicional_cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_25__["AdicionalCadastroComponent"], _adicional_edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_26__["AdicionalEdicaoComponent"], _titulos_lote_titulos_lote_component__WEBPACK_IMPORTED_MODULE_27__["TitulosLoteComponent"], _requerimento_protesto_requerimento_protesto_component__WEBPACK_IMPORTED_MODULE_29__["RequerimentoProtestoComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_39__["CadastroComponent"], _protesto_sub_formulario_protesto_sub_formulario_component__WEBPACK_IMPORTED_MODULE_28__["ProtestoSubFormularioComponent"], _protesto_sub_formulario_impressao_formulario_protesto_impressao_formulario_protesto_component__WEBPACK_IMPORTED_MODULE_49__["ImpressaoFormularioProtestoComponent"], _digitacao_titulos_sub_formulario_digitacao_sub_formulario_component__WEBPACK_IMPORTED_MODULE_46__["DigitacaoSubFormularioComponent"], _directives_lowercase_input_directive__WEBPACK_IMPORTED_MODULE_44__["LowercaseInputDirective"], _directives_uppercase_input_directive__WEBPACK_IMPORTED_MODULE_45__["UppercaseInputDirective"], _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_52__["PaginaNaoEncontradaComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_54__["RodapeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_31__["ModalModule"].forRoot(), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_42__["AccordionModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["Routing"], _angular_fire__WEBPACK_IMPORTED_MODULE_33__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_37__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_35__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__["AngularFireAuthModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_33__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__["TextMaskModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_41__["NgBrazil"], ngx_barcode__WEBPACK_IMPORTED_MODULE_43__["NgxBarcodeModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_47__["NgxCaptchaModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__["CurrencyMaskModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_50__["InfiniteScrollModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_51__["NgxSpinnerModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_53__["SidebarModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_55__["PopoverModule"].forRoot()],
      entryComponents: [_devedores_cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_30__["DevedorCadastroComponent"], _informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_23__["InformacoesImportantesComponent"], _adicional_cadastro_adicional_cadastro_component__WEBPACK_IMPORTED_MODULE_25__["AdicionalCadastroComponent"], _adicional_edicao_adicional_edicao_component__WEBPACK_IMPORTED_MODULE_26__["AdicionalEdicaoComponent"], _protesto_sub_formulario_protesto_sub_formulario_component__WEBPACK_IMPORTED_MODULE_28__["ProtestoSubFormularioComponent"], _digitacao_titulos_sub_formulario_digitacao_sub_formulario_component__WEBPACK_IMPORTED_MODULE_46__["DigitacaoSubFormularioComponent"], _protesto_sub_formulario_impressao_formulario_protesto_impressao_formulario_protesto_component__WEBPACK_IMPORTED_MODULE_49__["ImpressaoFormularioProtestoComponent"]],
      providers: [_angular_fire__WEBPACK_IMPORTED_MODULE_33__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__["AngularFireAuthModule"], _guards_empresa_guard_resolve__WEBPACK_IMPORTED_MODULE_38__["EmpresaResolver"], _services_login_service__WEBPACK_IMPORTED_MODULE_40__["LoginService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/atualizacao/atualizacao.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/atualizacao/atualizacao.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAtualizacaoAtualizacaoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* ---- CONTAINER FORMULÁRIO --*/\n.form-container {\n  width: 1024px;\n  margin: 0 auto;\n  padding: 20px 15px;\n  border-radius: 5px; }\n.btn-cep {\n  height: 32px;\n  margin: 28px 5px 0 -5px;\n  width: 148px; }\n.btn-cep .btn-cep-search {\n  width: 158px;\n  margin-left: 4px; }\n.form-check {\n  margin-top: 35px; }\n.form-check-label {\n  margin-right: 10px; }\n.form-check-set {\n  margin-left: 15px; }\n/* == RADIO BUTTONS == */\n.radio-title {\n  float: left; }\n.form-check-inline {\n  margin-top: 2px;\n  float: left;\n  clear: left; }\n/* == BOTÕES == */\n.btn-cadastro {\n  width: 300px;\n  margin-left: 359px; }\n.form-container .btn-atualizacao {\n  margin-right: 10px;\n  margin-top: 10px; }\n.form-container .btn-atualizacao:last-child {\n  width: 135px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR1YWxpemFjYW8vYXR1YWxpemFjYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F0dWFsaXphY2FvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxhdHVhbGl6YWNhb1xcYXR1YWxpemFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGdDQUFBO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkIsd0JBQUE7QUFDQTtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXLEVBQUE7QUFJYixpQkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXR1YWxpemFjYW8vYXR1YWxpemFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiAtLS0tIENPTlRBSU5FUiBGT1JNVUzDgVJJTyAtLSovXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLmJ0bi1jZXAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjhweCA1cHggMCAtNXB4O1xuICB3aWR0aDogMTQ4cHg7IH1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBtYXJnaW4tbGVmdDogNHB4OyB9XG5cbi5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLXRvcDogMzVweDsgfVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4uZm9ybS1jaGVjay1zZXQge1xuICBtYXJnaW4tbGVmdDogMTVweDsgfVxuXG4vKiA9PSBSQURJTyBCVVRUT05TID09ICovXG4ucmFkaW8tdGl0bGUge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uZm9ybS1jaGVjay1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogbGVmdDsgfVxuXG4vKiA9PSBCT1TDlUVTID09ICovXG4uYnRuLWNhZGFzdHJvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogMzU5cHg7IH1cblxuLmZvcm0tY29udGFpbmVyIC5idG4tYXR1YWxpemFjYW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLmZvcm0tY29udGFpbmVyIC5idG4tYXR1YWxpemFjYW86bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMzVweDsgfVxuIiwiLyogLS0tLSBDT05UQUlORVIgRk9STVVMw4FSSU8gLS0qL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLWNlcCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAyOHB4IDVweCAwIC01cHg7XG4gIHdpZHRoOiAxNDhweDtcbn1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9ybS1jaGVjay1zZXQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLyogPT0gUkFESU8gQlVUVE9OUyA9PSAqL1xuLnJhZGlvLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mb3JtLWNoZWNrLWlubGluZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBsZWZ0O1xufVxuXG5cbi8qID09IEJPVMOVRVMgPT0gKi9cbi5idG4tY2FkYXN0cm8ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNTlweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5idG4tYXR1YWxpemFjYW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuYnRuLWF0dWFsaXphY2FvOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTM1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/atualizacao/atualizacao.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/atualizacao/atualizacao.component.ts ***!
    \******************************************************/

  /*! exports provided: AtualizacaoComponent */

  /***/
  function srcAppAtualizacaoAtualizacaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtualizacaoComponent", function () {
      return AtualizacaoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/cep.service */
    "./src/app/services/cep.service.ts");

    var AtualizacaoComponent =
    /*#__PURE__*/
    function () {
      function AtualizacaoComponent(route, formBuilder, arraysService, empresaService, fireAuth, cepService) {
        _classCallCheck(this, AtualizacaoComponent);

        //this.idU = this.route.snapshot.params['idU'];
        this.route = route;
        this.formBuilder = formBuilder;
        this.arraysService = arraysService;
        this.empresaService = empresaService;
        this.fireAuth = fireAuth;
        this.cepService = cepService;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
        this.submitted = false;
        this.idU = this.fireAuth.auth.currentUser.uid;
        this.estados = new Array();
        this.bancos = new Array();
        this.empresa = {};
        this.conta = {};
        this.telefone = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
        this.cep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
        this.cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
        this.rg = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/];
        this.fGroupEmpresa = this.formBuilder.group({
          'documento': [this.empresa.documento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'telefone': [this.empresa.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
          'nome': [this.empresa.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'endereco': [this.empresa.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'bairro': [this.empresa.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cidade': [this.empresa.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'complemento': [this.empresa.complemento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'estado': [this.empresa.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
          'cep': [this.empresa.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])],
          'numero': [this.empresa.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'emissor': [this.empresa.emissor],
          'rg': [this.empresa.rg],
          'tipo': [this.empresa.tipo],
          'nomeRepresentante': [this.empresa.nomeRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cpfRepresentante': [this.empresa.cpfRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazilValidators"].cpf])],
          'emissorRepresentante': [this.empresa.emissorRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'idBanco': [this.empresa.idBanco],
          'agencia': [this.empresa.agencia],
          'conta': [this.empresa.conta],
          'titularidade': [this.empresa.titularidade],
          'contaConjunta': [this.empresa.contaConjunta],
          'email': [this.empresa.email],
          'idUsuario': [this.empresa.idUsuario],
          'idEmpresa': [this.empresa.idEmpresa]
        });
        this.buscaEmpresa();
        this.carregaBancos(this.bancos);
        this.carregaEstados(this.estados);
      }

      _createClass(AtualizacaoComponent, [{
        key: "carregaValoresEmpresa",
        value: function carregaValoresEmpresa() {
          this.fGroupEmpresa.patchValue(this.empresa);
        }
      }, {
        key: "carregaBancos",
        value: function carregaBancos(bancos) {
          this.arraysService.carregaBanco(bancos);
        }
      }, {
        key: "carregaEstados",
        value: function carregaEstados(estados) {
          this.arraysService.carregaEstado(estados);
        }
      }, {
        key: "buscaEmpresa",
        value: function buscaEmpresa() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.subscribe = this.route.data.subscribe(function (data) {
                      console.log(data);
                      _this6.empresa = data.empresa;
                    });
                    console.log('buscou', this.empresa);
                    this.carregaValoresEmpresa();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "validaEmpresa",
        value: function validaEmpresa() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.empresa = this.fGroupEmpresa.value;
                    console.log('Antes do update', this.empresa);
                    this.empresaService.atualizaEmpresa(this.empresa, this.idU).then(function () {
                      _this7.confirmSuccess();
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          if (this.fGroupEmpresa.invalid) return;
          this.validaEmpresa();
        }
      }, {
        key: "buscaCep",
        value: function buscaCep() {
          var _this8 = this;

          this.cepService.getCEPCorreios(this.fGroupEmpresa.controls['cep'].value).then(function (res) {
            _this8.fGroupEmpresa.controls['endereco'].setValue(res.logradouro);

            _this8.fGroupEmpresa.controls['bairro'].setValue(res.bairro);

            _this8.fGroupEmpresa.controls['cidade'].setValue(res.localidade);

            _this8.fGroupEmpresa.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "confirmSuccess",
        value: function confirmSuccess() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Dados atualizados com sucesso!',
            showConfirmButton: true
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.fGroupEmpresa.controls;
        }
      }]);

      return AtualizacaoComponent;
    }();

    AtualizacaoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__["ArraysService"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_6__["EmpresaService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_10__["CepService"]
      }];
    };

    AtualizacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-atualizacao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./atualizacao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/atualizacao/atualizacao.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./atualizacao.component.scss */
      "./src/app/atualizacao/atualizacao.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__["ArraysService"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_6__["EmpresaService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_10__["CepService"]])], AtualizacaoComponent);
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/cadastro/cadastro.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCadastroCadastroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* ---- CONTAINER FORMULÁRIO --*/\n.form-container {\n  width: 1024px;\n  margin: 0 auto;\n  padding: 20px 15px;\n  border-radius: 5px; }\n.btn-cep {\n  height: 32px;\n  margin: 28px 5px 0 0;\n  width: 150px; }\n.btn-cep .btn-cep-search {\n  width: 162px; }\n.form-check {\n  margin-top: 35px; }\n.form-check-label {\n  margin-right: 10px; }\n.form-check-set {\n  margin-left: 15px; }\n.radio-title {\n  margin-left: 10px; }\n.form-check-inline {\n  margin-top: -40px; }\n.btn-cadastro {\n  width: 300px;\n  margin: 0 auto; }\n.form-container .btn-atualizacao {\n  margin-right: 10px;\n  margin-top: 10px; }\n.form-container .btn-atualizacao:last-child {\n  width: 135px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhZGFzdHJvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxjYWRhc3Ryb1xcY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGdDQUFBO0FBQ0E7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiAtLS0tIENPTlRBSU5FUiBGT1JNVUzDgVJJTyAtLSovXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLmJ0bi1jZXAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjhweCA1cHggMCAwO1xuICB3aWR0aDogMTUwcHg7IH1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE2MnB4OyB9XG5cbi5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLXRvcDogMzVweDsgfVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4uZm9ybS1jaGVjay1zZXQge1xuICBtYXJnaW4tbGVmdDogMTVweDsgfVxuXG4ucmFkaW8tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuXG4uZm9ybS1jaGVjay1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAtNDBweDsgfVxuXG4uYnRuLWNhZGFzdHJvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi1hdHVhbGl6YWNhbyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi1hdHVhbGl6YWNhbzpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDEzNXB4OyB9XG4iLCIvKiAtLS0tIENPTlRBSU5FUiBGT1JNVUzDgVJJTyAtLSovXG4uZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmJ0bi1jZXAge1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW46IDI4cHggNXB4IDAgMDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgXG4gIC5idG4tY2VwIC5idG4tY2VwLXNlYXJjaCB7XG4gICAgd2lkdGg6IDE2MnB4O1xuICB9XG4gIFxuICAuZm9ybS1jaGVjayB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgfVxuICBcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmZvcm0tY2hlY2stc2V0IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICBcbiAgLnJhZGlvLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLmZvcm0tY2hlY2staW5saW5lIHtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfVxuICBcbiAgLmJ0bi1jYWRhc3RybyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXIgLmJ0bi1hdHVhbGl6YWNhbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRhaW5lciAuYnRuLWF0dWFsaXphY2FvOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMzVweDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cadastro/cadastro.component.ts ***!
    \************************************************/

  /*! exports provided: CadastroComponent */

  /***/
  function srcAppCadastroCadastroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroComponent", function () {
      return CadastroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_arrays_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_cep_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/cep.service */
    "./src/app/services/cep.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);

    var CadastroComponent =
    /*#__PURE__*/
    function () {
      function CadastroComponent(arraysService, formBuilder, empresaService, route, cepService) {
        var _this9 = this;

        _classCallCheck(this, CadastroComponent);

        this.arraysService = arraysService;
        this.formBuilder = formBuilder;
        this.empresaService = empresaService;
        this.route = route;
        this.cepService = cepService;
        this.estados = new Array();
        this.bancos = new Array();
        this.usuario = {};
        this.empresa = {};
        this.conta = {};
        this.representante = {};
        this.submitted = false;
        this.telefone = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
        this.cep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
        this.cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
        this.rg = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/];
        this.subscription = this.route.queryParamMap.subscribe(function (params) {
          params.get('empresa') || 'None';
          console.log(params);
          _this9.empresa.email = params.get('email');
          _this9.empresa.documento = params.get('documento');
          _this9.empresa.tipo = params.get('tipo');
          _this9.usuario.email = _this9.empresa.email;
        });
        this.fGroupEmpresa = this.formBuilder.group({
          'documento': [this.empresa.documento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
          'telefone': [this.empresa.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)])],
          'nome': [this.empresa.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'endereco': [this.empresa.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'bairro': [this.empresa.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'cidade': [this.empresa.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'complemento': [this.empresa.complemento],
          'estado': [this.empresa.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
          'cep': [this.empresa.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)])],
          'numero': [this.empresa.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'emissor': [this.empresa.emissor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'rg': [this.empresa.rg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
          'email': [this.empresa.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'tipo': [this.empresa.tipo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.fGroupEmpresaRepresentante = this.formBuilder.group({
          'nomeRepresentante': [this.empresa.nomeRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'rg': [this.empresa.rg, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)])],
          'cpfRepresentante': [this.empresa.cpfRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)])],
          'emissorRepresentante': [this.empresa.emissorRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)])]
        });
        this.fGroupEmpresaConta = this.formBuilder.group({
          'idBanco': [this.empresa.idBanco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'agencia': [this.empresa.agencia, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
          'conta': [this.empresa.conta, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])],
          'titularidade': [this.empresa.titularidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'contaConjunta': [this.empresa.contaConjunta, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.fGroupUsuario = this.formBuilder.group({
          'email': [this.usuario.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)])],
          'senha': [this.usuario.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'confirmaSenha': [this.senha2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])]
        });
        this.carregaBancos(this.bancos);
        this.carregaEstados(this.estados);
        console.log(this.fGroupEmpresa.controls.numero.errors);
      }

      _createClass(CadastroComponent, [{
        key: "carregaBancos",
        value: function carregaBancos(bancos) {
          this.arraysService.carregaBanco(bancos);
        }
      }, {
        key: "carregaEstados",
        value: function carregaEstados(estados) {
          this.arraysService.carregaEstado(estados);
        }
      }, {
        key: "validaEmpresa",
        value: function validaEmpresa() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var values;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.submitted = true;
                    this.empresa = this.fGroupEmpresa.value;
                    this.conta = this.fGroupEmpresaConta.value;
                    this.representante = this.fGroupEmpresaRepresentante.value;
                    values = this.fGroupUsuario.value;
                    this.usuario.senha = values.senha;
                    this.usuario.email = values.email;
                    this.senha2 = values.confirmaSenha;
                    this.copiaParaEmpresa();

                    if (!(this.usuario.senha == this.senha2)) {
                      _context3.next = 15;
                      break;
                    }

                    this.empresa = this.fGroupEmpresa.value;
                    _context3.next = 13;
                    return this.empresaService.criaEmpresaUsuario(this.empresa, this.usuario).then(function () {}).catch(function (error) {
                      console.log(error);
                    }).finally(function () {
                      _this10.empresaService.buscaEmpresa(_this10.empresa.idUsuario).then(function (data) {
                        _this10.empresa = data;
                      });
                    });

                  case 13:
                    _context3.next = 16;
                    break;

                  case 15:
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                      title: 'As senhas digitadas não são iguais',
                      icon: 'error',
                      cancelButtonColor: '#d33',
                      cancelButtonText: 'Cancelar'
                    });

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "copiaDeEmpresa",
        value: function copiaDeEmpresa() {
          this.conta.agencia = this.empresa.agencia;
          this.conta.idBanco = this.empresa.idBanco;
          this.conta.titularidade = this.empresa.titularidade;
          this.conta.contaConjunta = this.empresa.contaConjunta;
          this.conta.conta = this.empresa.conta;
          this.representante.cpfRepresentante = this.empresa.cpfRepresentante;
          this.representante.nomeRepresentante = this.empresa.nomeRepresentante;
          this.representante.rg = this.empresa.rg;
          this.representante.emissorRepresentante = this.empresa.emissorRepresentante;
        }
      }, {
        key: "copiaParaEmpresa",
        value: function copiaParaEmpresa() {
          this.empresa.agencia = this.conta.agencia;
          this.empresa.idBanco = this.conta.idBanco;
          this.empresa.titularidade = this.conta.titularidade;
          this.empresa.contaConjunta = this.conta.contaConjunta;
          this.empresa.conta = this.conta.conta;
          this.empresa.cpfRepresentante = this.representante.cpfRepresentante;
          this.empresa.nomeRepresentante = this.representante.nomeRepresentante;
          this.empresa.rg = this.representante.rg;
          this.empresa.emissorRepresentante = this.representante.emissorRepresentante;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "carregaEmpresa",
        value: function carregaEmpresa() {
          this.fGroupEmpresa.controls['documento'].setValue(this.empresa.documento);
          this.fGroupEmpresa.controls['email'].setValue(this.empresa.email);
          this.fGroupEmpresa.controls['tipo'].setValue(this.empresa.tipo);
        }
      }, {
        key: "buscarCEP",
        value: function buscarCEP() {
          var _this11 = this;

          this.cepService.getCEPCorreios(this.fGroupEmpresa.controls['cep'].value).then(function (res) {
            _this11.fGroupEmpresa.controls['endereco'].setValue(res.logradouro);

            _this11.fGroupEmpresa.controls['bairro'].setValue(res.bairro);

            _this11.fGroupEmpresa.controls['cidade'].setValue(res.localidade);

            _this11.fGroupEmpresa.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "fEmpresa",
        get: function get() {
          return this.fGroupEmpresa.controls;
        }
      }, {
        key: "fRepresentante",
        get: function get() {
          return this.fGroupEmpresaRepresentante.controls;
        }
      }, {
        key: "fEmpresaConta",
        get: function get() {
          return this.fGroupEmpresaConta.controls;
        }
      }, {
        key: "fUsuario",
        get: function get() {
          return this.fGroupUsuario.controls;
        }
      }]);

      return CadastroComponent;
    }();

    CadastroComponent.ctorParameters = function () {
      return [{
        type: _services_arrays_service__WEBPACK_IMPORTED_MODULE_3__["ArraysService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_cep_service__WEBPACK_IMPORTED_MODULE_6__["CepService"]
      }];
    };

    CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro.component.scss */
      "./src/app/cadastro/cadastro.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_arrays_service__WEBPACK_IMPORTED_MODULE_3__["ArraysService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_cep_service__WEBPACK_IMPORTED_MODULE_6__["CepService"]])], CadastroComponent);
    /***/
  },

  /***/
  "./src/app/devedores/cadastro/devedor-cadastro.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/devedores/cadastro/devedor-cadastro.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDevedoresCadastroDevedorCadastroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* MODAL CADASTRO DE DEVEDORES*/\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header h4 {\n  margin-left: 380px; }\n.modal-header .close span {\n  width: 25px;\n  height: 25px; }\n.modal-body .abas-container {\n  margin-top: 10px; }\n.modal-body\n.endereco-container,\n.telefone-container,\n.email-container {\n  margin-top: -5px; }\n.modal-body accordion-group div h3 {\n  font-size: 18px;\n  font-weight: 600; }\n.modal-body .btn-cep {\n  height: 32px;\n  margin: 28px 5px 0 2px;\n  width: 161px; }\n.modal-body .btn-cep .btn-cep-search {\n  width: 161px;\n  margin-left: 2px; }\n.modal-body .btn-add {\n  height: 32px;\n  margin: 28px 5px 0 0;\n  width: 162px; }\n.modal-body .btn-add .btn-add-adress {\n  width: 162px; }\n.modal-body .btn-add {\n  height: 32px;\n  margin: 28px 5px 0 0;\n  width: 160px; }\n.modal-body .btn-cep .btn-add-contact,\n.btn-add-email,\n.btn-add-tel {\n  width: 160px; }\n/* === TABELA ===*/\n.table {\n  margin-top: 20px; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table-medium {\n  width: 500px; }\n.table-icon {\n  text-align: center; }\n/* === RODAPÉ MODAL === */\n.modal-footer .btn {\n  margin: 0 auto; }\n.modal-footer {\n  background-color: #e4e9ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2ZWRvcmVzL2NhZGFzdHJvL2RldmVkb3ItY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldmVkb3Jlcy9jYWRhc3Ryby9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxcZGV2ZWRvcmVzXFxjYWRhc3Ryb1xcZGV2ZWRvci1jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsK0JBQUE7QUFDQTtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjs7OztFQUlFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWSxFQUFBO0FBR2Q7OztFQUdFLFlBQVksRUFBQTtBQUlkLGtCQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQix5QkFBQTtBQUNBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXZlZG9yZXMvY2FkYXN0cm8vZGV2ZWRvci1jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIE1PREFMIENBREFTVFJPIERFIERFVkVET1JFUyovXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjsgfVxuXG4ubW9kYWwtaGVhZGVyIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4OyB9XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHNwYW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi5tb2RhbC1ib2R5IC5hYmFzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLm1vZGFsLWJvZHlcbi5lbmRlcmVjby1jb250YWluZXIsXG4udGVsZWZvbmUtY29udGFpbmVyLFxuLmVtYWlsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC01cHg7IH1cblxuLm1vZGFsLWJvZHkgYWNjb3JkaW9uLWdyb3VwIGRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4ubW9kYWwtYm9keSAuYnRuLWNlcCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAyOHB4IDVweCAwIDJweDtcbiAgd2lkdGg6IDE2MXB4OyB9XG5cbi5tb2RhbC1ib2R5IC5idG4tY2VwIC5idG4tY2VwLXNlYXJjaCB7XG4gIHdpZHRoOiAxNjFweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4ubW9kYWwtYm9keSAuYnRuLWFkZCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAyOHB4IDVweCAwIDA7XG4gIHdpZHRoOiAxNjJweDsgfVxuXG4ubW9kYWwtYm9keSAuYnRuLWFkZCAuYnRuLWFkZC1hZHJlc3Mge1xuICB3aWR0aDogMTYycHg7IH1cblxuLm1vZGFsLWJvZHkgLmJ0bi1hZGQge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjhweCA1cHggMCAwO1xuICB3aWR0aDogMTYwcHg7IH1cblxuLm1vZGFsLWJvZHkgLmJ0bi1jZXAgLmJ0bi1hZGQtY29udGFjdCxcbi5idG4tYWRkLWVtYWlsLFxuLmJ0bi1hZGQtdGVsIHtcbiAgd2lkdGg6IDE2MHB4OyB9XG5cbi8qID09PSBUQUJFTEEgPT09Ki9cbi50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7IH1cblxuLnRhYmxlLW1lZGl1bSB7XG4gIHdpZHRoOiA1MDBweDsgfVxuXG4udGFibGUtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiA9PT0gUk9EQVDDiSBNT0RBTCA9PT0gKi9cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmOyB9XG4iLCIvKiBNT0RBTCBDQURBU1RSTyBERSBERVZFRE9SRVMqL1xuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWY7XG59XG5cbi5tb2RhbC1oZWFkZXIgaDQge1xuICBtYXJnaW4tbGVmdDogMzgwcHg7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHNwYW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubW9kYWwtYm9keSAuYWJhcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIFxuLm1vZGFsLWJvZHlcbi5lbmRlcmVjby1jb250YWluZXIsXG4udGVsZWZvbmUtY29udGFpbmVyLFxuLmVtYWlsLWNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLm1vZGFsLWJvZHkgYWNjb3JkaW9uLWdyb3VwIGRpdiBoMyAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59IFxuXG4ubW9kYWwtYm9keSAuYnRuLWNlcCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAyOHB4IDVweCAwIDJweDtcbiAgd2lkdGg6IDE2MXB4O1xufVxuXG4ubW9kYWwtYm9keSAuYnRuLWNlcCAuYnRuLWNlcC1zZWFyY2gge1xuICB3aWR0aDogMTYxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5tb2RhbC1ib2R5IC5idG4tYWRkIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI4cHggNXB4IDAgMDtcbiAgd2lkdGg6IDE2MnB4O1xufVxuXG4ubW9kYWwtYm9keSAuYnRuLWFkZCAuYnRuLWFkZC1hZHJlc3Mge1xuICB3aWR0aDogMTYycHg7XG59XG5cbi5tb2RhbC1ib2R5IC5idG4tYWRkIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI4cHggNXB4IDAgMDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4ubW9kYWwtYm9keSAuYnRuLWNlcCAuYnRuLWFkZC1jb250YWN0LFxuLmJ0bi1hZGQtZW1haWwsXG4uYnRuLWFkZC10ZWwge1xuICB3aWR0aDogMTYwcHg7XG59XG5cblxuLyogPT09IFRBQkVMQSA9PT0qL1xuLnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG59XG5cbi50YWJsZS1tZWRpdW0ge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi50YWJsZS1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiA9PT0gUk9EQVDDiSBNT0RBTCA9PT0gKi9cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/devedores/cadastro/devedor-cadastro.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/devedores/cadastro/devedor-cadastro.component.ts ***!
    \******************************************************************/

  /*! exports provided: DevedorCadastroComponent */

  /***/
  function srcAppDevedoresCadastroDevedorCadastroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevedorCadastroComponent", function () {
      return DevedorCadastroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/cep.service */
    "./src/app/services/cep.service.ts");
    /* harmony import */


    var src_app_services_devedor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/devedor.service */
    "./src/app/services/devedor.service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DevedorCadastroComponent =
    /*#__PURE__*/
    function () {
      function DevedorCadastroComponent(bsModalRef, cepService, formBuilder, arraysService, // private fireStore: AngularFirestore,
      devedorService, fireAuth, router) {
        var _this12 = this;

        _classCallCheck(this, DevedorCadastroComponent);

        this.bsModalRef = bsModalRef;
        this.cepService = cepService;
        this.formBuilder = formBuilder;
        this.arraysService = arraysService;
        this.devedorService = devedorService;
        this.fireAuth = fireAuth;
        this.router = router;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_4__["utilsBr"].MASKS;
        this.list = [];
        this.invalido = 'is-invalid';
        this.submitted = false;
        this.submittedEnd = false;
        this.idEmpresa = src_app_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"].idEmpresa;
        this.idUsuario = this.fireAuth.auth.currentUser.uid;
        this.mostrartableadress = false;
        this.mostrartablephone = false;
        this.mostrartableemail = false;
        this.alterando = false;
        this.mostrarButtonAdd = true;
        this.mostrarButtonAlt = false; //teste

        this.devedor = {};
        this.enderecos = new Array();
        this.endereco = {};
        this.telefones = new Array();
        this.telefone = {};
        this.emails = new Array();
        this.email = {};
        this.estados = new Array();
        this.CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/]; //DEVEDOR

        this.fGroupDevedor = this.formBuilder.group({
          'idUsuario': [this.devedor.idUsuario],
          'idDevedor': [this.devedor.idDevedor],
          'idEmpresa': [this.devedor.idEmpresa],
          'tipoDocumento': [this.devedor.tipoDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          'numeroDocumento': [this.devedor.numeroDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf])],
          'nomeDevedor': [this.devedor.nomeDevedor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'tipoDocumento2': [this.devedor.tipoDocumento2],
          'numeroDocumento2': [this.devedor.numeroDocumento2]
        }); //ENDEREÇO

        this.fGroupEndereco = this.formBuilder.group({
          'idEndereco': [this.endereco.idEndereco],
          'idDevedor': [this.endereco.idDevedor],
          'logradouro': [this.endereco.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'bairro': [this.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'localidade': [this.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'complemento': [this.endereco.complemento],
          'uf': [this.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)])],
          'cep': [this.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)])],
          'numero': [this.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        }); //TELEFONE

        this.fGroupTelefone = this.formBuilder.group({
          'idTelefone': [this.telefone.idTelefone],
          'idDevedor': [this.telefone.idDevedor],
          'telefone': [this.telefone.telefone]
        }); //EMAIL

        this.fGroupEmail = this.formBuilder.group({
          'idDevedor': [this.email.idDevedor],
          'idEmail': [this.email.idEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          'email': [this.email.email]
        });
        this.carregaEstados(this.estados);
        setTimeout(function () {
          _this12.alterando = _this12.alterandoDevedor;

          if (_this12.alterandoDevedor) {
            _this12.devedor = _this12.devedorParametro;

            _this12.fGroupDevedor.patchValue(_this12.devedor);

            _this12.carregaEnderecosDevedor();

            _this12.carregarEmailsDevedor();

            _this12.carregaTelefonesDevedor();
          }
        }, 100);
      }

      _createClass(DevedorCadastroComponent, [{
        key: "carregaEnderecosDevedor",
        value: function carregaEnderecosDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.devedorService.buscarEnderecoDevedor(this.devedor.idDevedor).then(function (data) {
                      console.log(data.size, 'size');

                      for (var i = 0; i < data.size; i++) {
                        var endereco = data.docs[i].data();
                        _this13.enderecos[i] = endereco;
                        _this13.enderecos[i].idEndereco = data.docs[i].id;
                        console.log(_this13.enderecos[i]);
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "carregarEmailsDevedor",
        value: function carregarEmailsDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this14 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.devedorService.buscarEmailDevedor(this.devedor.idDevedor).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        _this14.emails[i] = data.docs[i].data();
                        _this14.emails[i].idEmail = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "carregaTelefonesDevedor",
        value: function carregaTelefonesDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.devedorService.buscarTelefoneDevedor(this.devedor.idDevedor).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        _this15.telefones[i] = data.docs[i].data();
                        _this15.telefones[i].idTelefone = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "carregaEstados",
        value: function carregaEstados(estados) {
          this.arraysService.carregaEstado(estados);
        } // VERIFICAÇÃO DE DADOS

      }, {
        key: "copiaPEndereco",
        value: function copiaPEndereco() {
          this.endereco = this.fGroupEndereco.value;
        }
      }, {
        key: "copiaPTelefone",
        value: function copiaPTelefone() {
          this.telefone = this.fGroupTelefone.value;
        }
      }, {
        key: "copiaPEmail",
        value: function copiaPEmail() {
          this.email = this.fGroupEmail.value;
        } // ENVIO DO FORM

      }, {
        key: "onSubmitDev",
        value: function onSubmitDev() {
          this.submitted = true;

          if (this.fGroupDevedor.valid) {
            if (this.enderecos.length == 0) {
              this.mensagem('É necessário um endereço para o devedor!');
              return;
            }

            this.validaDevedor();
          }
        }
      }, {
        key: "validaDevedor",
        value: function validaDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this16 = this;

            var devedorRepetido;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    devedorRepetido = {};
                    this.devedor = this.fGroupDevedor.value;
                    this.devedor.idEmpresa = this.idEmpresa;
                    this.devedor.idUsuario = this.idUsuario;

                    if (!this.alterandoDevedor) {
                      _context8.next = 9;
                      break;
                    }

                    _context8.next = 7;
                    return this.devedorService.atualizaDevedor(this.devedor).then(function () {
                      _this16.confirmSuccess();
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 7:
                    _context8.next = 17;
                    break;

                  case 9:
                    _context8.next = 11;
                    return this.devedorService.buscaDevedorDocumentoEmpresa(this.devedor.numeroDocumento, this.devedor.idEmpresa).then(function (data) {
                      if (data.docs.length > 0) {
                        devedorRepetido = data.docs[0].data();
                      }
                    });

                  case 11:
                    if (!devedorRepetido.idDevedor) {
                      _context8.next = 14;
                      break;
                    }

                    this.mensagem('O devedor já existe, adicione um novo!');
                    return _context8.abrupt("return");

                  case 14:
                    console.log(this.enderecos, this.telefones, this.emails, this.devedor);
                    _context8.next = 17;
                    return this.devedorService.criarDevedor(this.devedor).then(function (docRef) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee7() {
                        var idDevedor, i, _i, _i2;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                idDevedor = docRef.id;
                                i = 0;

                              case 2:
                                if (!(i < this.enderecos.length)) {
                                  _context7.next = 9;
                                  break;
                                }

                                this.enderecos[i].idDevedor = idDevedor;
                                _context7.next = 6;
                                return this.devedorService.criarEnderecoDevedor(this.enderecos[i]).then(function () {}).catch(function (error) {});

                              case 6:
                                i++;
                                _context7.next = 2;
                                break;

                              case 9:
                                _i = 0;

                              case 10:
                                if (!(_i < this.telefones.length)) {
                                  _context7.next = 17;
                                  break;
                                }

                                this.telefones[_i].idDevedor = idDevedor;
                                _context7.next = 14;
                                return this.devedorService.criarTelefoneDevedor(this.telefones[_i]).then(function () {}).catch(function (error) {});

                              case 14:
                                _i++;
                                _context7.next = 10;
                                break;

                              case 17:
                                _i2 = 0;

                              case 18:
                                if (!(_i2 < this.emails.length)) {
                                  _context7.next = 25;
                                  break;
                                }

                                this.emails[_i2].idDevedor = idDevedor;
                                _context7.next = 22;
                                return this.devedorService.criarEmailDevedor(this.emails[_i2]).then(function () {}).catch(function (error) {});

                              case 22:
                                _i2++;
                                _context7.next = 18;
                                break;

                              case 25:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    }).finally(function () {
                      _this16.confirmSuccess();
                    });

                  case 17:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fGroupDevedor.controls['tipoDocumento'].setValue('CPF');
        }
      }, {
        key: "buscarCep",
        value: function buscarCep() {
          var _this17 = this;

          this.cepService.getCEPCorreios(this.fGroupEndereco.controls['cep'].value).then(function (res) {
            _this17.fGroupEndereco.controls['logradouro'].setValue(res.logradouro);

            _this17.fGroupEndereco.controls['bairro'].setValue(res.bairro);

            _this17.fGroupEndereco.controls['localidade'].setValue(res.localidade);

            _this17.fGroupEndereco.controls['uf'].setValue(res.uf);
          });
        }
      }, {
        key: "mensagem",
        value: function mensagem(title, icon) {
          icon !== undefined ? sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: title,
            icon: icon
          }) : sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: title,
            icon: 'error'
          });
        }
      }, {
        key: "confirmSuccess",
        value: function confirmSuccess() {
          var _this18 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Dados cadastrados com sucesso!',
            showConfirmButton: true
          }).then(function () {
            _this18.router.navigate(['/devedores']);
          });
        }
      }, {
        key: "alteraValidator",
        value: function alteraValidator(event) {
          this.fGroupDevedor.controls['numeroDocumento'].setValue('');
          var tipo = event.target.value;

          if (tipo == 'CPF') {
            this.fGroupDevedor.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf]));
          } else {
            this.fGroupDevedor.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cnpj]));
          }
        } //ENDEREÇO
        // ok

      }, {
        key: "enderecoExiste",
        value: function enderecoExiste(endereco, pos) {
          var posicao = -1;

          if (pos === -1) {
            for (var i = 0; i < this.enderecos.length; i++) {
              if (endereco.cep == this.enderecos[i].cep && endereco.bairro == this.enderecos[i].bairro && endereco.endereco == this.enderecos[i].endereco && endereco.numero == this.enderecos[i].numero) {
                console.log('endereco');
                posicao = i;
              }
            }

            return posicao;
          } else {
            for (var _i3 = 0; _i3 < this.enderecos.length; _i3++) {
              if (endereco.cep == this.enderecos[_i3].cep && endereco.bairro == this.enderecos[_i3].bairro && endereco.endereco == this.enderecos[_i3].endereco && endereco.numero == this.enderecos[_i3].numero && _i3 != this.posAlteracaoEndereco) {
                console.log('endereco');
                posicao = _i3;
              }
            }

            return posicao;
          }
        } // ok

      }, {
        key: "editarEndereco",
        value: function editarEndereco(pEndereco) {
          this.fGroupEndereco.patchValue(pEndereco);
          this.endereco = pEndereco;
          this.mostrarButtonAdd = false;
          this.mostrarButtonAlt = true;
          this.posAlteracaoEndereco = this.enderecoExiste(pEndereco, -1);
        } // ok

      }, {
        key: "salvarEnderecoEditado",
        value: function salvarEnderecoEditado() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.endereco = this.fGroupEndereco.value;

                    if (!(this.enderecoExiste(this.endereco, this.posAlteracaoEndereco) === -1)) {
                      _context9.next = 15;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context9.next = 7;
                      break;
                    }

                    _context9.next = 5;
                    return this.devedorService.atualizarEnderecoDevedor(this.endereco).then(function () {
                      _this19.enderecos[_this19.posAlteracaoEndereco] = _this19.endereco;

                      _this19.limparEndereco();

                      _this19.mostrarButtonAdd = true;
                      _this19.mostrarButtonAlt = false;
                      _this19.submitted = false;
                      _this19.submittedEnd = false;
                    });

                  case 5:
                    _context9.next = 13;
                    break;

                  case 7:
                    // CASO O USUÁRIO AINDA NÃO TENHA CRIADO NENHUM DEVEDOR !!!
                    this.enderecos[this.posAlteracaoEndereco] = this.endereco;
                    this.limparEndereco();
                    this.mostrarButtonAdd = true;
                    this.mostrarButtonAlt = false;
                    this.submitted = false;
                    this.submittedEnd = false;

                  case 13:
                    _context9.next = 16;
                    break;

                  case 15:
                    this.mensagem('Endereço já existe !');

                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } //ok

      }, {
        key: "excluirEndereco",
        value: function excluirEndereco(endereco) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this20 = this;

            var pos;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    pos = this.enderecoExiste(endereco, -1);

                    if (!this.alterandoDevedor) {
                      _context10.next = 6;
                      break;
                    }

                    _context10.next = 4;
                    return this.devedorService.apagarEnderecoDevedor(this.enderecos[pos].idEndereco).then(function () {
                      _this20.enderecos.splice(pos, 1);
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 4:
                    _context10.next = 7;
                    break;

                  case 6:
                    this.enderecos.splice(pos, 1);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        } //ok

      }, {
        key: "adicionarEndereco",
        value: function adicionarEndereco() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.endereco = this.fGroupEndereco.value;
                    this.submittedEnd = true;

                    if (!this.fGroupEndereco.valid) {
                      _context11.next = 18;
                      break;
                    }

                    if (!(this.enderecoExiste(this.endereco, -1) == -1)) {
                      _context11.next = 17;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context11.next = 12;
                      break;
                    }

                    this.mostrartableadress = true;
                    this.endereco.idDevedor = this.devedor.idDevedor;
                    console.log(' O endereço não existe! ');
                    _context11.next = 10;
                    return this.devedorService.criarEnderecoDevedor(this.endereco).then(function (data) {
                      _this21.endereco.idEndereco = data.id;

                      _this21.enderecos.push(_this21.endereco);

                      _this21.submittedEnd = false;

                      _this21.limparEndereco();
                    });

                  case 10:
                    _context11.next = 15;
                    break;

                  case 12:
                    this.enderecos.push(this.endereco);
                    this.submittedEnd = false;
                    this.limparEndereco();

                  case 15:
                    _context11.next = 18;
                    break;

                  case 17:
                    this.mensagem('O endereço já existe, adicione um novo!');

                  case 18:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "limparEndereco",
        value: function limparEndereco() {
          this.fGroupEndereco.reset();
        } // TELEFONE
        //ok

      }, {
        key: "telefoneExiste",
        value: function telefoneExiste(telefone, pos) {
          var posicao = -1;

          if (pos === -1) {
            for (var i = 0; i < this.telefones.length; i++) {
              if (telefone.telefone === this.telefones[i].telefone) {
                posicao = i;
              }
            }

            return posicao;
          } else {
            for (var _i4 = 0; _i4 < this.telefones.length; _i4++) {
              if (telefone.telefone === this.telefones[_i4].telefone && pos != _i4) {
                posicao = _i4;
              }
            }

            return posicao;
          }
        } //ok

      }, {
        key: "editarTelefone",
        value: function editarTelefone(pTelefone) {
          this.fGroupTelefone.patchValue(pTelefone);
          this.telefone = pTelefone;
          this.mostrarButtonAdd = false;
          this.mostrarButtonAlt = true;
          console.log(this.telefone);
          this.posAlteracaoTelefone = this.telefoneExiste(pTelefone, -1);
          console.log(this.posAlteracaoTelefone);
        } //ok

      }, {
        key: "salvarTelefoneEditado",
        value: function salvarTelefoneEditado() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.telefone = this.fGroupTelefone.value;

                    if (!(this.telefoneExiste(this.telefone, this.posAlteracaoTelefone) === -1)) {
                      _context12.next = 16;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context12.next = 8;
                      break;
                    }

                    this.telefone.idDevedor = this.devedor.idDevedor;
                    _context12.next = 6;
                    return this.devedorService.criarTelefoneDevedor(this.telefone).then(function (data) {
                      _this22.telefones[_this22.posAlteracaoTelefone] = _this22.telefone;

                      _this22.limparTelefone();

                      _this22.mostrarButtonAdd = true;
                      _this22.mostrarButtonAlt = false;
                      _this22.submitted = false;
                      _this22.submittedEnd = false;
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 6:
                    _context12.next = 14;
                    break;

                  case 8:
                    this.telefones[this.posAlteracaoTelefone] = this.telefone;
                    this.limparTelefone();
                    this.mostrarButtonAdd = true;
                    this.mostrarButtonAlt = false;
                    this.submitted = false;
                    this.submittedEnd = false;

                  case 14:
                    _context12.next = 17;
                    break;

                  case 16:
                    this.mensagem('Telefone já existe!');

                  case 17:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } //ok

      }, {
        key: "excluirTelefone",
        value: function excluirTelefone(telefone) {
          var _this23 = this;

          var pos = this.telefoneExiste(telefone, -1);

          if (this.alterandoDevedor) {
            this.devedorService.apagarTelefone(telefone.idTelefone).then(function () {
              _this23.telefones.splice(pos, 1);
            }).catch(function (error) {
              console.log(error);
            });
          } else {
            this.telefones.splice(pos, 1);
          }
        } //ok

      }, {
        key: "adicionarTelefone",
        value: function adicionarTelefone() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.telefone = this.fGroupTelefone.value;

                    if (!(this.telefoneExiste(this.telefone, -1) == -1)) {
                      _context13.next = 13;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context13.next = 8;
                      break;
                    }

                    this.telefone.idDevedor = this.devedor.idDevedor;
                    _context13.next = 6;
                    return this.devedorService.criarTelefoneDevedor(this.telefone).then(function (docRefTelefone) {
                      _this24.telefone.idTelefone = docRefTelefone.id;
                      _this24.mostrartablephone = true;

                      _this24.telefones.push(_this24.telefone);

                      _this24.limparTelefone();
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 6:
                    _context13.next = 11;
                    break;

                  case 8:
                    this.mostrartablephone = true;
                    this.telefones.push(this.telefone);
                    this.limparTelefone();

                  case 11:
                    _context13.next = 14;
                    break;

                  case 13:
                    this.mensagem('O telefone já existe, adicione um novo!');

                  case 14:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "limparTelefone",
        value: function limparTelefone() {
          this.fGroupTelefone.reset();
        } // EMAIL
        //ok

      }, {
        key: "emailExiste",
        value: function emailExiste(correio, pos) {
          var posicao = -1;

          if (pos != -1) {
            for (var i = 0; i < this.emails.length; i++) {
              if (correio.email === this.emails[i].email) {
                posicao = i;
              }
            }
          } else {
            for (var _i5 = 0; _i5 < this.emails.length; _i5++) {
              if (correio.email === this.emails[_i5].email && pos != _i5) {
                posicao = _i5;
              }
            }
          }

          return posicao;
        } //ok

      }, {
        key: "editarEmail",
        value: function editarEmail(pEmail) {
          this.fGroupEmail.patchValue(pEmail);
          this.email = pEmail;
          this.mostrarButtonAdd = false;
          this.mostrarButtonAlt = true;
          this.posAlteracaoEmail = this.emailExiste(pEmail, -1);
        } //ok

      }, {
        key: "salvarEmailEditado",
        value: function salvarEmailEditado() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.email = this.fGroupEmail.value;

                    if (!(this.emailExiste(this.email, this.posAlteracaoEmail) == -1)) {
                      _context14.next = 15;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context14.next = 7;
                      break;
                    }

                    _context14.next = 5;
                    return this.devedorService.atualizarEmailDevedor(this.email).then(function () {
                      _this25.emails[_this25.posAlteracaoEmail] = _this25.email;

                      _this25.limparEmail();

                      _this25.mostrarButtonAdd = true;
                      _this25.mostrarButtonAlt = false;
                      _this25.submitted = false;
                      _this25.submittedEnd = false;
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 5:
                    _context14.next = 13;
                    break;

                  case 7:
                    this.emails[this.posAlteracaoEmail] = this.email;
                    this.limparEmail();
                    this.mostrarButtonAdd = true;
                    this.mostrarButtonAlt = false;
                    this.submitted = false;
                    this.submittedEnd = false;

                  case 13:
                    _context14.next = 16;
                    break;

                  case 15:
                    this.mensagem('E-mail que está tentando inserir já existe!');

                  case 16:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        } //ok

      }, {
        key: "excluirEmail",
        value: function excluirEmail(email) {
          var _this26 = this;

          var pos = this.emailExiste(email, -1);

          if (this.alterandoDevedor) {
            this.devedorService.apagarEmailDevedor(this.email.idEmail).then(function () {
              _this26.emails.splice(pos, 1);
            }).catch(function (error) {
              console.log(error);
            });
          } else {
            this.emails.splice(pos, 1);
          }
        } //ok

      }, {
        key: "adicionarEmail",
        value: function adicionarEmail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this27 = this;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.email = this.fGroupEmail.value;

                    if (!(this.emailExiste(this.email, -1) == -1)) {
                      _context15.next = 14;
                      break;
                    }

                    if (!this.alterandoDevedor) {
                      _context15.next = 8;
                      break;
                    }

                    this.email.idDevedor = this.devedor.idDevedor;
                    _context15.next = 6;
                    return this.devedorService.criarEmailDevedor(this.email).then(function (docRefEmail) {
                      _this27.email.idEmail = docRefEmail.id;
                      _this27.mostrartableemail = true;

                      _this27.emails.push(_this27.email);

                      _this27.limparEmail();

                      console.log(_this27.emails);
                    });

                  case 6:
                    _context15.next = 12;
                    break;

                  case 8:
                    this.mostrartableemail = true;
                    this.emails.push(this.email);
                    this.limparEmail();
                    console.log(this.emails);

                  case 12:
                    _context15.next = 15;
                    break;

                  case 14:
                    this.mensagem('O e-mail já existe, adicione um novo!');

                  case 15:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "limparEmail",
        value: function limparEmail() {
          this.fGroupEmail.reset();
        } //EXCLUIR ENDEREÇO

      }, {
        key: "excluirAdress",
        value: function excluirAdress(endereco) {
          var _this28 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Deseja realmente excluir o endereço?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this28.excluirEndereco(endereco);
            }
          });
        } //EXCLUIR TELEFONE

      }, {
        key: "excluirTel",
        value: function excluirTel(telefone) {
          var _this29 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Deseja realmente excluir o telefone?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this29.excluirTelefone(telefone);
            }
          });
        } //EXCLUIR E-MAIL

      }, {
        key: "excluirAdressEmail",
        value: function excluirAdressEmail(email) {
          var _this30 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Deseja realmente excluir o email?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this30.excluirEmail(email);
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.fGroupDevedor.controls;
        }
      }, {
        key: "fend",
        get: function get() {
          return this.fGroupEndereco.controls;
        }
      }]);

      return DevedorCadastroComponent;
    }();

    DevedorCadastroComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"]
      }, {
        type: src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_9__["CepService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_8__["ArraysService"]
      }, {
        type: src_app_services_devedor_service__WEBPACK_IMPORTED_MODULE_10__["DevedorService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }];
    };

    DevedorCadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./devedor-cadastro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/cadastro/devedor-cadastro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./devedor-cadastro.component.scss */
      "./src/app/devedores/cadastro/devedor-cadastro.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"], src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_9__["CepService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_8__["ArraysService"], src_app_services_devedor_service__WEBPACK_IMPORTED_MODULE_10__["DevedorService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])], DevedorCadastroComponent);
    /***/
  },

  /***/
  "./src/app/devedores/devedores.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/devedores/devedores.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDevedoresDevedoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* === DEVEDORES === */\n.cl-devedores {\n  margin-bottom: 3rem; }\n.titledebt {\n  margin-left: 230px; }\n.input-group {\n  width: 40%;\n  margin-left: 230px;\n  z-index: 1; }\n.input-group #button-addon1 {\n  margin-right: 10px;\n  border-radius: 0 3px 3px 0; }\n/* === TABELA DEVEDORES === */\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 6rem;\n  font-size: 12.5px; }\n.table .title-table {\n  background-color: #bfc0c5;\n  font-size: 15px; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2ZWRvcmVzL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxkZXZlZG9yZXNcXGRldmVkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7QUFJNUIsNkJBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXZlZG9yZXMvZGV2ZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09IERFVkVET1JFUyA9PT0gKi9cbi5jbC1kZXZlZG9yZXMge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLnRpdGxlZGVidCB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQtZ3JvdXAgI2J1dHRvbi1hZGRvbjEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xufVxuXG5cbi8qID09PSBUQUJFTEEgREVWRURPUkVTID09PSAqL1xuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgZm9udC1zaXplOiAxMi41cHg7XG59XG5cbi50YWJsZSAudGl0bGUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/devedores/devedores.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/devedores/devedores.component.ts ***!
    \**************************************************/

  /*! exports provided: DevedoresComponent */

  /***/
  function srcAppDevedoresDevedoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevedoresComponent", function () {
      return DevedoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal/ */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cadastro/devedor-cadastro.component */
    "./src/app/devedores/cadastro/devedor-cadastro.component.ts");
    /* harmony import */


    var _services_devedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/devedor.service */
    "./src/app/services/devedor.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var DevedoresComponent =
    /*#__PURE__*/
    function () {
      function DevedoresComponent(modalService, devedorService, formBuilder) {
        _classCallCheck(this, DevedoresComponent);

        this.modalService = modalService;
        this.devedorService = devedorService;
        this.formBuilder = formBuilder;
        this.mostrargrid = false;
        this.devedores = new Array();
        this.fGBusca = this.formBuilder.group({
          'busca': [this.valorConsulta]
        });
      }

      _createClass(DevedoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pesquisar",
        value: function pesquisar() {
          this.devedores = [];
          this.mostrargrid = true;
          this.valorConsulta = this.fGBusca.controls['busca'].value;
          console.log(this.valorConsulta);
          this.buscaPeloNome(this.valorConsulta);
          this.buscaPeloDocumento(this.valorConsulta);
        }
      }, {
        key: "paginar",
        value: function paginar() {
          this.maisDevedoresPorNome();
          this.maisDevedoresPorDocumento();
        }
      }, {
        key: "openModalWithComponent",
        value: function openModalWithComponent() {
          var initialState = {
            editando: false
          };
          this.bsModalRef = this.modalService.show(_cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["DevedorCadastroComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
        }
      }, {
        key: "abrirModalParaEditar",
        value: function abrirModalParaEditar(devedorParametro) {
          console.log(devedorParametro);
          var initialState = {
            devedorParametro: devedorParametro,
            alterandoDevedor: true
          };
          this.bsModalRef = this.modalService.show(_cadastro_devedor_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["DevedorCadastroComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
        }
      }, {
        key: "existeDevedor",
        value: function existeDevedor(novoDevedor) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.devedores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var devedor = _step.value;

              if (devedor.idDevedor == novoDevedor.idDevedor || devedor.numeroDocumento == novoDevedor.numeroDocumento) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return false;
        }
      }, {
        key: "buscaPeloNome",
        value: function buscaPeloNome(str) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this31 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.devedorService.buscarDevedoresPorNome(str, _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"].idEmpresa).then(function (data) {
                      console.log('PeloNome', data.size);

                      for (var i = 0; i < data.size; i++) {
                        var devedor = data.docs[i].data();
                        devedor.idDevedor = data.docs[i].id;

                        if (!_this31.existeDevedor(devedor)) {
                          _this31.devedores.push(devedor);
                        }
                      }
                    });

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "buscaPeloDocumento",
        value: function buscaPeloDocumento(str) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var _this32 = this;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.devedorService.buscarDevedoresPorDocumento(str, _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"].idEmpresa).then(function (data) {
                      console.log('PeloDocumento', data.size);

                      for (var i = 0; i < data.size; i++) {
                        var devedor = data.docs[i].data();
                        devedor.idDevedor = data.docs[i].id;

                        if (!_this32.existeDevedor(devedor)) {
                          _this32.devedores.push(devedor);
                        }
                      }
                    });

                  case 2:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "encontrouDevedor",
        value: function encontrouDevedor(idDevedor) {
          for (var i = 0; i < this.devedores.length; i++) {
            if (this.devedores[i].idDevedor == idDevedor) {
              return i;
            }
          }

          return -1;
        }
      }, {
        key: "editarDevedor",
        value: function editarDevedor(devedor) {
          for (var i = 0; i < this.devedores.length; i++) {
            if (this.devedores[i].numeroDocumento == devedor.numeroDocumento) {
              this.devedores.splice(i, 1);
            }
          }
        }
      }, {
        key: "apagarDevedor",
        value: function apagarDevedor(idDevedor) {
          var encontrou = this.encontrouDevedor(idDevedor);
          this.devedores.splice(encontrou, 1);
          this.devedorService.deletaDevedor(idDevedor).then(function () {
            console.log('devedor Apagado!');
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "maisDevedoresPorNome",
        value: function maisDevedoresPorNome() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var _this33 = this;

            var ultimaPos;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    console.log('passou por aque', this.devedores.length);
                    ultimaPos = this.devedores[this.devedores.length - 1].nomeDevedor;
                    console.log(ultimaPos);
                    _context18.next = 5;
                    return this.devedorService.buscarMaisDevedoresPorNome(this.valorConsulta, _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"].idEmpresa, ultimaPos).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        var devedor = data.docs[i].data();
                        devedor.idDevedor = data.docs[i].id;

                        if (!_this33.existeDevedor(devedor)) {
                          _this33.devedores.push(devedor);
                        }
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "maisDevedoresPorDocumento",
        value: function maisDevedoresPorDocumento() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this34 = this;

            var ultimaPos;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    ultimaPos = this.devedores[this.devedores.length - 1].numeroDocumento;
                    console.log('pesquisando por documento');
                    _context19.next = 4;
                    return this.devedorService.buscarMaisDevedoresPorDocumento(this.valorConsulta, _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"].idEmpresa, ultimaPos).then(function (data) {
                      console.log(data.size);

                      for (var i = 0; i < data.size; i++) {
                        var devedor = data.docs[i].data();
                        devedor.idDevedor = data.docs[i].id;

                        if (!_this34.existeDevedor(devedor)) {
                          _this34.devedores.push(devedor);
                        }
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          this.paginar();
        }
      }]);

      return DevedoresComponent;
    }();

    DevedoresComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
      }, {
        type: _services_devedor_service__WEBPACK_IMPORTED_MODULE_5__["DevedorService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    DevedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-devedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./devedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/devedores/devedores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./devedores.component.scss */
      "./src/app/devedores/devedores.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _services_devedor_service__WEBPACK_IMPORTED_MODULE_5__["DevedorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], DevedoresComponent);
    /***/
  },

  /***/
  "./src/app/digitacao-titulos/digitacao-titulos.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/digitacao-titulos/digitacao-titulos.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDigitacaoTitulosDigitacaoTitulosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* ---- CONTAINER FORMULÁRIO --*/\n.form-container {\n  width: 900px;\n  margin: 0 auto; }\n.form-container h2 {\n  margin-bottom: 20px; }\n.btn-cep {\n  width: 140px;\n  height: 32px;\n  margin: 29px 5px 0 5px; }\n/* === FORM-2 DEVEDORES === */\n.form-2 {\n  margin: 20px 0 30px 0; }\n.form-2 .icon-debt-container {\n  margin-bottom: 10px; }\n.icon-debt-container fa:hover {\n  color: #095d6e;\n  cursor: pointer; }\n.icon-debt-container fa:first-child {\n  margin: 3px 20px 0 6px; }\n.btn-devedor {\n  height: 32px;\n  margin-top: 28px;\n  width: 155px; }\n.btn-devedor .btn {\n  width: 140px; }\n.btn-cep-search {\n  height: 30px;\n  margin-top: 28px; }\n.btn-cep-search .btn {\n  width: 140px; }\n.btn-add {\n  width: 140px; }\n/*------ TABELA --------*/\n.form-container .value-table {\n  float: right;\n  width: 500px;\n  text-align: right;\n  font-weight: bold; }\n.table {\n  max-width: 900px;\n  margin: auto;\n  margin-bottom: 2rem;\n  text-align: center; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n/* ---- BOTOES ----- */\n.form-row .btn-create {\n  width: 140px;\n  margin-left: 4px; }\n.btn-wrapper {\n  width: 400px;\n  margin: 0 auto; }\n.btn-wrapper .btn-send {\n  width: 140px;\n  margin-top: 50px;\n  margin-right: 6px;\n  margin-left: 4px; }\n.btn-wrapper .btn-send1 {\n  width: 140px;\n  margin-right: 10px;\n  margin-left: 4px; }\n.btn-send2 {\n  width: 140px; }\n.btn-wrapper .btn-exit {\n  width: 140px;\n  margin-left: 152px; }\n.btn-wrapper .btn-add-title {\n  width: 140px;\n  margin-right: 152px; }\n.btn-wrapper .btn-send2:active {\n  margin-right: -90px; }\n.btn-cadastro {\n  width: 340px;\n  margin: 0 auto; }\n.btn-cadastro .btn-send1 {\n  width: 140px;\n  margin-right: 10px;\n  margin-left: 4px; }\n.btn-cadastro .btn-send2 {\n  width: 140px; }\n.btn-cadastro .btn-add {\n  width: 140px; }\n/* === DECLARAÇÃO INDICAÇÃO === */\n.declaracao-container {\n  width: 900px;\n  padding: 20px;\n  margin: auto;\n  border: 1px solid;\n  text-align: left; }\n/* === TÍTULOS INDICAÇÃO === */\n.declaracao-body h2,\nh3 {\n  text-align: center; }\n.declaracao-body h3 {\n  text-decoration: underline;\n  margin: 20px 0; }\n.declaracao-body h4 {\n  margin-top: 20px; }\n/* === TABELA === */\n/*\n.declaracao-body .table {\n  text-align: left;\n  margin-bottom: 30px;\n}\n\n.declaracao-body .table span,\np span {\n  font-weight: bold;\n} */\n.declaracao-body p:nth-child(8) {\n  text-align: center;\n  margin-top: 50px; }\n.declaracao-body p:last-child {\n  width: 600px;\n  margin: 60px auto;\n  text-align: center;\n  border-top: 1px solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnaXRhY2FvLXRpdHVsb3MvZGlnaXRhY2FvLXRpdHVsb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpZ2l0YWNhby10aXR1bG9zL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxkaWdpdGFjYW8tdGl0dWxvc1xcZGlnaXRhY2FvLXRpdHVsb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGdDQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQixFQUFBO0FBSXhCLDZCQUFBO0FBQ0E7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZCx5QkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUdqQixzQkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNBLFlBQVksRUFBQTtBQUdaO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBR2hCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWSxFQUFBO0FBR2QsaUNBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtBQUdsQiw4QkFBQTtBQUNBOztFQUVFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCLG1CQUFBO0FBQXFCOzs7Ozs7Ozs7R0R0QmxCO0FDaUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWdpdGFjYW8tdGl0dWxvcy9kaWdpdGFjYW8tdGl0dWxvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIC0tLS0gQ09OVEFJTkVSIEZPUk1VTMOBUklPIC0tKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLmZvcm0tY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uYnRuLWNlcCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI5cHggNXB4IDAgNXB4OyB9XG5cbi8qID09PSBGT1JNLTIgREVWRURPUkVTID09PSAqL1xuLmZvcm0tMiB7XG4gIG1hcmdpbjogMjBweCAwIDMwcHggMDsgfVxuXG4uZm9ybS0yIC5pY29uLWRlYnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uaWNvbi1kZWJ0LWNvbnRhaW5lciBmYTpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmljb24tZGVidC1jb250YWluZXIgZmE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDNweCAyMHB4IDAgNnB4OyB9XG5cbi5idG4tZGV2ZWRvciB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgd2lkdGg6IDE1NXB4OyB9XG5cbi5idG4tZGV2ZWRvciAuYnRuIHtcbiAgd2lkdGg6IDE0MHB4OyB9XG5cbi5idG4tY2VwLXNlYXJjaCB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjhweDsgfVxuXG4uYnRuLWNlcC1zZWFyY2ggLmJ0biB7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4uYnRuLWFkZCB7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4vKi0tLS0tLSBUQUJFTEEgLS0tLS0tLS0qL1xuLmZvcm0tY29udGFpbmVyIC52YWx1ZS10YWJsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7IH1cblxuLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKiAtLS0tIEJPVE9FUyAtLS0tLSAqL1xuLmZvcm0tcm93IC5idG4tY3JlYXRlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogNHB4OyB9XG5cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2VuZCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2VuZDEge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuXG4uYnRuLXNlbmQyIHtcbiAgd2lkdGg6IDE0MHB4OyB9XG5cbi5idG4td3JhcHBlciAuYnRuLWV4aXQge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTJweDsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1hZGQtdGl0bGUge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTUycHg7IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2VuZDI6YWN0aXZlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtOTBweDsgfVxuXG4uYnRuLWNhZGFzdHJvIHtcbiAgd2lkdGg6IDM0MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uYnRuLWNhZGFzdHJvIC5idG4tc2VuZDEge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuXG4uYnRuLWNhZGFzdHJvIC5idG4tc2VuZDIge1xuICB3aWR0aDogMTQwcHg7IH1cblxuLmJ0bi1jYWRhc3RybyAuYnRuLWFkZCB7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4vKiA9PT0gREVDTEFSQcOHw4NPIElORElDQcOHw4NPID09PSAqL1xuLmRlY2xhcmFjYW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi8qID09PSBUw41UVUxPUyBJTkRJQ0HDh8ODTyA9PT0gKi9cbi5kZWNsYXJhY2FvLWJvZHkgaDIsXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZGVjbGFyYWNhby1ib2R5IGgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbjogMjBweCAwOyB9XG5cbi5kZWNsYXJhY2FvLWJvZHkgaDQge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi8qID09PSBUQUJFTEEgPT09ICovXG4vKlxuLmRlY2xhcmFjYW8tYm9keSAudGFibGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGVjbGFyYWNhby1ib2R5IC50YWJsZSBzcGFuLFxucCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59ICovXG4uZGVjbGFyYWNhby1ib2R5IHA6bnRoLWNoaWxkKDgpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4OyB9XG5cbi5kZWNsYXJhY2FvLWJvZHkgcDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDYwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQ7IH1cbiIsIi8qIC0tLS0gQ09OVEFJTkVSIEZPUk1VTMOBUklPIC0tKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG4tY2VwIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjlweCA1cHggMCA1cHg7XG59XG5cblxuLyogPT09IEZPUk0tMiBERVZFRE9SRVMgPT09ICovXG4uZm9ybS0yIHtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweCAwO1xufVxuXG4uZm9ybS0yIC5pY29uLWRlYnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tZGVidC1jb250YWluZXIgZmE6aG92ZXIge1xuICBjb2xvcjogIzA5NWQ2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1kZWJ0LWNvbnRhaW5lciBmYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogM3B4IDIwcHggMCA2cHg7XG59XG5cbi5idG4tZGV2ZWRvciB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgd2lkdGg6IDE1NXB4O1xufVxuXG4uYnRuLWRldmVkb3IgLmJ0biB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmJ0bi1jZXAtc2VhcmNoIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4uYnRuLWNlcC1zZWFyY2ggLmJ0biB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmJ0bi1hZGQge1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi8qLS0tLS0tIFRBQkVMQSAtLS0tLS0tLSovXG4uZm9ybS1jb250YWluZXIgLnZhbHVlLXRhYmxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZSAudGl0bGUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1O1xufVxuXG4udGFibGUgLnRhYmxlLWljb246aG92ZXIge1xuICBjb2xvcjogIzA5NWQ2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAtLS0tIEJPVE9FUyAtLS0tLSAqL1xuLmZvcm0tcm93IC5idG4tY3JlYXRlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zZW5kIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2VuZDEge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmJ0bi1zZW5kMiB7XG53aWR0aDogMTQwcHg7XG59XG5cbi5idG4td3JhcHBlciAuYnRuLWV4aXQge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTJweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tYWRkLXRpdGxlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1MnB4O1xufVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zZW5kMjphY3RpdmUge1xuICBtYXJnaW4tcmlnaHQ6IC05MHB4O1xufVxuXG4uYnRuLWNhZGFzdHJvIHtcbiAgd2lkdGg6IDM0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ0bi1jYWRhc3RybyAuYnRuLXNlbmQxIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5idG4tY2FkYXN0cm8gLmJ0bi1zZW5kMiB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmJ0bi1jYWRhc3RybyAuYnRuLWFkZCB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLyogPT09IERFQ0xBUkHDh8ODTyBJTkRJQ0HDh8ODTyA9PT0gKi8gXG4uZGVjbGFyYWNhby1jb250YWluZXIge1xuICB3aWR0aDogOTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59IFxuXG4vKiA9PT0gVMONVFVMT1MgSU5ESUNBw4fDg08gPT09ICovIFxuLmRlY2xhcmFjYW8tYm9keSBoMixcbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVjbGFyYWNhby1ib2R5IGgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZGVjbGFyYWNhby1ib2R5IGg0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0gXG5cbi8qID09PSBUQUJFTEEgPT09ICovIC8qXG4uZGVjbGFyYWNhby1ib2R5IC50YWJsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5kZWNsYXJhY2FvLWJvZHkgLnRhYmxlIHNwYW4sXG5wIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0gKi9cblxuLmRlY2xhcmFjYW8tYm9keSBwOm50aC1jaGlsZCg4KSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmRlY2xhcmFjYW8tYm9keSBwOmxhc3QtY2hpbGQge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/digitacao-titulos/digitacao-titulos.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/digitacao-titulos/digitacao-titulos.component.ts ***!
    \******************************************************************/

  /*! exports provided: DigitacaoTitulosComponent */

  /***/
  function srcAppDigitacaoTitulosDigitacaoTitulosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitacaoTitulosComponent", function () {
      return DigitacaoTitulosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var _services_devedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/devedor.service */
    "./src/app/services/devedor.service.ts");
    /* harmony import */


    var _services_cep_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/cep.service */
    "./src/app/services/cep.service.ts");
    /* harmony import */


    var _services_valida_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/valida.service */
    "./src/app/services/valida.service.ts");
    /* harmony import */


    var _services_titulo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var _services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/digitacao-modal.service */
    "./src/app/services/digitacao-modal.service.ts");
    /* harmony import */


    var _services_lote_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/lote.service */
    "./src/app/services/lote.service.ts");
    /* harmony import */


    var _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/titulo-devedor.service */
    "./src/app/services/titulo-devedor.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _sub_formulario_digitacao_sub_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sub-formulario/digitacao-sub-formulario.component */
    "./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/modal/ */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _validators_validacao__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../validators/validacao */
    "./src/app/validators/validacao.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_19___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_19__);

    var DigitacaoTitulosComponent =
    /*#__PURE__*/
    function () {
      function DigitacaoTitulosComponent(funcoesService, formBuilder, arraysService, devedorService, cepService, validaService, modalService, digitacaoModalService, tituloService, tituloDevedorService, loteService, route, empresaService) {
        var _this35 = this;

        _classCallCheck(this, DigitacaoTitulosComponent);

        this.funcoesService = funcoesService;
        this.formBuilder = formBuilder;
        this.arraysService = arraysService;
        this.devedorService = devedorService;
        this.cepService = cepService;
        this.validaService = validaService;
        this.modalService = modalService;
        this.digitacaoModalService = digitacaoModalService;
        this.tituloService = tituloService;
        this.tituloDevedorService = tituloDevedorService;
        this.loteService = loteService;
        this.route = route;
        this.empresaService = empresaService;
        this.submitted = false; //teste

        this.devSubmitted = false; //teste

        this.endSubmitted = false;
        this.buttonAdd = false;
        this.btnAdd = true;
        this.empresa = {};
        this.representante = {};
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_19__["utilsBr"].MASKS;
        this.devedor = {
          tipoDocumento: "CPF"
        };
        this.devedores = new Array();
        this.devedoresPrint = new Array();
        this.enderecos = new Array();
        this.criandoDevedor = false;
        this.alterando = false;
        this.mostraForm = false;
        this.alterandoTitulo = false;
        this.lote = {};
        this.titulo = {
          endosso: 'S'
        };
        this.estados = new Array();
        this.especies = new Array();
        this.titulos = new Array();
        this.CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
        this.idLote = this.route.snapshot.params['idLote'];
        this.buscaLote();
        this.buscarTitulosLote();
        this.data = this.funcoesService.DataAtualExtenso();
        this.especies = this.arraysService.carregaEspecie();
        this.arraysService.carregaEstado(this.estados);
        this.fGroupTitulo = this.formBuilder.group({
          'siglaEspecie': [this.titulo.siglaEspecie, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
          'tipoProtesto': [this.titulo.tipoProtesto],
          'pracaPagamento': [this.titulo.pracaPagamento],
          'dataEmissao': [this.titulo.dataEmissao, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'vencimento': [this.titulo.vencimento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'numeroTitulo': [this.titulo.numeroTitulo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'alinea': [this.titulo.alinea],
          'valorOriginalTitulo': [this.titulo.valorOriginalTitulo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_validacao__WEBPACK_IMPORTED_MODULE_16__["Validacoes"].ValorMinimo(1.00)])],
          'valorProtesto': [this.titulo.valorProtesto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_validacao__WEBPACK_IMPORTED_MODULE_16__["Validacoes"].ValorMinimo(1.00)])],
          'endosso': [this.titulo.endosso, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'favorecido': [this.titulo.favorecido, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'endossante': [this.titulo.endossante],
          'tipoDocumentoEndossante': [this.titulo.tipoDocumentoEndossante],
          'documentoEndossante': [this.titulo.documentoEndossante],
          'idTitulo': [this.titulo.idTitulo],
          'idEmpresa': [this.titulo.idEmpresa],
          'idLote': [this.titulo.idLote]
        });
        this.fGroupDevedores = this.formBuilder.group({
          'nomeDevedor': [this.devedor.nomeDevedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'tipoDocumento': [this.devedor.tipoDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
          'numeroDocumento': [this.devedor.numeroDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazilValidators"].cpf])],
          'tipoDocumento2': [this.devedor.tipoDocumento2],
          'numeroDocumento2': [this.devedor.numeroDocumento2],
          'cep': [this.devedor.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])],
          'endereco': [this.devedor.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numero': [this.devedor.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'complemento': [this.devedor.complemento],
          'bairro': [this.devedor.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cidade': [this.devedor.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'estado': [this.devedor.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])]
        });
        this.subscription = this.modalService.onHidden.subscribe(function () {
          _this35.copiaEnderecoPDevedor(_this35.digitacaoModalService.getEndereco());

          _this35.fGroupDevedores.patchValue(_this35.devedor);
        });
      }

      _createClass(DigitacaoTitulosComponent, [{
        key: "alteraValidator",
        value: function alteraValidator(event) {
          this.fGroupTitulo.controls['numeroDocumento'].setValue('');
          var tipo = event.target.value;

          if (tipo === 'CPF') {
            this.fGroupTitulo.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazilValidators"].cpf]));
          } else {
            this.fGroupTitulo.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazilValidators"].cnpj]));
          }
        }
      }, {
        key: "alteraValidator2",
        value: function alteraValidator2(event) {
          this.fGroupDevedores.controls['numeroDocumento'].setValue('');
          var tipo = event.target.value;

          if (tipo === 'CPF') {
            this.fGroupDevedores.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazilValidators"].cpf]));
          } else {
            this.fGroupDevedores.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazilValidators"].cnpj]));
          }
        }
      }, {
        key: "buscarTitulosLote",
        value: function buscarTitulosLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            var _this36 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.tituloService.buscaTituloLote(this.idLote).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        var titulo = {};
                        titulo = data.docs[i].data();
                        titulo.idTitulo = data.docs[i].id;

                        _this36.titulos.push(titulo);
                      }

                      console.log(_this36.titulos);
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "carregaFavorecido",
        value: function carregaFavorecido() {
          if (this.empresa.tipo === 'CPF') {
            this.favorecido = this.empresa.nome;
            console.log(this.favorecido);
            console.log('CPF');
          } else {
            this.favorecido = this.empresa.nomeRepresentante;
          }

          this.fGroupTitulo.controls['favorecido'].setValue(this.favorecido);
        }
      }, {
        key: "buscaLote",
        value: function buscaLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var _this37 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.loteService.buscaLoteId(this.idLote).then(function (lote) {
                      _this37.lote = lote.data();
                      _this37.idEmpresa = _this37.lote.idEmpresa;
                      console.log(_this37.lote);
                    });

                  case 2:
                    _context21.next = 4;
                    return this.empresaService.buscarEmpresa(this.idEmpresa).then(function (data) {
                      var empresa = data.data();
                      _this37.empresa = empresa;

                      _this37.carregaFavorecido();

                      console.log(_this37.favorecido);
                    });

                  case 4:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "iniciaDevedor",
        value: function iniciaDevedor() {
          this.criandoDevedor = true;
          this.devedor = {};
          this.devedor = {
            tipoDocumento: "CPF"
          };
          this.btnAdd = true; //teste

          console.log(this.devedor.tipoDocumento);
        }
      }, {
        key: "validarDevedor",
        value: function validarDevedor() {
          this.devedor = this.fGroupDevedores.value;
          console.log(this.devedor);

          if (this.validaService.str(this.devedor.numeroDocumento2) || !this.devedor.numeroDocumento2) {
            if (this.fGroupDevedores.valid) {
              console.log('ok');
              return true;
            } else {
              this.devSubmitted = true; //teste

              console.log('Devedor Inválido');
              console.log(this.fGroupDevedores.controls['numeroDocumento'].value);
              console.log(this.fGroupDevedores.controls['numeroDocumento2'].valid);
              console.log(this.fGroupDevedores.controls['tipoDocumento'].valid);
              console.log(this.fGroupDevedores.controls['tipoDocumento2'].valid);
              console.log(this.fGroupDevedores.controls['nomeDevedor'].valid);
            }
          } else {
            console.log('rg');
          }

          return false;
        }
      }, {
        key: "devedorExiste",
        value: function devedorExiste(posDevedorAlteracao) {
          var retorno = -1;

          if (posDevedorAlteracao === -1) {
            for (var i = 0; i < this.devedores.length; i++) {
              if (this.devedor.numeroDocumento === this.devedores[i].numeroDocumento) {
                retorno = i;
              }
            }
          } else {
            for (var _i6 = 0; _i6 < this.devedores.length; _i6++) {
              if (this.devedor.numeroDocumento === this.devedores[_i6].numeroDocumento && _i6 !== posDevedorAlteracao) {
                retorno = _i6;
              }
            }

            return retorno;
          }

          return retorno;
        }
      }, {
        key: "validaQtdMaxDevedores",
        value: function validaQtdMaxDevedores() {
          if (this.devedores.length <= 9) {
            return true;
          } else {
            console.log('Quantidade Máxima de devedores igual 10');
            return false;
          }
        }
      }, {
        key: "criarTituloDevedor",
        value: function criarTituloDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var _this38 = this;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.tituloDevedorService.criarTituloDevedor(this.devedor).then(function (data) {
                      _this38.devedor.idTituloDevedor = data.id;
                    });

                  case 2:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "atualizaTituloDevedor",
        value: function atualizaTituloDevedor(devedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.tituloDevedorService.atualizaTituloDevedor(devedor);

                  case 2:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "inserirDevedor",
        value: function inserirDevedor(pos) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var _this39 = this;

            var resultado, _resultado;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    if (!(pos !== null && pos !== undefined)) {
                      _context24.next = 20;
                      break;
                    }

                    //QUANDO O USUÁRIO ESTIVER ALTERANDO UM DEVEDOR
                    resultado = this.devedorExiste(pos);

                    if (!(resultado === -1)) {
                      _context24.next = 16;
                      break;
                    }

                    // devedor não encontrado
                    this.carregaDevedor(this.devedor); // colocando o valor do form no objeto

                    this.devedor.idTitulo = this.titulo.idTitulo;

                    if (!this.alterandoTitulo) {
                      _context24.next = 11;
                      break;
                    }

                    if (!(this.devedor.idTituloDevedor !== null)) {
                      _context24.next = 9;
                      break;
                    }

                    _context24.next = 9;
                    return this.atualizaTituloDevedor(this.devedor).then(function () {
                      _this39.devedores[pos] = _this39.devedor;

                      _this39.cancelar();

                      _this39.btnAdd = false;
                    });

                  case 9:
                    _context24.next = 14;
                    break;

                  case 11:
                    this.devedores[pos] = this.devedor;
                    this.cancelar();
                    this.btnAdd = false;

                  case 14:
                    _context24.next = 18;
                    break;

                  case 16:
                    this.mensagem('Já existe devedor com esse documento!');
                    console.log('Já existe devedor com esse documento!');

                  case 18:
                    _context24.next = 37;
                    break;

                  case 20:
                    //QUANDO O USUÁRIO ESTIVER CRIANDO UM DEVEDOR
                    _resultado = this.devedorExiste(-1);

                    if (!(_resultado === -1)) {
                      _context24.next = 35;
                      break;
                    }

                    // devedor não encontrado
                    this.carregaDevedor(this.devedor); // colocando o valor do form no objeto

                    this.devedor.idTitulo = this.titulo.idTitulo;

                    if (!this.alterandoTitulo) {
                      _context24.next = 30;
                      break;
                    }

                    this.devedor.idTitulo = this.titulo.idTitulo;
                    _context24.next = 28;
                    return this.criarTituloDevedor().then(function () {
                      _this39.devedores.push(_this39.devedor);

                      _this39.cancelar();

                      _this39.btnAdd = false;
                    });

                  case 28:
                    _context24.next = 33;
                    break;

                  case 30:
                    this.devedores.push(this.devedor);
                    this.cancelar();
                    this.btnAdd = false;

                  case 33:
                    _context24.next = 37;
                    break;

                  case 35:
                    this.mensagem('Já existe devedor com esse documento!');
                    console.log('Já existe devedor com esse documento!');

                  case 37:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        } //Validando campos devedor e chamando o metodo inserirDevedor

      }, {
        key: "validaAlterarDevedor",
        value: function validaAlterarDevedor() {
          var resultado = this.devedorExiste(-1);

          if (this.validaQtdMaxDevedores() && this.validarDevedor()) {
            this.inserirDevedor(resultado);
          }
        }
      }, {
        key: "validaAddDevedor",
        value: function validaAddDevedor() {
          this.copiaPDevedor();

          if (this.validaQtdMaxDevedores() && this.validarDevedor()) {
            this.inserirDevedor();
          }
        } //verificando se o usuários está criando ou alterando um devedor e chamando validação

      }, {
        key: "criarOuAlterar",
        value: function criarOuAlterar(devedor) {
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
          } // this.criandoDevedor = true;


          this.buttonAdd = true;
        }
      }, {
        key: "copiaPDevedor",
        value: function copiaPDevedor() {
          this.devedor = this.fGroupDevedores.value;
        }
      }, {
        key: "atualizaTipoDevedor",
        value: function atualizaTipoDevedor() {
          var devedor = this.fGroupDevedores.value;
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
      }, {
        key: "verificaEndosso",
        value: function verificaEndosso() {
          console.log('ok');
          var titulo = this.fGroupTitulo.value;
          this.titulo.endosso = titulo.endosso;
          console.log(titulo.endosso);

          if (this.titulo.endosso !== 'S') {
            this.endosso = true;
          } else {
            this.endosso = false;
          }
        }
      }, {
        key: "verificaCheque",
        value: function verificaCheque() {
          console.log(this.titulo);
          var titulo = this.fGroupTitulo.value;
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
      }, {
        key: "verificaTipoDevedor",
        value: function verificaTipoDevedor() {
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
      }, {
        key: "imprimirConteudo",
        value: function imprimirConteudo(titulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var _this40 = this;

            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.tituloDevedorService.buscarDevedoresTitulo(titulo.idTitulo).then(function (data) {
                      data.forEach(function (res) {
                        _this40.devedoresPrint.push(res.data());

                        setTimeout(function () {
                          _this40.funcoesService.ImprimirConteudoDiv(_this40.divDeclaracao);
                        }, 500);
                      });
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "buscaDevedor",
        value: function buscaDevedor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var _this41 = this;

            var devedorId;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    devedorId = this.fGroupDevedores.value;
                    console.log(devedorId.numeroDocumento);

                    if (!(devedorId.numeroDocumento !== null && devedorId.numeroDocumento !== undefined)) {
                      _context27.next = 8;
                      break;
                    }

                    _context27.next = 5;
                    return this.devedorService.buscaDevedorDocumentoEmpresa(devedorId.numeroDocumento, this.idEmpresa).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this41, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee26() {
                        var _this42 = this;

                        var idDevedor;
                        return regeneratorRuntime.wrap(function _callee26$(_context26) {
                          while (1) {
                            switch (_context26.prev = _context26.next) {
                              case 0:
                                if (!(data.size > 0 && data !== undefined)) {
                                  _context26.next = 7;
                                  break;
                                }

                                idDevedor = data.docs[0].id;
                                this.devedor = data.docs[0].data();
                                _context26.next = 5;
                                return this.devedorService.buscarEnderecoDevedor(idDevedor).then(function (data) {
                                  // Encontrou mais de um endereço abre o modal para escolher um deles
                                  if (data.size > 1) {
                                    for (var i = 0; i < data.size; i++) {
                                      var enderecoEncontrado = data.docs[0].data();
                                      var endereco = enderecoEncontrado;
                                      endereco.estado = enderecoEncontrado.uf;
                                      endereco.cidade = enderecoEncontrado.localidade;
                                      endereco.endereco = enderecoEncontrado.logradouro;
                                      console.log(data.docs[i].data());

                                      _this42.enderecos.push(endereco);
                                    }

                                    _this42.abrirModal();

                                    console.log(_this42.enderecos);
                                  } else {
                                    // encontrou apenas um endereco passa o endereço para o endereço
                                    var _enderecoEncontrado = data.docs[0].data();

                                    var _endereco = _enderecoEncontrado;
                                    _endereco.estado = _enderecoEncontrado.uf;
                                    _endereco.cidade = _enderecoEncontrado.localidade;
                                    _endereco.endereco = _enderecoEncontrado.logradouro;
                                    console.log(data.docs[0].data());

                                    _this42.copiaEnderecoPDevedor(_endereco);
                                  }
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 5:
                                _context26.next = 8;
                                break;

                              case 7:
                                console.log('Devedor não Encontrado!');

                              case 8:
                              case "end":
                                return _context26.stop();
                            }
                          }
                        }, _callee26, this);
                      }));
                    }).catch(function (error) {
                      console.log(error, 'dado não encontrado');
                    });

                  case 5:
                    this.fGroupDevedores.patchValue(this.devedor);
                    _context27.next = 9;
                    break;

                  case 8:
                    console.log('O documento do devedor está vazio!');

                  case 9:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "copiaEnderecoPDevedor",
        value: function copiaEnderecoPDevedor(endereco) {
          this.devedor.endereco = endereco.endereco;
          this.devedor.estado = endereco.estado;
          this.devedor.cidade = endereco.cidade;
          this.devedor.complemento = endereco.complemento;
          this.devedor.numero = endereco.numero;
          this.devedor.bairro = endereco.bairro;
          this.devedor.cep = endereco.cep;
          console.log(endereco.estado);
        }
      }, {
        key: "abrirModal",
        value: function abrirModal() {
          var initialState = {
            devedor: this.devedor,
            enderecos: this.enderecos,
            title: 'Modal with component'
          };
          this.modalService.show(_sub_formulario_digitacao_sub_formulario_component__WEBPACK_IMPORTED_MODULE_14__["DigitacaoSubFormularioComponent"], {
            initialState: initialState
          });
          this.enderecos = [];
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    this.criandoDevedor = false;
                    this.alterando = false;
                    this.devSubmitted = false; // this.devedor = null;
                    // this.devedor.tipoDocumento = "CPF";
                    // this.devedor.numeroDocumento = null;

                    this.fGroupDevedores.reset();
                    this.fGroupDevedores.controls['tipoDocumento'].setValue('CPF');
                    this.buttonAdd = false;
                    console.log(this.devedor.tipoDocumento);

                  case 7:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "carregaDevedor",
        value: function carregaDevedor(devedor) {
          this.btnAdd = false; //teste

          this.alterando = true;
          this.mostraForm = true;
          this.criandoDevedor = true;
          this.fGroupDevedores.patchValue(devedor);
          this.devedor = devedor;
          console.log(this.mostraForm);
        }
      }, {
        key: "buscarCEPDevedor",
        value: function buscarCEPDevedor() {
          var _this43 = this;

          this.cepService.getCEPCorreios(this.fGroupDevedores.controls['cep'].value).then(function (res) {
            _this43.fGroupDevedores.controls['endereco'].setValue(res.logradouro);

            _this43.fGroupDevedores.controls['bairro'].setValue(res.bairro);

            _this43.fGroupDevedores.controls['cidade'].setValue(res.localidade);

            _this43.fGroupDevedores.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "apagarDevedor",
        value: function apagarDevedor(numeroDocumento) {
          var _this44 = this;

          this.devedor.numeroDocumento = numeroDocumento;
          console.log('documento desejado Apagar', numeroDocumento);
          var resultado = this.devedorExiste(-1);

          if (resultado !== -1) {
            this.tituloDevedorService.apagarTituloDevedor(this.devedores[resultado].idTituloDevedor).then(function () {
              _this44.devedores.splice(resultado, 1);

              _this44.cancelar();

              _this44.devedor = {};
            }).catch(function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "valorTotalTitulo",
        value: function valorTotalTitulo() {
          var saldo = 0;
          console.log(saldo);

          for (var i = 0; i < this.titulos.length; i++) {
            saldo = saldo + this.titulos[i].valorProtesto;
            console.log(saldo);
          }

          return saldo;
        }
      }, {
        key: "qtdTitulos",
        value: function qtdTitulos() {
          var contador;

          for (var i = 0; i <= this.titulos.length; i++) {
            contador = i;
          }

          return contador;
        }
      }, {
        key: "encontraTitulo",
        value: function encontraTitulo(titulo, posicao) {
          var resultado = -1;

          if (posicao === -1) {
            for (var i = 0; i < this.titulos.length; i++) {
              if (this.titulos[i].dataEmissao === titulo.dataEmissao && this.titulos[i].siglaEspecie === titulo.siglaEspecie && this.titulos[i].numeroTitulo === titulo.numeroTitulo && this.titulos[i].valorProtesto === titulo.valorProtesto) {
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
            for (var _i7 = 0; _i7 < this.titulos.length; _i7++) {
              if (this.titulos[_i7].dataEmissao === titulo.dataEmissao && this.titulos[_i7].siglaEspecie === titulo.siglaEspecie && this.titulos[_i7].numeroTitulo === titulo.numeroTitulo && this.titulos[_i7].valorProtesto === titulo.valorProtesto && _i7 !== posicao) {
                console.log('encontrou na posicao:', _i7, posicao, this.posicaoAlteracaoTitulo);
                resultado = _i7;
                return resultado;
              }
            }

            return resultado;
          }
        }
      }, {
        key: "validaTitulo",
        value: function validaTitulo() {
          if (this.fGroupTitulo.valid) {
            this.submitted = false;
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "criaEndossante",
        value: function criaEndossante() {
          var endossante = {};
          endossante.endossante = this.fGroupTitulo.controls['endossante'].value;
          endossante.tipoDocumentoEndossante = this.fGroupTitulo.controls['tipoDocumentoEndossante'].value;
          endossante.documentoEndossante = this.fGroupTitulo.controls['documentoEndossante'].value;
          return endossante;
        }
      }, {
        key: "limpaTitulo",
        value: function limpaTitulo() {
          this.fGroupTitulo.reset();
          this.carregaFavorecido();
        } // PEGA O TÍTULO DO ARRAY NO HTML E MUDA O ESTADO PARA ALTERANDO TÍTULO

      }, {
        key: "carregaTitulo",
        value: function carregaTitulo(titulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var _this45 = this;

            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    this.fGroupTitulo.patchValue(titulo);
                    this.titulo = titulo;
                    this.criandoDevedor = false;
                    this.alterandoTitulo = true;
                    console.log(this.titulo);
                    _context29.next = 7;
                    return this.buscaDevedoresTitulo(titulo.idTitulo).then(function () {
                      console.log(_this45.devedores);
                    });

                  case 7:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        } // BUSCA OS DEVEDORES DO TÍTULO ATRAVÉS DO ID DO TÍTULO

      }, {
        key: "buscaDevedoresTitulo",
        value: function buscaDevedoresTitulo(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var _this46 = this;

            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    console.log(idTitulo);
                    _context30.next = 3;
                    return this.tituloDevedorService.buscarDevedoresTitulo(idTitulo).then(function (data) {
                      _this46.devedores = [];

                      for (var i = 0; i < data.size; i++) {
                        var devedor = data.docs[i].data();
                        devedor.idTituloDevedor = data.docs[i].id;
                        console.log(devedor.idTitulo);

                        _this46.devedores.push(devedor);
                      }
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        } //ELIMINA O TÍTULO E ATUALIZA OS DADOS DO LOTE NO BANCO DE DADOS

      }, {
        key: "apagarTitulo",
        value: function apagarTitulo(titulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var _this47 = this;

            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    console.log(titulo);
                    console.log(titulo.idTitulo);
                    _context32.next = 4;
                    return this.tituloService.apagarTitulo(titulo.idTitulo).then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this47, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee31() {
                        return regeneratorRuntime.wrap(function _callee31$(_context31) {
                          while (1) {
                            switch (_context31.prev = _context31.next) {
                              case 0:
                                this.devedores = [];
                                this.fGroupTitulo.reset();
                                this.titulo = {};
                                this.titulos.splice(this.encontraTitulo(titulo, -1), 1);
                                this.atualizaDadosLote();
                                _context31.next = 7;
                                return this.loteService.atualizaLote(this.idLote, this.lote).then(function () {
                                  console.log('Lote apagado com sucesso e atualizado com sucesso');
                                });

                              case 7:
                              case "end":
                                return _context31.stop();
                            }
                          }
                        }, _callee31, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 4:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        } // BUSCA O TÍTULO NO ARRAY E SEUS DEVEDORES NO BANCO DE DADOS

      }, {
        key: "carregarTitulo",
        value: function carregarTitulo(titulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return this.carregaTitulo(titulo);

                  case 2:
                    this.titulo = titulo;
                    this.alterandoTitulo = true; // mostrando a posição de alteração do array

                    this.posicaoAlteracaoTitulo = this.encontraTitulo(titulo, -1);
                    console.log(this.posicaoAlteracaoTitulo);

                  case 6:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        } // FAZ OS TESTES DE VALIDADE DO TÍTULO E CASO VÁLIDO ENVIA PARA O BANCO DE DADOS

      }, {
        key: "salvarTitulo",
        value: function salvarTitulo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            var _this48 = this;

            return regeneratorRuntime.wrap(function _callee36$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    this.titulo = this.fGroupTitulo.value; //this.submitted = true;

                    this.titulo.idLote = this.idLote;
                    console.log(this.posicaoAlteracaoTitulo); // VALIDANDO O TÍTULO E VERIFICANDO SE EXISTE ALGUM DEVEDOR

                    if (!(this.validaTitulo() && this.devedores.length > 0)) {
                      _context37.next = 26;
                      break;
                    }

                    if (!this.alterandoTitulo) {
                      _context37.next = 15;
                      break;
                    }

                    if (!(this.encontraTitulo(this.titulo, this.posicaoAlteracaoTitulo) === -1)) {
                      _context37.next = 11;
                      break;
                    }

                    this.titulos[this.posicaoAlteracaoTitulo] = this.titulo;
                    _context37.next = 9;
                    return this.tituloService.atualizaTitulo(this.titulo.idTitulo, this.titulo).then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this48, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee34() {
                        var _this49 = this;

                        return regeneratorRuntime.wrap(function _callee34$(_context34) {
                          while (1) {
                            switch (_context34.prev = _context34.next) {
                              case 0:
                                this.atualizaDadosLote();
                                _context34.next = 3;
                                return this.loteService.atualizaLote(this.idLote, this.lote).then(function () {
                                  console.log('lote Atualizado!');
                                  _this49.alterandoTitulo = false;

                                  _this49.limpaTitulo();

                                  _this49.limpaDevedores();

                                  _this49.criandoDevedor = false;
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 3:
                              case "end":
                                return _context34.stop();
                            }
                          }
                        }, _callee34, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 9:
                    _context37.next = 13;
                    break;

                  case 11:
                    this.mensagem('Título já existe!');
                    console.log(this.devedores.length);

                  case 13:
                    _context37.next = 24;
                    break;

                  case 15:
                    console.log(this.devedores.length);

                    if (!(this.encontraTitulo(this.titulo, -1) === -1)) {
                      _context37.next = 21;
                      break;
                    }

                    _context37.next = 19;
                    return this.tituloService.criaTitulo(this.titulo).then(function (docRefTitulo) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this48, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee35() {
                        var _this50 = this;

                        var _loop, i;

                        return regeneratorRuntime.wrap(function _callee35$(_context36) {
                          while (1) {
                            switch (_context36.prev = _context36.next) {
                              case 0:
                                this.titulo.idTitulo = docRefTitulo.id;
                                this.titulos.push(this.titulo);
                                _loop =
                                /*#__PURE__*/
                                regeneratorRuntime.mark(function _loop(i) {
                                  return regeneratorRuntime.wrap(function _loop$(_context35) {
                                    while (1) {
                                      switch (_context35.prev = _context35.next) {
                                        case 0:
                                          _this50.devedores[i].idTitulo = docRefTitulo.id;
                                          _context35.next = 3;
                                          return _this50.tituloDevedorService.criarTituloDevedor(_this50.devedores[i]).then(function (docRefDevedor) {
                                            _this50.devedores[i].idTituloDevedor = docRefDevedor.id;
                                            console.log('Criado com sucesso!');

                                            _this50.limpaDevedores();

                                            _this50.limpaTitulo();
                                          }).catch(function (error) {
                                            console.log(error);
                                          });

                                        case 3:
                                          _this50.atualizaDadosLote();

                                          _context35.next = 6;
                                          return _this50.loteService.atualizaLote(_this50.idLote, _this50.lote).then(function () {
                                            console.log('Lote atualizado com sucesso!');
                                          }).catch(function (error) {
                                            console.log(error);
                                          });

                                        case 6:
                                        case "end":
                                          return _context35.stop();
                                      }
                                    }
                                  }, _loop);
                                });
                                i = 0;

                              case 4:
                                if (!(i < this.devedores.length)) {
                                  _context36.next = 9;
                                  break;
                                }

                                return _context36.delegateYield(_loop(i), "t0", 6);

                              case 6:
                                i++;
                                _context36.next = 4;
                                break;

                              case 9:
                              case "end":
                                return _context36.stop();
                            }
                          }
                        }, _callee35, this);
                      }));
                    });

                  case 19:
                    _context37.next = 24;
                    break;

                  case 21:
                    console.log('Título Já existe');
                    this.mensagem('Título já existe!');
                    console.log(this.devedores.length);

                  case 24:
                    _context37.next = 43;
                    break;

                  case 26:
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

                  case 43:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "limpaDevedores",
        value: function limpaDevedores() {
          this.fGroupDevedores.reset();
          this.devedores = [];
        }
      }, {
        key: "atualizaDadosLote",
        value: function atualizaDadosLote() {
          this.lote.qtdTitulo = this.qtdTitulos();
          this.lote.valorTotalTitulo = this.valorTotalTitulo();
        }
      }, {
        key: "cancelarAlteracaoTitulo",
        value: function cancelarAlteracaoTitulo() {
          this.devedores = [];
          this.devedor = {};
          this.fGroupTitulo.reset();
          this.fGroupDevedores.reset();
        }
      }, {
        key: "debtError",
        value: function debtError() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
            icon: 'error',
            title: 'Você não adicionou nenhum devedor!'
          });
        }
      }, {
        key: "debtExist",
        value: function debtExist() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
            icon: 'error',
            title: 'Devedor já existe!'
          });
        }
      }, {
        key: "mensagem",
        value: function mensagem(msg, icone) {
          icone !== undefined ? sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
            icon: icone,
            title: msg
          }) : sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
            icon: 'error',
            title: msg
          });
        }
      }, {
        key: "getTitulo",
        value: function getTitulo() {
          var _this51 = this;

          this.subscribe = this.route.data.subscribe(function (data) {
            var _this51$devedores;

            console.log(data.titulo);
            _this51.titulo = data.titulo;

            (_this51$devedores = _this51.devedores).push.apply(_this51$devedores, _toConsumableArray(data.titulo.devedores));

            if (data.titulo.representante) _this51.representante = data.titulo.representante;
          });
        }
      }, {
        key: "fTitulo",
        get: function get() {
          return this.fGroupTitulo.controls;
        }
      }, {
        key: "fDevedor",
        get: function get() {
          return this.fGroupDevedores.controls;
        }
      }]);

      return DigitacaoTitulosComponent;
    }();

    DigitacaoTitulosComponent.ctorParameters = function () {
      return [{
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__["ArraysService"]
      }, {
        type: _services_devedor_service__WEBPACK_IMPORTED_MODULE_6__["DevedorService"]
      }, {
        type: _services_cep_service__WEBPACK_IMPORTED_MODULE_7__["CepService"]
      }, {
        type: _services_valida_service__WEBPACK_IMPORTED_MODULE_8__["ValidaService"]
      }, {
        type: ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_15__["BsModalService"]
      }, {
        type: _services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_10__["DigitacaoModalService"]
      }, {
        type: _services_titulo_service__WEBPACK_IMPORTED_MODULE_9__["TituloService"]
      }, {
        type: _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_12__["TituloDevedorService"]
      }, {
        type: _services_lote_service__WEBPACK_IMPORTED_MODULE_11__["LoteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_13__["EmpresaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divDeclaracao', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DigitacaoTitulosComponent.prototype, "divDeclaracao", void 0);
    DigitacaoTitulosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-digitacao-titulos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./digitacao-titulos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/digitacao-titulos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./digitacao-titulos.component.scss */
      "./src/app/digitacao-titulos/digitacao-titulos.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_arrays_service__WEBPACK_IMPORTED_MODULE_5__["ArraysService"], _services_devedor_service__WEBPACK_IMPORTED_MODULE_6__["DevedorService"], _services_cep_service__WEBPACK_IMPORTED_MODULE_7__["CepService"], _services_valida_service__WEBPACK_IMPORTED_MODULE_8__["ValidaService"], ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_15__["BsModalService"], _services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_10__["DigitacaoModalService"], _services_titulo_service__WEBPACK_IMPORTED_MODULE_9__["TituloService"], _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_12__["TituloDevedorService"], _services_lote_service__WEBPACK_IMPORTED_MODULE_11__["LoteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_13__["EmpresaService"]])], DigitacaoTitulosComponent);
    /***/
  },

  /***/
  "./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDigitacaoTitulosSubFormularioDigitacaoSubFormularioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === MODAL FORMULÁRIO DE PROTESTO === */\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header .modal-title {\n  margin-left: 390px; }\n#identificacao legend {\n  font-size: 14px;\n  margin: 10px 0 5px 0;\n  font-weight: bold;\n  color: red;\n  text-align: center; }\n.form-row label span {\n  font-weight: bold; }\n.form-row .col-custom {\n  width: 223px; }\n/* === BOTÕES ===*/\n.modal-body .btn-cep {\n  height: 32px;\n  margin: 28px 5px 0 5px;\n  width: 156px; }\n.btn-cep .btn-cep-search {\n  width: 156px; }\n.modal-body .wrapper-btn-copy {\n  margin-top: 28px; }\n/* === MODAL RODAPÉ ===*/\n.modal-footer .btn {\n  margin: 0 auto;\n  width: 157px; }\n.modal-footer {\n  background-color: #e4e9ef; }\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 6rem; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnaXRhY2FvLXRpdHVsb3Mvc3ViLWZvcm11bGFyaW8vZGlnaXRhY2FvLXN1Yi1mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaWdpdGFjYW8tdGl0dWxvcy9zdWItZm9ybXVsYXJpby9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxcZGlnaXRhY2FvLXRpdHVsb3NcXHN1Yi1mb3JtdWxhcmlvXFxkaWdpdGFjYW8tc3ViLWZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHlDQUFBO0FBQ0E7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZLEVBQUE7QUFHZCxrQkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEIsd0JBQUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZLEVBQUE7QUFHZDtFQUNFLHlCQUF5QixFQUFBO0FBSTNCO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpZ2l0YWNhby10aXR1bG9zL3N1Yi1mb3JtdWxhcmlvL2RpZ2l0YWNhby1zdWItZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBNT0RBTCBGT1JNVUzDgVJJTyBERSBQUk9URVNUTyA9PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmOyB9XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDM5MHB4OyB9XG5cbiNpZGVudGlmaWNhY2FvIGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmZvcm0tcm93IGxhYmVsIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uZm9ybS1yb3cgLmNvbC1jdXN0b20ge1xuICB3aWR0aDogMjIzcHg7IH1cblxuLyogPT09IEJPVMOVRVMgPT09Ki9cbi5tb2RhbC1ib2R5IC5idG4tY2VwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI4cHggNXB4IDAgNXB4O1xuICB3aWR0aDogMTU2cHg7IH1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1NnB4OyB9XG5cbi5tb2RhbC1ib2R5IC53cmFwcGVyLWJ0bi1jb3B5IHtcbiAgbWFyZ2luLXRvcDogMjhweDsgfVxuXG4vKiA9PT0gTU9EQUwgUk9EQVDDiSA9PT0qL1xuLm1vZGFsLWZvb3RlciAuYnRuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNTdweDsgfVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjsgfVxuXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtOyB9XG5cbi50YWJsZSAudGl0bGUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1OyB9XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIi8qID09PSBNT0RBTCBGT1JNVUzDgVJJTyBERSBQUk9URVNUTyA9PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzOTBweDtcbn1cblxuI2lkZW50aWZpY2FjYW8gbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tcm93IGxhYmVsIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tcm93IC5jb2wtY3VzdG9tIHtcbiAgd2lkdGg6IDIyM3B4O1xufVxuXG4vKiA9PT0gQk9Uw5VFUyA9PT0qL1xuLm1vZGFsLWJvZHkgLmJ0bi1jZXAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjhweCA1cHggMCA1cHg7XG4gIHdpZHRoOiAxNTZweDtcbn1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1NnB4O1xufVxuXG4ubW9kYWwtYm9keSAud3JhcHBlci1idG4tY29weSB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi8qID09PSBNT0RBTCBST0RBUMOJID09PSovXG4ubW9kYWwtZm9vdGVyIC5idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1N3B4O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbn1cblxuLy8gVGFiZWxhIERldmVkb3Jlc1xuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG59XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: DigitacaoSubFormularioComponent */

  /***/
  function srcAppDigitacaoTitulosSubFormularioDigitacaoSubFormularioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitacaoSubFormularioComponent", function () {
      return DigitacaoSubFormularioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/digitacao-modal.service */
    "./src/app/services/digitacao-modal.service.ts");

    var DigitacaoSubFormularioComponent =
    /*#__PURE__*/
    function () {
      function DigitacaoSubFormularioComponent(bsModalRef, toastr, formBuilder, digitacaoModalService) {
        var _this52 = this;

        _classCallCheck(this, DigitacaoSubFormularioComponent);

        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.digitacaoModalService = digitacaoModalService;
        this.devedor = {};
        this.enderecos = new Array();
        this.endereco = {};
        this.invalido = 'is-invalid';
        setTimeout(function () {
          console.log(_this52.devedor);
        }, 100);
      }

      _createClass(DigitacaoSubFormularioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Hello world!');
        }
      }, {
        key: "open2",
        value: function open2() {
          //this.toastr.success('Hello world!', 'Toastr fun!', {disableTimeOut: true});
          this.toastr.success('Hello world!', 'Toastr fun!');
        }
      }, {
        key: "selecionaEndereco",
        value: function selecionaEndereco(endereco) {
          this.endereco = endereco;
          this.digitacaoModalService.setEndereco(this.endereco);
          this.enderecos = [];
          console.log(this.enderecos);
          this.bsModalRef.hide();
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          this.endereco = {};
          this.digitacaoModalService.setEndereco(this.endereco);
          this.bsModalRef.hide();
        }
      }]);

      return DigitacaoSubFormularioComponent;
    }();

    DigitacaoSubFormularioComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_6__["DigitacaoModalService"]
      }];
    };

    DigitacaoSubFormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-formulario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./digitacao-sub-formulario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./digitacao-sub-formulario.component.scss */
      "./src/app/digitacao-titulos/sub-formulario/digitacao-sub-formulario.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services_digitacao_modal_service__WEBPACK_IMPORTED_MODULE_6__["DigitacaoModalService"]])], DigitacaoSubFormularioComponent);
    /***/
  },

  /***/
  "./src/app/directives/lowercase-input.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directives/lowercase-input.directive.ts ***!
    \*********************************************************/

  /*! exports provided: LowercaseInputDirective */

  /***/
  function srcAppDirectivesLowercaseInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LowercaseInputDirective", function () {
      return LowercaseInputDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LowercaseInputDirective =
    /*#__PURE__*/
    function () {
      function LowercaseInputDirective(ref) {
        _classCallCheck(this, LowercaseInputDirective);

        this.ref = ref;
      }

      _createClass(LowercaseInputDirective, [{
        key: "onInput",
        value: function onInput($event) {
          var start = $event.target.selectionStart;
          var end = $event.target.selectionEnd;
          $event.target.value = $event.target.value.toLowerCase();
          $event.target.setSelectionRange(start, end);
          $event.preventDefault(); // Garante que o último caractere digitado fique minúsculo

          if (!this.lastValue || this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value) {
            this.lastValue = this.ref.nativeElement.value = $event.target.value; // Propagation

            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', false, true);
            event.target.dispatchEvent(evt);
          }
        }
      }]);

      return LowercaseInputDirective;
    }();

    LowercaseInputDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LowercaseInputDirective.prototype, "onInput", null);
    LowercaseInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[lowercase]',
      host: {
        '(input)': '$event'
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], LowercaseInputDirective);
    /***/
  },

  /***/
  "./src/app/directives/uppercase-input.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directives/uppercase-input.directive.ts ***!
    \*********************************************************/

  /*! exports provided: UppercaseInputDirective */

  /***/
  function srcAppDirectivesUppercaseInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UppercaseInputDirective", function () {
      return UppercaseInputDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UppercaseInputDirective =
    /*#__PURE__*/
    function () {
      function UppercaseInputDirective(ref) {
        _classCallCheck(this, UppercaseInputDirective);

        this.ref = ref;
      }

      _createClass(UppercaseInputDirective, [{
        key: "onInput",
        value: function onInput($event) {
          var start = $event.target.selectionStart;
          var end = $event.target.selectionEnd;
          $event.target.value = $event.target.value.toUpperCase();
          $event.target.setSelectionRange(start, end);
          $event.preventDefault();

          if (!this.lastValue || this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value) {
            this.lastValue = this.ref.nativeElement.value = $event.target.value; // Propagation

            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', false, true);
            event.target.dispatchEvent(evt);
          }
        }
      }]);

      return UppercaseInputDirective;
    }();

    UppercaseInputDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], UppercaseInputDirective.prototype, "onInput", null);
    UppercaseInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[uppercase]',
      host: {
        '(input)': '$event'
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], UppercaseInputDirective);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, loginService, usuarioService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.loginService = loginService;
        this.usuarioService = usuarioService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this53 = this;

          return new Promise(function (resolve) {
            _this53.loginService.auth().onAuthStateChanged(function (usuario) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this53, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee37() {
                return regeneratorRuntime.wrap(function _callee37$(_context38) {
                  while (1) {
                    switch (_context38.prev = _context38.next) {
                      case 0:
                        this.loginService.menu(true);

                        if (usuario) {
                          _context38.next = 5;
                          break;
                        }

                        this.router.navigate(["/"]);
                        _context38.next = 7;
                        break;

                      case 5:
                        _context38.next = 7;
                        return this.usuarioService.getUser(usuario.uid).then(function (res) {
                          _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].idEmpresa = res.idEmpresa;
                          console.log("idE: ".concat(res.idEmpresa));
                        });

                      case 7:
                        resolve(usuario ? true : false);

                      case 8:
                      case "end":
                        return _context38.stop();
                    }
                  }
                }, _callee37, this);
              }));
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/empresa.guard.resolve.ts":
  /*!*************************************************!*\
    !*** ./src/app/guards/empresa.guard.resolve.ts ***!
    \*************************************************/

  /*! exports provided: EmpresaResolver */

  /***/
  function srcAppGuardsEmpresaGuardResolveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaResolver", function () {
      return EmpresaResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");

    var EmpresaResolver =
    /*#__PURE__*/
    function () {
      function EmpresaResolver(empresaService) {
        _classCallCheck(this, EmpresaResolver);

        this.empresaService = empresaService;
      }

      _createClass(EmpresaResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.params['idU'];
          return this.empresaService.buscaEmpresa(id);
        }
      }]);

      return EmpresaResolver;
    }();

    EmpresaResolver.ctorParameters = function () {
      return [{
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_2__["EmpresaService"]
      }];
    };

    EmpresaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_empresa_service__WEBPACK_IMPORTED_MODULE_2__["EmpresaService"]])], EmpresaResolver);
    /***/
  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(loginService, router) {
        _classCallCheck(this, LoginGuard);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this54 = this;

          return new Promise(function (resolve) {
            _this54.loginService.auth().onAuthStateChanged(function (usuario) {
              _this54.loginService.menu(false);

              if (usuario) {
                _this54.router.navigate(["/home"]);
              }

              resolve(!usuario ? true : false);
            });
          });
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginGuard);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* === HOME === */\n.principal {\n  width: 900px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  padding: 15px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUNBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09IEhPTUUgPT09ICovXG4ucHJpbmNpcGFsIHtcbiAgICB3aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(funcoesService, route, empresaService, fireAuth) {
        _classCallCheck(this, HomeComponent);

        this.funcoesService = funcoesService;
        this.route = route;
        this.empresaService = empresaService;
        this.fireAuth = fireAuth;
        this.adressEmail = {};
        this.empresa = {};
        this.idU = this.fireAuth.auth.currentUser.uid;
        this.data = this.funcoesService.DataAtualExtenso();
        this.getEmpresa();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.empresaService.buscaEmpresa(this.idU).then(function (adressEmail) {
            _this55.adressEmail = adressEmail;
          });
        }
      }, {
        key: "getEmpresa",
        value: function getEmpresa() {
          var _this56 = this;

          this.subscribe = this.route.data.subscribe(function (data) {
            _this56.empresa = data.empresa;
            _this56.nome = _this56.empresa.nome;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/informacoes-importantes/informacoes-importantes.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/informacoes-importantes/informacoes-importantes.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInformacoesImportantesInformacoesImportantesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* MODAL INFORMAÇÕES IMPORTANTES*/\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header .modal-title {\n  margin-left: 340px; }\n.modal-body h3 {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 20px; }\n.modal-footer {\n  background-color: #e4e9ef; }\n.modal-footer .btn {\n  margin: 0 5px;\n  width: 140px; }\n.modal-footer .mfooter-container {\n  width: 500px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYWNvZXMtaW1wb3J0YW50ZXMvaW5mb3JtYWNvZXMtaW1wb3J0YW50ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luZm9ybWFjb2VzLWltcG9ydGFudGVzL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxpbmZvcm1hY29lcy1pbXBvcnRhbnRlc1xcaW5mb3JtYWNvZXMtaW1wb3J0YW50ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGlDQUFBO0FBQ0E7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTtBQUlkO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWFjb2VzLWltcG9ydGFudGVzL2luZm9ybWFjb2VzLWltcG9ydGFudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogTU9EQUwgSU5GT1JNQcOHw5VFUyBJTVBPUlRBTlRFUyovXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjsgfVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzNDBweDsgfVxuXG4ubW9kYWwtYm9keSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWY7IH1cblxuLm1vZGFsLWZvb3RlciAuYnRuIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2lkdGg6IDE0MHB4OyB9XG5cbi5tb2RhbC1mb290ZXIgLm1mb290ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuIiwiLyogTU9EQUwgSU5GT1JNQcOHw5VFUyBJTVBPUlRBTlRFUyovXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbn1cblxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG5cbi5tb2RhbC1ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWY7XG59XG5cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuXG4ubW9kYWwtZm9vdGVyIC5tZm9vdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/informacoes-importantes/informacoes-importantes.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/informacoes-importantes/informacoes-importantes.component.ts ***!
    \******************************************************************************/

  /*! exports provided: InformacoesImportantesComponent */

  /***/
  function srcAppInformacoesImportantesInformacoesImportantesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacoesImportantesComponent", function () {
      return InformacoesImportantesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/funcoes.service */
    "./src/app/services/funcoes.service.ts");

    var InformacoesImportantesComponent =
    /*#__PURE__*/
    function () {
      function InformacoesImportantesComponent(bsModalRef, router, funcoesService) {
        _classCallCheck(this, InformacoesImportantesComponent);

        this.bsModalRef = bsModalRef;
        this.router = router;
        this.funcoesService = funcoesService;
        this.list = [];
      }

      _createClass(InformacoesImportantesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "abrirProtesto",
        value: function abrirProtesto() {
          this.bsModalRef.hide();
          this.idTitulo ? this.router.navigate(['/protesto/' + this.idTitulo]) : this.router.navigate(['/protesto']);
        }
      }, {
        key: "imprimirConteudo",
        value: function imprimirConteudo() {
          this.funcoesService.ImprimirConteudoDiv(this.divInfo);
        }
      }]);

      return InformacoesImportantesComponent;
    }();

    InformacoesImportantesComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divInfo', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], InformacoesImportantesComponent.prototype, "divInfo", void 0);
    InformacoesImportantesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'informacoes-importantes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./informacoes-importantes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/informacoes-importantes/informacoes-importantes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./informacoes-importantes.component.scss */
      "./src/app/informacoes-importantes/informacoes-importantes.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesService"]])], InformacoesImportantesComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* == HEADER == */\n.btn-cad {\n  float: right;\n  margin: 30px 30px 0px 0px;\n  width: 150px; }\nh1 {\n  font-family: \"Pontano Sans\", sans-serif;\n  font-weight: 300;\n  letter-spacing: 2px;\n  font-size: 25px;\n  line-height: 0px; }\nspan {\n  font-family: \"Montserrat\";\n  font-size: 50px;\n  font-weight: 700; }\np {\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #333333; }\n.header {\n  position: relative;\n  text-align: center;\n  background: linear-gradient(60deg, #0064b7 0%, #00acc1 100%);\n  color: white; }\n.inner-header {\n  height: 300px;\n  width: 900px;\n  padding-top: 150px;\n  margin: auto; }\n.waves {\n  position: relative;\n  width: 100%;\n  height: 10vh;\n  margin-bottom: -7px;\n  /*Fix for safari gap*/\n  min-height: 100px;\n  max-height: 150px; }\n.content {\n  position: relative;\n  height: 20vh;\n  text-align: center;\n  background-color: white; }\n/* == ÁREA DE LOGIN == */\n.login-container {\n  height: 500px;\n  width: 100%; }\n.login-container .ilustration-container {\n  float: left;\n  margin-left: 150px;\n  max-width: 400px;\n  height: 400px; }\n.ilustration-container img {\n  max-width: 400px;\n  height: 400px; }\n.login-container .login {\n  float: right;\n  margin-right: 190px;\n  margin-top: 95px;\n  width: 400px;\n  height: 400px; }\n.login-container .btn-login-cont {\n  width: 320px;\n  margin-top: 5px; }\n.login-container .btn-login, .btn-password {\n  width: 150px; }\n.login-container .btn-login.btn-login, .btn-password.btn-login {\n    margin-right: 10px; }\n/* == WEB FORMULÁRIO == */\n.web-form {\n  background: #151515 url(/assets/images/web_form_bg.jpg) no-repeat center;\n  width: 100%;\n  height: 400px;\n  text-align: center;\n  color: #fff;\n  position: relative; }\n.web-form .web-form-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6); }\n.title-container h2 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 25px;\n  font-weight: 300;\n  margin: 50px 5px 20px 0;\n  display: inline-block;\n  width: 60px; }\n.title-container .text-title {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 25px;\n  width: 300px; }\n.web-form .text-destaque {\n  width: 600px;\n  margin: auto;\n  margin-bottom: 50px;\n  text-align: center;\n  color: #fff; }\n.web-form .form-print {\n  margin: auto;\n  width: 300px;\n  height: 90px;\n  padding: 0px 10px 10px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  color: #fff;\n  transition: 0.5s ease; }\n.web-form .form-print:hover {\n  border: 1px solid #BABBBC;\n  color: #BABBBC; }\n.web-form .form-print:hover.form-print .print, .web-form .form-print:hover p {\n    color: #BABBBC; }\n.web-form .form-print, .print,\np,\nspan:hover {\n  cursor: pointer; }\n.form-print p {\n  font-size: 20px;\n  font-weight: 300;\n  margin: 0px 0 0 20px;\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff; }\n.form-print .print {\n  margin: 20px 0px 0px 20px;\n  color: #fff; }\n.form-print .text-print {\n  font-size: 25px;\n  font-weight: 700;\n  margin: -26px 0 0 79px;\n  font-family: \"Open Sans\", sans-serif; }\n/* == BARRA LATERAL == */\n.cadastro-sidebar {\n  background-color: #fff;\n  padding: 2em 1em;\n  height: 100%;\n  width: 400px; }\n.cadastro-sidebar.ng-sidebar--opened.ng-sidebar--over {\n    box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5); }\n.cadastro-sidebar .sign-up .btn-cadastro {\n  width: 150px; }\n/* == CARDS  == */\n.cards-container {\n  height: 400px;\n  width: 100%;\n  text-align: center;\n  margin: 3rem 0px; }\n.cards-container .title-cards {\n  margin-bottom: 3px; }\n.cards-container h2 {\n  text-align: center;\n  font-size: 25px;\n  font-family: \"Open Sans\", sans-serif; }\n.cards-container span {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 25px;\n  margin-bottom: -10px;\n  width: 300px; }\n.cards-container .card-deck {\n  display: flex;\n  justify-content: space-around;\n  margin: 20px auto;\n  width: 900px; }\n.card-deck .card-title {\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 5px; }\n.card-deck .card1,\n.card2,\n.card3 {\n  padding: 30px;\n  height: 340px;\n  margin-top: 15px; }\n.hr-down {\n  margin-top: -5px;\n  margin-bottom: 30px; }\n.card .btn {\n  padding: 10px 0px; }\n.shadow-drop-center:hover {\n  box-shadow: 0px 5px 15px -1px rgba(50, 50, 50, 0.15); }\n.shadow-drop-center {\n  transition: 0.5s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGlCQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUdkO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUdoQjtFQUNBLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGVBQWM7RUFDZCxjQUFjLEVBQUE7QUFHaEI7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLDREQUFnRjtFQUNoRixZQUFXLEVBQUE7QUFHYjtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUdkO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCO0VBQUUscUJBQUE7RUFDcEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7QUFJekIsd0JBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBQUdmO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUdqQjtFQUNFLFlBQVksRUFBQTtBQURkO0lBSUksa0JBQWtCLEVBQUE7QUFLdEIseUJBQUE7QUFDQTtFQUNFLHdFQUF3RTtFQUN4RSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFJcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0MsRUFBQTtBQUd0QztFQUNJLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVyxFQUFBO0FBSWI7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFHZjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7QUFGaEI7SUFLSSxjQUFjLEVBQUE7QUFJbEI7OztFQUdFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxXQUFXLEVBQUE7QUFHYjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7QUFHYjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9DQUFvQyxFQUFBO0FBSXRDLHdCQUFBO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFKZDtJQU9JLDJDQUEyQyxFQUFBO0FBSS9DO0VBQ0UsWUFBWSxFQUFBO0FBR2QsaUJBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9DQUFvQyxFQUFBO0FBR3RDO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTtBQUdkO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCOzs7RUFHRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFHQSxvREFBNEQsRUFBQTtBQUc1RDtFQUlBLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiA9PSBIRUFERVIgPT0gKi9cbi5idG4tY2FkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDMwcHggMzBweCAwcHggMHB4O1xuICB3aWR0aDogMTUwcHg7IH1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJQb250YW5vIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMHB4OyB9XG5cbnNwYW4ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzAwNjRiNyAwJSwgIzAwYWNjMSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5pbm5lci1oZWFkZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogOTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi53YXZlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcbiAgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTUwcHg7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4vKiA9PSDDgVJFQSBERSBMT0dJTiA9PSAqL1xuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sb2dpbi1jb250YWluZXIgLmlsdXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7IH1cblxuLmlsdXN0cmF0aW9uLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4OyB9XG5cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE5MHB4O1xuICBtYXJnaW4tdG9wOiA5NXB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7IH1cblxuLmxvZ2luLWNvbnRhaW5lciAuYnRuLWxvZ2luLWNvbnQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDsgfVxuXG4ubG9naW4tY29udGFpbmVyIC5idG4tbG9naW4sIC5idG4tcGFzc3dvcmQge1xuICB3aWR0aDogMTUwcHg7IH1cbiAgLmxvZ2luLWNvbnRhaW5lciAuYnRuLWxvZ2luLmJ0bi1sb2dpbiwgLmJ0bi1wYXNzd29yZC5idG4tbG9naW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4vKiA9PSBXRUIgRk9STVVMw4FSSU8gPT0gKi9cbi53ZWItZm9ybSB7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTUgdXJsKC9hc3NldHMvaW1hZ2VzL3dlYl9mb3JtX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ud2ViLWZvcm0gLndlYi1mb3JtLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxuXG4udGl0bGUtY29udGFpbmVyIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiA1MHB4IDVweCAyMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7IH1cblxuLnRpdGxlLWNvbnRhaW5lciAudGV4dC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiAzMDBweDsgfVxuXG4ud2ViLWZvcm0gLnRleHQtZGVzdGFxdWUge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4ud2ViLWZvcm0gLmZvcm0tcHJpbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlOyB9XG5cbi53ZWItZm9ybSAuZm9ybS1wcmludDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQUJCQkM7XG4gIGNvbG9yOiAjQkFCQkJDOyB9XG4gIC53ZWItZm9ybSAuZm9ybS1wcmludDpob3Zlci5mb3JtLXByaW50IC5wcmludCwgLndlYi1mb3JtIC5mb3JtLXByaW50OmhvdmVyIHAge1xuICAgIGNvbG9yOiAjQkFCQkJDOyB9XG5cbi53ZWItZm9ybSAuZm9ybS1wcmludCwgLnByaW50LFxucCxcbnNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmZvcm0tcHJpbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAwcHggMCAwIDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uZm9ybS1wcmludCAucHJpbnQge1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAyMHB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uZm9ybS1wcmludCAudGV4dC1wcmludCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAtMjZweCAwIDAgNzlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7IH1cblxuLyogPT0gQkFSUkEgTEFURVJBTCA9PSAqL1xuLmNhZGFzdHJvLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyZW0gMWVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MDBweDsgfVxuICAuY2FkYXN0cm8tc2lkZWJhci5uZy1zaWRlYmFyLS1vcGVuZWQubmctc2lkZWJhci0tb3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDIuNWVtIHJnYmEoODUsIDg1LCA4NSwgMC41KTsgfVxuXG4uY2FkYXN0cm8tc2lkZWJhciAuc2lnbi11cCAuYnRuLWNhZGFzdHJvIHtcbiAgd2lkdGg6IDE1MHB4OyB9XG5cbi8qID09IENBUkRTICA9PSAqL1xuLmNhcmRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwcHg7IH1cblxuLmNhcmRzLWNvbnRhaW5lciAudGl0bGUtY2FyZHMge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7IH1cblxuLmNhcmRzLWNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjsgfVxuXG4uY2FyZHMtY29udGFpbmVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDMwMHB4OyB9XG5cbi5jYXJkcy1jb250YWluZXIgLmNhcmQtZGVjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDkwMHB4OyB9XG5cbi5jYXJkLWRlY2sgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbi5jYXJkLWRlY2sgLmNhcmQxLFxuLmNhcmQyLFxuLmNhcmQzIHtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxuXG4uaHItZG93biB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmNhcmQgLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMHB4OyB9XG5cbi5zaGFkb3ctZHJvcC1jZW50ZXI6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTVweCAtMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IC0xcHggcmdiYSg1MCwgNTAsIDUwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IC0xcHggcmdiYSg1MCwgNTAsIDUwLCAwLjE1KTsgfVxuXG4uc2hhZG93LWRyb3AtY2VudGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjsgfVxuIiwiLyogPT0gSEVBREVSID09ICovXG4uYnRuLWNhZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvbnRhbm8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDozMDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZToyNXB4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4gIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDAsMTAwLDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uaW5uZXItaGVhZGVyIHtcbiAgaGVpZ2h0OjMwMHB4O1xuICB3aWR0aDo5MDBweDtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi53YXZlcyB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjEwdmg7XG4gIG1hcmdpbi1ib3R0b206LTdweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xuICBtaW4taGVpZ2h0OjEwMHB4O1xuICBtYXgtaGVpZ2h0OjE1MHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBoZWlnaHQ6MjB2aDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cbi8qID09IMOBUkVBIERFIExPR0lOID09ICovXG4ubG9naW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1jb250YWluZXIgLmlsdXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5pbHVzdHJhdGlvbi1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTkwcHg7XG4gIG1hcmdpbi10b3A6IDk1cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciAuYnRuLWxvZ2luLWNvbnQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciAuYnRuLWxvZ2luLCAuYnRuLXBhc3N3b3JkICB7XG4gIHdpZHRoOiAxNTBweDtcblxuICAmLmJ0bi1sb2dpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cblxuLyogPT0gV0VCIEZPUk1VTMOBUklPID09ICovXG4ud2ViLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1IHVybCgvYXNzZXRzL2ltYWdlcy93ZWJfZm9ybV9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxufVxuXG4ud2ViLWZvcm0gLndlYi1mb3JtLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiA1MHB4IDVweCAyMHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICBcbiAgfVxuICBcbiAgLnRpdGxlLWNvbnRhaW5lciAudGV4dC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLndlYi1mb3JtIC50ZXh0LWRlc3RhcXVlIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbi53ZWItZm9ybSAuZm9ybS1wcmludCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweCA7ICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi53ZWItZm9ybSAuZm9ybS1wcmludDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQUJCQkM7XG4gIGNvbG9yOiAjQkFCQkJDO1xuXG4gICYuZm9ybS1wcmludCAucHJpbnQsIHAge1xuICAgIGNvbG9yOiAjQkFCQkJDO1xuICB9XG59XG5cbi53ZWItZm9ybSAuZm9ybS1wcmludCwgLnByaW50LFxucCxcbnNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLXByaW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMHB4IDAgMCAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLXByaW50IC5wcmludCB7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1wcmludCAudGV4dC1wcmludCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAtMjZweCAwIDAgNzlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuLyogPT0gQkFSUkEgTEFURVJBTCA9PSAqL1xuLmNhZGFzdHJvLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyZW0gMWVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MDBweDtcblxuICAmLm5nLXNpZGViYXItLW9wZW5lZC5uZy1zaWRlYmFyLS1vdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMi41ZW0gcmdiYSg4NSwgODUsIDg1LCAwLjUpO1xuICB9XG59XG5cbi5jYWRhc3Ryby1zaWRlYmFyIC5zaWduLXVwIC5idG4tY2FkYXN0cm8ge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi8qID09IENBUkRTICA9PSAqL1xuLmNhcmRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwcHg7XG59XG5cbi5jYXJkcy1jb250YWluZXIgLnRpdGxlLWNhcmRzIHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY2FyZHMtY29udGFpbmVyIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZHMtY29udGFpbmVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZHMtY29udGFpbmVyIC5jYXJkLWRlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuLmNhcmQtZGVjayAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jYXJkLWRlY2sgLmNhcmQxLFxuLmNhcmQyLFxuLmNhcmQzIHtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmhyLWRvd24ge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2FyZCAuYnRuIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5zaGFkb3ctZHJvcC1jZW50ZXI6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTVweCAtMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xNSk7XG4tbW96LWJveC1zaGFkb3c6ICAgIDBweCA1cHggMTVweCAtMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xNSk7XG5ib3gtc2hhZG93OiAgICAgICAgIDBweCA1cHggMTVweCAtMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xNSk7XG59XG5cbi5zaGFkb3ctZHJvcC1jZW50ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcbi1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xuLW8tdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xudHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../informacoes-importantes/informacoes-importantes.component */
    "./src/app/informacoes-importantes/informacoes-importantes.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _services_valida_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/valida.service */
    "./src/app/services/valida.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12__);

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(modalService, fireAuth, loginService, formBuilder, router, toastr, validaService) {
        _classCallCheck(this, LoginComponent);

        this.modalService = modalService;
        this.fireAuth = fireAuth;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.validaService = validaService;
        this._opened = false;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_10__["utilsBr"].MASKS;
        this.submittedUser = false;
        this.submittedCad = false;
        this.usuario = {};
        this.empresa = {};
        this.existeEmail = false;
        this.existeDocumento = false;
        this.formGroupUsuario = this.formBuilder.group({
          'email': [this.usuario.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)])],
          'senha': [this.usuario.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
        });
        this.formGroupCadastro = this.formBuilder.group({
          'email': [this.empresa.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
          'documento': [{
            value: this.empresa.documento,
            disabled: false
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cpf])],
          'tipo': [this.empresa.tipo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        this.formGroupCadastro.controls['tipo'].setValue('CPF');
      }

      _createClass(LoginComponent, [{
        key: "_toggleSidebar",
        value: function _toggleSidebar() {
          this._opened = !this._opened;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmitUser",
        value: function onSubmitUser() {
          this.submittedUser = true;
          if (this.formGroupUsuario.invalid) return;
          this.login();
        }
      }, {
        key: "onSubmitCad",
        value: function onSubmitCad() {
          this.submittedCad = true;
          if (this.formGroupCadastro.invalid) return;
          this.enviarUsuario();
        }
      }, {
        key: "login",
        value: function login() {
          var _this57 = this;

          this.usuario = this.formGroupUsuario.value;
          this.loginService.login(this.usuario).then(function () {
            _this57.loginService.menu(true);

            _this57.router.navigate(["/home"]);
          }).catch(function (err) {
            console.log(err);

            _this57.toastr.error('Tente novamente...', 'Usuário ou senha inválido!');
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          var initialState = {
            list: [],
            title: ''
          };
          this.bsModalRef = this.modalService.show(_informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_6__["InformacoesImportantesComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
        }
      }, {
        key: "validarEmail",
        value: function validarEmail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee38() {
            return regeneratorRuntime.wrap(function _callee38$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    this.empresa = this.formGroupUsuario.value;

                    if (!this.formGroupUsuario.controls['email'].valid) {
                      _context39.next = 5;
                      break;
                    }

                    console.log('opa');
                    _context39.next = 5;
                    return this.loginService.redefinirSenhaEmail(this.empresa.email);

                  case 5:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "enviarUsuario",
        value: function enviarUsuario() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee40() {
            var _this58 = this;

            var transferencia;
            return regeneratorRuntime.wrap(function _callee40$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    console.log('ok');
                    transferencia = this.formGroupCadastro.value;
                    this.empresa.email = transferencia.email;
                    this.empresa.documento = transferencia.documento;
                    this.empresa.tipo = transferencia.tipo;

                    if (!(this.formGroupCadastro.valid && this.empresa.tipo == 'CPF' || this.formGroupCadastro.valid && this.empresa.tipo == 'CNPJ')) {
                      _context41.next = 9;
                      break;
                    }

                    console.log('ok');
                    _context41.next = 9;
                    return this.validaService.emailExiste(this.empresa.email).then(function (dataEmail) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this58, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee39() {
                        var _this59 = this;

                        return regeneratorRuntime.wrap(function _callee39$(_context40) {
                          while (1) {
                            switch (_context40.prev = _context40.next) {
                              case 0:
                                console.log('dataEmail:' + dataEmail.empty);

                                if (!dataEmail.empty) {
                                  _context40.next = 6;
                                  break;
                                }

                                _context40.next = 4;
                                return this.validaService.documentoExiste(this.empresa.documento).then(function (dataDocumento) {
                                  console.log('dataEmail:' + dataDocumento.empty);

                                  if (dataDocumento.empty) {
                                    _this59.existeDocumento = false;
                                    console.log('formGroupCadastro valido');

                                    _this59.router.navigate(['/cadastro'], {
                                      queryParams: _this59.empresa
                                    });
                                  } else {
                                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                      title: 'O ' + _this59.formGroupCadastro.controls['tipo'].value + ' já está em Uso',
                                      icon: 'error',
                                      cancelButtonColor: '#d33',
                                      cancelButtonText: 'Cancelar'
                                    });
                                  }
                                });

                              case 4:
                                _context40.next = 8;
                                break;

                              case 6:
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                  title: 'Email já está em uso!',
                                  icon: 'error',
                                  showCancelButton: true,
                                  cancelButtonColor: '#d33',
                                  cancelButtonText: 'Cancelar'
                                });
                                console.log(this.existeEmail);

                              case 8:
                              case "end":
                                return _context40.stop();
                            }
                          }
                        }, _callee39, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }, {
        key: "alteraValidator",
        value: function alteraValidator(tipo) {
          this.formGroupCadastro.controls['documento'].setValue('');

          if (tipo == 'CPF') {
            this.formGroupCadastro.controls['documento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cpf]));
          } else {
            this.formGroupCadastro.controls['documento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cnpj]));
          }
        }
      }, {
        key: "fUser",
        get: function get() {
          return this.formGroupUsuario.controls;
        }
      }, {
        key: "fCad",
        get: function get() {
          return this.formGroupCadastro.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }, {
        type: _services_valida_service__WEBPACK_IMPORTED_MODULE_11__["ValidaService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _services_valida_service__WEBPACK_IMPORTED_MODULE_11__["ValidaService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* == HEADER == */\n.header {\n  position: relative;\n  background: linear-gradient(60deg, #0064b7 0%, #00acc1 100%);\n  color: white;\n  width: 100%;\n  margin-bottom: 2rem; }\n.inner-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  width: 100%;\n  padding: 50px; }\n/* == USUÁRIO LOGADO == */\n.inner-header .side-info {\n  display: flex;\n  justify-content: space-around;\n  width: 250px;\n  font-weight: bold; }\n.side-info p {\n  margin: 8px 0px 0px 5px;\n  font-size: 16px; }\n/* == MENU == */\n.menu-container {\n  max-width: 700px;\n  margin: 0 auto; }\n.menu {\n  margin: 0 auto;\n  width: 700px; }\n.menu li {\n  display: inline-block;\n  padding: 16px 15px 2px 15px;\n  cursor: pointer; }\n.menu li p, a {\n  font-weight: 600; }\n.menu a, fa {\n  color: #fff;\n  text-decoration: none; }\n.menu li:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  color: #111;\n  text-align: center; }\n.drop-btn {\n  cursor: pointer;\n  color: #fff; }\n.dropdown {\n  position: relative;\n  display: inline-block; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #e5eaf0;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 3; }\n.dropdown-content a {\n  color: #5A6268;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n.dropdown:hover .dropdown-content {\n  display: block; }\n/*  ------ DROPDOWN-DOWN  --- */\n.dropdown-down {\n  position: relative;\n  display: inline-block;\n  color: #5A6268; }\n.dropdown-content-down1 {\n  display: none;\n  position: absolute;\n  left: 120px;\n  top: -3px;\n  background-color: #e5eaf0;\n  min-width: 160px;\n  height: 125px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 6; }\n.dropdown-content-down1 a {\n  color: #5A6268;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n.dropdown-content-down1 a:hover {\n  background-color: #f1f1f1; }\n.dropdown-down:hover .dropdown-content-down1 {\n  display: block; }\n.dropdown-down:hover .dropbtn-down {\n  background-color: #3e8e41; }\n/* --------------- */\n.dropdown-content-down2 {\n  display: none;\n  position: absolute;\n  left: 120px;\n  top: -3px;\n  background-color: #e5eaf0;\n  min-width: 160px;\n  height: 125px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 6; }\n.dropdown-content-down2 a {\n  color: #5A6268;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n.dropdown-content-down2 a:hover {\n  background-color: #f1f1f1; }\n.dropdown-down:hover .dropdown-content-down2 {\n  display: block; }\n.dropdown-down:hover .dropbtn-down {\n  background-color: #3e8e41; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixpQkFBQTtBQUNBO0VBQ0Usa0JBQWlCO0VBQ2pCLDREQUFnRjtFQUNoRixZQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBVztFQUNYLFdBQVU7RUFDVixhQUFhLEVBQUE7QUFJZix5QkFBQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBO0FBSWpCLGVBQUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVztFQUNYLHFCQUFxQixFQUFBO0FBSXZCO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBO0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLFVBQVUsRUFBQTtBQUdaO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxjQUFjLEVBQUE7QUFJaEIsK0JBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYSxFQUFBO0FBR2Y7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLFVBQVUsRUFBQTtBQUdaO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQixvQkFBQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxVQUFVLEVBQUE7QUFHWjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiA9PSBIRUFERVIgPT0gKi9cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzAwNjRiNyAwJSwgIzAwYWNjMSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxuXG4uaW5uZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4OyB9XG5cbi8qID09IFVTVcOBUklPIExPR0FETyA9PSAqL1xuLmlubmVyLWhlYWRlciAuc2lkZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnNpZGUtaW5mbyBwIHtcbiAgbWFyZ2luOiA4cHggMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4vKiA9PSBNRU5VID09ICovXG4ubWVudS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4ubWVudSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNzAwcHg7IH1cblxuLm1lbnUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAycHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5tZW51IGxpIHAsIGEge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5tZW51IGEsIGZhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4ubWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogIzExMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5kcm9wLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZjA7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAzOyB9XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogIzVBNjI2ODtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyB9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qICAtLS0tLS0gRFJPUERPV04tRE9XTiAgLS0tICovXG4uZHJvcGRvd24tZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzVBNjI2ODsgfVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIwcHg7XG4gIHRvcDogLTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWFmMDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDY7IH1cblxuLmRyb3Bkb3duLWNvbnRlbnQtZG93bjEgYSB7XG4gIGNvbG9yOiAjNUE2MjY4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmRyb3Bkb3duLWNvbnRlbnQtZG93bjEgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IH1cblxuLmRyb3Bkb3duLWRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQtZG93bjEge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uZHJvcGRvd24tZG93bjpob3ZlciAuZHJvcGJ0bi1kb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gKi9cbi5kcm9wZG93bi1jb250ZW50LWRvd24yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMjBweDtcbiAgdG9wOiAtM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlYWYwO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogNjsgfVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMiBhIHtcbiAgY29sb3I6ICM1QTYyNjg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgfVxuXG4uZHJvcGRvd24tZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudC1kb3duMiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5kcm9wZG93bi1kb3duOmhvdmVyIC5kcm9wYnRuLWRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxOyB9XG4iLCIvKiA9PSBIRUFERVIgPT0gKi9cbi5oZWFkZXIge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgcmdiYSgwLDEwMCwxODMsMSkgMCUsIHJnYmEoMCwxNzIsMTkzLDEpIDEwMCUpO1xuICBjb2xvcjp3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5pbm5lci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDo3MHB4O1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOiA1MHB4O1xuXG59XG5cbi8qID09IFVTVcOBUklPIExPR0FETyA9PSAqL1xuLmlubmVyLWhlYWRlciAuc2lkZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlLWluZm8gcCB7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuLyogPT0gTUVOVSA9PSAqL1xuLm1lbnUtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWVudSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNzAwcHg7XG59XG5cbi5tZW51IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxNnB4IDE1cHggMnB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUgbGkgcCwgYSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51IGEsIGZhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG4ubWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogIzExMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZjA7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAzO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6ICM1QTYyNjg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qICAtLS0tLS0gRFJPUERPV04tRE9XTiAgLS0tICovXG4uZHJvcGRvd24tZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjojNUE2MjY4O1xufVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIwcHg7XG4gIHRvcDogLTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWFmMDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5kcm9wZG93bi1jb250ZW50LWRvd24xIGEge1xuICBjb2xvcjogIzVBNjI2ODtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmRyb3Bkb3duLWRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQtZG93bjEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWRvd246aG92ZXIgLmRyb3BidG4tZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQtZG93bjIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEyMHB4O1xuICB0b3A6IC0zcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZjA7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiA2O1xufVxuXG4uZHJvcGRvd24tY29udGVudC1kb3duMiBhIHtcbiAgY29sb3I6ICM1QTYyNjg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQtZG93bjIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5kcm9wZG93bi1kb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50LWRvd24yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1kb3duOmhvdmVyIC5kcm9wYnRuLWRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(empresaService, loginService, fireAuth, router) {
        _classCallCheck(this, MenuComponent);

        this.empresaService = empresaService;
        this.loginService = loginService;
        this.fireAuth = fireAuth;
        this.router = router;
        this.empresa = {}; //teste

        this.idU = this.fireAuth.auth.currentUser.uid;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          this.empresaService.buscaEmpresa(this.idU).then(function (empresa) {
            console.log(empresa);
            _this60.empresa = empresa;
          });
        }
      }, {
        key: "sair",
        value: function sair() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee41() {
            return regeneratorRuntime.wrap(function _callee41$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    _context42.next = 2;
                    return this.loginService.logout();

                  case 2:
                    this.router.navigate(['/']);
                    console.log('metodo acionado');

                  case 4:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_5__["EmpresaService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_empresa_service__WEBPACK_IMPORTED_MODULE_5__["EmpresaService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginaNaoEncontradaPaginaNaoEncontradaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1uYW8tZW5jb250cmFkYS9wYWdpbmEtbmFvLWVuY29udHJhZGEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PaginaNaoEncontradaComponent */

  /***/
  function srcAppPaginaNaoEncontradaPaginaNaoEncontradaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function () {
      return PaginaNaoEncontradaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaginaNaoEncontradaComponent =
    /*#__PURE__*/
    function () {
      function PaginaNaoEncontradaComponent() {
        _classCallCheck(this, PaginaNaoEncontradaComponent);
      }

      _createClass(PaginaNaoEncontradaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaginaNaoEncontradaComponent;
    }();

    PaginaNaoEncontradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagina-nao-encontrada',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagina-nao-encontrada.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagina-nao-encontrada.component.scss */
      "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaginaNaoEncontradaComponent);
    /***/
  },

  /***/
  "./src/app/pesquisar-devedores/pesquisar-devedores.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pesquisar-devedores/pesquisar-devedores.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPesquisarDevedoresPesquisarDevedoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* === PESQUISA DEVEDORES === */\n.devedores-container {\n  width: 900px;\n  margin: 0 auto; }\n.devedores-container legend {\n  margin-left: 15px; }\n.form-group .btn-search-debt {\n  width: 150px; }\n/* === TABELA DEVEDORES === */\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  font-size: 12.5px; }\n.table .title-table {\n  background-color: #bfc0c5;\n  font-size: 15px; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVzcXVpc2FyLWRldmVkb3Jlcy9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxccGVzcXVpc2FyLWRldmVkb3Jlc1xccGVzcXVpc2FyLWRldmVkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsWUFBWSxFQUFBO0FBSWQsNkJBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7QUFHakI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVzcXVpc2FyLWRldmVkb3Jlcy9wZXNxdWlzYXItZGV2ZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09IFBFU1FVSVNBIERFVkVET1JFUyA9PT0gKi9cbi5kZXZlZG9yZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRldmVkb3Jlcy1jb250YWluZXIgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIC5idG4tc2VhcmNoLWRlYnQge1xuICB3aWR0aDogMTUwcHg7XG59XG5cblxuLyogPT09IFRBQkVMQSBERVZFRE9SRVMgPT09ICovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICBmb250LXNpemU6IDEyLjVweDtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pesquisar-devedores/pesquisar-devedores.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pesquisar-devedores/pesquisar-devedores.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PesquisarDevedoresComponent */

  /***/
  function srcAppPesquisarDevedoresPesquisarDevedoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PesquisarDevedoresComponent", function () {
      return PesquisarDevedoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PesquisarDevedoresComponent =
    /*#__PURE__*/
    function () {
      function PesquisarDevedoresComponent() {
        _classCallCheck(this, PesquisarDevedoresComponent);

        this.mostrargrid = false;
      }

      _createClass(PesquisarDevedoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pesquisar",
        value: function pesquisar() {
          this.mostrargrid = true;
        }
      }]);

      return PesquisarDevedoresComponent;
    }();

    PesquisarDevedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pesquisar-devedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pesquisar-devedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-devedores/pesquisar-devedores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pesquisar-devedores.component.scss */
      "./src/app/pesquisar-devedores/pesquisar-devedores.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PesquisarDevedoresComponent);
    /***/
  },

  /***/
  "./src/app/pesquisar-lotes/pesquisar-lotes.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pesquisar-lotes/pesquisar-lotes.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPesquisarLotesPesquisarLotesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === TÍTULOS APONTADOS === */\n.lotes-container {\n  width: 900px;\n  margin: 0 auto; }\n.lotes-container h2 {\n  margin-bottom: 25px; }\n.lotes-container legend {\n  margin-bottom: 15px; }\n.lotes-container label {\n  margin-right: 25px; }\n.lotes-container input[type=\"date\"] {\n  width: 183px; }\n.lotes-container .form-lote {\n  width: 183px; }\n.lotes-container .form-select {\n  margin-top: 20px; }\n.lotes-container select {\n  width: 300px; }\n.lotes-container .fcontrol-target {\n  width: 290px; }\n/* === BUTTON TITULOS APONTADOS === */\n.btn-search-ta .btn-pesquisa-ta {\n  width: 180px;\n  margin-top: -8px; }\n/* === TABELA TÍTULOS APONTADOS === */\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  font-size: 12.5px; }\n.table .title-table {\n  background-color: #bfc0c5;\n  font-size: 15px; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVzcXVpc2FyLWxvdGVzL3Blc3F1aXNhci1sb3Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVzcXVpc2FyLWxvdGVzL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwZXNxdWlzYXItbG90ZXNcXHBlc3F1aXNhci1sb3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEJBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFJaEI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUlkLHFDQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFJbEIscUNBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7QUFHakI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVzcXVpc2FyLWxvdGVzL3Blc3F1aXNhci1sb3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBUw41UVUxPUyBBUE9OVEFET1MgPT09ICovXG4ubG90ZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4ubG90ZXMtY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubG90ZXMtY29udGFpbmVyIGxlZ2VuZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuLmxvdGVzLWNvbnRhaW5lciBsYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMjVweDsgfVxuXG4ubG90ZXMtY29udGFpbmVyIGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgd2lkdGg6IDE4M3B4OyB9XG5cbi5sb3Rlcy1jb250YWluZXIgLmZvcm0tbG90ZSB7XG4gIHdpZHRoOiAxODNweDsgfVxuXG4ubG90ZXMtY29udGFpbmVyIC5mb3JtLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLmxvdGVzLWNvbnRhaW5lciBzZWxlY3Qge1xuICB3aWR0aDogMzAwcHg7IH1cblxuLmxvdGVzLWNvbnRhaW5lciAuZmNvbnRyb2wtdGFyZ2V0IHtcbiAgd2lkdGg6IDI5MHB4OyB9XG5cbi8qID09PSBCVVRUT04gVElUVUxPUyBBUE9OVEFET1MgPT09ICovXG4uYnRuLXNlYXJjaC10YSAuYnRuLXBlc3F1aXNhLXRhIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4OyB9XG5cbi8qID09PSBUQUJFTEEgVMONVFVMT1MgQVBPTlRBRE9TID09PSAqL1xuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgZm9udC1zaXplOiAxMi41cHg7IH1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG4udGFibGUgLnRhYmxlLWljb246aG92ZXIge1xuICBjb2xvcjogIzA5NWQ2ZTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4iLCIvKiA9PT0gVMONVFVMT1MgQVBPTlRBRE9TID09PSAqL1xuLmxvdGVzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbn1cblxuLmxvdGVzLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5sb3Rlcy1jb250YWluZXIgbGVnZW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmxvdGVzLWNvbnRhaW5lciBsYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmxvdGVzLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIHdpZHRoOiAxODNweDtcbn1cblxuLmxvdGVzLWNvbnRhaW5lciAuZm9ybS1sb3RlIHtcbiAgd2lkdGg6IDE4M3B4O1xufVxuXG4ubG90ZXMtY29udGFpbmVyIC5mb3JtLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb3Rlcy1jb250YWluZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubG90ZXMtY29udGFpbmVyIC5mY29udHJvbC10YXJnZXQge1xuICB3aWR0aDogMjkwcHg7XG59XG5cblxuLyogPT09IEJVVFRPTiBUSVRVTE9TIEFQT05UQURPUyA9PT0gKi9cbi5idG4tc2VhcmNoLXRhIC5idG4tcGVzcXVpc2EtdGEge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cblxuLyogPT09IFRBQkVMQSBUw41UVUxPUyBBUE9OVEFET1MgPT09ICovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICBmb250LXNpemU6IDEyLjVweDtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pesquisar-lotes/pesquisar-lotes.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pesquisar-lotes/pesquisar-lotes.component.ts ***!
    \**************************************************************/

  /*! exports provided: PesquisarLotesComponent */

  /***/
  function srcAppPesquisarLotesPesquisarLotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PesquisarLotesComponent", function () {
      return PesquisarLotesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PesquisarLotesComponent =
    /*#__PURE__*/
    function () {
      function PesquisarLotesComponent() {
        _classCallCheck(this, PesquisarLotesComponent);

        this.mostrargrid = false;
      }

      _createClass(PesquisarLotesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pesquisar",
        value: function pesquisar() {
          this.mostrargrid = true;
        }
      }]);

      return PesquisarLotesComponent;
    }();

    PesquisarLotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pesquisar-lotes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pesquisar-lotes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar-lotes/pesquisar-lotes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pesquisar-lotes.component.scss */
      "./src/app/pesquisar-lotes/pesquisar-lotes.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PesquisarLotesComponent);
    /***/
  },

  /***/
  "./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosicaoTitulosDevedorPosicaoTitulosDevedorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === POSIÇÃO DE TÍTULOS APONTADOS POR DEVEDOR === */\n.ptitulos-container {\n  width: 900px;\n  margin: 0 auto; }\n.ptitulos-container h2 {\n  margin-bottom: 25px; }\n.ptitulos-container legend {\n  margin-bottom: 15px; }\n.ptitulos-container .form-row {\n  margin-top: 2rem; }\n.btn-search .btn-pesquisa {\n  width: 160px;\n  margin: 20px 0 0 20px; }\n/* BOTÃO IMPRESSÃO */\n.ptitulos-container .btn-print {\n  margin: 0 auto;\n  margin-top: 6rem;\n  width: 200px; }\n.btn-print .btn {\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaWNhby10aXR1bG9zLWRldmVkb3IvcG9zaWNhby10aXR1bG9zLWRldmVkb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc2ljYW8tdGl0dWxvcy1kZXZlZG9yL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwb3NpY2FvLXRpdHVsb3MtZGV2ZWRvclxccG9zaWNhby10aXR1bG9zLWRldmVkb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLHFEQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBO0FBSXZCLG9CQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zaWNhby10aXR1bG9zLWRldmVkb3IvcG9zaWNhby10aXR1bG9zLWRldmVkb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiA9PT0gUE9TScOHw4NPIERFIFTDjVRVTE9TIEFQT05UQURPUyBQT1IgREVWRURPUiA9PT0gKi9cbi5wdGl0dWxvcy1jb250YWluZXIge1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5wdGl0dWxvcy1jb250YWluZXIgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi5wdGl0dWxvcy1jb250YWluZXIgbGVnZW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG4ucHRpdHVsb3MtY29udGFpbmVyIC5mb3JtLXJvdyB7XG4gIG1hcmdpbi10b3A6IDJyZW07IH1cblxuLmJ0bi1zZWFyY2ggLmJ0bi1wZXNxdWlzYSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4OyB9XG5cbi8qIEJPVMODTyBJTVBSRVNTw4NPICovXG4ucHRpdHVsb3MtY29udGFpbmVyIC5idG4tcHJpbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgd2lkdGg6IDIwMHB4OyB9XG5cbi5idG4tcHJpbnQgLmJ0biB7XG4gIHdpZHRoOiAxNTBweDsgfVxuIiwiLyogPT09IFBPU0nDh8ODTyBERSBUw41UVUxPUyBBUE9OVEFET1MgUE9SIERFVkVET1IgPT09ICovXG4ucHRpdHVsb3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnB0aXR1bG9zLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5wdGl0dWxvcy1jb250YWluZXIgbGVnZW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnB0aXR1bG9zLWNvbnRhaW5lciAuZm9ybS1yb3cge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYnRuLXNlYXJjaCAuYnRuLXBlc3F1aXNhIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XG59XG5cblxuLyogQk9Uw4NPIElNUFJFU1PDg08gKi9cbi5wdGl0dWxvcy1jb250YWluZXIgLmJ0bi1wcmludCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2cmVtO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5idG4tcHJpbnQgLmJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PosicaoTitulosDevedorComponent */

  /***/
  function srcAppPosicaoTitulosDevedorPosicaoTitulosDevedorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosicaoTitulosDevedorComponent", function () {
      return PosicaoTitulosDevedorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PosicaoTitulosDevedorComponent =
    /*#__PURE__*/
    function () {
      function PosicaoTitulosDevedorComponent() {
        _classCallCheck(this, PosicaoTitulosDevedorComponent);
      }

      _createClass(PosicaoTitulosDevedorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PosicaoTitulosDevedorComponent;
    }();

    PosicaoTitulosDevedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posicao-titulos-devedor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posicao-titulos-devedor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posicao-titulos-devedor.component.scss */
      "./src/app/posicao-titulos-devedor/posicao-titulos-devedor.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PosicaoTitulosDevedorComponent);
    /***/
  },

  /***/
  "./src/app/posicao-titulos/posicao-titulos.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/posicao-titulos/posicao-titulos.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosicaoTitulosPosicaoTitulosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* ===  POSIÇÃO DE TÍTULOS APONTADOS ===*/\n.ptitulos-container {\n  width: 900px;\n  margin: 0 auto; }\n.ptitulos-container h2 {\n  margin-bottom: 25px; }\n.ptitulos-container legend {\n  margin-bottom: 15px; }\n.ptitulos-container .form-row {\n  margin-top: 2rem; }\n.btn-search .btn-pesquisa {\n  width: 150px;\n  margin: 20px 0 0 7px; }\n/* === BUTTON IMPRESSÃO ===*/\n.ptitulos-container .btn-press {\n  margin: 0 auto;\n  margin-top: 6rem;\n  width: 200px; }\n.btn-press .btn {\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaWNhby10aXR1bG9zL3Bvc2ljYW8tdGl0dWxvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zaWNhby10aXR1bG9zL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwb3NpY2FvLXRpdHVsb3NcXHBvc2ljYW8tdGl0dWxvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIseUNBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxZQUFZO0VBQ1osb0JBQW9CLEVBQUE7QUFJdEIsNEJBQUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3NpY2FvLXRpdHVsb3MvcG9zaWNhby10aXR1bG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogPT09ICBQT1NJw4fDg08gREUgVMONVFVMT1MgQVBPTlRBRE9TID09PSovXG4ucHRpdHVsb3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4ucHRpdHVsb3MtY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ucHRpdHVsb3MtY29udGFpbmVyIGxlZ2VuZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuLnB0aXR1bG9zLWNvbnRhaW5lciAuZm9ybS1yb3cge1xuICBtYXJnaW4tdG9wOiAycmVtOyB9XG5cbi5idG4tc2VhcmNoIC5idG4tcGVzcXVpc2Ege1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwIDAgN3B4OyB9XG5cbi8qID09PSBCVVRUT04gSU1QUkVTU8ODTyA9PT0qL1xuLnB0aXR1bG9zLWNvbnRhaW5lciAuYnRuLXByZXNzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIHdpZHRoOiAyMDBweDsgfVxuXG4uYnRuLXByZXNzIC5idG4ge1xuICB3aWR0aDogMTUwcHg7IH1cbiIsIi8qID09PSAgUE9TScOHw4NPIERFIFTDjVRVTE9TIEFQT05UQURPUyA9PT0qL1xuLnB0aXR1bG9zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wdGl0dWxvcy1jb250YWluZXIgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucHRpdHVsb3MtY29udGFpbmVyIGxlZ2VuZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wdGl0dWxvcy1jb250YWluZXIgLmZvcm0tcm93IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmJ0bi1zZWFyY2ggLmJ0bi1wZXNxdWlzYSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMCA3cHg7XG59XG5cblxuLyogPT09IEJVVFRPTiBJTVBSRVNTw4NPID09PSovXG4ucHRpdHVsb3MtY29udGFpbmVyIC5idG4tcHJlc3Mge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYnRuLXByZXNzIC5idG4ge1xuICB3aWR0aDogMTUwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/posicao-titulos/posicao-titulos.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/posicao-titulos/posicao-titulos.component.ts ***!
    \**************************************************************/

  /*! exports provided: PosicaoTitulosComponent */

  /***/
  function srcAppPosicaoTitulosPosicaoTitulosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosicaoTitulosComponent", function () {
      return PosicaoTitulosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PosicaoTitulosComponent =
    /*#__PURE__*/
    function () {
      function PosicaoTitulosComponent() {
        _classCallCheck(this, PosicaoTitulosComponent);
      }

      _createClass(PosicaoTitulosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PosicaoTitulosComponent;
    }();

    PosicaoTitulosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posicao-titulos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posicao-titulos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posicao-titulos/posicao-titulos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posicao-titulos.component.scss */
      "./src/app/posicao-titulos/posicao-titulos.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PosicaoTitulosComponent);
    /***/
  },

  /***/
  "./src/app/protesto/protesto.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/protesto/protesto.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProtestoProtestoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === CONTAINER FORMULÁRIO === */\n.form-container {\n  width: 900px;\n  margin: 0 auto; }\n.form-container h2 {\n  margin-bottom: 20px; }\n.form-container .btn-cep {\n  height: 32px;\n  margin-top: 28px;\n  width: 155px; }\n.btn-cep .btn {\n  width: 140px; }\n/* === CHECKBOX PROTESTO=== */\n.form-container .form-check {\n  margin-bottom: 15px; }\n.form-container .form-check input {\n  margin: 0 15px 0 3px; }\n/* ===  FORM-2 DADOS TÍTULO === */\n.form-2 {\n  margin: 25px 0 20px 0; }\n/* === FORM-3 DEVEDORES === */\n.form-3 .container-icon {\n  margin-bottom: 10px; }\n.form-3 .container-icon fa:hover {\n  color: #095d6e;\n  cursor: pointer; }\n.form-3 .container-icon fa {\n  margin: 3px 20px 0 6px; }\n/* == TABELA == */\ntable {\n  margin-top: 25px; }\ntable .table-icon {\n  text-align: center; }\n/* === BOTOES === */\n.form-container .btn-create {\n  width: 140px; }\n.form-container .btn-wrapper {\n  width: 400px;\n  margin: 2rem auto; }\n.btn-wrapper .btn-save, .btn-cancel {\n  width: 140px; }\n.btn-wrapper .btn-save-dev, .btn-cancel-dev1, .btn-cancel-dev2 {\n  width: 145px; }\n.btn-wrapper .btn-save-dev {\n  margin: 0 10px 0 0px; }\n.btn-wrapper .btn-cancel-dev2 {\n  width: 145px;\n  margin-left: 100px; }\n.btn-wrapper .btn-save {\n  margin: 0 10px 0 5px; }\n.btn-wrapper .btn-send {\n  margin: 15px 10px 0 3px; }\n.btn-wrapper .btn-canc {\n  width: 138px;\n  margin-top: 15px;\n  margin-left: 60px; }\n/* === INFORMAÇÕES === */\n.info-container {\n  margin-top: 70px;\n  height: 300px; }\n.info-item-1 {\n  float: left; }\n.info-container .info-item-2 h3 {\n  font-size: 15px;\n  float: right;\n  top: 30px;\n  margin: 70px 90px 0 0;\n  font-weight: bold;\n  color: #5A6268; }\n.info-container .info-item-3 p {\n  clear: both;\n  float: left;\n  margin: 50px 0 0 125px;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVzdG8vcHJvdGVzdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3Rlc3RvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwcm90ZXN0b1xccHJvdGVzdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGlDQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWSxFQUFBO0FBR2QsNkJBQUE7QUFDQTtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usb0JBQW9CLEVBQUE7QUFJdEIsaUNBQUE7QUFDQTtFQUNFLHFCQUFxQixFQUFBO0FBSXZCLDZCQUFBO0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFHbkI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QixpQkFBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQixtQkFBQTtBQUNBO0VBQ0UsWUFBWSxFQUFBO0FBSWQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0Usb0JBQW9CLEVBQUE7QUFHdEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxvQkFBb0IsRUFBQTtBQUdyQjtFQUNDLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtBQUduQix3QkFBQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvdGVzdG8vcHJvdGVzdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiA9PT0gQ09OVEFJTkVSIEZPUk1VTMOBUklPID09PSAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uZm9ybS1jb250YWluZXIgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5mb3JtLWNvbnRhaW5lciAuYnRuLWNlcCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgd2lkdGg6IDE1NXB4OyB9XG5cbi5idG4tY2VwIC5idG4ge1xuICB3aWR0aDogMTQwcHg7IH1cblxuLyogPT09IENIRUNLQk9YIFBST1RFU1RPPT09ICovXG4uZm9ybS1jb250YWluZXIgLmZvcm0tY2hlY2sge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG5cbi5mb3JtLWNvbnRhaW5lciAuZm9ybS1jaGVjayBpbnB1dCB7XG4gIG1hcmdpbjogMCAxNXB4IDAgM3B4OyB9XG5cbi8qID09PSAgRk9STS0yIERBRE9TIFTDjVRVTE8gPT09ICovXG4uZm9ybS0yIHtcbiAgbWFyZ2luOiAyNXB4IDAgMjBweCAwOyB9XG5cbi8qID09PSBGT1JNLTMgREVWRURPUkVTID09PSAqL1xuLmZvcm0tMyAuY29udGFpbmVyLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5mb3JtLTMgLmNvbnRhaW5lci1pY29uIGZhOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uZm9ybS0zIC5jb250YWluZXItaWNvbiBmYSB7XG4gIG1hcmdpbjogM3B4IDIwcHggMCA2cHg7IH1cblxuLyogPT0gVEFCRUxBID09ICovXG50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cblxudGFibGUgLnRhYmxlLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLyogPT09IEJPVE9FUyA9PT0gKi9cbi5mb3JtLWNvbnRhaW5lciAuYnRuLWNyZWF0ZSB7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJyZW0gYXV0bzsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zYXZlLCAuYnRuLWNhbmNlbCB7XG4gIHdpZHRoOiAxNDBweDsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zYXZlLWRldiwgLmJ0bi1jYW5jZWwtZGV2MSwgLmJ0bi1jYW5jZWwtZGV2MiB7XG4gIHdpZHRoOiAxNDVweDsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zYXZlLWRldiB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMHB4OyB9XG5cbi5idG4td3JhcHBlciAuYnRuLWNhbmNlbC1kZXYyIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2F2ZSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgNXB4OyB9XG5cbi5idG4td3JhcHBlciAuYnRuLXNlbmQge1xuICBtYXJnaW46IDE1cHggMTBweCAwIDNweDsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1jYW5jIHtcbiAgd2lkdGg6IDEzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNjBweDsgfVxuXG4vKiA9PT0gSU5GT1JNQcOHw5VFUyA9PT0gKi9cbi5pbmZvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGhlaWdodDogMzAwcHg7IH1cblxuLmluZm8taXRlbS0xIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmluZm8tY29udGFpbmVyIC5pbmZvLWl0ZW0tMiBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbjogNzBweCA5MHB4IDAgMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNUE2MjY4OyB9XG5cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1pdGVtLTMgcCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1MHB4IDAgMCAxMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiIsIi8qID09PSBDT05UQUlORVIgRk9STVVMw4FSSU8gPT09ICovXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1jb250YWluZXIgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgLmJ0bi1jZXAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIHdpZHRoOiAxNTVweDtcbn1cblxuLmJ0bi1jZXAgLmJ0biB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLyogPT09IENIRUNLQk9YIFBST1RFU1RPPT09ICovXG4uZm9ybS1jb250YWluZXIgLmZvcm0tY2hlY2sge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgLmZvcm0tY2hlY2sgaW5wdXQge1xuICBtYXJnaW46IDAgMTVweCAwIDNweDtcbn1cblxuXG4vKiA9PT0gIEZPUk0tMiBEQURPUyBUw41UVUxPID09PSAqL1xuLmZvcm0tMiB7XG4gIG1hcmdpbjogMjVweCAwIDIwcHggMDtcbn1cblxuXG4vKiA9PT0gRk9STS0zIERFVkVET1JFUyA9PT0gKi9cbi5mb3JtLTMgLmNvbnRhaW5lci1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tMyAuY29udGFpbmVyLWljb24gZmE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDk1ZDZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tMyAuY29udGFpbmVyLWljb24gZmEge1xuICBtYXJnaW46IDNweCAyMHB4IDAgNnB4O1xufVxuXG4vKiA9PSBUQUJFTEEgPT0gKi9cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0gXG5cbnRhYmxlIC50YWJsZS1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiA9PT0gQk9UT0VTID09PSAqL1xuLmZvcm0tY29udGFpbmVyIC5idG4tY3JlYXRlIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5cbi5mb3JtLWNvbnRhaW5lciAuYnRuLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1zYXZlLCAuYnRuLWNhbmNlbCB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2F2ZS1kZXYsIC5idG4tY2FuY2VsLWRldjEsIC5idG4tY2FuY2VsLWRldjJ7XG4gIHdpZHRoOiAxNDVweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2F2ZS1kZXYge1xuICBtYXJnaW46IDAgMTBweCAwIDBweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tY2FuY2VsLWRldjIge1xuICB3aWR0aDogMTQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tc2F2ZSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgNXB4O1xufVxuXG4gLmJ0bi13cmFwcGVyIC5idG4tc2VuZCB7XG4gIG1hcmdpbjogMTVweCAxMHB4IDAgM3B4O1xufVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1jYW5jIHtcbiAgd2lkdGg6IDEzOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuLyogPT09IElORk9STUHDh8OVRVMgPT09ICovXG4uaW5mby1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mby1pdGVtLTEge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmluZm8tY29udGFpbmVyIC5pbmZvLWl0ZW0tMiBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbjogNzBweCA5MHB4IDAgMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNUE2MjY4O1xufVxuXG4uaW5mby1jb250YWluZXIgLmluZm8taXRlbS0zIHAge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNTBweCAwIDAgMTI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/protesto/protesto.component.ts":
  /*!************************************************!*\
    !*** ./src/app/protesto/protesto.component.ts ***!
    \************************************************/

  /*! exports provided: ProtestoComponent */

  /***/
  function srcAppProtestoProtestoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtestoComponent", function () {
      return ProtestoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");
    /* harmony import */


    var ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal/ */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _services_arrays_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var _services_cep_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/cep.service */
    "./src/app/services/cep.service.ts");
    /* harmony import */


    var _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/titulo-devedor.service */
    "./src/app/services/titulo-devedor.service.ts");
    /* harmony import */


    var _services_titulo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var _services_valida_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/valida.service */
    "./src/app/services/valida.service.ts");
    /* harmony import */


    var _validators_validacao__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../validators/validacao */
    "./src/app/validators/validacao.ts");
    /* harmony import */


    var _sub_formulario_protesto_sub_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sub-formulario/protesto-sub-formulario.component */
    "./src/app/protesto/sub-formulario/protesto-sub-formulario.component.ts");

    var ProtestoComponent =
    /*#__PURE__*/
    function () {
      function ProtestoComponent(formBuilder, validaService, arraysService, tituloDevedorService, tituloService, cepService, modalService, route) {
        _classCallCheck(this, ProtestoComponent);

        this.formBuilder = formBuilder;
        this.validaService = validaService;
        this.arraysService = arraysService;
        this.tituloDevedorService = tituloDevedorService;
        this.tituloService = tituloService;
        this.cepService = cepService;
        this.modalService = modalService;
        this.route = route;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_4__["utilsBr"].MASKS;
        this.submitted = false;
        this.bancos = new Array();
        this.estados = new Array();
        this.posDevedor = -1;
        this.especies = new Array();
        this.devedores = new Array();
        this.mostrarform = false;
        this.endosso = false;
        this.criandoDevedores = false;
        this.mostraForm = false;
        this.alterando = false;
        this.submittedDevedor = false;
        this.mostraBtn = false;
        this.escondeBtn = true;
        this.devedor = {
          tipoDocumento: "CPF"
        };
        this.titulo = {
          rg: "",
          tipo: "CPF",
          pracaPagamento: "FRANCA",
          tipoProtesto: "COMUM",
          endosso: "SEM ENDOSSO"
        };
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.list = [];
        this.invalido = 'is-invalid';
        this.CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
        this.carregaApresentanteModal();
        this.especies = this.arraysService.carregaEspecie();
        this.arraysService.carregaBanco(this.bancos);
        this.arraysService.carregaEstado(this.estados);
        this.fGroupTitulo = this.formBuilder.group({
          'nomeCredor': [this.titulo.nomeCredor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'email': [this.titulo.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)])],
          'tipo': [this.titulo.tipo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'numeroDocumento': [this.titulo.numeroDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf])],
          'rg': [this.titulo.rg],
          'telefone': [this.titulo.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
          'cep': [this.titulo.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])],
          'endereco': [this.titulo.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numero': [this.titulo.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'bairro': [this.titulo.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cidade': [this.titulo.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'complemento': [this.titulo.complemento],
          'estado': [this.titulo.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
          'siglaEspecie': [this.titulo.siglaEspecie, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
          'tipoProtesto': [this.titulo.tipoProtesto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'pracaPagamento': [this.titulo.pracaPagamento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'dataEmissao': [this.titulo.dataEmissao, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'vencimento': [this.titulo.vencimento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'numeroTitulo': [this.titulo.numeroTitulo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'alinea': [this.titulo.alinea],
          'valorOriginalTitulo': [this.titulo.valorOriginalTitulo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_validacao__WEBPACK_IMPORTED_MODULE_13__["Validacoes"].ValorMinimo(1.00)])],
          'valorProtesto': [this.titulo.valorProtesto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_validacao__WEBPACK_IMPORTED_MODULE_13__["Validacoes"].ValorMinimo(1.00)])],
          'endosso': [this.titulo.endosso, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'banco': [this.titulo.bancoId],
          'agencia': [this.titulo.agencia],
          'conta': [this.titulo.conta],
          'endossante': [this.titulo.endossante],
          'tipoDocumentoEndossante': [this.titulo.tipoDocumentoEndossante],
          'documentoEndossante': [this.titulo.documentoEndossante]
        });
        this.fGroupDevedores = this.formBuilder.group({
          'nomeDevedor': [this.devedor.nomeDevedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numeroDocumento': [this.devedor.numeroDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf])],
          'tipoDocumento': [this.devedor.tipoDocumento, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
          'numeroDocumento2': [this.devedor.numeroDocumento2],
          'telefone': [this.devedor.telefone],
          'cep': [this.devedor.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])],
          'endereco': [this.devedor.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numero': [this.devedor.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'complemento': [this.devedor.complemento],
          'bairro': [this.devedor.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cidade': [this.devedor.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'estado': [this.devedor.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])]
        });
      }

      _createClass(ProtestoComponent, [{
        key: "buscarCEPTitulo",
        value: function buscarCEPTitulo() {
          var _this61 = this;

          this.cepService.getCEPCorreios(this.fGroupTitulo.controls['cep'].value).then(function (res) {
            _this61.fGroupTitulo.controls['endereco'].setValue(res.logradouro);

            _this61.fGroupTitulo.controls['bairro'].setValue(res.bairro);

            _this61.fGroupTitulo.controls['cidade'].setValue(res.localidade);

            _this61.fGroupTitulo.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "buscarCEPDevedor",
        value: function buscarCEPDevedor() {
          var _this62 = this;

          this.cepService.getCEPCorreios(this.fGroupDevedores.controls['cep'].value).then(function (res) {
            _this62.fGroupDevedores.controls['endereco'].setValue(res.logradouro);

            _this62.fGroupDevedores.controls['bairro'].setValue(res.bairro);

            _this62.fGroupDevedores.controls['cidade'].setValue(res.localidade);

            _this62.fGroupDevedores.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "carregaDevedor",
        value: function carregaDevedor(devedor) {
          this.alterando = true;
          this.mostraForm = true;
          this.fGroupDevedores.patchValue(devedor);
          this.devedor = devedor;
          var retorno = this.devedorExiste(-1);
          this.posDevedor = retorno.posicao;
          console.log('posição alterada', this.posDevedor);
        }
      }, {
        key: "apagarDevedor",
        value: function apagarDevedor(documento) {
          this.devedor.numeroDocumento = documento;
          var resultado = this.devedorExiste(-1);
          console.log(resultado);

          if (resultado.encontrou) {
            this.devedores.splice(resultado.posicao, 1);
            this.fGroupDevedores.reset();
            this.devedor = {};
            console.log('encontrou');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "carregaApresentanteModal",
        value: function carregaApresentanteModal() {
          var _this63 = this;

          this.route.params.subscribe(function (data) {
            if (data.id) {
              console.log(data.id);

              if (_this63.route.params) {
                _this63.tituloService.getTituloByID(data.id).then(function (data) {
                  _this63.titulo.nomeCredor = data.nomeCredor;
                  _this63.titulo.email = data.email;
                  _this63.titulo.tipo = data.tipo;
                  _this63.titulo.numeroDocumento = data.numeroDocumento;
                  _this63.titulo.rg = data.rg;
                  _this63.titulo.telefone = data.telefone;
                  _this63.titulo.cep = data.cep;
                  _this63.titulo.endereco = data.endereco;
                  _this63.titulo.numero = data.numero;
                  _this63.titulo.bairro = data.bairro;
                  _this63.titulo.cidade = data.cidade;
                  _this63.titulo.complemento = data.complemento;
                  _this63.titulo.estado = data.estado;

                  _this63.fGroupTitulo.controls['nomeCredor'].setValue(_this63.titulo.nomeCredor);

                  _this63.fGroupTitulo.controls['email'].setValue(_this63.titulo.email);

                  _this63.fGroupTitulo.controls['tipo'].setValue(_this63.titulo.tipo);

                  _this63.fGroupTitulo.controls['numeroDocumento'].setValue(_this63.titulo.numeroDocumento);

                  _this63.fGroupTitulo.controls['rg'].setValue(_this63.titulo.rg);

                  _this63.fGroupTitulo.controls['telefone'].setValue(_this63.titulo.telefone);

                  _this63.fGroupTitulo.controls['cep'].setValue(_this63.titulo.cep);

                  _this63.fGroupTitulo.controls['endereco'].setValue(_this63.titulo.endereco);

                  _this63.fGroupTitulo.controls['numero'].setValue(_this63.titulo.numero);

                  _this63.fGroupTitulo.controls['bairro'].setValue(_this63.titulo.bairro);

                  _this63.fGroupTitulo.controls['cidade'].setValue(_this63.titulo.cidade);

                  _this63.fGroupTitulo.controls['complemento'].setValue(_this63.titulo.complemento);

                  _this63.fGroupTitulo.controls['estado'].setValue(_this63.titulo.estado);
                });
              }
            }
          });
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.fGroupDevedores.reset();
          this.devedor = {};
          this.alterando = false;
          this.mostraForm = false;
          this.criandoDevedores = true;
          this.submittedDevedor = false;
        }
      }, {
        key: "atualizaTipo",
        value: function atualizaTipo() {
          var titulo = this.fGroupTitulo.value;

          if (titulo.tipo == 'CNPJ') {
            this.fGroupTitulo.controls['rg'].disable();
            this.fGroupTitulo.controls['rg'].reset();
          } else {
            this.fGroupTitulo.controls['rg'].enable();
          }
        }
      }, {
        key: "alteraValidator",
        value: function alteraValidator(event) {
          this.fGroupTitulo.controls['numeroDocumento'].setValue('');
          var tipo = event.target.value;

          if (tipo == 'CPF') {
            this.fGroupTitulo.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf]));
          } else {
            this.fGroupTitulo.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cnpj]));
          }
        }
      }, {
        key: "alteraValidator2",
        value: function alteraValidator2(event) {
          this.fGroupDevedores.controls['numeroDocumento'].setValue('');
          var tipo = event.target.value;

          if (tipo == 'CPF') {
            this.fGroupDevedores.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cpf]));
          } else {
            this.fGroupDevedores.controls['numeroDocumento'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazilValidators"].cnpj]));
          }
        }
      }, {
        key: "atualizaTipoDevedor",
        value: function atualizaTipoDevedor() {
          var devedor = this.fGroupDevedores.value;
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
      }, {
        key: "verificaEndosso",
        value: function verificaEndosso() {
          console.log('ok');
          var titulo = this.fGroupTitulo.value;
          this.titulo.endosso = titulo.endosso;
          console.log(titulo.endosso);

          if (this.titulo.endosso != 'SEM ENDOSSO') {
            this.endosso = true;
          } else {
            this.endosso = false;
          }
        }
      }, {
        key: "pagamento",
        value: function pagamento() {
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
      }, {
        key: "verificaCheque",
        value: function verificaCheque() {
          console.log(this.titulo);
          var titulo = this.fGroupTitulo.value;
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
      }, {
        key: "validarTituloBanco",
        value: function validarTituloBanco(bancoConta) {
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
      }, {
        key: "validaTituloEspecie",
        value: function validaTituloEspecie() {
          if (this.validaService.validarTituloEspecie(this.titulo)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "validarDevedor",
        value: function validarDevedor() {
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
      }, {
        key: "validaTitulo",
        value: function validaTitulo() {
          this.submitted = true;
          var endossante;
          var bancoConta;
          var form = this.fGroupTitulo.value;
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
                console.log('Titulo Especie Inválida');
              }
            } else {
              console.log('Titulo banco Inválido');
            }
          } else {
            console.log('Titulo Formulário Inválido');
          }
        }
      }, {
        key: "devedorExiste",
        value: function devedorExiste(pos) {
          var retorno;
          retorno = {};
          retorno.encontrou = false;
          retorno.posicao = null;
          console.log(pos);

          if (pos == -1) {
            for (var i = 0; i < this.devedores.length; i++) {
              if (this.devedor.numeroDocumento == this.devedores[i].numeroDocumento) {
                retorno.posicao = i;
                retorno.encontrou = true;
              }
            }

            return retorno;
          } else {
            for (var _i8 = 0; _i8 < this.devedores.length; _i8++) {
              if (this.devedor.numeroDocumento == this.devedores[_i8].numeroDocumento && _i8 != pos) {
                retorno.posicao = _i8;
                retorno.encontrou = true;
              }
            }

            return retorno;
          }
        }
      }, {
        key: "validaQtdMaxDevedores",
        value: function validaQtdMaxDevedores() {
          if (this.devedores.length <= 9) {
            return true;
          } else {
            console.log('Quantidade Máxima de devedores igual 10');
            return false;
          }
        }
      }, {
        key: "validaAddDevedor",
        value: function validaAddDevedor() {
          this.copiaPDevedor();
          var resultado = this.devedorExiste(-1);
          this.copiaPDevedor();
          var teste = true;

          if (!this.validaQtdMaxDevedores()) {
            teste = false;
          }

          if (resultado.encontrou) {
            teste = false;
            this.devedorRepetidoError();
          }

          if (!this.validarDevedor()) {
            teste = false;
          }

          if (teste) {
            this.inserirDevedor();
          }
        }
      }, {
        key: "validaAlterarDevedor",
        value: function validaAlterarDevedor() {
          //this.submittedDevedor = true;
          var resultado = this.devedorExiste(-1);

          if (this.validaQtdMaxDevedores() && resultado.encontrou && this.validarDevedor()) {
            this.inserirDevedor(resultado.posicao);
          }
        }
      }, {
        key: "mostrarForm",
        value: function mostrarForm() {
          this.mostraForm = true;
          this.criandoDevedores = true;
        }
      }, {
        key: "salvaDevedor",
        value: function salvaDevedor() {
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
      }, {
        key: "inserirDevedor",
        value: function inserirDevedor(pos) {
          this.submittedDevedor = true;

          if (pos != undefined && pos != null) {
            console.log(pos);
            var resultado = this.devedorExiste(pos);
            console.log(resultado.encontrou);

            if (!resultado.encontrou) {
              this.devedores[this.posDevedor] = this.devedor;
              this.devedor = {};
              this.alterando = false;
              this.fGroupDevedores.reset();
              this.mostraForm = false;
              this.submittedDevedor = false;
            } else {
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
      }, {
        key: "copiaPDevedor",
        value: function copiaPDevedor() {
          this.devedor = this.fGroupDevedores.value;
        }
      }, {
        key: "copiaPTitulo",
        value: function copiaPTitulo() {
          this.titulo = this.fGroupTitulo.value;
        }
      }, {
        key: "abrirModal",
        value: function abrirModal() {
          this.copiaPTitulo();
          console.log(this.titulo);
          console.log(this.devedores);
          var initialState = {
            titulo: this.titulo,
            devedores: this.devedores,
            title: 'Modal with component'
          };
          this.modalService.show(_sub_formulario_protesto_sub_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ProtestoSubFormularioComponent"], {
            initialState: initialState
          });
        }
      }, {
        key: "adressError",
        value: function adressError() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            icon: 'error',
            title: 'Você não adicionou nenhum devedor!'
          });
        }
      }, {
        key: "devedorRepetidoError",
        value: function devedorRepetidoError() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            icon: 'error',
            title: 'Já existe um devedor com este documento!'
          });
        }
      }, {
        key: "devedorQuantidadeMaximaError",
        value: function devedorQuantidadeMaximaError() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            icon: 'error',
            title: 'A quantidade máxima de devedores por título é 10'
          });
        }
      }, {
        key: "excluirDev",
        value: function excluirDev(devedor) {
          var _this64 = this;

          console.log(devedor);
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Deseja realmente excluir este devedor?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this64.apagarDevedor(devedor.numeroDocumento);

              _this64.escondeBtn = true;
            }
          });
        }
      }, {
        key: "fTitulo",
        get: function get() {
          return this.fGroupTitulo.controls;
        }
      }, {
        key: "fDevedor",
        get: function get() {
          return this.fGroupDevedores.controls;
        }
      }]);

      return ProtestoComponent;
    }();

    ProtestoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_valida_service__WEBPACK_IMPORTED_MODULE_12__["ValidaService"]
      }, {
        type: _services_arrays_service__WEBPACK_IMPORTED_MODULE_8__["ArraysService"]
      }, {
        type: _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__["TituloDevedorService"]
      }, {
        type: _services_titulo_service__WEBPACK_IMPORTED_MODULE_11__["TituloService"]
      }, {
        type: _services_cep_service__WEBPACK_IMPORTED_MODULE_9__["CepService"]
      }, {
        type: ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProtestoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-protesto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./protesto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/protesto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./protesto.component.scss */
      "./src/app/protesto/protesto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_valida_service__WEBPACK_IMPORTED_MODULE_12__["ValidaService"], _services_arrays_service__WEBPACK_IMPORTED_MODULE_8__["ArraysService"], _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__["TituloDevedorService"], _services_titulo_service__WEBPACK_IMPORTED_MODULE_11__["TituloService"], _services_cep_service__WEBPACK_IMPORTED_MODULE_9__["CepService"], ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProtestoComponent);
    /***/
  },

  /***/
  "./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProtestoSubFormularioImpressaoFormularioProtestoImpressaoFormularioProtestoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === REQUERIMENTO === */\n.requeriment {\n  width: 1024px !important;\n  margin: auto !important; }\n.requeriment .requeriment-body {\n  border: 1px solid !important;\n  padding: 20px 0 !important; }\n.requeriment-header p {\n  padding: 20px !important; }\n.requeriment-header h2,\nh3,\nh4,\np {\n  text-align: center !important; }\n.container div {\n  border: 1px solid !important; }\n.container .row {\n  height: 40px !important;\n  border: none !important; }\n.row div {\n  height: 100% !important; }\n.row label {\n  float: left !important;\n  padding-left: 5px !important;\n  font-weight: bold !important; }\n.row p {\n  float: left !important;\n  clear: left !important;\n  margin-top: -7px !important;\n  padding-left: 5px !important; }\n.row p a {\n  font-weight: bold !important;\n  color: red !important;\n  text-decoration: none !important; }\n.row .footer label::first-word {\n  color: red !important; }\n/* === BOTÕES === */\n.btn-wrapper {\n  width: 1024px;\n  margin: 10px auto; }\n.btn-wrapper .btn-print {\n  margin-left: 20%; }\n.btn-wrapper .btn-print,\n.btn-new {\n  width: 150px;\n  margin-right: 10px;\n  margin-top: 10px; }\n.btn-wrapper .btn-new-return {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVzdG8vc3ViLWZvcm11bGFyaW8vaW1wcmVzc2FvLWZvcm11bGFyaW8tcHJvdGVzdG8vaW1wcmVzc2FvLWZvcm11bGFyaW8tcHJvdGVzdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3Rlc3RvL3N1Yi1mb3JtdWxhcmlvL2ltcHJlc3Nhby1mb3JtdWxhcmlvLXByb3Rlc3RvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwcm90ZXN0b1xcc3ViLWZvcm11bGFyaW9cXGltcHJlc3Nhby1mb3JtdWxhcmlvLXByb3Rlc3RvXFxpbXByZXNzYW8tZm9ybXVsYXJpby1wcm90ZXN0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIseUJBQUE7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQTtBQUc1QjtFQUVFLHdCQUF3QixFQUFBO0FBRzFCOzs7O0VBSUUsNkJBQTZCLEVBQUE7QUFHL0I7RUFDRSw0QkFBNEIsRUFBQTtBQUc5QjtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTtBQUc5QjtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHFCQUFxQixFQUFBO0FBR3ZCLG1CQUFBO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm90ZXN0by9zdWItZm9ybXVsYXJpby9pbXByZXNzYW8tZm9ybXVsYXJpby1wcm90ZXN0by9pbXByZXNzYW8tZm9ybXVsYXJpby1wcm90ZXN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBSRVFVRVJJTUVOVE8gPT09ICovXG4ucmVxdWVyaW1lbnQge1xuICB3aWR0aDogMTAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50OyB9XG5cbi5yZXF1ZXJpbWVudCAucmVxdWVyaW1lbnQtYm9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMCAhaW1wb3J0YW50OyB9XG5cbi5yZXF1ZXJpbWVudC1oZWFkZXIgcCB7XG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDsgfVxuXG4ucmVxdWVyaW1lbnQtaGVhZGVyIGgyLFxuaDMsXG5oNCxcbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuXG4uY29udGFpbmVyIGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7IH1cblxuLmNvbnRhaW5lciAucm93IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5yb3cgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuLnJvdyBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IH1cblxuLnJvdyBwIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgY2xlYXI6IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50OyB9XG5cbi5yb3cgcCBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxuXG4ucm93IC5mb290ZXIgbGFiZWw6OmZpcnN0LXdvcmQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7IH1cblxuLyogPT09IEJPVMOVRVMgPT09ICovXG4uYnRuLXdyYXBwZXIge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDEwcHggYXV0bzsgfVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1wcmludCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tcHJpbnQsXG4uYnRuLW5ldyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi5idG4td3JhcHBlciAuYnRuLW5ldy1yZXR1cm4ge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4iLCIvKiA9PT0gUkVRVUVSSU1FTlRPID09PSAqL1xuLnJlcXVlcmltZW50IHtcbiAgd2lkdGg6IDEwMjRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlcXVlcmltZW50IC5yZXF1ZXJpbWVudC1ib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1ZXJpbWVudC1oZWFkZXIgcCB7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWVyaW1lbnQtaGVhZGVyIGgyLFxuaDMsXG5oNCxcbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIC5yb3cge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cgbGFiZWwge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4ucm93IHAge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICBjbGVhcjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cgcCBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJvdyAuZm9vdGVyIGxhYmVsOjpmaXJzdC13b3JkIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT0gQk9Uw5VFUyA9PT0gKi9cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uYnRuLXdyYXBwZXIgLmJ0bi1wcmludCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5idG4td3JhcHBlciAuYnRuLXByaW50LFxuLmJ0bi1uZXcge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tbmV3LXJldHVybiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: ImpressaoFormularioProtestoComponent */

  /***/
  function srcAppProtestoSubFormularioImpressaoFormularioProtestoImpressaoFormularioProtestoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpressaoFormularioProtestoComponent", function () {
      return ImpressaoFormularioProtestoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/informacoes-importantes/informacoes-importantes.component */
    "./src/app/informacoes-importantes/informacoes-importantes.component.ts");

    var ImpressaoFormularioProtestoComponent =
    /*#__PURE__*/
    function () {
      function ImpressaoFormularioProtestoComponent(modalService, funcoesService, tituloService, route) {
        _classCallCheck(this, ImpressaoFormularioProtestoComponent);

        this.modalService = modalService;
        this.funcoesService = funcoesService;
        this.tituloService = tituloService;
        this.route = route;
        this.devedores = new Array();
        this.entregador = {};
        this.representante = {};
        this.barcode = '0000022301';
        this.enderecoPrint = {};
        this.getTitulo();
      }

      _createClass(ImpressaoFormularioProtestoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTitulo",
        value: function getTitulo() {
          var _this65 = this;

          this.subscribe = this.route.data.subscribe(function (data) {
            var _this65$devedores;

            console.log(data.titulo);
            _this65.titulo = data.titulo;

            (_this65$devedores = _this65.devedores).push.apply(_this65$devedores, _toConsumableArray(data.titulo.devedores));

            if (data.titulo.representante) _this65.representante = data.titulo.representante;
            if (data.titulo.entregador) _this65.entregador = data.titulo.entregador;
            console.log(_this65.entregador);
          });
        }
      }, {
        key: "abrirImpressao",
        value: function abrirImpressao() {
          var _this66 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'ATENÇÃO!',
            text: 'Imprima o Formulário em 2 vias.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#5A6268',
            confirmButtonText: 'Sim, Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this66.ImprimirConteudo();
            }
          });
        }
      }, {
        key: "ImprimirConteudo",
        value: function ImprimirConteudo() {
          this.funcoesService.ImprimirConteudoDiv(this.divRequeriment);
        }
      }, {
        key: "openModal",
        value: function openModal(setApresentante) {
          var idTitulo;

          if (setApresentante) {
            idTitulo = this.titulo.dados.idTitulo;
          }

          var initialState = {
            idTitulo: idTitulo
          };
          this.bsModalRef = this.modalService.show(src_app_informacoes_importantes_informacoes_importantes_component__WEBPACK_IMPORTED_MODULE_7__["InformacoesImportantesComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.closeBtnName = 'Close';
        }
      }]);

      return ImpressaoFormularioProtestoComponent;
    }();

    ImpressaoFormularioProtestoComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_3__["FuncoesService"]
      }, {
        type: src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_4__["TituloService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divRequeriment', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ImpressaoFormularioProtestoComponent.prototype, "divRequeriment", void 0);
    ImpressaoFormularioProtestoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-impressao-formulario-protesto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./impressao-formulario-protesto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./impressao-formulario-protesto.component.scss */
      "./src/app/protesto/sub-formulario/impressao-formulario-protesto/impressao-formulario-protesto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], src_app_services_funcoes_service__WEBPACK_IMPORTED_MODULE_3__["FuncoesService"], src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_4__["TituloService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ImpressaoFormularioProtestoComponent);
    /***/
  },

  /***/
  "./src/app/protesto/sub-formulario/protesto-sub-formulario.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/protesto/sub-formulario/protesto-sub-formulario.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProtestoSubFormularioProtestoSubFormularioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === MODAL FORMULÁRIO DE PROTESTO === */\n.modal-header {\n  background-color: #e4e9ef; }\n.modal-header .modal-title {\n  margin-left: 390px; }\n#identificacao legend {\n  font-size: 14px;\n  margin: 10px 0 5px 0;\n  font-weight: bold;\n  color: red;\n  text-align: center; }\n.form-row label span {\n  font-weight: bold; }\n.form-row .col-custom {\n  width: 223px; }\n/* === BOTÕES ===*/\n.modal-body .btn-cep {\n  height: 32px;\n  margin: 28px 5px 0 5px;\n  width: 156px; }\n.btn-cep .btn-cep-search {\n  width: 156px; }\n.modal-body .wrapper-btn-copy {\n  margin-top: 28px; }\n/* === MODAL RODAPÉ ===*/\n.modal-footer .btn {\n  margin: 0 auto;\n  width: 157px; }\n.modal-footer {\n  background-color: #e4e9ef; }\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 6rem; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVzdG8vc3ViLWZvcm11bGFyaW8vcHJvdGVzdG8tc3ViLWZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3Rlc3RvL3N1Yi1mb3JtdWxhcmlvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxwcm90ZXN0b1xcc3ViLWZvcm11bGFyaW9cXHByb3Rlc3RvLXN1Yi1mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQix5Q0FBQTtBQUNBO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsWUFBWSxFQUFBO0FBR2Qsa0JBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGdCQUFnQixFQUFBO0FBR2xCLHdCQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2Q7RUFDRSx5QkFBeUIsRUFBQTtBQUkzQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7QUFHckI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm90ZXN0by9zdWItZm9ybXVsYXJpby9wcm90ZXN0by1zdWItZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBNT0RBTCBGT1JNVUzDgVJJTyBERSBQUk9URVNUTyA9PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmOyB9XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDM5MHB4OyB9XG5cbiNpZGVudGlmaWNhY2FvIGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmZvcm0tcm93IGxhYmVsIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uZm9ybS1yb3cgLmNvbC1jdXN0b20ge1xuICB3aWR0aDogMjIzcHg7IH1cblxuLyogPT09IEJPVMOVRVMgPT09Ki9cbi5tb2RhbC1ib2R5IC5idG4tY2VwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI4cHggNXB4IDAgNXB4O1xuICB3aWR0aDogMTU2cHg7IH1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1NnB4OyB9XG5cbi5tb2RhbC1ib2R5IC53cmFwcGVyLWJ0bi1jb3B5IHtcbiAgbWFyZ2luLXRvcDogMjhweDsgfVxuXG4vKiA9PT0gTU9EQUwgUk9EQVDDiSA9PT0qL1xuLm1vZGFsLWZvb3RlciAuYnRuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNTdweDsgfVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjsgfVxuXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtOyB9XG5cbi50YWJsZSAudGl0bGUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1OyB9XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIi8qID09PSBNT0RBTCBGT1JNVUzDgVJJTyBERSBQUk9URVNUTyA9PT0gKi9cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVmO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzOTBweDtcbn1cblxuI2lkZW50aWZpY2FjYW8gbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tcm93IGxhYmVsIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tcm93IC5jb2wtY3VzdG9tIHtcbiAgd2lkdGg6IDIyM3B4O1xufVxuXG4vKiA9PT0gQk9Uw5VFUyA9PT0qL1xuLm1vZGFsLWJvZHkgLmJ0bi1jZXAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMjhweCA1cHggMCA1cHg7XG4gIHdpZHRoOiAxNTZweDtcbn1cblxuLmJ0bi1jZXAgLmJ0bi1jZXAtc2VhcmNoIHtcbiAgd2lkdGg6IDE1NnB4O1xufVxuXG4ubW9kYWwtYm9keSAud3JhcHBlci1idG4tY29weSB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi8qID09PSBNT0RBTCBST0RBUMOJID09PSovXG4ubW9kYWwtZm9vdGVyIC5idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1N3B4O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTllZjtcbn1cblxuLy8gVGFiZWxhIERldmVkb3Jlc1xuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG59XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/protesto/sub-formulario/protesto-sub-formulario.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/protesto/sub-formulario/protesto-sub-formulario.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProtestoSubFormularioComponent */

  /***/
  function srcAppProtestoSubFormularioProtestoSubFormularioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProtestoSubFormularioComponent", function () {
      return ProtestoSubFormularioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cep.service */
    "./src/app/services/cep.service.ts");
    /* harmony import */


    var src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/arrays.service */
    "./src/app/services/arrays.service.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_services_valida_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/valida.service */
    "./src/app/services/valida.service.ts");
    /* harmony import */


    var src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var src_app_services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/titulo-devedor.service */
    "./src/app/services/titulo-devedor.service.ts");
    /* harmony import */


    var src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/representante.service */
    "./src/app/services/representante.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! js-brasil */
    "./node_modules/js-brasil/dist/index.js");
    /* harmony import */


    var js_brasil__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var ng_brazil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-brazil */
    "./node_modules/ng-brazil/fesm2015/ng-brazil.js");

    var ProtestoSubFormularioComponent =
    /*#__PURE__*/
    function () {
      function ProtestoSubFormularioComponent(bsModalRef, cepService, formBuilder, arraysService, toastr, validaService, tituloService, tituloDevedorService, representanteService, router) {
        _classCallCheck(this, ProtestoSubFormularioComponent);

        this.bsModalRef = bsModalRef;
        this.cepService = cepService;
        this.formBuilder = formBuilder;
        this.arraysService = arraysService;
        this.toastr = toastr;
        this.validaService = validaService;
        this.tituloService = tituloService;
        this.tituloDevedorService = tituloDevedorService;
        this.representanteService = representanteService;
        this.router = router;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_13__["utilsBr"].MASKS;
        this.submitted = false;
        this.devedores = new Array();
        this.invalido = 'is-invalid';
        this.CEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
        this.representante = {};
        this.entregador = {};
        this.estados = new Array();
        this.fGroupRepresentante = this.formBuilder.group({
          'nomeRepresentante': [this.representante.nomeRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'cpfRepresentante': [this.representante.cpfRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_14__["NgBrazilValidators"].cpf])],
          'tipo': [this.representante.tipo],
          'rg': [this.representante.rg],
          'telefone': [this.representante.telefone],
          'cep': [this.representante.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])],
          'endereco': [this.representante.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numero': [this.representante.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'complemento': [this.representante.complemento],
          'bairro': [this.representante.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'cidade': [this.representante.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'estado': [this.representante.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])]
        });
        this.fGroupEntregador = this.formBuilder.group({
          'nomeRepresentante': [this.entregador.nomeRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'cpfRepresentante': [this.entregador.cpfRepresentante, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), ng_brazil__WEBPACK_IMPORTED_MODULE_14__["NgBrazilValidators"].cpf])],
          'tipo': [this.entregador.tipo],
          'rg': [this.entregador.rg],
          'telefone': [this.entregador.telefone],
          'cep': [this.entregador.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          'endereco': [this.entregador.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'numero': [this.entregador.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
          'complemento': [this.entregador.complemento],
          'bairro': [this.entregador.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
          'cidade': [this.entregador.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          'estado': [this.entregador.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])]
        });
        console.log(this.titulo);
        console.log(this.devedores);
        this.carregaEstados(this.estados);
      }

      _createClass(ProtestoSubFormularioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarCEPRepresentante",
        value: function buscarCEPRepresentante() {
          var _this67 = this;

          this.cepService.getCEPCorreios(this.fGroupRepresentante.controls['cep'].value).then(function (res) {
            _this67.fGroupRepresentante.controls['endereco'].setValue(res.logradouro);

            _this67.fGroupRepresentante.controls['bairro'].setValue(res.bairro);

            _this67.fGroupRepresentante.controls['cidade'].setValue(res.localidade);

            _this67.fGroupRepresentante.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "buscarCEPEntregador",
        value: function buscarCEPEntregador() {
          var _this68 = this;

          this.cepService.getCEPCorreios(this.fGroupEntregador.controls['cep'].value).then(function (res) {
            _this68.fGroupEntregador.controls['endereco'].setValue(res.logradouro);

            _this68.fGroupEntregador.controls['bairro'].setValue(res.bairro);

            _this68.fGroupEntregador.controls['cidade'].setValue(res.localidade);

            _this68.fGroupEntregador.controls['estado'].setValue(res.uf);
          });
        }
      }, {
        key: "validarRepresentante",
        value: function validarRepresentante() {
          this.representante = this.fGroupRepresentante.value;

          if (this.validaService.str(this.representante.rg) || !this.representante.rg) {
            if (this.validaService.strN(this.representante.telefone)) {
              if (this.fGroupRepresentante.valid) {
                console.log('ok');
                return true;
              } else {
                console.log('formulario');
              }
            } else {
              console.log('telefone');
            }
          } else {
            console.log('rg');
          }

          return false;
        }
      }, {
        key: "validarEntregador",
        value: function validarEntregador() {
          this.entregador = this.fGroupRepresentante.value;

          if (this.validaService.str(this.entregador.rg) || !this.entregador.rg) {
            if (this.validaService.strN(this.entregador.telefone)) {
              if (this.fGroupRepresentante.valid) {
                console.log('ok');
                return true;
              } else {
                console.log('formulario');
              }
            } else {
              console.log('telefone');
            }
          } else {
            console.log('rg');
          }

          return false;
        }
      }, {
        key: "carregaEstados",
        value: function carregaEstados(estados) {
          this.arraysService.carregaEstado(estados);
        }
      }, {
        key: "copiaRepresentanteTitulo",
        value: function copiaRepresentanteTitulo(rep) {
          rep.nomeRepresentante = this.titulo.nomeCredor;
          rep.cpfRepresentante = this.titulo.numeroDocumento;
          rep.rg = this.titulo.rg;
          rep.telefone = this.titulo.telefone;
          rep.complemento = this.titulo.complemento;
          rep.cep = this.titulo.cep;
          rep.endereco = this.titulo.endereco;
          rep.bairro = this.titulo.bairro;
          rep.cidade = this.titulo.cidade;
          rep.estado = this.titulo.estado;
          rep.numero = this.titulo.numero;
        }
      }, {
        key: "copiarRepresentante",
        value: function copiarRepresentante() {
          console.log(this.titulo);
          console.log(this.devedores);

          if (this.titulo.tipo == 'CPF') {
            //CPF
            this.copiaRepresentanteTitulo(this.representante);
            this.fGroupRepresentante.patchValue(this.representante);
          } else {
            console.log('Não foi possível copiar pois o titulo é uma pessoa Jurídica');
          }
        }
      }, {
        key: "copiarEntregador",
        value: function copiarEntregador() {
          if (this.titulo.tipo == 'CPF') {
            //CPF
            this.copiaRepresentanteTitulo(this.entregador);
            this.fGroupEntregador.patchValue(this.entregador);
          } else {
            console.log('Não foi possível copiar pois o titulo é uma pessoa Jurídica');
          }

          console.log(this.titulo);
          console.log(this.devedores);
        }
      }, {
        key: "open",
        value: function open() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Hello world!');
        }
      }, {
        key: "open2",
        value: function open2() {
          //this.toastr.success('Hello world!', 'Toastr fun!', {disableTimeOut: true});
          this.toastr.success('Hello world!', 'Toastr fun!');
        }
      }, {
        key: "criarDados",
        value: function criarDados() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee43() {
            var _this69 = this;

            return regeneratorRuntime.wrap(function _callee43$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    this.submitted = true; // this.fGroupEntregador.patchValue(this.entregador);

                    this.entregador = this.fGroupEntregador.value;
                    console.log(this.entregador);
                    this.fGroupRepresentante.patchValue(this.representante);
                    console.log(this.fGroupRepresentante.valid);
                    this.submitted = true;
                    console.log(this.submitted);

                    if (!this.fGroupEntregador.valid) {
                      _context44.next = 11;
                      break;
                    }

                    if (!(this.fGroupRepresentante.valid && this.titulo.tipo == 'CNPJ' || this.titulo.tipo == 'CPF')) {
                      _context44.next = 11;
                      break;
                    }

                    _context44.next = 11;
                    return this.tituloService.criaTitulo(this.titulo).then(function (docRef) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this69, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee42() {
                        var _this70 = this;

                        var i;
                        return regeneratorRuntime.wrap(function _callee42$(_context43) {
                          while (1) {
                            switch (_context43.prev = _context43.next) {
                              case 0:
                                console.log(this.titulo);
                                console.log(docRef.id);
                                src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_9__["TituloService"].staticTitulo = this.titulo;
                                i = 0;

                              case 4:
                                if (!(i < this.devedores.length)) {
                                  _context43.next = 11;
                                  break;
                                }

                                this.devedores[i].idTitulo = docRef.id;
                                _context43.next = 8;
                                return this.tituloDevedorService.criarTituloDevedor(this.devedores[i]).then(function () {
                                  var _src_app_services_tit;

                                  console.log('titulo devedor criado com sucesso!');

                                  (_src_app_services_tit = src_app_services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__["TituloDevedorService"].staticDevedor).push.apply(_src_app_services_tit, _toConsumableArray(_this70.devedores));
                                });

                              case 8:
                                i++;
                                _context43.next = 4;
                                break;

                              case 11:
                                this.entregador.idTitulo = docRef.id;
                                this.entregador.tipo = 'ENTREGADOR';
                                _context43.next = 15;
                                return this.representanteService.criaRepresentante(this.entregador).then(function () {
                                  console.log('Entregador criado');
                                  console.log(_this70.entregador);
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 15:
                                if (!(this.titulo.tipo == 'CNPJ')) {
                                  _context43.next = 21;
                                  break;
                                }

                                this.representante = this.fGroupRepresentante.value;
                                this.representante.idTitulo = docRef.id;
                                this.representante.tipo = 'REPRESENTANTE';
                                _context43.next = 21;
                                return this.representanteService.criaRepresentante(this.representante).then(function () {
                                  console.log('representante criado');
                                  console.log(_this70.representante);
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 21:
                                console.log('fecha');
                                this.bsModalRef.hide();
                                this.router.navigate(['/impressao-formulario-protesto/' + docRef.id]);

                              case 24:
                              case "end":
                                return _context43.stop();
                            }
                          }
                        }, _callee42, this);
                      }));
                    });

                  case 11:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "fRepresentante",
        get: function get() {
          return this.fGroupRepresentante.controls;
        }
      }, {
        key: "fEntregador",
        get: function get() {
          return this.fGroupEntregador.controls;
        }
      }]);

      return ProtestoSubFormularioComponent;
    }();

    ProtestoSubFormularioComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]
      }, {
        type: src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_3__["CepService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_4__["ArraysService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: src_app_services_valida_service__WEBPACK_IMPORTED_MODULE_8__["ValidaService"]
      }, {
        type: src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_9__["TituloService"]
      }, {
        type: src_app_services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__["TituloDevedorService"]
      }, {
        type: src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_11__["RepresentanteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }];
    };

    ProtestoSubFormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-formulario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./protesto-sub-formulario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/protesto/sub-formulario/protesto-sub-formulario.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./protesto-sub-formulario.component.scss */
      "./src/app/protesto/sub-formulario/protesto-sub-formulario.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"], src_app_services_cep_service__WEBPACK_IMPORTED_MODULE_3__["CepService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_arrays_service__WEBPACK_IMPORTED_MODULE_4__["ArraysService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], src_app_services_valida_service__WEBPACK_IMPORTED_MODULE_8__["ValidaService"], src_app_services_titulo_service__WEBPACK_IMPORTED_MODULE_9__["TituloService"], src_app_services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_10__["TituloDevedorService"], src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_11__["RepresentanteService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])], ProtestoSubFormularioComponent);
    /***/
  },

  /***/
  "./src/app/requerimento-protesto/requerimento-protesto.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/requerimento-protesto/requerimento-protesto.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequerimentoProtestoRequerimentoProtestoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === REQUERIMENTO === */\n.requeriment {\n  width: 1024px;\n  margin: auto; }\n.requeriment .requeriment-body {\n  border: 1px solid;\n  padding-top: 20px; }\n.requeriment-header p {\n  text-align: center;\n  padding: 20px; }\n.requeriment span {\n  font-weight: bold; }\n.requeriment-header h2,\nh3,\nh4,\np {\n  text-align: center; }\n/*------ TABELA --------*/\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 2rem;\n  text-align: center; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .separator {\n  height: 20px;\n  background-color: #E4E9EF; }\n/* === FOOTER REQUERIMENT === */\n.requeriment-footer .left-info-table {\n  margin: 20px 0 50px 0; }\n.left-info-table p {\n  display: block;\n  text-align: left;\n  margin: 0 0 10px 20px; }\n.requeriment-footer .top-b {\n  border-top: 1px solid; }\n.requeriment-footer .top-b,\n.border-top-none {\n  width: 500px;\n  margin: auto;\n  margin-bottom: 40px; }\n.requeriment-footer .w-none {\n  float: left !important;\n  width: 225px !important;\n  margin-left: 85px !important;\n  border-top: 1px solid !important;\n  margin-bottom: 40px !important; }\n.requeriment-footer p:nth-child(8) {\n  clear: both;\n  margin-top: 40px; }\n/* === BOTÕES === */\n.btn-wrapper {\n  width: 360px;\n  margin: 10px auto; }\n.btn-wrapper .btn-print, .btn-close {\n  width: 170px;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVyaW1lbnRvLXByb3Rlc3RvL3JlcXVlcmltZW50by1wcm90ZXN0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVxdWVyaW1lbnRvLXByb3Rlc3RvL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxyZXF1ZXJpbWVudG8tcHJvdGVzdG9cXHJlcXVlcmltZW50by1wcm90ZXN0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIseUJBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7QUFHZjtFQUNFLGlCQUFpQixFQUFBO0FBR25COzs7O0VBSUUsa0JBQWtCLEVBQUE7QUFHcEIseUJBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDSSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7QUFHN0IsK0JBQUE7QUFDQTtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsOEJBQThCLEVBQUE7QUFHaEM7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFJbEIsbUJBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXJpbWVudG8tcHJvdGVzdG8vcmVxdWVyaW1lbnRvLXByb3Rlc3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogPT09IFJFUVVFUklNRU5UTyA9PT0gKi9cbi5yZXF1ZXJpbWVudCB7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4ucmVxdWVyaW1lbnQgLnJlcXVlcmltZW50LWJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnJlcXVlcmltZW50LWhlYWRlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5yZXF1ZXJpbWVudCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnJlcXVlcmltZW50LWhlYWRlciBoMixcbmgzLFxuaDQsXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qLS0tLS0tIFRBQkVMQSAtLS0tLS0tLSovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7IH1cblxuLnRhYmxlIC5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU5RUY7IH1cblxuLyogPT09IEZPT1RFUiBSRVFVRVJJTUVOVCA9PT0gKi9cbi5yZXF1ZXJpbWVudC1mb290ZXIgLmxlZnQtaW5mby10YWJsZSB7XG4gIG1hcmdpbjogMjBweCAwIDUwcHggMDsgfVxuXG4ubGVmdC1pbmZvLXRhYmxlIHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIDAgMTBweCAyMHB4OyB9XG5cbi5yZXF1ZXJpbWVudC1mb290ZXIgLnRvcC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkOyB9XG5cbi5yZXF1ZXJpbWVudC1mb290ZXIgLnRvcC1iLFxuLmJvcmRlci10b3Atbm9uZSB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5yZXF1ZXJpbWVudC1mb290ZXIgLnctbm9uZSB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogODVweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50OyB9XG5cbi5yZXF1ZXJpbWVudC1mb290ZXIgcDpudGgtY2hpbGQoOCkge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luLXRvcDogNDBweDsgfVxuXG4vKiA9PT0gQk9Uw5VFUyA9PT0gKi9cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiAzNjBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tcHJpbnQsIC5idG4tY2xvc2Uge1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuIiwiLyogPT09IFJFUVVFUklNRU5UTyA9PT0gKi9cbi5yZXF1ZXJpbWVudCB7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJlcXVlcmltZW50IC5yZXF1ZXJpbWVudC1ib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmVxdWVyaW1lbnQtaGVhZGVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5yZXF1ZXJpbWVudCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXF1ZXJpbWVudC1oZWFkZXIgaDIsXG5oMyxcbmg0LFxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyotLS0tLS0gVEFCRUxBIC0tLS0tLS0tKi9cbi50YWJsZSB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlIC50aXRsZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzU7XG59XG5cbi50YWJsZSAuc2VwYXJhdG9yIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTlFRjtcbn1cblxuLyogPT09IEZPT1RFUiBSRVFVRVJJTUVOVCA9PT0gKi9cbi5yZXF1ZXJpbWVudC1mb290ZXIgLmxlZnQtaW5mby10YWJsZSB7XG4gIG1hcmdpbjogMjBweCAwIDUwcHggMDtcbn1cblxuLmxlZnQtaW5mby10YWJsZSBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCAwIDEwcHggMjBweDtcbn1cblxuLnJlcXVlcmltZW50LWZvb3RlciAudG9wLWIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQ7XG59XG5cbi5yZXF1ZXJpbWVudC1mb290ZXIgLnRvcC1iLFxuLmJvcmRlci10b3Atbm9uZSB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucmVxdWVyaW1lbnQtZm9vdGVyIC53LW5vbmUge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDg1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnJlcXVlcmltZW50LWZvb3RlciBwOm50aC1jaGlsZCg4KSB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbi8qID09PSBCT1TDlUVTID09PSAqL1xuLmJ0bi13cmFwcGVyIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmJ0bi13cmFwcGVyIC5idG4tcHJpbnQsIC5idG4tY2xvc2UgIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/requerimento-protesto/requerimento-protesto.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/requerimento-protesto/requerimento-protesto.component.ts ***!
    \**************************************************************************/

  /*! exports provided: RequerimentoProtestoComponent */

  /***/
  function srcAppRequerimentoProtestoRequerimentoProtestoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequerimentoProtestoComponent", function () {
      return RequerimentoProtestoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_lote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/lote.service */
    "./src/app/services/lote.service.ts");
    /* harmony import */


    var _services_titulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/titulo.service */
    "./src/app/services/titulo.service.ts");
    /* harmony import */


    var _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/titulo-devedor.service */
    "./src/app/services/titulo-devedor.service.ts"); //teste


    var RequerimentoProtestoComponent =
    /*#__PURE__*/
    function () {
      function RequerimentoProtestoComponent(funcoesService, fireAuth, empresaService, route, loginService, loteService, tituloService, tituloDevedoreService) {
        _classCallCheck(this, RequerimentoProtestoComponent);

        this.funcoesService = funcoesService;
        this.fireAuth = fireAuth;
        this.empresaService = empresaService;
        this.route = route;
        this.loginService = loginService;
        this.loteService = loteService;
        this.tituloService = tituloService;
        this.tituloDevedoreService = tituloDevedoreService;
        this.empresa = {};
        this.documento = {}; //teste

        this.titulos = new Array();
        this.devedores = new Array();
        this.entregador = {};
        this.representante = {}; //teste

        this.idUsuario = this.fireAuth.auth.currentUser.uid;
        this.lote = {};
        this.data = this.funcoesService.DataAtualExtenso();
        this.loginService.menu(false);
        this.idLote = this.route.snapshot.params['idLote'];
        this.buscaLote(); //teste
      }

      _createClass(RequerimentoProtestoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this71 = this;

          this.empresaService.buscaEmpresa(this.idUsuario).then(function (empresa) {
            _this71.empresa = empresa;
          });
          this.empresaService.buscaEmpresa(this.idUsuario).then(function (documento) {
            _this71.documento = documento;
          });
        }
      }, {
        key: "buscaLote",
        value: function buscaLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee46() {
            var _this72 = this;

            return regeneratorRuntime.wrap(function _callee46$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    _context47.next = 2;
                    return this.loteService.buscaLoteId(this.idLote).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this72, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee45() {
                        var _this73 = this;

                        return regeneratorRuntime.wrap(function _callee45$(_context46) {
                          while (1) {
                            switch (_context46.prev = _context46.next) {
                              case 0:
                                this.lote = data.data();
                                console.log(this.lote);
                                _context46.next = 4;
                                return this.buscaTitulos().then(function (data) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this73, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee44() {
                                    return regeneratorRuntime.wrap(function _callee44$(_context45) {
                                      while (1) {
                                        switch (_context45.prev = _context45.next) {
                                          case 0:
                                            console.log(data);

                                          case 1:
                                          case "end":
                                            return _context45.stop();
                                        }
                                      }
                                    }, _callee44);
                                  }));
                                });

                              case 4:
                              case "end":
                                return _context46.stop();
                            }
                          }
                        }, _callee45, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "buscaTitulos",
        value: function buscaTitulos() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee48() {
            var _this74 = this;

            return regeneratorRuntime.wrap(function _callee48$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    _context49.next = 2;
                    return this.tituloService.buscaTituloLote(this.idLote).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this74, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee47() {
                        var i;
                        return regeneratorRuntime.wrap(function _callee47$(_context48) {
                          while (1) {
                            switch (_context48.prev = _context48.next) {
                              case 0:
                                for (i = 0; i < data.size; i++) {
                                  this.titulos[i] = data.docs[i].data();
                                  this.titulos[i].idTitulo = data.docs[i].id;
                                }

                              case 1:
                              case "end":
                                return _context48.stop();
                            }
                          }
                        }, _callee47, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "buscaTituloDevedores",
        value: function buscaTituloDevedores() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee49() {
            var _this75 = this;

            var _loop2, x;

            return regeneratorRuntime.wrap(function _callee49$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    _loop2 =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop2(x) {
                      return regeneratorRuntime.wrap(function _loop2$(_context50) {
                        while (1) {
                          switch (_context50.prev = _context50.next) {
                            case 0:
                              _context50.next = 2;
                              return _this75.tituloDevedoreService.buscarDevedoresTitulo(_this75.titulos[x].idTitulo).then(function (data) {
                                for (var y = 0; y < data.size; y++) {
                                  _this75.devedores[y] = data.docs[y].data();
                                  _this75.devedores[y].idTituloDevedor = data.docs[y].id;
                                  _this75.titulos[x].devedores[y] = _this75.devedores[y];
                                }
                              });

                            case 2:
                            case "end":
                              return _context50.stop();
                          }
                        }
                      }, _loop2);
                    });
                    x = 0;

                  case 2:
                    if (!(x < this.titulos.length)) {
                      _context51.next = 7;
                      break;
                    }

                    return _context51.delegateYield(_loop2(x), "t0", 4);

                  case 4:
                    x++;
                    _context51.next = 2;
                    break;

                  case 7:
                    console.log(this.titulos);

                  case 8:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "ImprimirConteudo",
        value: function ImprimirConteudo() {
          this.funcoesService.ImprimirConteudoDiv(this.divRequerimento);
        }
      }]);

      return RequerimentoProtestoComponent;
    }();

    RequerimentoProtestoComponent.ctorParameters = function () {
      return [{
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }, {
        type: _services_lote_service__WEBPACK_IMPORTED_MODULE_7__["LoteService"]
      }, {
        type: _services_titulo_service__WEBPACK_IMPORTED_MODULE_8__["TituloService"]
      }, {
        type: _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_9__["TituloDevedorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divRequerimento', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], RequerimentoProtestoComponent.prototype, "divRequerimento", void 0);
    RequerimentoProtestoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requerimento-protesto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./requerimento-protesto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/requerimento-protesto/requerimento-protesto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./requerimento-protesto.component.scss */
      "./src/app/requerimento-protesto/requerimento-protesto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_4__["EmpresaService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _services_lote_service__WEBPACK_IMPORTED_MODULE_7__["LoteService"], _services_titulo_service__WEBPACK_IMPORTED_MODULE_8__["TituloService"], _services_titulo_devedor_service__WEBPACK_IMPORTED_MODULE_9__["TituloDevedorService"]])], RequerimentoProtestoComponent);
    /***/
  },

  /***/
  "./src/app/rodape/rodape.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/rodape/rodape.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRodapeRodapeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvZGFwZS9yb2RhcGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/rodape/rodape.component.ts":
  /*!********************************************!*\
    !*** ./src/app/rodape/rodape.component.ts ***!
    \********************************************/

  /*! exports provided: RodapeComponent */

  /***/
  function srcAppRodapeRodapeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodapeComponent", function () {
      return RodapeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RodapeComponent =
    /*#__PURE__*/
    function () {
      function RodapeComponent() {
        _classCallCheck(this, RodapeComponent);
      }

      _createClass(RodapeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RodapeComponent;
    }();

    RodapeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'rodape',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rodape.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rodape/rodape.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rodape.component.scss */
      "./src/app/rodape/rodape.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RodapeComponent);
    /***/
  },

  /***/
  "./src/app/senha/senha.component.scss":
  /*!********************************************!*\
    !*** ./src/app/senha/senha.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSenhaSenhaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === ALTERAR SENHA === */\n.password-container {\n  width: 400px;\n  float: left;\n  margin-left: 250px; }\n.password-container .form-group input, label {\n  width: 250px; }\n.password-container .btn-password {\n  width: 140px; }\n.password-container legend,\np {\n  margin-left: 15px; }\n.form-group input:required:focus:valid {\n  border: 1px solid #4CAF50; }\n.form-group input:required:focus:invalid {\n  border: 1px solid red; }\n.form-group .feedback {\n  display: none; }\n.feedback-group input:required:focus:invalid {\n  display: block; }\n/* == ILUSTRAÇÃO == */\n.ilustration-pw-container {\n  float: left;\n  max-width: 400px;\n  height: 400px; }\n.ilustration-pw-container img {\n  max-width: 400px;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuaGEvc2VuaGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlbmhhL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFxzZW5oYVxcc2VuaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLDBCQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDs7RUFFRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWMsRUFBQTtBQUdoQixxQkFBQTtBQUNBO0VBQ0UsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZW5oYS9zZW5oYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBBTFRFUkFSIFNFTkhBID09PSAqL1xuLnBhc3N3b3JkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDsgfVxuXG4ucGFzc3dvcmQtY29udGFpbmVyIC5mb3JtLWdyb3VwIGlucHV0LCBsYWJlbCB7XG4gIHdpZHRoOiAyNTBweDsgfVxuXG4ucGFzc3dvcmQtY29udGFpbmVyIC5idG4tcGFzc3dvcmQge1xuICB3aWR0aDogMTQwcHg7IH1cblxuLnBhc3N3b3JkLWNvbnRhaW5lciBsZWdlbmQsXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6cmVxdWlyZWQ6Zm9jdXM6dmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNENBRjUwOyB9XG5cbi5mb3JtLWdyb3VwIGlucHV0OnJlcXVpcmVkOmZvY3VzOmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH1cblxuLmZvcm0tZ3JvdXAgLmZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uZmVlZGJhY2stZ3JvdXAgaW5wdXQ6cmVxdWlyZWQ6Zm9jdXM6aW52YWxpZCB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qID09IElMVVNUUkHDh8ODTyA9PSAqL1xuLmlsdXN0cmF0aW9uLXB3LWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4OyB9XG5cbi5pbHVzdHJhdGlvbi1wdy1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDsgfVxuIiwiLyogPT09IEFMVEVSQVIgU0VOSEEgPT09ICovXG4ucGFzc3dvcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xufVxuXG4ucGFzc3dvcmQtY29udGFpbmVyIC5mb3JtLWdyb3VwIGlucHV0LCBsYWJlbCwge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5wYXNzd29yZC1jb250YWluZXIgLmJ0bi1wYXNzd29yZCB7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLnBhc3N3b3JkLWNvbnRhaW5lciBsZWdlbmQsXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OnJlcXVpcmVkOmZvY3VzOnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRDQUY1MDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6cmVxdWlyZWQ6Zm9jdXM6aW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmZvcm0tZ3JvdXAgLmZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZlZWRiYWNrLWdyb3VwIGlucHV0OnJlcXVpcmVkOmZvY3VzOmludmFsaWQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogPT0gSUxVU1RSQcOHw4NPID09ICovXG4uaWx1c3RyYXRpb24tcHctY29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8vIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmlsdXN0cmF0aW9uLXB3LWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/senha/senha.component.ts":
  /*!******************************************!*\
    !*** ./src/app/senha/senha.component.ts ***!
    \******************************************/

  /*! exports provided: SenhaComponent */

  /***/
  function srcAppSenhaSenhaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SenhaComponent", function () {
      return SenhaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var SenhaComponent =
    /*#__PURE__*/
    function () {
      function SenhaComponent(fireAuth, loginService, formBuilder) {
        _classCallCheck(this, SenhaComponent);

        this.fireAuth = fireAuth;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.email = this.fireAuth.auth.currentUser.email;
        this.formGroupNovaSenha = this.formBuilder.group({
          'senhaNova': [this.senhaNova, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)])],
          'senhaNova2': [this.senhaNova, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)])],
          'senhaAtual': [this.senhaNova, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)])],
          recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(SenhaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "carregaSenhas",
        value: function carregaSenhas() {
          this.formGroupNovaSenha.controls['senhaAtual'].setValue([this.senhaAtual]);
          this.formGroupNovaSenha.controls['senhaNova2'].setValue([this.senhaNova2]);
          this.formGroupNovaSenha.controls['senhaNova'].setValue([this.senhaNova]);
        }
      }, {
        key: "alterarSenha",
        value: function alterarSenha() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee50() {
            var senhas;
            return regeneratorRuntime.wrap(function _callee50$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    senhas = this.formGroupNovaSenha.value;

                    if (!(senhas.senhaNova == senhas.senhaNova2)) {
                      _context52.next = 4;
                      break;
                    }

                    _context52.next = 4;
                    return this.loginService.alteraSenha(this.email, senhas.senhaAtual, senhas.senhaNova).then(function () {}).catch(function (error) {
                      console.log(error);
                    });

                  case 4:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee50, this);
          }));
        }
      }]);

      return SenhaComponent;
    }();

    SenhaComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    SenhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-senha',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./senha.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/senha/senha.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./senha.component.scss */
      "./src/app/senha/senha.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], SenhaComponent);
    /***/
  },

  /***/
  "./src/app/services/arrays.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/arrays.service.ts ***!
    \********************************************/

  /*! exports provided: ArraysService */

  /***/
  function srcAppServicesArraysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArraysService", function () {
      return ArraysService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var ArraysService =
    /*#__PURE__*/
    function () {
      function ArraysService(fireStore) {
        _classCallCheck(this, ArraysService);

        this.fireStore = fireStore;
      }

      _createClass(ArraysService, [{
        key: "carregaPracaPagamento",
        value: function carregaPracaPagamento(pracas) {
          pracas.push('FRANCA');
          pracas.push('RESTINGA');
          pracas.push('CRISTAIS PAULISTA');
          pracas.push('RIBEIRAO CORRENTE');
          pracas.push('SAO JOSE DA BELA VISTA');
        }
      }, {
        key: "carregaEstado",
        value: function carregaEstado(estados) {
          estados.push('AC');
          estados.push('AL');
          estados.push('AP');
          estados.push('AM');
          estados.push('BA');
          estados.push('CE');
          estados.push('DF');
          estados.push('ES');
          estados.push('GO');
          estados.push('MA');
          estados.push('MT');
          estados.push('MS');
          estados.push('MG');
          estados.push('PA');
          estados.push('PB');
          estados.push('PR');
          estados.push('PE');
          estados.push('PI');
          estados.push('RJ');
          estados.push('RN');
          estados.push('RS');
          estados.push('RO');
          estados.push('RR');
          estados.push('SC');
          estados.push('SP');
          estados.push('SE');
          estados.push('TO');
        }
      }, {
        key: "carregaBanco",
        value: function carregaBanco(bancos) {
          bancos.push("001 - BANCO DO BRASIL S.A.");
          bancos.push("003 - BANCO DA AMAZONIA S.A.");
          bancos.push("004 - BANCO DO NORDESTE DO BRASIL S.A.");
          bancos.push("008 - BANCO SANTANDER MERIDIONAL S.A.");
          bancos.push("021 - BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO");
          bancos.push("024 - BANCO DE PERNAMBUCO S.A. - BANDEPE");
          bancos.push("025 - BANCO ALFA S.A.");
          bancos.push("027 - BANCO DO ESTADO DE SANTA CATARINA S.A.");
          bancos.push("029 - BANCO BANERJ S.A.");
          bancos.push("031 - BANCO BEG S.A.");
          bancos.push("033 - BANCO SANTANDER (BRASIL) S.A.");
          bancos.push("035 - BANCO BEC S.A.");
          bancos.push("036 - BANCO BEM S.A.");
          bancos.push("037 - BANCO DO ESTADO DO PAR- S.A.");
          bancos.push("038 - BANCO BANESTADO S.A.");
          bancos.push("039 - BANCO DO ESTADO DO PIAU- S.A. - BEP");
          bancos.push("040 - BANCO CARGILL S.A.");
          bancos.push("041 - BANCO DO ESTADO DO RIO GRANDE DO SUL S.A.");
          bancos.push("044 - BANCO BVA S.A.");
          bancos.push("045 - BANCO OPPORTUNITY S.A.");
          bancos.push("047 - BANCO DO ESTADO DE SERGIPE S.A.");
          bancos.push("048 - BANCO ITAU BBA S.A.");
          bancos.push("062 - HIPERCARD BANCO MULTIPLO S.A.");
          bancos.push("063 - BANCO IBI S.A. BANCO MULTIPLO");
          bancos.push("064 - GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A.");
          bancos.push("065 - LEMON BANK BANCO MULTIPLO S.A.");
          bancos.push("066 - BANCO MORGAN STANLEY DEAN WITTER S.A.");
          bancos.push("070 - BRB - BANCO DE BRASILIA S.A.");
          bancos.push("072 - BANCO RURAL MAIS S.A.");
          bancos.push("074 - BANCO J. SAFRA S.A.");
          bancos.push("075 - BANCO CR2 S.A.");
          bancos.push("076 - BANCO KDB S.A.");
          bancos.push("104 - CAIXA ECONOMICA FEDERAL");
          bancos.push("107 - BANCO BBM S.A.");
          bancos.push("116 - BANCO UNICO S.A.");
          bancos.push("151 - BANCO NOSSA CAIXA S.A.");
          bancos.push("175 - BANCO FINASA S.A.");
          bancos.push("208 - BANCO PACTUAL S.A.");
          bancos.push("210 - DRESDNER BANK LATEINAMERIKA AKTIENGESELLSCHAFT");
          bancos.push("212 - BANCO MATONE S.A.");
          bancos.push("213 - BANCO ARBI S.A.");
          bancos.push("214 - BANCO DIBENS S.A.");
          bancos.push("215 - BANCO COMERCIAL E DE INVESTIMENTO SUDAMERIS S.A.");
          bancos.push("217 - BANCO JOHN DEERE S.A.");
          bancos.push("218 - BANCO BONSUCESSO S.A.");
          bancos.push("222 - BANCO CALYON BRASIL S.A.");
          bancos.push("224 - BANCO FIBRA S.A.");
          bancos.push("225 - BANCO BRASCAN S.A.");
          bancos.push("229 - BANCO CRUZEIRO DO SUL S.A.");
          bancos.push("230 - UNICARD BANCO MULTIPLO S.A.");
          bancos.push("233 - BANCO GE CAPITAL S.A.");
          bancos.push("237 - BANCO BRADESCO S.A.");
          bancos.push("241 - BANCO CLASSICO S.A.");
          bancos.push("243 - BANCO MAXIMA S.A.");
          bancos.push("246 - BANCO ABC BRASIL S.A.");
          bancos.push("247 - BANCO UBS S.A.");
          bancos.push("248 - BANCO BOAVISTA INTERATLANTICO S.A.");
          bancos.push("249 - BANCO INVESTCRED UNIBANCO S.A.");
          bancos.push("250 - BANCO SCHAHIN S.A.");
          bancos.push("252 - BANCO FININVEST S.A.");
          bancos.push("254 - PARANA BANCO S.A.");
          bancos.push("263 - BANCO CACIQUE S.A.");
          bancos.push("265 - BANCO FATOR S.A.");
          bancos.push("266 - BANCO CEDULA S.A.");
          bancos.push("300 - BANCO DE LA NACION ARGENTINA");
          bancos.push("318 - BANCO BMG S.A.");
          bancos.push("320 - BANCO INDUSTRIAL E COMERCIAL S.A.");
          bancos.push("341 - BANCO ITAU S.A.");
          bancos.push("347 - BANCO SUDAMERIS BRASIL S.A.");
          bancos.push("351 - BANCO SANTANDER S.A.");
          bancos.push("353 - BANCO SANTANDER BRASIL S.A.");
          bancos.push("356 - BANCO SANTANDER (BRASIL) S.A.");
          bancos.push("366 - BANCO SOCIATE GENERALE BRASIL S.A.");
          bancos.push("370 - BANCO WESTLB DO BRASIL S.A.");
          bancos.push("376 - BANCO J. P. MORGAN S.A.");
          bancos.push("389 - BANCO MERCANTIL DO BRASIL S.A.");
          bancos.push("392 - BANCO MERCANTIL DE SAO PAULO S.A.");
          bancos.push("394 - BANCO BMC S.A.");
          bancos.push("399 - HSBC BANK BRASIL S.A. - BANCO MULTIPLO");
          bancos.push("409 - UNIBANCO - UNIAO DE BANCOS BRASILEIROS S.A.");
          bancos.push("412 - BANCO CAPITAL S.A.");
          bancos.push("422 - BANCO SAFRA S.A.");
          bancos.push("453 - BANCO RURAL S.A.");
          bancos.push("456 - BANCO DE TOKYO-MITSUBISHI UFJ BRASIL S.A.");
          bancos.push("464 - BANCO SUMITOMO MITSUI BRASILEIRO S.A.");
          bancos.push("477 - CITIBANK N.A.");
          bancos.push("479 - BANCO ITAÚ BANK S.A.");
          bancos.push("487 - DEUTSCHE BANK S.A. - BANCO ALEM+O");
          bancos.push("488 - JPMORGAN CHASE BANK");
          bancos.push("492 - ING BANK N.V.");
          bancos.push("494 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY");
          bancos.push("495 - BANCO DE LA PROVINCIA DE BUENOS AIRES");
          bancos.push("505 - BANCO CREDIT SUISSE (BRASIL) S.A.");
          bancos.push("600 - BANCO LUSO BRASILEIRO S.A.");
          bancos.push("604 - BANCO INDUSTRIAL DO BRASIL S.A.");
          bancos.push("610 - BANCO VR S.A.");
          bancos.push("611 - BANCO PAULISTA S.A.");
          bancos.push("612 - BANCO GUANABARA S.A.");
          bancos.push("613 - BANCO PECUNIA S.A.");
          bancos.push("623 - BANCO PANAMERICANO S.A.");
          bancos.push("626 - BANCO FICSA S.A.");
          bancos.push("630 - BANCO INTERCAP S.A.");
          bancos.push("633 - BANCO RENDIMENTO S.A.");
          bancos.push("634 - BANCO TRIANGULO S.A.");
          bancos.push("637 - BANCO SOFISA S.A.");
          bancos.push("638 - BANCO PROSPER S.A.");
          bancos.push("641 - BANCO ALVORADA S.A.");
          bancos.push("643 - BANCO PINE S.A.");
          bancos.push("652 - BANCO ITAU HOLDING FINANCEIRA S.A.");
          bancos.push("653 - BANCO INDUSVAL S.A.");
          bancos.push("655 - BANCO VOTORANTIM S.A.");
          bancos.push("707 - BANCO DAYCOVAL S.A.");
          bancos.push("719 - BANIF-BANCO INTERNACIONAL DO FUNCHAL (BRASIL)S.A.");
          bancos.push("721 - BANCO CREDIBEL S.A.");
          bancos.push("724 - BANCO PORTO SEGURO S.A.C");
          bancos.push("734 - BANCO GERDAU S.A.");
          bancos.push("735 - BANCO POTTENCIAL S.A.");
          bancos.push("738 - BANCO MORADA S.A.");
          bancos.push("739 - BANCO BGN S.A.");
          bancos.push("740 - BANCO BARCLAYS S.A.");
          bancos.push("741 - BANCO RIBEIRAO PRETO S.A.");
          bancos.push("743 - BANCO SEMEAR S.A.");
          bancos.push("744 - BANKBOSTON N.A.");
          bancos.push("745 - BANCO CITIBANK S.A.");
          bancos.push("746 - BANCO MODAL S.A.");
          bancos.push("747 - BANCO RABOBANK INTERNATIONAL BRASIL S.A.");
          bancos.push("748 - BANCO COOPERATIVO SICREDI S.A. - BANSICREDI");
          bancos.push("749 - BANCO SIMPLES S.A.");
          bancos.push("751 - DRESDNER BANK BRASIL S.A. - BANCO MULTIPLO");
          bancos.push("752 - BANCO BNP PARIBAS BRASIL S.A.");
          bancos.push("753 - BANCO COMERCIAL URUGUAI S.A.");
          bancos.push("755 - BANCO MERRILL LYNCH DE INVESTIMENTOS S.A.");
          bancos.push("756 - BANCO COOPERATIVO DO BRASIL S.A. - BANCOOB");
          bancos.push("757 - BANCO KEB DO BRASIL S.A.");
        }
      }, {
        key: "carregaEspecie",
        value: function carregaEspecie() {
          var especiesString;
          var especies;
          especiesString = [];
          especies = [];
          especiesString.push('CA - CRÉDITO DE ALUGUEL');
          especiesString.push('CAF - CONTRATO DE ALIENAÇÃO FIDUCIÁRIA');
          especiesString.push('CAM - CONTRATO DE ARRENDAMENTO MERCANTIL');
          especiesString.push('CBI - CÉDULA DE CRÉDITO BANCARIO POR INDICACAO');
          especiesString.push('CC - CONTRATO DE CAMBIO');
          especiesString.push('CCB - CÉDULA DE CRÉDITO BANCÁRIO');
          especiesString.push('CCC - CÉDULA DE CRÉDITO COMERCIAL');
          especiesString.push('CCE - CÉDULA DE CRÉDITO A EXPORTAÇÃO');
          especiesString.push('CCIN - CÉDULA DE CRÉDITO INDUSTRIAL');
          especiesString.push('CCR - CÉDULA DE CRÉDITO RURAL');
          especiesString.push('CCT - CERTIDÃO DE CRÉDITO TRABALHISTA');
          especiesString.push('CD - CONFISSÃO DE DÍVIDA');
          especiesString.push('CDA - CERTIDÃO DE DÍVIDA ATIVA');
          especiesString.push('CDI - CERTIDÃO DE DÍVIDA ATIVA POR INDICAÇÃO');
          especiesString.push('CH - CHEQUE');
          especiesString.push('CHP - CÉDULA HIPOTECÁRIA');
          especiesString.push('CJV - CONTA JUDICIALMENTE VERIFICADA');
          especiesString.push('CL - CONTRATO DE LOCAÇÃO');
          especiesString.push('CM - CONTRATO DE MUTUO');
          especiesString.push('CPM - CÉDULA PIGNORATICIA HIPOTECÁRIA');
          especiesString.push('CPR - CÉDULA DE PRODUTO RURAL');
          especiesString.push('CPS - CONTA DE PRESTAÇÃO DE SERVIÇOS');
          especiesString.push('CRD - CONTRATO DE COMPRA E VENDA COM RESERVA DE DOMINIO');
          especiesString.push('CRP - CÉDULA RURAL PIGNORITICIA');
          especiesString.push('CS - CERTIDÃO DE SENTENÇA');
          especiesString.push('CTS - CONTA DE SERVIÇOS');
          especiesString.push('DD - DOCUMENTO DE DÍVIDA');
          especiesString.push('DM - DUPLICATA MERCANTIL');
          especiesString.push('DMI - DUPLICATA MERCANTIL POR INDICAÇÃO');
          especiesString.push('DP - DUPLICATA RURAL');
          especiesString.push('DRI - DUPLICATA RURAL POR INDICAÇÃO');
          especiesString.push('DS - DUPLICATA DE SERVIÇOS');
          especiesString.push('DSI - DUPLICATA DE SERVIÇOS POR INDICAÇÃO');
          especiesString.push('EC - DEMONSTRATIVO DE ENCARGOS CONDOMINIAIS');
          especiesString.push('EH - ESCRITURA DE HIPOTECA');
          especiesString.push('ET - ESPÉCIE TESTE');
          especiesString.push('FS - FATURA DE SERVIÇOS');
          especiesString.push('LC - LETRA DE CAMBIO');
          especiesString.push('NCC - NOTA DE CRÉDITO COMERCIAL');
          especiesString.push('NCE - NOTA DE CRÉDITO A EXPORTAÇÃO');
          especiesString.push('NCIN - NOTA DE CRÉDITO INDUSTRIAL');
          especiesString.push('NCR - NOTA DE CRÉDITO RURAL');
          especiesString.push('NP - NOTA PROMISSÓRIA');
          especiesString.push('NPR - NOTA PROMISSÓRIA RURAL');
          especiesString.push('SJ - SENTENÇA JUDICIAL');
          especiesString.push('ST - SENTENÇA TRABALHISTA');
          especiesString.push('TA - TERMO DE ACORDO');
          especiesString.push('TJ - TÍTULO JUDICIAL');
          especiesString.push('TM - TRIPLICATA MERCANTIL');
          especiesString.push('TMI - TRIPLICATA MERCANTIL POR INDICAÇÃO');
          especiesString.push('TS - TRIPLICATA DE SERVIÇOS');
          especiesString.push('TSI - TRIPLICATA DE SERVIÇOS POR INDICAÇÃO');
          especiesString.push('VC - VERIFICAÇÃO DE CONTAS');
          especiesString.push('VJU - VERIFICAÇÃO JUDICIAL');
          especiesString.push('W - WARRANT');

          for (var i = 0; i < especiesString.length; i++) {
            var especie = {};
            especie.especie = especiesString[i];
            var sigla = void 0;
            sigla = especiesString[i].split(' ')[0];
            especie.sigla = sigla;
            especies.push(especie);
          }

          return especies;
        }
      }, {
        key: "salvaEspecie",
        value: function salvaEspecie(especies) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee51() {
            var i;
            return regeneratorRuntime.wrap(function _callee51$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    especies = this.carregaEspecie();
                    i = 0;

                  case 2:
                    if (!(i < especies.length)) {
                      _context53.next = 8;
                      break;
                    }

                    _context53.next = 5;
                    return this.fireStore.collection('Especie').doc(especies[i].sigla).set(especies[i]);

                  case 5:
                    i++;
                    _context53.next = 2;
                    break;

                  case 8:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee51, this);
          }));
        }
      }, {
        key: "salvaPracaPagamento",
        value: function salvaPracaPagamento(pracas) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee52() {
            var i;
            return regeneratorRuntime.wrap(function _callee52$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    this.carregaPracaPagamento(pracas);
                    i = 0;

                  case 2:
                    if (!(i < pracas.length)) {
                      _context54.next = 8;
                      break;
                    }

                    _context54.next = 5;
                    return this.fireStore.collection('PracaPagamento').doc(pracas[i]).set(pracas[i]);

                  case 5:
                    i++;
                    _context54.next = 2;
                    break;

                  case 8:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "arrayInserirBanco",
        value: function arrayInserirBanco() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee53() {
            var bancos, texto, i, banco;
            return regeneratorRuntime.wrap(function _callee53$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    bancos = new Array();
                    texto = new Array();
                    this.carregaBanco(texto);

                    for (i = 0; i < texto.length; i++) {
                      banco = {};
                      banco.idBanco = texto[i].substring(0, 3) || null;
                      banco.nome = texto[i] || null;
                      bancos.push(banco);
                    }

                    console.log(bancos);
                    _context55.next = 7;
                    return this.salvaBancos(bancos);

                  case 7:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "salvaBancos",
        value: function salvaBancos(bancos) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee54() {
            var i;
            return regeneratorRuntime.wrap(function _callee54$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < bancos.length)) {
                      _context56.next = 7;
                      break;
                    }

                    _context56.next = 4;
                    return this.fireStore.firestore.collection('Banco').doc(bancos[i].idBanco).set(bancos[i]);

                  case 4:
                    i++;
                    _context56.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }]);

      return ArraysService;
    }();

    ArraysService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ArraysService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], ArraysService);
    /***/
  },

  /***/
  "./src/app/services/cep.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/cep.service.ts ***!
    \*****************************************/

  /*! exports provided: CepService */

  /***/
  function srcAppServicesCepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CepService", function () {
      return CepService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CepService =
    /*#__PURE__*/
    function () {
      function CepService(httpClient) {
        _classCallCheck(this, CepService);

        this.httpClient = httpClient;
      }

      _createClass(CepService, [{
        key: "getCEPCorreios",
        value: function getCEPCorreios(cep) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee55() {
            var resultCEP;
            return regeneratorRuntime.wrap(function _callee55$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    _context57.next = 2;
                    return this.httpClient.get("https://viacep.com.br/ws/".concat(cep, "/json/")).toPromise().then(function (res) {
                      return resultCEP = res;
                    });

                  case 2:
                    return _context57.abrupt("return", resultCEP);

                  case 3:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }]);

      return CepService;
    }();

    CepService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CepService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CepService);
    /***/
  },

  /***/
  "./src/app/services/devedor.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/devedor.service.ts ***!
    \*********************************************/

  /*! exports provided: DevedorService */

  /***/
  function srcAppServicesDevedorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevedorService", function () {
      return DevedorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var DevedorService =
    /*#__PURE__*/
    function () {
      function DevedorService(fireStore) {
        _classCallCheck(this, DevedorService);

        this.fireStore = fireStore;
      }

      _createClass(DevedorService, [{
        key: "buscarDevedor",
        value: function buscarDevedor(idDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee56() {
            return regeneratorRuntime.wrap(function _callee56$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    _context58.next = 2;
                    return this.fireStore.firestore.collection('Devedor').doc(idDevedor).get();

                  case 2:
                    return _context58.abrupt("return", _context58.sent);

                  case 3:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }, {
        key: "atualizaDevedor",
        value: function atualizaDevedor(devedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee57() {
            return regeneratorRuntime.wrap(function _callee57$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    _context59.next = 2;
                    return this.fireStore.collection('Devedor').doc(devedor.idDevedor).update(devedor);

                  case 2:
                    return _context59.abrupt("return", _context59.sent);

                  case 3:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee57, this);
          }));
        }
      }, {
        key: "buscaDevedorDocumentoEmpresa",
        value: function buscaDevedorDocumentoEmpresa(numeroDocumento, idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee58() {
            return regeneratorRuntime.wrap(function _callee58$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    console.log(numeroDocumento.valueOf(), idEmpresa);
                    _context60.next = 3;
                    return this.fireStore.firestore.collection('Devedor').where('idEmpresa', '==', idEmpresa).where('numeroDocumento', '==', numeroDocumento).get();

                  case 3:
                    return _context60.abrupt("return", _context60.sent);

                  case 4:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }, {
        key: "deletaDevedor",
        value: function deletaDevedor(idDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee59() {
            return regeneratorRuntime.wrap(function _callee59$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    _context61.next = 2;
                    return this.fireStore.collection('Devedor').doc(idDevedor).delete();

                  case 2:
                    return _context61.abrupt("return", _context61.sent);

                  case 3:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee59, this);
          }));
        }
      }, {
        key: "criarDevedor",
        value: function criarDevedor(devedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee60() {
            return regeneratorRuntime.wrap(function _callee60$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    _context62.next = 2;
                    return this.fireStore.firestore.collection('Devedor').add(devedor);

                  case 2:
                    return _context62.abrupt("return", _context62.sent);

                  case 3:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee60, this);
          }));
        }
      }, {
        key: "criarEnderecoDevedor",
        value: function criarEnderecoDevedor(enderecoDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee61() {
            return regeneratorRuntime.wrap(function _callee61$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    _context63.next = 2;
                    return this.fireStore.firestore.collection('Endereco').add(enderecoDevedor);

                  case 2:
                    return _context63.abrupt("return", _context63.sent);

                  case 3:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee61, this);
          }));
        }
      }, {
        key: "criarTelefoneDevedor",
        value: function criarTelefoneDevedor(telefoneDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee62() {
            return regeneratorRuntime.wrap(function _callee62$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    _context64.next = 2;
                    return this.fireStore.firestore.collection('Telefone').add(telefoneDevedor);

                  case 2:
                    return _context64.abrupt("return", _context64.sent);

                  case 3:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }, {
        key: "criarEmailDevedor",
        value: function criarEmailDevedor(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee63() {
            return regeneratorRuntime.wrap(function _callee63$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    _context65.next = 2;
                    return this.fireStore.firestore.collection('Email').add(email);

                  case 2:
                    return _context65.abrupt("return", _context65.sent);

                  case 3:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee63, this);
          }));
        }
      }, {
        key: "buscarDevedoresPorNome",
        value: function buscarDevedoresPorNome(nomeDevedor, idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee64() {
            return regeneratorRuntime.wrap(function _callee64$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    console.log(nomeDevedor);
                    _context66.next = 3;
                    return this.fireStore.firestore.collection('Devedor').where('idEmpresa', '==', idEmpresa).orderBy('nomeDevedor').startAt(nomeDevedor).endAt(nomeDevedor + "\uF8FF").limit(20).get();

                  case 3:
                    return _context66.abrupt("return", _context66.sent);

                  case 4:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "buscarDevedoresPorDocumento",
        value: function buscarDevedoresPorDocumento(numeroDocumento, idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee65() {
            return regeneratorRuntime.wrap(function _callee65$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    console.log(numeroDocumento);
                    _context67.next = 3;
                    return this.fireStore.firestore.collection('Devedor').where('idEmpresa', '==', idEmpresa).orderBy('numeroDocumento').startAt(numeroDocumento).endAt(numeroDocumento + "\uF8FF").limit(20).get();

                  case 3:
                    return _context67.abrupt("return", _context67.sent);

                  case 4:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee65, this);
          }));
        }
      }, {
        key: "buscarMaisDevedoresPorNome",
        value: function buscarMaisDevedoresPorNome(nomeDevedor, idEmpresa, ultimoNomeDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee66() {
            return regeneratorRuntime.wrap(function _callee66$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    console.log(nomeDevedor);
                    _context68.next = 3;
                    return this.fireStore.firestore.collection('Devedor').where('idEmpresa', '==', idEmpresa).orderBy('nomeDevedor').startAt(nomeDevedor).endAt(nomeDevedor + "\uF8FF").startAfter(ultimoNomeDevedor).limit(20).get();

                  case 3:
                    return _context68.abrupt("return", _context68.sent);

                  case 4:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee66, this);
          }));
        }
      }, {
        key: "buscarMaisDevedoresPorDocumento",
        value: function buscarMaisDevedoresPorDocumento(numeroDocumento, idEmpresa, ultimoDocumentoDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee67() {
            return regeneratorRuntime.wrap(function _callee67$(_context69) {
              while (1) {
                switch (_context69.prev = _context69.next) {
                  case 0:
                    console.log(numeroDocumento);
                    _context69.next = 3;
                    return this.fireStore.firestore.collection('Devedor').where('idEmpresa', '==', idEmpresa).orderBy('numeroDocumento').startAt(numeroDocumento).endAt(numeroDocumento + "\uF8FF").startAfter(ultimoDocumentoDevedor).limit(20).get();

                  case 3:
                    return _context69.abrupt("return", _context69.sent);

                  case 4:
                  case "end":
                    return _context69.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "buscarDevedoresTitulo",
        value: function buscarDevedoresTitulo(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee68() {
            return regeneratorRuntime.wrap(function _callee68$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    _context70.next = 2;
                    return this.fireStore.firestore.collection('Devedor').where('idTitulo', '==', idTitulo).get();

                  case 2:
                    return _context70.abrupt("return", _context70.sent);

                  case 3:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee68, this);
          }));
        } // ENDEREÇO

      }, {
        key: "buscarEnderecoDevedor",
        value: function buscarEnderecoDevedor(idDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee69() {
            return regeneratorRuntime.wrap(function _callee69$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    _context71.next = 2;
                    return this.fireStore.firestore.collection('Endereco').where('idDevedor', '==', idDevedor).get();

                  case 2:
                    return _context71.abrupt("return", _context71.sent);

                  case 3:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "apagarEnderecoDevedor",
        value: function apagarEnderecoDevedor(idEndereco) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee70() {
            return regeneratorRuntime.wrap(function _callee70$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    _context72.next = 2;
                    return this.fireStore.collection('Endereco').doc(idEndereco).delete();

                  case 2:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "atualizarEnderecoDevedor",
        value: function atualizarEnderecoDevedor(endereco) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee71() {
            return regeneratorRuntime.wrap(function _callee71$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    _context73.next = 2;
                    return this.fireStore.collection('Endereco').doc(endereco.idEndereco).update(endereco);

                  case 2:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee71, this);
          }));
        } // EMAIL

      }, {
        key: "buscarEmailDevedor",
        value: function buscarEmailDevedor(idDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee72() {
            return regeneratorRuntime.wrap(function _callee72$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    _context74.next = 2;
                    return this.fireStore.firestore.collection('Email').where('idDevedor', '==', idDevedor).get();

                  case 2:
                    return _context74.abrupt("return", _context74.sent);

                  case 3:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee72, this);
          }));
        }
      }, {
        key: "atualizarEmailDevedor",
        value: function atualizarEmailDevedor(endereco) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee73() {
            return regeneratorRuntime.wrap(function _callee73$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    _context75.next = 2;
                    return this.fireStore.collection('Endereco').doc(endereco.idEndereco).update(endereco);

                  case 2:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee73, this);
          }));
        }
      }, {
        key: "apagarEmailDevedor",
        value: function apagarEmailDevedor(idEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee74() {
            return regeneratorRuntime.wrap(function _callee74$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    _context76.next = 2;
                    return this.fireStore.collection('Email').doc(idEmail).delete();

                  case 2:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee74, this);
          }));
        } // TELEFONE

      }, {
        key: "buscarTelefoneDevedor",
        value: function buscarTelefoneDevedor(idDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee75() {
            return regeneratorRuntime.wrap(function _callee75$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    _context77.next = 2;
                    return this.fireStore.firestore.collection('Telefone').where('idDevedor', '==', idDevedor).get();

                  case 2:
                    return _context77.abrupt("return", _context77.sent);

                  case 3:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee75, this);
          }));
        }
      }, {
        key: "apagarTelefone",
        value: function apagarTelefone(idTelefone) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee76() {
            return regeneratorRuntime.wrap(function _callee76$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    _context78.next = 2;
                    return this.fireStore.collection('Telefone').doc(idTelefone).delete();

                  case 2:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee76, this);
          }));
        }
      }, {
        key: "atualizarTelefoneDevedor",
        value: function atualizarTelefoneDevedor(telefone) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee77() {
            return regeneratorRuntime.wrap(function _callee77$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    _context79.next = 2;
                    return this.fireStore.collection('Endereco').doc(telefone.idTelefone).update(telefone);

                  case 2:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }]);

      return DevedorService;
    }();

    DevedorService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    DevedorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], DevedorService);
    /***/
  },

  /***/
  "./src/app/services/digitacao-modal.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/digitacao-modal.service.ts ***!
    \*****************************************************/

  /*! exports provided: DigitacaoModalService */

  /***/
  function srcAppServicesDigitacaoModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitacaoModalService", function () {
      return DigitacaoModalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DigitacaoModalService_1;

    var DigitacaoModalService = DigitacaoModalService_1 =
    /*#__PURE__*/
    function () {
      function DigitacaoModalService() {
        _classCallCheck(this, DigitacaoModalService);
      }

      _createClass(DigitacaoModalService, [{
        key: "setEndereco",
        value: function setEndereco(endereco) {
          DigitacaoModalService_1.endereco = endereco;
        }
      }, {
        key: "getEndereco",
        value: function getEndereco() {
          return DigitacaoModalService_1.endereco;
        }
      }]);

      return DigitacaoModalService;
    }();

    DigitacaoModalService.endereco = {};
    DigitacaoModalService = DigitacaoModalService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DigitacaoModalService);
    /***/
  },

  /***/
  "./src/app/services/empresa.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/empresa.service.ts ***!
    \*********************************************/

  /*! exports provided: EmpresaService */

  /***/
  function srcAppServicesEmpresaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaService", function () {
      return EmpresaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/services/login.service.ts");

    var EmpresaService_1;

    var EmpresaService = EmpresaService_1 =
    /*#__PURE__*/
    function () {
      function EmpresaService(fireStore, fireAuth, usuarioService) {
        _classCallCheck(this, EmpresaService);

        this.fireStore = fireStore;
        this.fireAuth = fireAuth;
        this.usuarioService = usuarioService;
        this.usuario = {};
      }

      _createClass(EmpresaService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var idUsuario = this.fireAuth.auth.currentUser.uid;
          return this.buscaEmpresa(idUsuario);
        }
      }, {
        key: "atualizaEmpresa",
        value: function atualizaEmpresa(empresa, idUsuario) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee78() {
            var _this76 = this;

            return regeneratorRuntime.wrap(function _callee78$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    _context80.next = 2;
                    return this.fireStore.collection('Empresa').doc(idUsuario).update(empresa).then(function () {
                      console.log('empresa salva!');
                      _this76.usuario.administrador = 'SIM';
                      _this76.usuario.cpf = empresa.documento;
                      _this76.usuario.email = empresa.email;
                      _this76.usuario.nome = empresa.nome;
                      _this76.usuario.idUsuario = idUsuario;
                      _this76.usuario.idEmpresa = empresa.idEmpresa;

                      _this76.usuarioService.updateUser(_this76.usuario, idUsuario).then(function () {
                        console.log('usuario salvo!');
                        return;
                      }).catch(function (error) {
                        console.log(error);
                      });
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "buscaEmpresa",
        value: function buscaEmpresa(idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee79() {
            var empresa;
            return regeneratorRuntime.wrap(function _callee79$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    _context81.next = 2;
                    return this.fireStore.firestore.collection('Empresa').doc(idU).get().then(function (data) {
                      empresa = data.data();
                      EmpresaService_1.emitirEmpresa.emit(empresa);
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                    return _context81.abrupt("return", empresa);

                  case 3:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "buscarEmpresa",
        value: function buscarEmpresa(idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee80() {
            return regeneratorRuntime.wrap(function _callee80$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    _context82.next = 2;
                    return this.fireStore.firestore.collection('Empresa').doc(idEmpresa).get();

                  case 2:
                    return _context82.abrupt("return", _context82.sent);

                  case 3:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }, {
        key: "criaEmpresaUsuario",
        value: function criaEmpresaUsuario(empresa, usuario) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee83() {
            var _this77 = this;

            return regeneratorRuntime.wrap(function _callee83$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    _context85.prev = 0;
                    _context85.next = 3;
                    return this.fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(function (usuario) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this77, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee82() {
                        var _this78 = this;

                        return regeneratorRuntime.wrap(function _callee82$(_context84) {
                          while (1) {
                            switch (_context84.prev = _context84.next) {
                              case 0:
                                empresa.email = usuario.user.email;
                                empresa.idUsuario = usuario.user.uid;
                                empresa.idEmpresa = usuario.user.uid;
                                console.log('idEmpresa:', empresa.idEmpresa);
                                _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"].idEmpresa = empresa.idEmpresa;
                                _context84.next = 7;
                                return this.fireStore.collection('Empresa').doc(empresa.idUsuario).set(empresa).then(function () {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this78, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee81() {
                                    return regeneratorRuntime.wrap(function _callee81$(_context83) {
                                      while (1) {
                                        switch (_context83.prev = _context83.next) {
                                          case 0:
                                            this.usuario.administrador = 'SIM';
                                            this.usuario.cpf = empresa.documento;
                                            this.usuario.email = empresa.email;
                                            this.usuario.nome = empresa.nome;
                                            this.usuario.idUsuario = empresa.idUsuario;
                                            this.usuario.idEmpresa = empresa.idEmpresa;
                                            console.log('Usuario', this.usuario);
                                            console.log('idEmpresa', empresa.idEmpresa);
                                            console.log('idUsuario', empresa.idUsuario);
                                            _context83.next = 11;
                                            return this.usuarioService.setUser(this.usuario, empresa.idUsuario).then(function () {
                                              console.log('empresa salva!');
                                              return;
                                            }).catch(function (error) {
                                              console.log(error);
                                            });

                                          case 11:
                                          case "end":
                                            return _context83.stop();
                                        }
                                      }
                                    }, _callee81, this);
                                  }));
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 7:
                              case "end":
                                return _context84.stop();
                            }
                          }
                        }, _callee82, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 3:
                    _context85.next = 8;
                    break;

                  case 5:
                    _context85.prev = 5;
                    _context85.t0 = _context85["catch"](0);
                    console.log(_context85.t0);

                  case 8:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee83, this, [[0, 5]]);
          }));
        }
      }, {
        key: "verificaVaziaConta",
        value: function verificaVaziaConta(conta) {
          if (!conta.agencia || conta.agencia == "") {
            if (!conta.conta || conta.conta == "") {
              if (!conta.idBanco || conta.idBanco == "") {
                return true;
              }
            }
          }
        }
      }, {
        key: "verificaVazioRepresentante",
        value: function verificaVazioRepresentante(representante) {
          if (!representante.cpfRepresentante || representante.cpfRepresentante == "") {
            if (!representante.emissorRepresentante || representante.emissorRepresentante == "") {
              if (!representante.nomeRepresentante || representante.nomeRepresentante == "") {
                if (!representante.rg || representante.rg == "") {
                  return true;
                }
              }
            }
          }
        }
      }]);

      return EmpresaService;
    }();

    EmpresaService.emitirEmpresa = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

    EmpresaService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }];
    };

    EmpresaService = EmpresaService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])], EmpresaService);
    /***/
  },

  /***/
  "./src/app/services/funcoes.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/funcoes.service.ts ***!
    \*********************************************/

  /*! exports provided: FuncoesService */

  /***/
  function srcAppServicesFuncoesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuncoesService", function () {
      return FuncoesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FuncoesService =
    /*#__PURE__*/
    function () {
      function FuncoesService() {
        _classCallCheck(this, FuncoesService);
      }

      _createClass(FuncoesService, [{
        key: "DataAtualExtenso",
        value: function DataAtualExtenso() {
          var monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
          var data = new Date();
          this.dataAtualExtenso = {
            dia: data.getDate(),
            mes: monName[data.getMonth()],
            ano: data.getFullYear()
          };
          return this.dataAtualExtenso;
        }
      }, {
        key: "DataAtual",
        value: function DataAtual() {
          var data = new Date();
          this.dataAtual = {
            dia: data.getDate(),
            mes: data.getMonth() + 1,
            ano: data.getFullYear()
          };
          return this.dataAtual;
        }
      }, {
        key: "ImprimirConteudoDiv",
        value: function ImprimirConteudoDiv(div) {
          var html, page;
          html = div.nativeElement.innerHTML;
          page = window.open("", "_blank", "scrollbars=1,width=1000");
          page.document.write(html);
          page.window.print();
          page.document.close();
          page.focus();
        }
      }]);

      return FuncoesService;
    }();

    FuncoesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FuncoesService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/services/usuario.service.ts");

    var LoginService_1;

    var LoginService = LoginService_1 =
    /*#__PURE__*/
    function () {
      function LoginService(fireAuth, usuarioService) {
        _classCallCheck(this, LoginService);

        this.fireAuth = fireAuth;
        this.usuarioService = usuarioService;
        this.mostrarMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(usuario) {
          var _this79 = this;

          return this.fireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this79, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee84() {
              return regeneratorRuntime.wrap(function _callee84$(_context86) {
                while (1) {
                  switch (_context86.prev = _context86.next) {
                    case 0:
                      LoginService_1.credential = res;
                      _context86.next = 3;
                      return this.usuarioService.getUser(res.user.uid).then(function (res) {
                        LoginService_1.idEmpresa = res.idEmpresa;
                      });

                    case 3:
                    case "end":
                      return _context86.stop();
                  }
                }
              }, _callee84, this);
            }));
          });
        }
      }, {
        key: "auth",
        value: function auth() {
          return this.fireAuth.auth;
        }
      }, {
        key: "menu",
        value: function menu(ativo) {
          this.mostrarMenuEmitter.emit(ativo);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.fireAuth.auth.signOut();
        }
      }, {
        key: "redefinirSenhaEmail",
        value: function redefinirSenhaEmail(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee85() {
            return regeneratorRuntime.wrap(function _callee85$(_context87) {
              while (1) {
                switch (_context87.prev = _context87.next) {
                  case 0:
                    _context87.next = 2;
                    return this.fireAuth.auth.sendPasswordResetEmail(email).then(function () {
                      console.log('Email enviado com sucesso!');
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context87.stop();
                }
              }
            }, _callee85, this);
          }));
        }
      }, {
        key: "alteraSenha",
        value: function alteraSenha(email, senhaAtual, senhaNova) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee86() {
            var _this80 = this;

            return regeneratorRuntime.wrap(function _callee86$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    console.log(email);
                    _context88.next = 3;
                    return this.fireAuth.auth.signInWithEmailAndPassword(email, senhaAtual).then(function () {
                      console.log('ok');

                      _this80.fireAuth.auth.currentUser.updatePassword(senhaNova).then(function () {
                        _this80.PasswordSuccess();
                      }).catch(function (error) {
                        console.log(error);
                      });
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee86, this);
          }));
        }
      }, {
        key: "PasswordSuccess",
        value: function PasswordSuccess() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Senha alterada com sucesso!',
            showConfirmButton: false,
            timer: 1600
          });
        }
      }, {
        key: "setNewUser",
        value: function setNewUser(usuario, usuarioAdicional) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee88() {
            var _this81 = this;

            var user, credential;
            return regeneratorRuntime.wrap(function _callee88$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.prev = 0;
                    user = this.fireAuth.auth.currentUser;
                    credential = LoginService_1.credential;
                    _context90.next = 5;
                    return this.fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(function (usuario) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this81, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee87() {
                        var _this82 = this;

                        return regeneratorRuntime.wrap(function _callee87$(_context89) {
                          while (1) {
                            switch (_context89.prev = _context89.next) {
                              case 0:
                                usuarioAdicional.idUsuario = usuario.user.uid;
                                usuarioAdicional.idEmpresa = LoginService_1.idEmpresa;
                                console.log(usuarioAdicional);
                                _context89.next = 5;
                                return this.usuarioService.addUser(usuarioAdicional, usuarioAdicional.idUsuario).then(function () {
                                  console.log('usuario salvo!');

                                  _this82.logout();

                                  console.log(credential);
                                  user.reauthenticateWithCredential(credential.user); // Now you can use that to reauthenticate                   

                                  return;
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 5:
                              case "end":
                                return _context89.stop();
                            }
                          }
                        }, _callee87, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 5:
                    _context90.next = 10;
                    break;

                  case 7:
                    _context90.prev = 7;
                    _context90.t0 = _context90["catch"](0);
                    console.log(_context90.t0);

                  case 10:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee88, this, [[0, 7]]);
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }];
    };

    LoginService = LoginService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/services/lote.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/lote.service.ts ***!
    \******************************************/

  /*! exports provided: LoteService */

  /***/
  function srcAppServicesLoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoteService", function () {
      return LoteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var LoteService =
    /*#__PURE__*/
    function () {
      function LoteService(fireStore) {
        _classCallCheck(this, LoteService);

        this.fireStore = fireStore;
      }

      _createClass(LoteService, [{
        key: "criaLote",
        value: function criaLote(lote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee89() {
            return regeneratorRuntime.wrap(function _callee89$(_context91) {
              while (1) {
                switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.next = 2;
                    return this.fireStore.collection('Lote').add(lote);

                  case 2:
                    return _context91.abrupt("return", _context91.sent);

                  case 3:
                  case "end":
                    return _context91.stop();
                }
              }
            }, _callee89, this);
          }));
        }
      }, {
        key: "buscaLote",
        value: function buscaLote(idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee90() {
            return regeneratorRuntime.wrap(function _callee90$(_context92) {
              while (1) {
                switch (_context92.prev = _context92.next) {
                  case 0:
                    _context92.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).orderBy('numeroLote').limit(20).get();

                  case 2:
                    return _context92.abrupt("return", _context92.sent);

                  case 3:
                  case "end":
                    return _context92.stop();
                }
              }
            }, _callee90, this);
          }));
        }
      }, {
        key: "buscarLoteStatus",
        value: function buscarLoteStatus(idEmpresa, status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee91() {
            return regeneratorRuntime.wrap(function _callee91$(_context93) {
              while (1) {
                switch (_context93.prev = _context93.next) {
                  case 0:
                    console.log(idEmpresa, status);
                    _context93.next = 3;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).where('status', '==', status).orderBy('numeroLote').limit(20).get();

                  case 3:
                    return _context93.abrupt("return", _context93.sent);

                  case 4:
                  case "end":
                    return _context93.stop();
                }
              }
            }, _callee91, this);
          }));
        }
      }, {
        key: "paginarLoteStatus",
        value: function paginarLoteStatus(idEmpresa, status, ultimoNumeroLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee92() {
            return regeneratorRuntime.wrap(function _callee92$(_context94) {
              while (1) {
                switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).where('status', '==', status).orderBy('numeroLote').startAfter(ultimoNumeroLote).limit(20).get();

                  case 2:
                    return _context94.abrupt("return", _context94.sent);

                  case 3:
                  case "end":
                    return _context94.stop();
                }
              }
            }, _callee92, this);
          }));
        }
      }, {
        key: "buscaLoteId",
        value: function buscaLoteId(idLote) {
          return this.fireStore.firestore.collection('Lote').doc(idLote).get();
        }
      }, {
        key: "paginaBuscaLote",
        value: function paginaBuscaLote(idEmpresa, numeroLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee93() {
            return regeneratorRuntime.wrap(function _callee93$(_context95) {
              while (1) {
                switch (_context95.prev = _context95.next) {
                  case 0:
                    _context95.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).orderBy('numeroLote').startAfter(numeroLote).limit(20).get();

                  case 2:
                    return _context95.abrupt("return", _context95.sent);

                  case 3:
                  case "end":
                    return _context95.stop();
                }
              }
            }, _callee93, this);
          }));
        }
      }, {
        key: "qtdLote",
        value: function qtdLote(idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee94() {
            var qtdLote;
            return regeneratorRuntime.wrap(function _callee94$(_context96) {
              while (1) {
                switch (_context96.prev = _context96.next) {
                  case 0:
                    _context96.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).get().then(function (data) {
                      qtdLote = data.size;
                      console.log(qtdLote);
                      return qtdLote;
                    });

                  case 2:
                    return _context96.abrupt("return", qtdLote);

                  case 3:
                  case "end":
                    return _context96.stop();
                }
              }
            }, _callee94, this);
          }));
        }
      }, {
        key: "apagarLoteId",
        value: function apagarLoteId(idLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee95() {
            return regeneratorRuntime.wrap(function _callee95$(_context97) {
              while (1) {
                switch (_context97.prev = _context97.next) {
                  case 0:
                    _context97.next = 2;
                    return this.fireStore.collection('Lote').doc(idLote).delete().then(function () {
                      console.log('Lote apagado com sucesso');
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context97.stop();
                }
              }
            }, _callee95, this);
          }));
        }
      }, {
        key: "atualizaLote",
        value: function atualizaLote(idLote, lote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee96() {
            return regeneratorRuntime.wrap(function _callee96$(_context98) {
              while (1) {
                switch (_context98.prev = _context98.next) {
                  case 0:
                    console.log('idlote', idLote, 'lote', lote);
                    _context98.next = 3;
                    return this.fireStore.firestore.collection('Lote').doc(idLote).update(lote);

                  case 3:
                    return _context98.abrupt("return", _context98.sent);

                  case 4:
                  case "end":
                    return _context98.stop();
                }
              }
            }, _callee96, this);
          }));
        }
      }, {
        key: "buscarLoteEmpresa",
        value: function buscarLoteEmpresa(idEmpresa) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee97() {
            return regeneratorRuntime.wrap(function _callee97$(_context99) {
              while (1) {
                switch (_context99.prev = _context99.next) {
                  case 0:
                    _context99.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).orderBy('numeroLote').get();

                  case 2:
                    return _context99.abrupt("return", _context99.sent);

                  case 3:
                  case "end":
                    return _context99.stop();
                }
              }
            }, _callee97, this);
          }));
        }
      }, {
        key: "paginarLoteEmpresa",
        value: function paginarLoteEmpresa(idEmpresa, ultimoNumeroLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee98() {
            return regeneratorRuntime.wrap(function _callee98$(_context100) {
              while (1) {
                switch (_context100.prev = _context100.next) {
                  case 0:
                    _context100.next = 2;
                    return this.fireStore.firestore.collection('Lote').where('idEmpresa', '==', idEmpresa).orderBy('numeroLote').startAfter(ultimoNumeroLote).get();

                  case 2:
                    return _context100.abrupt("return", _context100.sent);

                  case 3:
                  case "end":
                    return _context100.stop();
                }
              }
            }, _callee98, this);
          }));
        }
      }]);

      return LoteService;
    }();

    LoteService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    LoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], LoteService);
    /***/
  },

  /***/
  "./src/app/services/representante.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/representante.service.ts ***!
    \***************************************************/

  /*! exports provided: RepresentanteService */

  /***/
  function srcAppServicesRepresentanteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepresentanteService", function () {
      return RepresentanteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var RepresentanteService =
    /*#__PURE__*/
    function () {
      function RepresentanteService(fireStore) {
        _classCallCheck(this, RepresentanteService);

        this.fireStore = fireStore;
      }

      _createClass(RepresentanteService, [{
        key: "criaRepresentante",
        value: function criaRepresentante(representante) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee99() {
            return regeneratorRuntime.wrap(function _callee99$(_context101) {
              while (1) {
                switch (_context101.prev = _context101.next) {
                  case 0:
                    return _context101.abrupt("return", this.fireStore.collection('Representante').add(representante));

                  case 1:
                  case "end":
                    return _context101.stop();
                }
              }
            }, _callee99, this);
          }));
        }
      }]);

      return RepresentanteService;
    }();

    RepresentanteService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    RepresentanteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], RepresentanteService);
    /***/
  },

  /***/
  "./src/app/services/titulo-devedor.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/titulo-devedor.service.ts ***!
    \****************************************************/

  /*! exports provided: TituloDevedorService */

  /***/
  function srcAppServicesTituloDevedorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TituloDevedorService", function () {
      return TituloDevedorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var TituloDevedorService =
    /*#__PURE__*/
    function () {
      function TituloDevedorService(fireStore) {
        _classCallCheck(this, TituloDevedorService);

        this.fireStore = fireStore;
      }

      _createClass(TituloDevedorService, [{
        key: "criarTituloDevedor",
        value: function criarTituloDevedor(tituloDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee100() {
            return regeneratorRuntime.wrap(function _callee100$(_context102) {
              while (1) {
                switch (_context102.prev = _context102.next) {
                  case 0:
                    _context102.next = 2;
                    return this.fireStore.collection('TituloDevedor').add(tituloDevedor);

                  case 2:
                    return _context102.abrupt("return", _context102.sent);

                  case 3:
                  case "end":
                    return _context102.stop();
                }
              }
            }, _callee100, this);
          }));
        }
      }, {
        key: "setarTituloDevedor",
        value: function setarTituloDevedor(tituloDevedor, id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee101() {
            return regeneratorRuntime.wrap(function _callee101$(_context103) {
              while (1) {
                switch (_context103.prev = _context103.next) {
                  case 0:
                    _context103.next = 2;
                    return this.fireStore.collection('TituloDevedor').doc(id).set(tituloDevedor).then(function () {
                      console.log('Titulo salvo com sucesso');
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context103.stop();
                }
              }
            }, _callee101, this);
          }));
        }
      }, {
        key: "salvarTituloDevedor",
        value: function salvarTituloDevedor(tituloDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee102() {
            return regeneratorRuntime.wrap(function _callee102$(_context104) {
              while (1) {
                switch (_context104.prev = _context104.next) {
                  case 0:
                    _context104.next = 2;
                    return this.fireStore.collection('TituloDevedor').add(tituloDevedor).then(function () {
                      console.log('titulo devedor criado com sucesso!');
                    });

                  case 2:
                  case "end":
                    return _context104.stop();
                }
              }
            }, _callee102, this);
          }));
        }
      }, {
        key: "buscarDevedoresTitulo",
        value: function buscarDevedoresTitulo(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee103() {
            return regeneratorRuntime.wrap(function _callee103$(_context105) {
              while (1) {
                switch (_context105.prev = _context105.next) {
                  case 0:
                    _context105.next = 2;
                    return this.fireStore.firestore.collection('TituloDevedor').where('idTitulo', '==', idTitulo).get();

                  case 2:
                    return _context105.abrupt("return", _context105.sent);

                  case 3:
                  case "end":
                    return _context105.stop();
                }
              }
            }, _callee103, this);
          }));
        }
      }, {
        key: "apagarTituloDevedor",
        value: function apagarTituloDevedor(idTituloDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee104() {
            return regeneratorRuntime.wrap(function _callee104$(_context106) {
              while (1) {
                switch (_context106.prev = _context106.next) {
                  case 0:
                    return _context106.abrupt("return", this.fireStore.firestore.collection('TituloDevedor').doc(idTituloDevedor).delete());

                  case 1:
                  case "end":
                    return _context106.stop();
                }
              }
            }, _callee104, this);
          }));
        }
      }, {
        key: "atualizaTituloDevedor",
        value: function atualizaTituloDevedor(tituloDevedor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee105() {
            return regeneratorRuntime.wrap(function _callee105$(_context107) {
              while (1) {
                switch (_context107.prev = _context107.next) {
                  case 0:
                    _context107.next = 2;
                    return this.fireStore.collection('TituloDevedor').doc(tituloDevedor.idTituloDevedor).update(tituloDevedor);

                  case 2:
                    return _context107.abrupt("return", _context107.sent);

                  case 3:
                  case "end":
                    return _context107.stop();
                }
              }
            }, _callee105, this);
          }));
        }
      }]);

      return TituloDevedorService;
    }();

    TituloDevedorService.staticDevedor = new Array();

    TituloDevedorService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    TituloDevedorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], TituloDevedorService);
    /***/
  },

  /***/
  "./src/app/services/titulo.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/titulo.service.ts ***!
    \********************************************/

  /*! exports provided: TituloService */

  /***/
  function srcAppServicesTituloServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TituloService", function () {
      return TituloService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var TituloService =
    /*#__PURE__*/
    function () {
      function TituloService(fireStore) {
        _classCallCheck(this, TituloService);

        this.fireStore = fireStore;
      }

      _createClass(TituloService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.getDadosCompletoTituloByID(route.params.id);
        }
      }, {
        key: "criaTitulo",
        value: function criaTitulo(titulo) {
          return this.fireStore.collection('Titulo').add(titulo);
        }
      }, {
        key: "buscaTituloLote",
        value: function buscaTituloLote(idLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee106() {
            return regeneratorRuntime.wrap(function _callee106$(_context108) {
              while (1) {
                switch (_context108.prev = _context108.next) {
                  case 0:
                    _context108.next = 2;
                    return this.fireStore.firestore.collection('Titulo').where('idLote', '==', idLote).get();

                  case 2:
                    return _context108.abrupt("return", _context108.sent);

                  case 3:
                  case "end":
                    return _context108.stop();
                }
              }
            }, _callee106, this);
          }));
        }
      }, {
        key: "getDadosCompletoTituloByID",
        value: function getDadosCompletoTituloByID(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee109() {
            var _this83 = this;

            var titulo;
            return regeneratorRuntime.wrap(function _callee109$(_context111) {
              while (1) {
                switch (_context111.prev = _context111.next) {
                  case 0:
                    _context111.next = 2;
                    return this.fireStore.firestore.collection('Titulo').doc(idTitulo).get().then(function (dataTitulo) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this83, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee108() {
                        var _this84 = this;

                        return regeneratorRuntime.wrap(function _callee108$(_context110) {
                          while (1) {
                            switch (_context110.prev = _context110.next) {
                              case 0:
                                _context110.next = 2;
                                return this.fireStore.firestore.collection('TituloDevedor').where('idTitulo', '==', dataTitulo.id).get().then(function (dataDevedores) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this84, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee107() {
                                    var devedores, entregador, representante;
                                    return regeneratorRuntime.wrap(function _callee107$(_context109) {
                                      while (1) {
                                        switch (_context109.prev = _context109.next) {
                                          case 0:
                                            devedores = new Array();
                                            dataDevedores.docs.map(function (devedor) {
                                              devedores.push(devedor.data());
                                            });
                                            _context109.next = 4;
                                            return this.fireStore.firestore.collection('Representante').where('idTitulo', '==', dataTitulo.id).where('tipo', '==', 'ENTREGADOR').get().then(function (dataEntregador) {
                                              return dataEntregador.docs[0] ? dataEntregador.docs[0].data() : undefined;
                                            });

                                          case 4:
                                            entregador = _context109.sent;
                                            _context109.next = 7;
                                            return this.fireStore.firestore.collection('Representante').where('idTitulo', '==', dataTitulo.id).where('tipo', '==', 'REPRESENTANTE').get().then(function (dataRepresentante) {
                                              return dataRepresentante.docs[0] ? dataRepresentante.docs[0].data() : undefined;
                                            });

                                          case 7:
                                            representante = _context109.sent;
                                            titulo = {
                                              dados: dataTitulo.data(),
                                              devedores: devedores,
                                              entregador: entregador,
                                              representante: representante
                                            };

                                          case 9:
                                          case "end":
                                            return _context109.stop();
                                        }
                                      }
                                    }, _callee107, this);
                                  }));
                                });

                              case 2:
                              case "end":
                                return _context110.stop();
                            }
                          }
                        }, _callee108, this);
                      }));
                    });

                  case 2:
                    return _context111.abrupt("return", titulo);

                  case 3:
                  case "end":
                    return _context111.stop();
                }
              }
            }, _callee109, this);
          }));
        }
      }, {
        key: "getTituloByID",
        value: function getTituloByID(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee110() {
            var titulo;
            return regeneratorRuntime.wrap(function _callee110$(_context112) {
              while (1) {
                switch (_context112.prev = _context112.next) {
                  case 0:
                    titulo = {};
                    _context112.next = 3;
                    return this.fireStore.firestore.collection('Titulo').doc(idTitulo).get().then(function (dataTitulo) {
                      if (dataTitulo) titulo = dataTitulo.data();
                    });

                  case 3:
                    return _context112.abrupt("return", titulo);

                  case 4:
                  case "end":
                    return _context112.stop();
                }
              }
            }, _callee110, this);
          }));
        }
      }, {
        key: "apagarTitulo",
        value: function apagarTitulo(idTitulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee111() {
            return regeneratorRuntime.wrap(function _callee111$(_context113) {
              while (1) {
                switch (_context113.prev = _context113.next) {
                  case 0:
                    _context113.next = 2;
                    return this.fireStore.collection('Titulo').doc(idTitulo).delete();

                  case 2:
                  case "end":
                    return _context113.stop();
                }
              }
            }, _callee111, this);
          }));
        }
      }, {
        key: "atualizaTitulo",
        value: function atualizaTitulo(idTitulo, titulo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee112() {
            return regeneratorRuntime.wrap(function _callee112$(_context114) {
              while (1) {
                switch (_context114.prev = _context114.next) {
                  case 0:
                    _context114.next = 2;
                    return this.fireStore.firestore.collection('Titulo').doc(idTitulo).update(titulo);

                  case 2:
                    return _context114.abrupt("return", _context114.sent);

                  case 3:
                  case "end":
                    return _context114.stop();
                }
              }
            }, _callee112, this);
          }));
        }
      }]);

      return TituloService;
    }();

    TituloService.staticTitulo = {};

    TituloService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    TituloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], TituloService);
    /***/
  },

  /***/
  "./src/app/services/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/usuario.service.ts ***!
    \*********************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(fireStore, fireAuth) {
        _classCallCheck(this, UsuarioService);

        this.fireStore = fireStore;
        this.fireAuth = fireAuth;
        this.users = [];
      }

      _createClass(UsuarioService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var idU = this.fireAuth.auth.currentUser.uid;
          return this.getUser(idU);
        }
      }, {
        key: "setUser",
        value: function setUser(usuario, idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee113() {
            return regeneratorRuntime.wrap(function _callee113$(_context115) {
              while (1) {
                switch (_context115.prev = _context115.next) {
                  case 0:
                    _context115.next = 2;
                    return this.fireStore.firestore.collection('Usuario').doc(idU).set(usuario);

                  case 2:
                  case "end":
                    return _context115.stop();
                }
              }
            }, _callee113, this);
          }));
        }
      }, {
        key: "addUser",
        value: function addUser(usuario, idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee114() {
            return regeneratorRuntime.wrap(function _callee114$(_context116) {
              while (1) {
                switch (_context116.prev = _context116.next) {
                  case 0:
                    _context116.next = 2;
                    return this.fireStore.collection('Usuario').doc(idU).set(usuario);

                  case 2:
                  case "end":
                    return _context116.stop();
                }
              }
            }, _callee114, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(usuario, idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee115() {
            return regeneratorRuntime.wrap(function _callee115$(_context117) {
              while (1) {
                switch (_context117.prev = _context117.next) {
                  case 0:
                    _context117.next = 2;
                    return this.fireStore.firestore.collection('Usuario').doc(idU).update(usuario);

                  case 2:
                  case "end":
                    return _context117.stop();
                }
              }
            }, _callee115, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee116() {
            var user;
            return regeneratorRuntime.wrap(function _callee116$(_context118) {
              while (1) {
                switch (_context118.prev = _context118.next) {
                  case 0:
                    _context118.next = 2;
                    return this.fireStore.firestore.collection('Usuario').doc(idU).get().then(function (data) {
                      user = data.data();
                    });

                  case 2:
                    return _context118.abrupt("return", user);

                  case 3:
                  case "end":
                    return _context118.stop();
                }
              }
            }, _callee116, this);
          }));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(usuario, idU) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee117() {
            return regeneratorRuntime.wrap(function _callee117$(_context119) {
              while (1) {
                switch (_context119.prev = _context119.next) {
                  case 0:
                    _context119.next = 2;
                    return this.fireStore.firestore.collection('Usuario').doc(idU).delete();

                  case 2:
                  case "end":
                    return _context119.stop();
                }
              }
            }, _callee117, this);
          }));
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])], UsuarioService);
    /***/
  },

  /***/
  "./src/app/services/valida.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/valida.service.ts ***!
    \********************************************/

  /*! exports provided: ValidaService */

  /***/
  function srcAppServicesValidaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidaService", function () {
      return ValidaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var ValidaService =
    /*#__PURE__*/
    function () {
      function ValidaService(fireStore) {
        _classCallCheck(this, ValidaService);

        this.fireStore = fireStore;
      }

      _createClass(ValidaService, [{
        key: "validaBanco",
        value: function validaBanco(banco, conta, agencia) {
          console.log(banco);
          console.log(conta);
          console.log(agencia);

          if (banco != null && conta != null && agencia != null) {
            if (banco.trim().length >= 3 && banco.trim().length <= 120) {
              if (conta.length <= 10 && conta.length >= 1) {
                if (agencia.length <= 10 && agencia.length >= 1) {
                  return true;
                } else {
                  console.log('agencia Inválida');
                }
              } else {
                console.log('conta inválida');
              }
            } else {
              console.log('idBanco Inválido');
              console.log(banco);
            }
          } else {
            console.log('undidefined');
          }

          return false;
        }
      }, {
        key: "validarTituloEspecie",
        value: function validarTituloEspecie(titulo) {
          if (titulo.siglaEspecie == 'CH' && titulo.alinea.trim().length >= 3 && titulo.alinea.length <= 50) {
            return true;
          } else if (titulo.siglaEspecie != 'CH') {
            titulo.alinea = "";
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "validarEndossante",
        value: function validarEndossante(endossante) {
          console.log(endossante);

          if (endossante != null) {
            if (endossante.endossante != null && endossante.tipoDocumentoEndossante != null && endossante.documentoEndossante != null && endossante != undefined) {
              if (endossante.endossante.trim().length >= 3 && endossante.endossante.trim().length <= 50) {
                if (endossante.tipoDocumentoEndossante == 'CPF' || endossante.tipoDocumentoEndossante == 'CNPJ') {
                  if (endossante.documentoEndossante.trim().length >= 3 && endossante.documentoEndossante.trim().length <= 50) {
                    return true;
                  } else {
                    console.log('Documento do endosante inválido');
                    return false;
                  }
                } else {
                  console.log('Tipo documento do endosante inválido');
                  return false;
                }
              } else {
                console.log('Documento do endosante inválido');
                return false;
              }
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      }, {
        key: "strN",
        value: function strN(palavras) {
          if (this.str(palavras) || !palavras) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "str",
        value: function str(palavras) {
          if (palavras && palavras.trim().length >= 3 && palavras.length <= 50) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "emailExiste",
        value: function emailExiste(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee118() {
            return regeneratorRuntime.wrap(function _callee118$(_context120) {
              while (1) {
                switch (_context120.prev = _context120.next) {
                  case 0:
                    _context120.next = 2;
                    return this.fireStore.firestore.collection('Empresa').where('email', '==', email).get();

                  case 2:
                    return _context120.abrupt("return", _context120.sent);

                  case 3:
                  case "end":
                    return _context120.stop();
                }
              }
            }, _callee118, this);
          }));
        }
      }, {
        key: "documentoExiste",
        value: function documentoExiste(numeroDocumento) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee119() {
            return regeneratorRuntime.wrap(function _callee119$(_context121) {
              while (1) {
                switch (_context121.prev = _context121.next) {
                  case 0:
                    _context121.next = 2;
                    return this.fireStore.firestore.collection('Empresa').where('documento', '==', numeroDocumento).get();

                  case 2:
                    return _context121.abrupt("return", _context121.sent);

                  case 3:
                  case "end":
                    return _context121.stop();
                }
              }
            }, _callee119, this);
          }));
        }
      }]);

      return ValidaService;
    }();

    ValidaService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ValidaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], ValidaService);
    /***/
  },

  /***/
  "./src/app/titulos-lote/titulos-lote.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/titulos-lote/titulos-lote.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTitulosLoteTitulosLoteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* === TÍTULOS DO LOTE === */\n.tlotes-container {\n  width: 1024px;\n  margin: 0 auto; }\n.tlotes-container h2 {\n  margin-bottom: 25px; }\n/* === TABELA TÍTULOS APONTADOS === */\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  font-size: 12.5px; }\n.table .title-table {\n  background-color: #bfc0c5;\n  font-size: 15px; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n/* === BOTÃO === */\n.btn-wrapper {\n  width: 300px;\n  margin: 0 auto; }\n.btn-wrapper .btn-before {\n  margin-left: 70px;\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0dWxvcy1sb3RlL3RpdHVsb3MtbG90ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGl0dWxvcy1sb3RlL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2l0ZS1kaXN0cmlidWlkb3ItbWFzdGVyL3NyY1xcYXBwXFx0aXR1bG9zLWxvdGVcXHRpdHVsb3MtbG90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsNEJBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7QUFHaEI7RUFDSSxtQkFBbUIsRUFBQTtBQUl2QixxQ0FBQTtBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFJakIsa0JBQUE7QUFFRjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGl0dWxvcy1sb3RlL3RpdHVsb3MtbG90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qID09PSBUw41UVUxPUyBETyBMT1RFID09PSAqL1xuLnRsb3Rlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4udGxvdGVzLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cblxuLyogPT09IFRBQkVMQSBUw41UVUxPUyBBUE9OVEFET1MgPT09ICovXG4udGFibGUge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDEyLjVweDsgfVxuXG4udGFibGUgLnRpdGxlLXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzBjNTtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi50YWJsZSAudGFibGUtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDk1ZDZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogPT09IEJPVMODTyA9PT0gKi9cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLmJ0bi13cmFwcGVyIC5idG4tYmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIHdpZHRoOiAxNTBweDsgfVxuIiwiLyogPT09IFTDjVRVTE9TIERPIExPVEUgPT09ICovXG4udGxvdGVzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGxvdGVzLWNvbnRhaW5lciBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG5cbi8qID09PSBUQUJFTEEgVMONVFVMT1MgQVBPTlRBRE9TID09PSAqL1xuLnRhYmxlIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMTIuNXB4O1xuICB9XG4gIFxuICAudGFibGUgLnRpdGxlLXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM1O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgICBjb2xvcjogIzA5NWQ2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gIC8qID09PSBCT1TDg08gPT09ICovXG5cbi5idG4td3JhcHBlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5idG4td3JhcHBlciAuYnRuLWJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/titulos-lote/titulos-lote.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/titulos-lote/titulos-lote.component.ts ***!
    \********************************************************/

  /*! exports provided: TitulosLoteComponent */

  /***/
  function srcAppTitulosLoteTitulosLoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitulosLoteComponent", function () {
      return TitulosLoteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");

    var TitulosLoteComponent =
    /*#__PURE__*/
    function () {
      function TitulosLoteComponent(funcoesService) {
        _classCallCheck(this, TitulosLoteComponent);

        this.funcoesService = funcoesService;
        this.data = this.funcoesService.DataAtualExtenso();
      }

      _createClass(TitulosLoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ImprimirConteudo",
        value: function ImprimirConteudo() {
          this.funcoesService.ImprimirConteudoDiv(this.divDeclaracao);
        }
      }]);

      return TitulosLoteComponent;
    }();

    TitulosLoteComponent.ctorParameters = function () {
      return [{
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divDeclaracao', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TitulosLoteComponent.prototype, "divDeclaracao", void 0);
    TitulosLoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-titulos-lote',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./titulos-lote.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/titulos-lote/titulos-lote.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./titulos-lote.component.scss */
      "./src/app/titulos-lote/titulos-lote.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_funcoes_service__WEBPACK_IMPORTED_MODULE_2__["FuncoesService"]])], TitulosLoteComponent);
    /***/
  },

  /***/
  "./src/app/titulos/titulos.component.scss":
  /*!************************************************!*\
    !*** ./src/app/titulos/titulos.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTitulosTitulosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* === PESQUISA TITULOS === */\n.cl-titulos {\n  margin-bottom: 3rem; }\n.titledigital {\n  margin: 0 0 20px 230px; }\n.input-group {\n  width: 40%;\n  margin-left: 230px; }\n.input-group .custom-select {\n  border-radius: 3px;\n  margin-right: 5px;\n  z-index: 1; }\n.cl-titulos .form-check-label {\n  margin: 5px 5px 0 0; }\n.cl-titulos .btn {\n  margin-left: 5px; }\n/*------ TABELA --------*/\n.table {\n  max-width: 1024px;\n  margin: auto;\n  margin-bottom: 6rem;\n  text-align: center; }\n.table .title-table {\n  background-color: #bfc0c5; }\n.table .table-icon:hover {\n  color: #095d6e;\n  cursor: pointer; }\n.alert {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0dWxvcy9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNpdGUtZGlzdHJpYnVpZG9yLW1hc3Rlci9zcmNcXGFwcFxcdGl0dWxvc1xcdGl0dWxvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBQTtBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVSxFQUFBO0FBR1o7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGdCQUFnQixFQUFBO0FBSWxCLHlCQUFBO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpdHVsb3MvdGl0dWxvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PSBQRVNRVUlTQSBUSVRVTE9TID09PSAqL1xuLmNsLXRpdHVsb3Mge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLnRpdGxlZGlnaXRhbCB7XG4gIG1hcmdpbjogMCAwIDIwcHggMjMwcHg7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbn1cblxuLmlucHV0LWdyb3VwIC5jdXN0b20tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNsLXRpdHVsb3MgLmZvcm0tY2hlY2stbGFiZWwge1xuICBtYXJnaW46IDVweCA1cHggMCAwO1xufVxuXG4uY2wtdGl0dWxvcyAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuXG4vKi0tLS0tLSBUQUJFTEEgLS0tLS0tLS0qL1xuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUgLnRpdGxlLXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzBjNTtcbn1cblxuLnRhYmxlIC50YWJsZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwOTVkNmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFsZXJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/titulos/titulos.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/titulos/titulos.component.ts ***!
    \**********************************************/

  /*! exports provided: TitulosComponent */

  /***/
  function srcAppTitulosTitulosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitulosComponent", function () {
      return TitulosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_lote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/lote.service */
    "./src/app/services/lote.service.ts");
    /* harmony import */


    var _services_funcoes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/funcoes.service */
    "./src/app/services/funcoes.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_empresa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10__);

    var TitulosComponent =
    /*#__PURE__*/
    function () {
      function TitulosComponent(router, loteService, funcoeService, fireAuth, empresaService, formBuilder, spinner) {
        _classCallCheck(this, TitulosComponent);

        this.router = router;
        this.loteService = loteService;
        this.funcoeService = funcoeService;
        this.fireAuth = fireAuth;
        this.empresaService = empresaService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.lote = {
          status: 'TODOS OS LOTES'
        };
        this.lotes = new Array();
        this.empresa = {};
        this.buscaEmpresa();
        this.fGroupLote = this.formBuilder.group({
          'status': [this.lote.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(TitulosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscaEmpresa",
        value: function buscaEmpresa() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee121() {
            var _this85 = this;

            return regeneratorRuntime.wrap(function _callee121$(_context123) {
              while (1) {
                switch (_context123.prev = _context123.next) {
                  case 0:
                    console.log('idEmpresa', _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"].idEmpresa);
                    _context123.next = 3;
                    return this.empresaService.buscaEmpresa(_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"].idEmpresa).then(function (empresa) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this85, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee120() {
                        return regeneratorRuntime.wrap(function _callee120$(_context122) {
                          while (1) {
                            switch (_context122.prev = _context122.next) {
                              case 0:
                                this.empresa = empresa;
                                this.lote.responsavel = empresa.nome;
                                this.alterandoConsultaLote();

                              case 3:
                              case "end":
                                return _context122.stop();
                            }
                          }
                        }, _callee120, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context123.stop();
                }
              }
            }, _callee121, this);
          }));
        }
      }, {
        key: "iniciaNovoLote",
        value: function iniciaNovoLote() {
          this.lote.idUsuario = this.fireAuth.auth.currentUser.uid;
          this.lote.idEmpresa = _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"].idEmpresa;
          this.lote.dataAbertura = this.funcoeService.DataAtual();
          this.lote.numeroLote = null;
          this.lote.qtdTitulo = 0;
          this.lote.responsavel = this.empresa.nome;
          this.lote.status = "EM ABERTO";
          this.lote.valorTotalTitulo = 0;
          this.lote.dataFechamnto = null;
        }
      }, {
        key: "AbrirLote",
        value: function AbrirLote() {
          var _this86 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Confirma a abertura de um novo lote?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, Continuar!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            console.log(result);

            if (result.value) {
              _this86.abrirLote();
            }
          });
        }
      }, {
        key: "alterandoConsultaLote",
        value: function alterandoConsultaLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee122() {
            var status;
            return regeneratorRuntime.wrap(function _callee122$(_context124) {
              while (1) {
                switch (_context124.prev = _context124.next) {
                  case 0:
                    status = this.fGroupLote.controls['status'].value;
                    console.log(status);
                    this.lotes = [];

                    if (!(status == 'TODOS OS LOTES')) {
                      _context124.next = 8;
                      break;
                    }

                    _context124.next = 6;
                    return this.buscarTodosLotes();

                  case 6:
                    _context124.next = 10;
                    break;

                  case 8:
                    _context124.next = 10;
                    return this.buscarStatusLote();

                  case 10:
                  case "end":
                    return _context124.stop();
                }
              }
            }, _callee122, this);
          }));
        }
      }, {
        key: "buscarStatusLote",
        value: function buscarStatusLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee123() {
            var _this87 = this;

            var status;
            return regeneratorRuntime.wrap(function _callee123$(_context125) {
              while (1) {
                switch (_context125.prev = _context125.next) {
                  case 0:
                    status = this.fGroupLote.controls['status'].value;
                    this.spinner.show();

                    if (!(this.lotes.length == 0)) {
                      _context125.next = 7;
                      break;
                    }

                    _context125.next = 5;
                    return this.loteService.buscarLoteStatus(this.empresa.idEmpresa, status).then(function (data) {
                      console.log(data.docs[0].data);

                      for (var i = 0; i < data.size; i++) {
                        _this87.lotes.push(data.docs[i].data());

                        _this87.lotes[i].idLote = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log('error na consulta buscar status lote', error);
                    }).finally(function () {
                      setTimeout(function () {
                        _this87.spinner.hide();
                      }, 1000);
                    });

                  case 5:
                    _context125.next = 8;
                    break;

                  case 7:
                    this.loteService.paginarLoteStatus(this.empresa.idEmpresa, status, this.lotes[this.lotes.length - 1].numeroLote).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        _this87.lotes.push(data.docs[i].data());

                        _this87.lotes[i].idLote = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log(error);
                    }).finally(function () {
                      setTimeout(function () {
                        _this87.spinner.hide();
                      }, 1000);
                    });

                  case 8:
                  case "end":
                    return _context125.stop();
                }
              }
            }, _callee123, this);
          }));
        }
      }, {
        key: "buscarTodosLotes",
        value: function buscarTodosLotes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee124() {
            var _this88 = this;

            return regeneratorRuntime.wrap(function _callee124$(_context126) {
              while (1) {
                switch (_context126.prev = _context126.next) {
                  case 0:
                    if (!(this.lotes.length == 0)) {
                      _context126.next = 6;
                      break;
                    }

                    this.spinner.show();
                    _context126.next = 4;
                    return this.loteService.buscarLoteEmpresa(this.empresa.idEmpresa).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        _this88.lotes.push(data.docs[i].data());

                        _this88.lotes[i].idLote = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log('error na consulta buscar status lote', error);
                    }).finally(function () {
                      setTimeout(function () {
                        _this88.spinner.hide();
                      }, 1000);
                    });

                  case 4:
                    _context126.next = 8;
                    break;

                  case 6:
                    this.spinner.show();
                    this.loteService.paginarLoteEmpresa(this.empresa.idEmpresa, this.lotes[this.lotes.length - 1].numeroLote).then(function (data) {
                      for (var i = 0; i < data.size; i++) {
                        _this88.lotes.push(data.docs[i].data());

                        _this88.lotes[i].idLote = data.docs[i].id;
                      }
                    }).catch(function (error) {
                      console.log(error);
                    }).finally(function () {
                      setTimeout(function () {
                        _this88.spinner.hide();
                      }, 1000);
                    });

                  case 8:
                  case "end":
                    return _context126.stop();
                }
              }
            }, _callee124, this);
          }));
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee125() {
            var status;
            return regeneratorRuntime.wrap(function _callee125$(_context127) {
              while (1) {
                switch (_context127.prev = _context127.next) {
                  case 0:
                    status = this.fGroupLote.controls['status'].value;

                    if (!(status == 'TODOS OS LOTES')) {
                      _context127.next = 6;
                      break;
                    }

                    _context127.next = 4;
                    return this.buscarTodosLotes();

                  case 4:
                    _context127.next = 8;
                    break;

                  case 6:
                    _context127.next = 8;
                    return this.buscarStatusLote();

                  case 8:
                  case "end":
                    return _context127.stop();
                }
              }
            }, _callee125, this);
          }));
        }
      }, {
        key: "abrirLote",
        value: function abrirLote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee126() {
            var _this89 = this;

            return regeneratorRuntime.wrap(function _callee126$(_context128) {
              while (1) {
                switch (_context128.prev = _context128.next) {
                  case 0:
                    this.iniciaNovoLote();
                    _context128.next = 3;
                    return this.loteService.criaLote(this.lote).then(function (docRef) {
                      _this89.lote.idLote = docRef.id;

                      _this89.router.navigate(['/digitacao-titulos' + '/' + _this89.lote.idLote]);
                    });

                  case 3:
                  case "end":
                    return _context128.stop();
                }
              }
            }, _callee126, this);
          }));
        }
      }, {
        key: "apagarLoteArray",
        value: function apagarLoteArray(idLote) {
          for (var i = 0; i < this.lotes.length; i++) {
            if (this.lotes[i].idLote == idLote) {
              this.lotes.splice(i, 1);
            }
          }
        }
      }, {
        key: "apagarLote",
        value: function apagarLote(idLote) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee127() {
            return regeneratorRuntime.wrap(function _callee127$(_context129) {
              while (1) {
                switch (_context129.prev = _context129.next) {
                  case 0:
                    _context129.next = 2;
                    return this.loteService.apagarLoteId(idLote);

                  case 2:
                    this.apagarLoteArray(idLote);

                  case 3:
                  case "end":
                    return _context129.stop();
                }
              }
            }, _callee127, this);
          }));
        }
      }, {
        key: "editarLote",
        value: function editarLote(idLote) {
          this.router.navigate(['/digitacao-titulos' + '/' + idLote]);
        }
      }]);

      return TitulosComponent;
    }();

    TitulosComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_lote_service__WEBPACK_IMPORTED_MODULE_5__["LoteService"]
      }, {
        type: _services_funcoes_service__WEBPACK_IMPORTED_MODULE_6__["FuncoesService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_empresa_service__WEBPACK_IMPORTED_MODULE_8__["EmpresaService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]
      }];
    };

    TitulosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-titulos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./titulos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/titulos/titulos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./titulos.component.scss */
      "./src/app/titulos/titulos.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_lote_service__WEBPACK_IMPORTED_MODULE_5__["LoteService"], _services_funcoes_service__WEBPACK_IMPORTED_MODULE_6__["FuncoesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_empresa_service__WEBPACK_IMPORTED_MODULE_8__["EmpresaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])], TitulosComponent);
    /***/
  },

  /***/
  "./src/app/validators/validacao.ts":
  /*!*****************************************!*\
    !*** ./src/app/validators/validacao.ts ***!
    \*****************************************/

  /*! exports provided: Validacoes */

  /***/
  function srcAppValidatorsValidacaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validacoes", function () {
      return Validacoes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Validacoes = function Validacoes() {
      _classCallCheck(this, Validacoes);
    };

    Validacoes.ValorMinimo = function (valorMinimo) {
      return function (control) {
        var valorDigitado = control.value;

        if (parseFloat(valorDigitado) < valorMinimo) {
          return {
            valorPermitido: true
          };
        }

        return null;
      };
    };
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyBwnRCP3MrlBC6zLbqtJbRBYPYy66o1hLs",
        authDomain: "franca-distribuidor.firebaseapp.com",
        databaseURL: "https://franca-distribuidor.firebaseio.com",
        projectId: "franca-distribuidor",
        storageBucket: "franca-distribuidor.appspot.com",
        messagingSenderId: "468903477859",
        appId: "1:468903477859:web:778a2846126af0b94dee56",
        measurementId: "G-RJV71XKXM8"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Adam\Desktop\site-distribuidor-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map