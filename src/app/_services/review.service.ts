
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { Review } from '../models/review';

const API_URL = 'http://localhost:9990/reviews/places';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviewsByPlaceId(placeId: number) : Observable<Review[]>{
    return this.http.get<Review[]>(`${API_URL}/id`,httpOptions);
  }
  
  getMyPlaces() : Observable<Place[]>{
    return this.http.get<Place[]>(`${API_URL}/my`,httpOptions);
  }
  getPlaceId(id: number): Observable<Place> {
    return this.http.get<Place>(`${API_URL}/${id}`,httpOptions);
  }

}