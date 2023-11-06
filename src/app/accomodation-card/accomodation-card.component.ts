import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-accomodation-card',
  templateUrl: './accomodation-card.component.html',
  styleUrls: ['./accomodation-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class AccomodationCardComponent {
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
}