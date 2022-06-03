import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs/urls";
import {IFilmResponce} from "../../../models/film.responce.interface";

@Injectable({
  providedIn: 'root'
})
export class GenreFilmListService {
  private _apiKey: string = '&api_key=b27ed8132cb010fa85bca929ac5b00c4';
  constructor(private httpClient:HttpClient) { }
  getFilmsWithGenre(genreId:number, page:number):Observable<IFilmResponce>{
    return this.httpClient.get<IFilmResponce>(urls.mainURL+urls.genreFilmList+genreId+this._apiKey+`&page=${page}`)
  }
}
