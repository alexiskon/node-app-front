import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatetaskService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/tasks/'
  updateTasks(id, credentials): Observable<any> {
    return this.http.patch<any>(this.url + id, credentials)
  }
}
