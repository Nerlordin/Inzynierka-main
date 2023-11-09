import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../models/place';
import { PlaceService } from '../_services/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent {
  place : Place | undefined;
  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
  ) {}
  ngOnInit(): void {
     this.getPlace();
  }
  
  getPlace(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeService.getPlaceId(id).subscribe(res => {
      this.place = res;
    });
    // this.place =
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
    
  }
}
