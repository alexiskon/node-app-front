import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/users/me'
  updateUser(credentials): Observable<any> {
    let token = localStorage.getItem('token')
    console.log(token)
    return this.http.patch<any>(this.url, credentials, {  headers: new HttpHeaders().set('Authorization', token) })
  }
}
