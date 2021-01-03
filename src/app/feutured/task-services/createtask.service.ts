import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/tasks'

  createTask(tasks): Observable<any> {
    return this.http.post<any>(this.url, tasks)
  }
}
