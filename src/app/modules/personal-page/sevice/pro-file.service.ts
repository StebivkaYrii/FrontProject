import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../../../models/user.interface";
import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class ProFileService {

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo(): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.user)
  }
}
