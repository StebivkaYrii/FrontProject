import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPopFilm} from "../../models/pop.film.interface";

@Component({
  selector: 'app-now-playing-films',
  templateUrl: './now-playing-films.component.html',
  styleUrls: ['./now-playing-films.component.css']
})
export class NowPlayingFilmsComponent implements OnInit {
  nowPlayFilms: IPopFilm[]

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({nowFilmsData}) => {
      const {page, results} = nowFilmsData
      return this.nowPlayFilms = results
    })
  }

}
