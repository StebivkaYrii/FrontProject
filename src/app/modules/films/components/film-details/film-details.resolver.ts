import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IDetailsFilm} from "../../../../models/details.film.interface";
import {FilmDetailsService} from "../../services/film-details.service";

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsResolver implements Resolve<IDetailsFilm> {

  constructor(private filmDetailsService: FilmDetailsService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDetailsFilm> | Promise<IDetailsFilm> | IDetailsFilm {
    const id = route.params['id'];
    return this.filmDetailsService.getFilmInformation(id)
  }

}
