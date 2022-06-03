import {ISearchFilm} from "./search.film.interface";

export interface ISearchResponce {
  page: number,
  results: ISearchFilm[]
}
