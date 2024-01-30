
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { Review } from '../models/review';

const API_URL = 'http://localhost:9990/reviews';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  addReview(newReview: Review) {
    return this.http.post(`${API_URL}`,newReview);
  }
  constructor(private http: HttpClient) {}
  getReviewsByPlaceId(placeId: number) : Observable<Review[]>{
    return this.http.get<Review[]>(`${API_URL}/places/${placeId}`,httpOptions);
  }
  


}