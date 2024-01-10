import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { Tp1DebutComponent } from 'src/app/tp1/tp1-debut/tp1-debut.component';
import { Tp2DebutComponent } from 'src/app/tp2/tp2-debut/tp2-debut.component';
import { Tp3DebutComponent } from 'src/app/tp3/tp3-debut/tp3-debut.component';

const routes: Routes = [
  { path: 'tp1', component: Tp1DebutComponent },
  { path: 'tp2', component: Tp2DebutComponent },
  { path: 'tp3', component: Tp3DebutComponent },


  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
