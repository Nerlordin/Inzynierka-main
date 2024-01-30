import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccomodationElement } from '../accomodation-page/accomodation-page.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RoomDTO } from '../models/roomDTO';
import { Reservation } from '../models/reservationDto';
import { ReservationService } from '../_services/reservation.service';
import { Observable, forkJoin } from 'rxjs';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { PlaceService } from '../_services/place.service';
import { Place } from '../models/place';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css'],
  standalone: true,
  imports: [FormsModule,MatChipsModule, ReactiveFormsModule,RouterModule,MatListModule,MatFormFieldModule,MatTableModule, MatSelectModule,MatRadioModule,CommonModule,MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
})

export class MyReservationsComponent {
  pageSize = 3;
  currentPage = 0;
  displayedColumns: string[] = ['id', 'placeId','roomId', 'checkOut','people','value', 'state','actions'];
  constructor(private router: Router,private reservationService: ReservationService, private placeService: PlaceService){
    this.state.valueChanges.subscribe(value => {
      if(value !=='Dowolny' && value !== ''){
        this.selectedReservations = this.reservations.filter(reservation => reservation.state == this.getState(value!))
      }
      else{
        this.selectedReservations = this.reservations;
      }
    });
  }
  places: Place[] =[]

  getPeopleByID(id: number, roomId: number){
    if(roomId == 2){
      return 3;
    }
    return 2;
  }
  state = new FormControl('Dowolny');
  getState(state : string): string{
    if(state == 'Dowolny'){
      return "ALL"
    }
    if(state == 'Anulowana'){
      return 'CANCELLED'
    }
    if(state == 'Potwierdzona'){
      return "CONFIRMED"
    }
    if(state == 'Zakończona'){
      return "FINISHED"
    }
    if(state == 'Oczekująca'){
      return "WAITING"
    }
    return "";
  }
  getState2(state : string): string{
    if(state == 'ALL'){
      return "Dowolny"
    }
    if(state == 'CANCELLED'){
      return 'Anulowana'
    }
    if(state == 'CONFIRMED'){
      return "Potwierdzona"
    }
    if(state == 'FINISHED'){
      return "Zakończona"
    }
    if(state == 'WAITING'){
      return "Oczekująca"
    }
    return "";
  }
  possibleStates: string[] = ['Dowolny','Anulowana','Potwierdzona','Oczekująca','Zakończona'];
  reservations: Reservation[] =[];
  selectedReservations: Reservation[] =[];

  canConfirm(reservation: Reservation) {
    return reservation.state == 'WAITING';
  }
  canCancel(reservation: Reservation) {
    return reservation.state !== 'CANCELLED' && reservation.state !== 'FINISHED'
  }
  canReview(reservation: Reservation) {
    return  reservation.state == 'FINISHED'
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }
  cancel(id: number) {
    this.reservationService.cancel(id)
    .subscribe(res => {
      window.location.reload();
    });
  }
  review(id: number) {
    this.router.navigateByUrl(`/places/${id}/reviews`)
  }
  reject(id: number) {
    this.reservationService.confirm(id).subscribe(res => res);
  }
  confirm(id: number) {
    this.reservationService.confirm(id).subscribe(res => {
      window.location.reload();
    });
  }
  ngOnInit() {
    let reservations = this.reservationService.getReservations();
    forkJoin([reservations]).subscribe(results => {
      this.reservations = results[0];
      this.selectedReservations = results[0];
    });
  }
  deleteReservation(opinion: any) {

  }

  editReservation(opinion: any) {

  }
}
