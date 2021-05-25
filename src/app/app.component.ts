import { Component, VERSION } from '@angular/core';

/**
 * creo un oggetto di tipo monum che contenga le informazioni necessarie
 */
export class monum {
  nome: string;
  posiz: string;
  etichet: string;
  url: string;
  qrc: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //monumArr: Array<monum> = [];
  selezione: number = 0;

  //console.log(asd);
  //creo due dummy per lavorare
  monum1: monum = {
    nome: 'Tempio di Poseidone',
    posiz: 'Piazza Castello 74123 Taranto TA 40.473621, 17.233016',
    etichet: 'Past And Present tempio di Poseidone',
    url: 'www.codiceurl.taranto.it',
    qrc:
      'https://stackblitz.com/files/interf-qrcode/github/Maveth94/interf-qrcode/Save6/src/app/img/download%20(1).png'
  };

  monum2: monum = {
    nome: 'Castello',
    posiz: 'Piazza C 74123 Taranto TA 40.473621, 17.233016',
    etichet: 'Virtual tour del castello',
    url: 'www.codice2.taranto.it',
    qrc:
      'https://stackblitz.com/files/interf-qrcode/github/Maveth94/interf-qrcode/Save6/src/app/download.png'
  };

  //inserisco i dummy nell'array
  monumArr: Array<monum> = [this.monum1, this.monum2];

  //funzione per aggiungere dinamicamente oggetti all'array, comunica con componente aggiungi
  addMonum(_newMon: monum) {
    this.monumArr.push(_newMon);
  }
}
