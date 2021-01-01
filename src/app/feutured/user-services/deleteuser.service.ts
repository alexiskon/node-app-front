import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/users/me'
  deleteUser(): Observable<any> {
    let token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    return this.http.delete<any>(this.url, { observe: 'response', headers: new HttpHeaders().set('Authorization', token) })
  }
}
