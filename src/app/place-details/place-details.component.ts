import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Place } from '../models/place';
import { PlaceService } from '../_services/place.service';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { MatDialog } from '@angular/material/dialog';
import { ReservePlaceDialogComponent } from '../reserve-place-dialog/reserve-place-dialog.component';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  standalone: true,
  imports: [ReviewComponentComponent, RouterModule]
})
export class PlaceDetailsComponent {
  place: Place | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService, public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getPlace();
    this.currentImage = ""
  }


  reservationCreate(): void {
    const dialogRef = this.dialog.open(ReservePlaceDialogComponent, {
      autoFocus: true
    });

  }
  currentImage: string = ''
  showReviews() {
    this.router.navigateByUrl(`/places/${this.place?.id}/reviews`)
  }
  getPlace(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaceId(id).subscribe(res => {
      this.place = res;
    });


  }
}
