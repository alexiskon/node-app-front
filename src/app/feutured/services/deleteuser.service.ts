import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/users/me'
  deleteUser(): Observable<User> {
    let token = localStorage.getItem('token')
    return this.http.delete<any>(this.url, { headers: new HttpHeaders().set('Authorization', token) })
  }
}
