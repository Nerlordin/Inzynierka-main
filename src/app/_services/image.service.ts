import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageResponse } from './image-response';
const API_URL = 'http://localhost:9990/files/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  upload(files: File[], placeId:number): Observable<any> {
    const formData = new FormData();
    for (const file of files) {
      formData.append('file', file);
    }

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${API_URL}?placeId=${placeId}`, formData, { headers });
  }

  getImageByPlace(placeId: number) {
    return this.http.get<ImageResponse[]>(`http://localhost:9990/images?placeId=${placeId}`);
  }

  getImage(imageName: string, placeId: number): Observable<Blob> {
    return this.http.get(`${API_URL}/${imageName}?placeId=${placeId}`, { responseType: 'blob' });
  }
}