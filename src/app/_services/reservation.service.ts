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
  confirm(id: number) {
    return this.http.put<Reservation[]>(`${API_URL}/${id}/confirmation`,httpOptions);
  }
  cancel(id: number) {
    return this.http.put<Reservation[]>(`${API_URL}/${id}/cancellation`,httpOptions);
  }
  getReservationsToAccept() {
    return this.http.get<Reservation[]>(`${API_URL}/confirmation`,httpOptions);
  }
  constructor(private http: HttpClient) {}
  getReservations() : Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${API_URL}/my`,httpOptions);
  }
  getReservationById(id: number): Observable<Place> {
     return this.http.get<Place>(`${API_URL}/${id}`,httpOptions);
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