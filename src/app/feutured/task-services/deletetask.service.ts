import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletetaskService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/tasks/'

  delTask (id): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }
}
