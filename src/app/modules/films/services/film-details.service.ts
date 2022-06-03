import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDetailsFilm} from "../../../models/details.film.interface";
import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {
  private _apiKey: string = '?api_key=b27ed8132cb010fa85bca929ac5b00c4';

  constructor(private httpClient: HttpClient) {
  }

  getFilmInformation(id: number): Observable<IDetailsFilm> {
    return this.httpClient.get<IDetailsFilm>(urls.mainURL + urls.detailsFilm + id + this._apiKey)
  }
}
