import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users/logout'
  logout() {
    let token = localStorage.getItem('token')
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    return this.http.post<any>(this.url, { headers: new HttpHeaders().set('Authorization', token) })

  }
}
