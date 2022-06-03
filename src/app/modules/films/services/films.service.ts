import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = '?api_key=b27ed8132cb010fa85bca929ac5b00c4';

  getAllFilms(page: number): Observable<any> {
    return this.httpClient.get<any>(urls.mainURL + urls.allFilms + this._apiKey + `&page=${page}`)
  }
}
