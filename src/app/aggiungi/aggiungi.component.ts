import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { monum } from '../app.component';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  @Input() selezioneBut: number;
  @Output() newMonumEvent = new EventEmitter<monum>();
  @Output() azzera = new EventEmitter<number>();
  newMon: monum;

  conferma(
    _nNome: string,
    _nPos: string,
    _nqrc:string,
    _nEtic: string,
    _nUrl: string
  ) {
    this.newMon = new monum();
    this.newMon.nome = _nNome;
    this.newMon.posiz = _nPos;
    //this.newMon.qrc = _nqrc;
    this.newMon.etichet = _nEtic;
    this.newMon.url = _nUrl;

    this.newMonumEvent.emit(this.newMon);
    this.azzera.emit(0);

    //console.log(this.newMon);
    /*
    if (
      this.newPost.titolo !== ('' || ' ') &&
      this.newPost.mess !== ('' || ' ')
    ) {
      this.newPostEvent.emit(this.newPost);
      
      this.azzera.emit(0);
    } else {
      alert('Dati mancanti o  scorretti, ritenta');
      return;
    }
    */
  }

  annulla() {
    this.azzera.emit(0);
  }

  constructor() {}

  ngOnInit() {}
}
