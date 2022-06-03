import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IGenres} from "../../../../models/genres.interface";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenres[]

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData}) => {
      const {genres} = genresData
      return this.genres = genres
    })
  }

}
