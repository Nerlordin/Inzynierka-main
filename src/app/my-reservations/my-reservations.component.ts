import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterModule,MatListModule,MatFormFieldModule,MatTableModule, MatSelectModule,MatRadioModule,CommonModule,MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
})

export class MyReservationsComponent {
  pageSize = 3;
  currentPage = 0;
  displayedColumns: string[] = ['id', 'placeId', 'checkIn', 'checkOut', 'state','value','actions'];
  constructor(private reservationService: ReservationService){
    this.state.valueChanges.subscribe(value => {
      this.selectReservations();
      if(value !=='ALL' && value !== ''){
        this.selectedReservations = this.selectedReservations.filter(reservation => reservation.state ==value)
      }
    })
  }
  state = new FormControl('');

  possibleStates: string[] = ['ALL','CANCELLED','CONFIRMED','WAITING'];
  reservations: Reservation[] =[];
  reservationsToAccept: Reservation[] =[];
  selectedReservations: Reservation[] =[];
  myObjects = false;


  selectReservations() {
    if(this.myObjects == true){
      this.selectedReservations = this.reservationsToAccept;
    }
    if(this.myObjects == false){
      this.selectedReservations = this.reservations;
    }

  }
  canConfirm(reservation: Reservation) {
    return reservation.state == 'WAITING' && this.myObjects == true;
  }
  canCancel(reservation: Reservation) {
    return reservation.state !== 'CANCELLED' 
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }

  reserved() {
   
    this.myObjects = false;
    this.selectReservations();
  }
  toAccept(){
    this.myObjects = true;
    this.selectReservations();

  }
  cancel(id: number) {
    this.reservationService.cancel(id)
    .subscribe(res => {
      window.location.reload();
    });
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
    let reservationsToAccept = this.reservationService.getReservationsToAccept();
    forkJoin([reservations, reservationsToAccept]).subscribe(results => {
      this.reservations = results[0];
      this.reservationsToAccept = results[1];
      this.selectReservations();
    });
  }
  deleteReservation(opinion: any) {

  }

  editReservation(opinion: any) {

  }
}
