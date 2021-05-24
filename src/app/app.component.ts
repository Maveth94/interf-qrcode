import { Component, VERSION } from '@angular/core';

export class monum {
  nome: string;
  posiz: string;
  etichet: string;
  url: string;
  qrc: boolean;

  /*
  set setEtic(_etic: string) {
    this.etichet = _etic;
  }

  set setUrl(_url: string) {
    this.url = _url;
  }

  
  getNome (){
    return this.nome;
  }

  getPosiz(){
    return this.posiz;
  }

  getEtchet() {
    return this.etichet;
  }

  getURL(){
    return this.url;
  }

  getQrc(){
    return this.qrc;
  }
  */
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //monumArr: Array<monum> = [];
  //selezione: number = 0;

  monum1: monum = {
    nome: 'Tempio di Poseidone',
    posiz: 'Piazza Castello 74123 Taranto TA 40.473621, 17.233016',
    etichet: 'Past And Present tempio di Poseidone',
    url: 'www.codiceurl.taranto.it',
    qrc: true
  };

  monum2: monum = {
    nome: 'Castello',
    posiz: 'Piazza C 74123 Taranto TA 40.473621, 17.233016',
    etichet: 'Virtual tour del castello',
    url: 'www.codice2.taranto.it',
    qrc: true
  };

  cambiaEtichet(_monum: monum, _newEtic:string){
    _monum.etichet = _newEtic;
  }

  monumArr: Array<monum> = [this.monum1, this.monum2];

  /*
  funSelez(num: number) {
    this.selezione = 1;
  }*/
}
