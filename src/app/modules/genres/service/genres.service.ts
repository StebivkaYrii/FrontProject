import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenresResponce} from "../../../models/genres.responce.interface";

import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = '?api_key=b27ed8132cb010fa85bca929ac5b00c4';

  getGenres(): Observable<IGenresResponce> {
    return this.httpClient.get<IGenresResponce>(urls.mainURL + urls.genres + this._apiKey)
  }
}
