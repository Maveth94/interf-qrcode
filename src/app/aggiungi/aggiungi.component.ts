import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { monum } from '../app.component';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  @Input() selezioneBut: number;

  constructor() {}

  ngOnInit() {}
}
