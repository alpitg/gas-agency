import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private http: JsonApiService
  ) { }

  getAll(): Observable<Array<any>> {
    return this.http.getProject('/projects');
  }

  getSingle(id: number): Observable<any> {
    return this.http.getProject('/projects/' + id);
  }
}
