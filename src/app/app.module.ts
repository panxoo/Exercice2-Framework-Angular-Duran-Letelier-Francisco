import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Tp1DebutComponent } from './tp1/tp1-debut/tp1-debut.component';
import { Tp1RowComponent } from './tp1/tp1-row/tp1-row.component';
import { Tp2DebutComponent } from './tp2/tp2-debut/tp2-debut.component';
import { Tp2CardComponent } from './tp2/tp2-card/tp2-card.component';
import { Tp3DebutComponent } from './tp3/tp3-debut/tp3-debut.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Tp1DebutComponent,
    Tp1RowComponent,
    Tp2DebutComponent,
    Tp2CardComponent,
    Tp3DebutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
