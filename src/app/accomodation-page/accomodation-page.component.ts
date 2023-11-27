import { Component, Input, OnInit  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ReviewComponentComponent } from '../review-component/review-component.component';
import { MyReservationsComponent} from '../my-reservations/my-reservations.component';
import { ActivatedRoute } from '@angular/router';

export interface AccomodationElement {
  placeID: number;
  roomID: number;
  capacity: number;
  name: string;
  state: string;
  pricepernight: number;
  facilities: string;
  
}
const ELEMENT_DATA: AccomodationElement[] = [
  {placeID: 1, roomID:1, capacity: 1, name: 'Pokój 1',state: 'state1', pricepernight: 100, facilities: '3'},
  {placeID: 2, roomID:2, capacity: 2, name: 'Pokój 2',state: 'state2', pricepernight: 150, facilities: '3'},
  {placeID: 3, roomID:3, capacity: 3, name: 'Pokój 3',state: 'state3', pricepernight: 200, facilities: '3'}
];

@Component({
  selector: 'app-accomodation-page',
  templateUrl: './accomodation-page.component.html',
  styleUrls: ['./accomodation-page.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, FormsModule, CommonModule, MatTableModule, ReviewComponentComponent]
})


export class AccomodationPageComponent {
  @Input() price: number = 100;
  @Input() address: string = 'adres';
  @Input() description: string = 'przykladowy opis';
  @Input() rating: number = 7.5;
  @Input() placeID: number = 1;
  room: AccomodationElement = {placeID:1,roomID:1, capacity: 0, name: '', state: '', pricepernight: 0, facilities: ''};
  
 
  selectedRooms: AccomodationElement[] = [];
  displayedColumns: string[] = ['capacity', 'name', 'pricepernight','facilities'];
  dataSource = ELEMENT_DATA;
  form!: FormGroup;
  imageArray: string[] = [
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba1.jpg',
    'https://via.placeholder.com/300x200',
    'https://placehold.co/600x400'
  ];
  imageArray2: string[] = [
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba1.jpg',
    'https://via.placeholder.com/300x200',
    'https://placehold.co/600x600'
  ];
  imageArray3: string[] = [
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba1.jpg',
    'https://via.placeholder.com/300x200',
    'https://placehold.co/600x500'
  ];
  accommodations: any[]= [
    {placeID:1,capacity:0,name:'1',state: '2',pricepernight:150,facilities:'kino, basen', images: this.imageArray},
    {placeID:2,capacity:0,name:'2',state: '2',pricepernight:150,facilities:'', images: this.imageArray2},
    {placeID:3,capacity:0,name:'3',state: '2',pricepernight:150,facilities:'', images: this.imageArray3}
  ];
  
  currentImage: string = this.imageArray.length > 0 ? this.imageArray[0] : '';
  constructor(private route: ActivatedRoute,private reservationService: MyReservationsComponent, private fb: FormBuilder) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const placeID = params['placeID'];
      this.placeID = placeID;});
      console.log(this.placeID);
    
      
    this.form = this.fb.group({
      roomID: ['', Validators.required],
      placeID: ['', Validators.required],
     

    });
  }
  isPlaceIDMatch(accommodationPlaceID: number): boolean {
    return accommodationPlaceID === this.placeID;
  }
  setCurrentImage(image: string) {
    this.currentImage = image;
  }
 

  submitOrder() {
    console.log("Metoda submitOrder() została wywołana.");
  if (this.form.valid && this.selectedRooms.length > 0) {
    const roomID = this.selectedRooms[0].roomID;
    this.form.patchValue({ roomID });   
    const placeID = this.form.get('placeID')!.value;

    
    const selectedRoomsWithIds = this.selectedRooms.map(room => ({ ...room, placeID, roomID }));
    this.reservationService.addSelectedRooms(selectedRoomsWithIds);
  } else {
    console.warn('Form is not valid or no room selected.');
  }
}

  
isRoomSelected(room: AccomodationElement): boolean {
  return this.selectedRooms.includes(room);
}
toggleRoomSelection(room: AccomodationElement) {
  const index = this.selectedRooms.findIndex(selectedRoom => selectedRoom === room);
  if (index !== -1) {
    this.selectedRooms.splice(index, 1);
  } else {
    this.selectedRooms.push(room);
  }
}

}