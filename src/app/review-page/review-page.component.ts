import { Component } from '@angular/core';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReviewService } from '../_services/review.service';
import { Review } from '../models/review';
@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
  standalone: true,
  imports:[ReviewComponentComponent, RouterModule],
})
export class ReviewPageComponent {

  reviews: Review[] = []
  constructor(private reviewService: ReviewService,  private route: ActivatedRoute) {}
  ngOnInit(){
    this.getReviews();
  }
  getReviews(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getReviewsByPlaceId(id).subscribe(result => {
      this.reviews = result;
    })
  }
}
