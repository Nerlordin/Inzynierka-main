import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Place } from '../models/place';
import { Reservation } from '../models/reservationDto';

const API_URL = 'http://localhost:9990/reservations';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  cancelOffer(id: number) {
    return this.http.put<Reservation[]>(`${API_URL}/offers/${id}/cancellation`, httpOptions);
  }
  reserve(dto: { roomId: number; placeId: number; start: string; finish: string; at: string; }) {
    return this.http.post<any>(`${API_URL}`, dto);
  }
  confirm(id: number) {
    return this.http.put<Reservation[]>(`${API_URL}/${id}/confirmation`, httpOptions);
  }
  cancel(id: number) {
    return this.http.put<Reservation[]>(`${API_URL}/${id}/cancellation`, httpOptions);
  }
  getReservationsToAccept() {
    return this.http.get<Reservation[]>(`${API_URL}/offers`, httpOptions);
  }
  constructor(private http: HttpClient) { }
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${API_URL}/my`, httpOptions);
  }
  getReservationById(id: number): Observable<Place> {
    return this.http.get<Place>(`${API_URL}/${id}`, httpOptions);
    //     return of({
    //       id:1,
    // address:{
    //   building:"42",
    //   city: "Lublin",
    //   street:""
    // }
    // } as Place
    //  )
  }

}