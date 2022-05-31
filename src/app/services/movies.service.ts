import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  // getAll(page: number = 1): Observable<IMovies> {
  //   return this.httpClient.get()<IMovies>(url.movies, {params: {page}})
  // }
}
