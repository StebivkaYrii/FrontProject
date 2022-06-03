import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../configs/urls";
import {IFilmResponce} from "../models/film.responce.interface";
import {ISearchResponce} from "../models/search.responce.interface";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = 'api_key=9c4d6213d4e66c7b45e3597d3b2af674';

  getPopularFilms(): Observable<IFilmResponce> {
    return this.httpClient.get<IFilmResponce>(urls.mainURL + urls.popular + '?' + this._apiKey)
  }

  getNowPlayFilms(): Observable<IFilmResponce> {
    return this.httpClient.get<IFilmResponce>(urls.mainURL + urls.nowPlaying + '?' + this._apiKey + '&page=2')
  }

  getFilmsFromSarch(name: string): Observable<ISearchResponce> {
    return this.httpClient.get<ISearchResponce>(urls.mainURL + urls.search + name + '&' + this._apiKey)
  }
}
