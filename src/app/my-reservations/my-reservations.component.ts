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
  displayedColumns: string[] = ['id', 'placeId','roomId', 'checkIn', 'checkOut', 'state','value','actions'];
  constructor(private reservationService: ReservationService){
    this.state.valueChanges.subscribe(value => {
      if(value !=='ALL' && value !== ''){
        this.selectedReservations = this.reservations.filter(reservation => reservation.state == value)
      }
      else{
        this.selectedReservations = this.reservations;
      }
    });
  }
  state = new FormControl('');

  possibleStates: string[] = ['ALL','CANCELLED','CONFIRMED','WAITING'];
  reservations: Reservation[] =[];
  selectedReservations: Reservation[] =[];


 
  canConfirm(reservation: Reservation) {
    return reservation.state == 'WAITING';
  }
  canCancel(reservation: Reservation) {
    return reservation.state !== 'CANCELLED' 
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
