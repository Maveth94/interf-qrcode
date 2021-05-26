import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { monum } from '../app.component';

@Component({
  selector: 'app-modificaUrl',
  templateUrl: './modificaUrl.component.html',
  styleUrls: ['./modificaUrl.component.css']
})
export class ModificaUrlComponent implements OnInit {
  //@Input() selezioneA: number;
  @Output() emitEtic = new EventEmitter<string>();
  @Output() emitUrl = new EventEmitter<string>();
  //@Output() azzera = new EventEmitter<number>();

  modifEtic(nEtic: string) {
    this.emitEtic.emit(nEtic);
  }

  modifUrl(nUrl: string) {
    this.emitUrl.emit(nUrl);
  }

  constructor() {}

  ngOnInit() {}
}
