import {Component, OnInit} from '@angular/core';
import {IPopFilm} from "../../models/pop.film.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.css']
})
export class PopularFilmsComponent implements OnInit {
  popularFilms: IPopFilm[]

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({popFilmsData}) => {
      const {page, results} = popFilmsData
      return this.popularFilms = results
    })

  }

}
