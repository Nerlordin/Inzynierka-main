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
import { ImageService } from '../_services/image.service';
import { ReviewPageComponent } from '../review-page/review-page.component';
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
    MatNativeDateModule,ReviewPageComponent,
    AccomodationCardComponent, FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule
    , FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
  standalone: true

})

export class PlaceDetailsComponent {
  place: Place | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router, private imageService: ImageService,
    private reservationService: ReservationService,
    private placeService: PlaceService, public dialog: MatDialog
  ) {
    for (let i = 1; i <= 1; i++) {
      const src = './assets/images/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption';
      const thumb = './assets/images/thumbs/image' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._albums.push(album);
    }
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesToShow.push(reader!.result!);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImageFromService(imageUrl: string) {
    this.imageService.getImage(imageUrl, Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
      });
  }
  imagesToShow: any[] = [];
  ngOnInit(): void {
    this.getPlace();
    this.getImageFromService('image1');
  }
  _albums: any = [];
  open(index: number): void {
  }
  close(): void {
  }
  displayedColumns = ['name', 'capacity', 'pricePerNight', 'facilities', 'state'];

  public getFacilities(facilities: string[]): string {
    return facilities.join();
  }
  showReviews() {
    this.router.navigateByUrl(`/places/${this.place?.id}/reviews`)
  }
  getPlace() {
    this.route.queryParams.subscribe(params => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.placeService.getPlaceDetails(id).subscribe(res => {
        this.place = res;
      })
    })
  }
}


