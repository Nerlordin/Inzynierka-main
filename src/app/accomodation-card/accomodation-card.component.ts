import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Place } from '../models/place';
@Component({
  selector: 'app-accomodation-card',
  templateUrl: './accomodation-card.component.html',
  styleUrls: ['./accomodation-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class AccomodationCardComponent {
  // @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  constructor(private router: Router) {

  }
  @Input() place: Place | undefined;
  getDetails(placeId: number) {

    const queryParams = { placeId: placeId };
    this.router.navigateByUrl(`/places/${placeId}`, { queryParams: queryParams } as any);
  }
  // <a routerLink="/places/{{place?.id}}">
}
