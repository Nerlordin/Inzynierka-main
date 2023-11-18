import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { SearchPlaceFilter } from '../models/search-place-filter';
import { CreatePlaceRequest } from '../models/create-place-request';

const API_URL = 'http://localhost:9990/places';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  addPlace(place: CreatePlaceRequest) {
    this.http.post(API_URL,place).subscribe(res => res);
  }
  constructor(private http: HttpClient) {}
  getPlaces(filter: SearchPlaceFilter ) : Observable<Place[]>{
    let queryParams = new HttpParams();
    if(filter.capacity != 0){
      queryParams = queryParams.append("capacity",filter.capacity);
    }
    if(filter.city != ''){
      queryParams = queryParams.append("city",filter.city);
    }
    if(filter.street != ''){
      queryParams = queryParams.append("street",filter.street);
    }
    if(filter.category != ''){
      queryParams = queryParams.append("category",filter.category);
    }
    if(filter.pricePerNight != 0){
      queryParams = queryParams.append("pricePerNight",filter.pricePerNight);
    }
    if(filter.from != null){
      queryParams = queryParams.append("from",filter.from.toISOString());
    }
    if(filter.to != null){
      queryParams = queryParams.append("to",filter.to.toISOString());
    }
    return this.http.get<Place[]>(`${API_URL}/filters`,{params:queryParams});
  }

  getMyPlaces() : Observable<Place[]>{
    return this.http.get<Place[]>(`${API_URL}/my`,httpOptions);
  }
  getPlaceId(id: number): Observable<Place> {
    return this.http.get<Place>(`${API_URL}/${id}`,httpOptions);
  }

}