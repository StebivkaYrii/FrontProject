import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzRkNjIxM2Q0ZTY2YzdiNDVlMzU5N2QzYjJhZjY3NCIsInN1YiI6IjYyOTY0NWEzNzZlZWNmMTcyMTBkMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4SVIUUJL6E2xo3Io7EKNFWJmOwzAsrbBkxNz4PlKeVg`

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Autorization: `Bearer ${this._token}`
      }
    })
    return next.handle(request);
  }
}
