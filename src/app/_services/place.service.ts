import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

const API_URL = 'http://localhost:9990/places';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(private http: HttpClient) {}
  getPlaces() : Observable<Place[]>{

    return this.http.get<Place[]>(API_URL,httpOptions);
  }
  
  getMyPlaces() : Observable<Place[]>{
    return this.http.get<Place[]>(`${API_URL}/my`,httpOptions);
  }
  getPlaceId(id: number): Observable<Place> {
    return this.http.get<Place>(`${API_URL}/${id}`,httpOptions);
  }

}