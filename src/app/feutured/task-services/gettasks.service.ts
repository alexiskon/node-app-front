import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class GettasksService {

  constructor(private http: HttpClient) { }

  url = 'https://sleepy-fjord-54959.herokuapp.com/tasks'
  getTasks(): Observable<any> {

    return this.http.get<any>(this.url)
  }
}
