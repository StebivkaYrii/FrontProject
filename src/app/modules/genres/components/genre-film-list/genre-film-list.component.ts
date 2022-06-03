import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPopFilm} from "../../../../models/pop.film.interface";
import {GenreFilmListService} from "../../service/genre-film-list.service";

@Component({
  selector: 'app-genre-film-list',
  templateUrl: './genre-film-list.component.html',
  styleUrls: ['./genre-film-list.component.css']
})
export class GenreFilmListComponent implements OnInit {
  films: IPopFilm[]
  page: number = 1

  constructor(private genreFilmListService: GenreFilmListService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreFilmListService.getFilmsWithGenre(id, this.page).subscribe(responce => {
        const {results} = responce
        this.films = results
      })

    })
  }

  left(): void {
    if (this.page > 1 && this.page <= 500) {
      --this.page
      this.activatedRoute.params.subscribe(({id}) => {
        this.genreFilmListService.getFilmsWithGenre(id, this.page).subscribe(responce => {
          const {results} = responce
          this.films = results
        })

      })
    }
  }

  right(): void {
    if (this.page > 0 && this.page <= 500) {
      ++this.page
      this.activatedRoute.params.subscribe(({id}) => {
        this.genreFilmListService.getFilmsWithGenre(id, this.page).subscribe(responce => {
          const {results} = responce
          this.films = results
        })

      })
    }
  }

  goTo(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreFilmListService.getFilmsWithGenre(id, this.page).subscribe(responce => {
        const {results} = responce
        this.films = results
      })

    })
  }
}
