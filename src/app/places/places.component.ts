import { Component } from '@angular/core';
import { Place } from '../models/place';
import { PlaceService } from '../_services/place.service';
import {SearchPlaceFilter} from '../models/search-place-filter';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
constructor(private placeService : PlaceService){}
  myPlacesOpen = false;
  allPlacesOpen = false;
  myPlaces: Place[]= [];
  places: Place[] = [
    // {
    //   address: {
    //     building:"43",
    //     city:"Lublin",
    //     street:"Lubelska"
    //   },
    //   description: "Des",
    //   facilities: [],
    //   id: 1, name: "XD",
    //   placeCategory: "HOSTEL",
    //   rooms: [],
    //   userId: 1
    // }
  ]
  ngOnInit(){
    // this.placeService.getPlaces().subscribe(result =>{
    //   this.places = result;
    // })
  }
  search(){
    this.placeService.getPlaces(new SearchPlaceFilter(0,0,'','',null, null,'')).subscribe(res => this.places = res);
  }
}