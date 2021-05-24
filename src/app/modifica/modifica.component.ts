import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { monum } from '../app.component';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  @Input() selezioneA: number;
  @Output() emitEtic = new EventEmitter<string>();
  @Output() emitUrl = new EventEmitter<string>();
  @Output() azzera = new EventEmitter<number>();

  modif(nEtic: string, nUrl: string) {
    this.emitEtic.emit(nEtic);
    this.emitUrl.emit(nUrl);
  }

  annulla() {
    this.azzera.emit(0);
  }

  constructor() {}

  ngOnInit() {}
}
