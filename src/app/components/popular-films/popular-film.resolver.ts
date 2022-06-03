import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IFilmResponce} from "../../models/film.responce.interface";
import {HomePageService} from "../../services/home-page.service";

@Injectable({
  providedIn: 'root'
})
export class PopularFilmResolver implements Resolve<IFilmResponce> {

  constructor(private homePageService: HomePageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFilmResponce> | Promise<IFilmResponce> | IFilmResponce {
    return this.homePageService.getPopularFilms()
  }
}
