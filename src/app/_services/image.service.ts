import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:9990/files/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private http: HttpClient) { }

  getImage(imageName: string, placeId: number): Observable<Blob> {
    return this.http.get(`${API_URL}/${imageName}?placeId=${placeId}`, { responseType: 'blob' });
  }
}