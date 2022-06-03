import {Component, OnInit} from '@angular/core';

import {FilmsService} from "../../services/films.service";
import {IPopFilm} from "../../../../models/pop.film.interface";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  page: number = 1
  films: IPopFilm[]

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmsService.getAllFilms(this.page).subscribe(object => {
      const {page, results} = object
      this.films = results
    })
  }

  left(): void {
    if (this.page > 1 && this.page <= 500) {
      --this.page
      this.filmsService.getAllFilms(this.page).subscribe(object => {
        const {page, results} = object
        this.films = results
      })
    }
  }

  right(): void {
    if (this.page > 0 && this.page <= 500) {
      ++this.page
      this.filmsService.getAllFilms(this.page).subscribe(object => {
        const {page, results} = object
        this.films = results
      })
    }
  }

  goTo(): void {
    if (this.page > 0 && this.page <= 500) {
      this.page
      this.filmsService.getAllFilms(this.page).subscribe(object => {
        const {page, results} = object
        this.films = results
      })
    }
  }
}
