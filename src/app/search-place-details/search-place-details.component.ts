import { JsonPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { MatDialog } from '@angular/material/dialog';
import { PlaceService } from '../_services/place.service';
import { ReservationService } from '../_services/reservation.service';
import { Place } from '../models/place';
import { RoomDTO } from '../models/roomDTO';
import { SearchPlaceFilter } from '../models/search-place-filter';
import { ReservePlaceDialogComponent } from '../reserve-place-dialog/reserve-place-dialog.component';
import { ImageService } from '../_services/image.service';
import { ReviewPageComponent } from '../review-page/review-page.component';

@Component({
  selector: 'app-search-place-details',
  templateUrl: './search-place-details.component.html',
  styleUrls: ['./search-place-details.component.css'],
  imports: [MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    AccomodationCardComponent, FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule
    , FormsModule,ReviewPageComponent, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
  standalone: true
})
export class SearchPlaceDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router, private imageService: ImageService,
    private reservationService: ReservationService,
    private placeService: PlaceService, public dialog: MatDialog
  ) { }

  searchPlaceFilter?: SearchPlaceFilter
  place: Place | undefined;
  availableRooms: RoomDTO[] = [];
  range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });
  displayedColumns = ['name', 'capacity', 'pricePerNight', 'facilities', 'actions']

  ngOnInit(): void {
    this.setParams();
    this.getPlaceDetails();
    this.searchAvailability();
  }

  reservationCreate(roomId: number): void {
    let start = new Date(this.range.get('start')!.value!)
    let end = new Date(this.range.get('end')!.value!)  ;
    start.setHours(12);end.setHours(12);
    const dialogRef = this.dialog.open(ReservePlaceDialogComponent, {

      autoFocus: true,
      data: { start: start, end: end },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.reservationService.reserve(
          {
            roomId: roomId,
            placeId: this.place!.id,
            start: start.toISOString(),
            finish: end.toISOString(),
            at: new Date().toISOString()
          }
        ).subscribe(res =>
          window.location.reload());
      }
    });
  }

  public getFacilities(facilities: string[]): string {
    return facilities.join();
  }

  showReviews() {
    this.router.navigateByUrl(`/places/${this.place?.id}/reviews`)
  }
  setParams() {
    this.route.queryParams.subscribe(params => {
      let startDate = new Date(params['start']);
      let endDate = new Date(params['end']);
      this.range.get('start')!.setValue(startDate)
      this.range.get('end')!.setValue(endDate)
      this.searchPlaceFilter = {
        capacity: params['capacity'],
        placeId: Number.parseInt(this.route.snapshot.paramMap.get('id')!),
        category: params['category'],
        city: params['category'],
        street: params['street'],
        voivodeship: params['voivodeship'],
        pricePerNight: params['pricePerNight'],
        from: startDate.toISOString(),
        to: endDate.toISOString()
      } as SearchPlaceFilter
    });
  }
  searchAvailability() {
    let start = new Date(this.range.get('start')!.value!)
    let end = new Date(this.range.get('end')!.value!)  ;
    start.setHours(12);end.setHours(12);
    this.placeService.getRooms(
    
      {
        capacity:  this.searchPlaceFilter?.capacity,
        category: this.searchPlaceFilter?.category,
        city: this.searchPlaceFilter?.city,
        pricePerNight: this.searchPlaceFilter?.category,
        voivodeship: this.searchPlaceFilter?.category,
        street: this.searchPlaceFilter?.category,
        placeId: this.searchPlaceFilter?.placeId,
        from: start.toISOString(),
        to: end.toISOString()
      } as unknown as SearchPlaceFilter

    ).subscribe(res => {
      this.availableRooms = res.rooms;
    });
  }
  getPlaceDetails(): void {
    this.route.queryParams.subscribe(params => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.placeService.getPlaceDetails(id).subscribe(res => {
        this.place = res;
        this.getImagesById(res.id);
      })
    })
  }
  imagesToShow: string[] = []

  getImagesById(placeId: number) {
    this.imageService.getImageByPlace(placeId)
      .subscribe(data => {
        data.forEach(image => this.imagesToShow.push(image.url));
      },
        error => {
        });
  }
  getUrlForPlace(): string {
    return this.imagesToShow[0];
  }
  isLoading = true;

  getPlace(): void {
    this.route.queryParams.subscribe(params => {
      const start = params['start'];
      const end = params['end'];
      this.range.get('start')!.setValue(start)
      this.range.get('end')!.setValue(end)
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.placeService.getPlaces(
        {
          capacity: 0,
          category: '',
          city: '',
          pricePerNight: 0,
          voivodeship: '',
          street: '',
          placeId: id,
          from: start,
          to: end
        } as unknown as SearchPlaceFilter

      ).subscribe(res => {
        this.place = res[0];
        this.availableRooms = res[0].rooms;
      });
    })
  }
}

