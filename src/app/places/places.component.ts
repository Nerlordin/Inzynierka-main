import { Component } from '@angular/core';
import { Place } from '../models/place';
import { PlaceService } from '../_services/place.service';
import { SearchPlaceFilter } from '../models/search-place-filter';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { query } from '@angular/animations';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    AccomodationCardComponent, FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],

})
export class PlacesComponent {

  constructor(private router: Router, private placeService: PlaceService, private formBuilder: FormBuilder) { }
  maxPrice = new FormControl(0);
  capacity = new FormControl(0);
  street = new FormControl('');
  city = new FormControl('');
  category = new FormControl('');
  voivodeship = new FormControl('');
  places: Place[] = []
  ngOnInit() {

  }
  getDetails(placeId: number) {
    const queryParams = {
      maxPrice: this.maxPrice.value!,
      capacity: this.capacity.value!,
      street: this.street.value!,
      city: this.city.value!,
      category: this.category.value!,
      voivodeship: this.voivodeship.value!,
      start: this.range!.get('start')!.value!.toISOString(),
      end: this.range!.get('end')!.value!.toISOString()
    };
    this.router
    .navigateByUrl(`/search/places/${placeId}?maxPrice=${queryParams.maxPrice}&street=${queryParams.street}&city=${queryParams.city}&capacity=${queryParams.capacity}&start=${queryParams.start}&end=${queryParams.end}&category=${queryParams.category}`);
  }
  clearFilters() {
    this.places = [];

    this.maxPrice.reset();
  }
  range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });
  categories = ['VILLAS', 'HOTEL', 'APARTMENTS', 'RESORTS', 'CAMPING']
  voivodeships = [
    'LUBELSKIE',
    'LUBUSKIE',
    'OPOLSKIE',
    'ŁÓDZKIE',
    'POMORSKIE',
    'WIELKOPOLSKIE',
    'ZACHODNIO_POMORSKIE',
    'KUJAWSKO_POMORSKIE',
    'ŚLĄSKIE',
    'DOLNO_ŚLĄSKIE',
    'ŚWIĘTOKRZYSKIE',
    'ŚLĄSKIE',
    'ŁÓDZKIE',
    'MAZOWIECKIE',
    'MAŁOPOLSKIE'
  ]
  showReviews(placeId: number) {
    this.router.navigateByUrl(`/places/${placeId}/reviews`)
  }
  abc="/assets/pobrane.png"
  search() {

    {
      this.placeService.getPlaces(new SearchPlaceFilter(
        this.capacity.value!,
        this.maxPrice.value ? this.maxPrice.value : 0,
        this.voivodeship.value!,
        this.street.value!,
        this.city.value!,
        null,
        this.range.controls.start.value!.toISOString(),
        this.range.controls.end.value!.toISOString(),
        this.category.value!)).subscribe(res => this.places = res);
    }
  }
}