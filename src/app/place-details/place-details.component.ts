import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Place } from '../models/place';
import { PlaceService } from '../_services/place.service';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { MatDialog } from '@angular/material/dialog';
import { ReservePlaceDialogComponent } from '../reserve-place-dialog/reserve-place-dialog.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { RoomDTO } from '../models/roomDTO';
import { SearchPlaceFilter } from '../models/search-place-filter';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  imports: [MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    AccomodationCardComponent, FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule
    , FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
  standalone: true

})

export class PlaceDetailsComponent {
  place: Place | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService,
    private placeService: PlaceService, public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getPlace();

  }
  displayedColumns = ['capacity', 'state', 'pricePerNight', 'name', 'facilities'];

  public getFacilities(facilities: string[]): string {
    return facilities.join();
  }
  showReviews() {
    this.router.navigateByUrl(`/places/${this.place?.id}/reviews`)
  }
  getPlace(){
    this.route.queryParams.subscribe(params => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.placeService.getPlaceDetails(id).subscribe(res => {
        this.place = res;
      })
    })
  }
}

// this.placeService.getPlaces(new SearchPlaceFilter(
// this.capacity.value!,
// this.maxPrice.value ? this.maxPrice.value : 0,
// this.voivodeship.value!,
// this.street.value!,
// this.city.value!,
// this.range.controls.start.value!,
// this.range.controls.end.value!,
// this.category.value!)).subscribe(res => this.places = res);
// this.route.queryParams.subscribe(params => {
//   const param1 = params['param1'];
//   const param2 = params['param2'];
//   // Do something with the query parameters
// });
// const id = Number(this.route.snapshot.paramMap.get('id'));
// this.placeService.getPlaceId(id).subscribe(res => {
//   this.place = res;
// });
