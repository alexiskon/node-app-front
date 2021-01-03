import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http: HttpClient, private router: Router) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/users/me'

  getUserProfile(): Observable<any> {
    let token = localStorage.getItem('token')
    return this.http.get<any>(this.url, { observe: 'response', headers: new HttpHeaders().set('Authorization', token) })
      .pipe(catchError(() => {
        window.confirm("Login first!");
        return this.router.navigate([""]);
      }))
  }

}

