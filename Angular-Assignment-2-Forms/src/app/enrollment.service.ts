import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Advertisement } from './advertisement';
import { catchError } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ErollmenntService {
  _url = 'http://localhost:3000/advertisment';
  constructor(private _http: HttpClient) {}

  // enroll(user: Advertisement) {
  //   return this._http
  //     .post<any>(this._url, user)
  //     .pipe(catchError(this.errorHandler));
  // }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getPost() {
    return this._http.get(this._url);
  }

  addAdvert(data: any) {
    return this._http.post(this._url, data);
  }

  getCurrentData(title: any) {
    return this._http.get(`${this._url}/${title}`);
  }
}
