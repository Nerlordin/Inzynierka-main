import { PlaceService } from '../_services/place.service';
import { Place } from '../models/place';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccomodationElement } from '../accomodation-page/accomodation-page.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RoomDTO } from '../models/roomDTO';
import { Reservation } from '../models/reservationDto';
import { ReservationService } from '../_services/reservation.service';
import { Observable, forkJoin } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { GenerateReportDialogComponent } from '../generate-report-dialog/generate-report-dialog.component';
@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css'],
  imports: [FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
  standalone: true
})
export class MyPlacesComponent {
  constructor(private placeService: PlaceService,public dialog: MatDialog, private router: Router) {
    this.type.valueChanges.subscribe(value => {
      if (value !== 'ALL' && value !== '') {
        this.selectedPlaces = this.places.filter(place => place.placeCategory == value)
      } else {
        this.selectedPlaces = this.places;
      }
    })
  }
  places: Place[] = [];
  selectedPlaces: Place[] = [];
  currentPage = 1;
  type = new FormControl('');
  types = ["HOTEL", "CAMPING", "ALL"]
  ngOnInit() {
    this.placeService.getMyPlaces().subscribe(res => {
      this.places = res;
      this.selectedPlaces = res;
    })

  }
  displayedColumns: string[] = ['id', 'name',  'placeCategory', 'roomSize', 'actions'];



  edit(id: number) { }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }
  showDetails(id: number) {
    this.router.navigateByUrl(`places/${id}`);
  }
  createPlace() {
    this.router.navigateByUrl('create/places');
  }
  generateReport(place:Place){
    const dialogRef = this.dialog.open(GenerateReportDialogComponent, {
      autoFocus: true
    });
  }

}
