import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IDetailsFilm} from "../../../../models/details.film.interface";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  details: IDetailsFilm

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({filmData}) => {
      return this.details = filmData;
    })
  }

}
