import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { FilmsRoutingModule } from './films-routing.module';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  declarations: [
    FilmListComponent,
    FilmDetailsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule
  ]
})
export class FilmsModule { }
