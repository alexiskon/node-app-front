import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users'
  signupUser(credentials): Observable<any> {
    return this.http.post<User>(this.url, credentials)
  }

}
