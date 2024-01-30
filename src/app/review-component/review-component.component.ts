import { Component, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReviewService } from '../_services/review.service';
import { Review } from '../models/review';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css'],
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
    AccomodationCardComponent, FormsModule, ReactiveFormsModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule]
})
export class ReviewComponentComponent {

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newReview.placeId = id;
    this.getReviews();
  }
  getReviews() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getReviewsByPlaceId(id).subscribe(result => {
      this.reviews = result;
    })
  }

  submitReview() {
    this.reviewService.addReview(
      {
        rating: this.rating.value,
        content: this.content.value,
        author: this.newReview.author,
        placeId: this.newReview.placeId
      } as Review
    )
      .subscribe(res => {
        window.location.reload()
        res
      });
  }
  rating = new FormControl(0);
  content = new FormControl('');
  reviews: Review[] = []
  newReview: Review = {
    rating: 0,
    author: "",
    placeId: 0,
    content: "",
    at: new Date()

  }
}
