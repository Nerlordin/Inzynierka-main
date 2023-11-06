import { Component } from '@angular/core';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
  standalone: true,
  imports:[ReviewComponentComponent, RouterModule],
})
export class ReviewPageComponent {

}
