import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModificaComponent } from './modifica/modifica.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ModificaComponent, AggiungiComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
