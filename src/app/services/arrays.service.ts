import { Injectable } from '@angular/core';
import { Banco } from '../interfaces/Banco';
import { AngularFirestore } from '@angular/fire/firestore';
import { Especie } from '../interfaces/Especie';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  constructor(private fireStore:AngularFirestore) { }


  carregaPracaPagamento(pracas:Array<string>){
    pracas.push('FRANCA');
    pracas.push('RESTINGA');
    pracas.push('CRISTAIS PAULISTA');
    pracas.push('RIBEIRAO CORRENTE');
    pracas.push('SAO JOSE DA BELA VISTA');
  }

  carregaEstado(estados:Array<string>){
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
  
  carregaBanco(bancos:Array<string>){
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

  carregaEspecie(){
    let especiesString: Array<string>;
    let especies:Array<Especie>
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

    for(let i = 0; i < especiesString.length ;i++){
      let especie:Especie ={}; 

      especie.especie = especiesString[i];

      let sigla:string
      sigla = especiesString[i].split(' ')[0];
      especie.sigla = sigla;

      especies.push(especie);
    }

    return especies;
  }

  async salvaEspecie(especies:Array<Especie>){
    especies = this.carregaEspecie();
    for(let i = 0; i < especies.length; i++){
      await this.fireStore.collection('Especie').doc(especies[i].sigla).set(especies[i]);
    }
  }

  async salvaPracaPagamento(pracas:Array<string>){
    this.carregaPracaPagamento(pracas);

    for(let i = 0 ; i < pracas.length; i++){
      await this.fireStore.collection('PracaPagamento').doc(pracas[i]).set(pracas[i]);
    }
  }



  async arrayInserirBanco(){
    let bancos = new Array<Banco>();
    let texto = new Array<string>();

    this.carregaBanco(texto);

    for(let i = 0 ; i < texto.length; i++){
      let banco:Banco = {};
      banco.idBanco = texto[i].substring(0,3) || null;
      banco.nome = texto[i] || null;
      bancos.push(banco);
    }
    console.log(bancos);

    await this.salvaBancos(bancos);
  }

  async salvaBancos(bancos:Array<Banco>){
    for(let i = 0 ; i < bancos.length; i++){
      await this.fireStore.firestore.collection('Banco').doc(bancos[i].idBanco).set(bancos[i]);
    }
    
  }
}
