import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletetaskService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/'

  delTask (id): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }
}
