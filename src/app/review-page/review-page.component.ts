import { Component } from '@angular/core';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReviewService } from '../_services/review.service';
import { Review } from '../models/review';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
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
export class ReviewPageComponent {
  pageSize = 100;
  onPageChange(event: any) {

  }
  rating = new FormControl(0);
  content = new FormControl('');
  reviews: Review[] = []
  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }
  newReview: Review = {
    rating: 0,
    author: "",
    placeId: 0,
    content: "",

  }
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
    this.reviewService.addReview({ rating: this.rating.value, content: this.content.value, author: this.newReview.author, placeId: this.newReview.placeId} as Review).subscribe(res => res);

  }
}
