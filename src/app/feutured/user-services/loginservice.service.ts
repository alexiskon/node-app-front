import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient, private router: Router) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/users/login'
  loginUser(credentials): Observable<any> {
    return this.http.post<any>(this.url, credentials, { observe: 'response' })
  }

}
