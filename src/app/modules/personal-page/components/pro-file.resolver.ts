import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import { IUser } from 'src/app/models/user.interface';
import { ProFileService } from '../sevice/pro-file.service';



@Injectable({
  providedIn: 'root'
})
export class ProFileResolver implements Resolve<IUser> {
  constructor(private proFileService: ProFileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    return this.proFileService.getUserInfo()
  }
}
