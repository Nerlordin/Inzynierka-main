import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-accomodation-card',
  templateUrl: './accomodation-card.component.html',
  styleUrls: ['./accomodation-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule, CommonModule],
})
export class AccomodationCardComponent {
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() city: string ='';
  @Input() building: string = '';
  @Input() street: string = '';
  @Input() voivodeship: string = '';
  @Input() country: string = '';
  @Input() category: string = '';
  @Input() rating: number = 0;
  @Input() placeID: number = 1;


  getEmptyStars() {
    return new Array(5 - Math.floor(this.rating));
  }

  getFullStars() {
    return new Array(Math.floor(this.rating));
  }
  sendInfo(){
    
  }
}