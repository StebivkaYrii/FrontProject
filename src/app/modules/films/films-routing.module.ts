import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {FilmListComponent} from "./components/film-list/film-list.component";
import {FilmsService} from "./services/films.service";
import {FilmDetailsComponent} from "./components/film-details/film-details.component";
import {FilmDetailsResolver} from "./components/film-details/film-details.resolver";
import {DeactivatorGuard} from "./components/film-details/guard/deactivator.guard";


const routes: Routes = [
  {path: '', component: FilmListComponent},
  {
    path: ':id',
    component: FilmDetailsComponent,
    resolve: {filmData: FilmDetailsResolver},
    canDeactivate: [DeactivatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [FilmsService, FilmDetailsResolver, DeactivatorGuard]
})
export class FilmsRoutingModule {
}
