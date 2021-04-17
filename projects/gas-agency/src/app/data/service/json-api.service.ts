import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import * as data from './json/data.json';
import * as lpgCategoryData from './json/lpg-category-master.json';
import * as currentStockData from './json/current-stock.json';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  getProject(url: string): Observable<any> {
    switch (url) {
      case '/projects':
        return of(data.projects);
      default:
        const id = url.substring(url.lastIndexOf('/') + 1);
        return of(data.projects[id]);
    }
  }

  getLpgCategoryMaster(url: string): Observable<any> {
    return of(lpgCategoryData.lpgCategory);
  }

  getCurrentStock(url: string): Observable<any> {
    return of(currentStockData.currentStock);
  }
}
