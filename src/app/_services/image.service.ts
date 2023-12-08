import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageResponse } from './image-response';
const API_URL = 'http://localhost:9990/files/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImageByPlace(placeId: number) {
    return this.http.get<ImageResponse[]>(`http://localhost:9990/images?placeId=${placeId}`);
}

    


  constructor(private http: HttpClient) { }

  getImage(imageName: string, placeId: number): Observable<Blob> {
    return this.http.get(`${API_URL}/${imageName}?placeId=${placeId}`, { responseType: 'blob' });
  }
}