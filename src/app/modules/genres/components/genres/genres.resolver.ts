import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IGenresResponce} from "../../../../models/genres.responce.interface";
import {GenresService} from "../../service/genres.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenresResponce> {
  constructor(private genresService: GenresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenresResponce> | Promise<IGenresResponce> | IGenresResponce {
    return this.genresService.getGenres()
  }
}
