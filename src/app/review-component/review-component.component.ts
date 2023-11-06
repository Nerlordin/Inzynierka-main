import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css'],
  standalone: true,
  imports: [MatSelectModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule, RouterModule, MatDividerModule, MatGridListModule, AccomodationCardComponent, MatPaginatorModule, CommonModule]
})
export class ReviewComponentComponent {
  
  
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  newOpinion = {
    rating: 1,
    author: '',
    text: ''
  };
  opinions: any[] = [
    {
      rating: 5,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      author: 'John Doe',
      text: 'Great place to stay. I highly recommend it!',
    },
    {
      rating: 4,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      author: 'Alice Smith',
      text: 'The accommodations were clean and comfortable.',
    },
    {
      rating: 5,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      author: 'Bob Johnson',
      text: 'I had a wonderful experience at this location.',
    },
    {
      rating: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      author: 'Emma Wilson',
      text: 'Good value for the price. I would stay here again.',
    },
    {
      rating: 5,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      author: 'Michael Brown',
      text: 'The staff was friendly and helpful. 5 stars!',
    }
  ];
  pagedOpinions: any[] = [];
  pageSize = 3; 
  onPageChange(event: PageEvent) {
    
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedOpinions = this.opinions.slice(startIndex, endIndex);
  }
  ngOnInit() {
    this.pagedOpinions = this.opinions.slice(0, this.pageSize);
  }
  submitOpinion() {
   
    this.opinions.push(this.newOpinion);

   
    this.newOpinion = {
      rating: 1,
      author: '',
      text: ''
    };
  }
}
