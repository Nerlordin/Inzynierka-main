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
  selectedRooms: AccomodationElement[] = [];
  pageSize = 3;
  currentPage = 0;
  selectedRoomsTable: any[] = [
    { name: 'Pokój 101', cena: 150 },
    { name: 'Pokój 202', cena: 200 },
    { name: 'Pokój 303', cena: 250 },
    { name: 'Pokój 404', cena: 180 },
    { name: 'Pokój 505', cena: 220 },
    { name: 'Pokój 606', cena: 270 },
  ];
  addSelectedRooms(rooms: AccomodationElement[]) {
    this.selectedRooms = rooms;
    console.log(rooms);
  }
  getSelectedRooms() {
    return this.selectedRooms;
    
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }
  ngOnInit() {
   
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
