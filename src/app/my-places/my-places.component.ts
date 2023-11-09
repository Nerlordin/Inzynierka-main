import { Component } from '@angular/core';
import { PlaceService } from '../_services/place.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css']
})
export class MyPlacesComponent {
constructor(private placeService:PlaceService){}
places: Place[] = [];
ngOnInit() {
  this.placeService.getMyPlaces().subscribe(res => {
    this.places = res;
  })
 
}
}
