import { Component } from '@angular/core';
import { ReservationService } from '../_services/reservation.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reservation } from '../models/reservationDto';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],

})
export class MyOffersComponent {
  pageSize = 3;
  currentPage = 0;
  displayedColumns: string[] = ['id', 'placeId','roomId', 'checkOut', 'state', 'value', 'actions'];
  constructor(private reservationService: ReservationService) {
    this.state.valueChanges.subscribe(value => {
      if (value !== 'Dowolny' && value !== '') {
        this.selectedReservations = this.reservations.filter(reservation => reservation.state == this.getState(value!))
      }else{
        this.selectedReservations = this.reservations;
      }
    })
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
  reservations: Reservation[] = [];
  selectedReservations: Reservation[] = [];
  canConfirm(reservation: Reservation) {
    return reservation.state == 'WAITING';
  }
  canCancel(reservation: Reservation) {
    return reservation.state !== 'CANCELLED' && reservation.state !== 'FINISHED';
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }

  cancel(id: number) {
    this.reservationService.cancelOffer(id)
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
    this.reservationService.getReservationsToAccept().subscribe(res => {
      this.reservations = res;
      this.selectedReservations = res;
    });
  }
  deleteReservation(opinion: any) {

  }

  editReservation(opinion: any) {

  }
}
