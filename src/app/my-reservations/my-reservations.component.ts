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
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule,MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
})

export class MyReservationsComponent {
  pageSize = 3;
  currentPage = 0;
  constructor(private reservationService: ReservationService){}
  selectedRooms: RoomDTO[] = [
    // { name: 'Pokój 101', cena: 150 },
    // { name: 'Pokój 202', cena: 200 },
    // { name: 'Pokój 303', cena: 250 },
    // { name: 'Pokój 404', cena: 180 },
    // { name: 'Pokój 505', cena: 220 },
    // { name: 'Pokój 606', cena: 270 },
    {
      capacity: 3,
      description:"Pokoj",
      facilities:[],
      id:1,
      name:"Poko",
      placeId:1,
      pricePerNight:40,
      state:"AVAILABLE"
    }
  ];
  reservations: Reservation[] =[];
  reservationsToAccept: Reservation[] =[];
  selectedReservations: Reservation[] =[];

  addSelectedRooms(rooms: RoomDTO[]) {
    this.selectedRooms = rooms;
  }
  getSelectedRooms() {
    return this.selectedRooms;

  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }

  reserved() {
    this.selectedReservations = this.reservations;

  }
  toAccept(){
    this.selectedReservations = this.reservationsToAccept;
  }
  cancel(id: number) {
    this.reservationService.confirm(id).subscribe(res => res);
  }

  reject(id: number) {
    this.reservationService.confirm(id).subscribe(res => res);
  }
  confirm(id: number) {
    this.reservationService.confirm(id).subscribe(res => res);
  }
  ngOnInit() {
    let reservations = this.reservationService.getReservations();
    let reservationsToAccept = this.reservationService.getReservationsToAccept();
    forkJoin([reservations, reservationsToAccept]).subscribe(results => {
      this.reservations = results[0];
      this.reservationsToAccept = results[1];
      console.log(reservationsToAccept)
    });
  }
  deleteReservation(opinion: any) {
  }

  editReservation(opinion: any) {

  }

  constructor() {

    this.selectedRooms = [
      {placeID: 1,roomID: 2, liczba_osob: 2, name: 'Pokój 2', cena: 150, liczba_dostepnych: 3, description: 'Pokój z widokiem na morze' }
    ];
  }
}
