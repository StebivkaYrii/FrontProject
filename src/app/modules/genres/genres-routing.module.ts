import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GenresComponent} from "./components/genres/genres.component";
import {GenresResolver} from "./components/genres/genres.resolver";
import {GenresService} from "./service/genres.service";

const routes: Routes = [
  {path:'',component:GenresComponent, resolve:{genresData:GenresResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[GenresService,GenresResolver]
})
export class GenresRoutingModule { }
