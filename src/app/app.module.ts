import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModificaUrlComponent } from './modificaUrl/modificaUrl.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { ModificaInfoComponent } from './modifica-info/modifica-info.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ModificaUrlComponent, AggiungiComponent, ModificaInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
