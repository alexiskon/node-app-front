import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatetaskService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/'
  updateTasks(id, credentials): Observable<any> {
    return this.http.patch<any>(this.url + id, credentials)
  }
}
