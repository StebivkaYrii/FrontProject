import {Component} from '@angular/core';

import {HomePageService} from "../../services/home-page.service";
import {ISearchFilm} from "../../models/search.film.interface";

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  films: ISearchFilm[]
  filmName: string

  constructor(private homePageService: HomePageService) {
  }

  getFilms(): void {
    this.homePageService.getFilmsFromSarch(this.filmName).subscribe(object => {
      const {page, results} = object
      return this.films = results
    })
  }

  clearFilms(): void {
    this.films = []
    this.filmName = ''
  }

}
