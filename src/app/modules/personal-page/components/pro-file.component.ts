import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { IUser } from 'src/app/models/user.interface';


@Component({
  selector: 'app-pro-file',
  templateUrl: './pro-file.component.html',
  styleUrls: ['./pro-file.component.css']
})
export class ProFileComponent implements OnInit {
  user:IUser
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData})=>{
      return this.user=userData
    })
  }

}
