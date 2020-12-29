import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users/login'
  loginUser(credentials): Observable<any> {
    return this.http.post<any>(this.url, credentials, {observe: 'response'})
  }

}
