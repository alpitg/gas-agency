import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: JsonApiService
    // private http: HttpClient
  ) { }

  getLpgCategoryMaster(): Observable<Array<any>> {
    return this.http.getLpgCategoryMaster('/projects');
  }

  getCurrentStock(): Observable<Array<any>> {
    return this.http.getCurrentStock('/currentStock');
  }
}
