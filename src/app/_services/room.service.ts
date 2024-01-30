import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9990/';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }


  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}