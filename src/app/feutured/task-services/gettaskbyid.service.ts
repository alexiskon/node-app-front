import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GettaskbyidService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/'

  taskId(id): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

}
