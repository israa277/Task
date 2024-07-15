import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class customerService {
  constructor(private _HttpClient: HttpClient) {}

  private jsonUrl = './../db.json';

  getDatacustomer(): Observable<any> {
    return this._HttpClient.get('./assets/db.json');
  }
}
