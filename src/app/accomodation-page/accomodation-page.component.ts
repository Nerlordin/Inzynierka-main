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
import { CdkColumnDef } from '@angular/cdk/table';
import { RoomDTO } from '../models/roomDTO';


export interface AccomodationElement {
  placeID: number;
  roomID: number;
  liczba_osob: number;
  name: string;
  cena: number;
  liczba_dostepnych: number;
  description: string;
}
// const ELEMENT_DATA: AccomodationElement[] = [
//   { liczba_osob: 1, name: 'Pokój 1', cena: 100, liczba_dostepnych: 3, description: 'Standardowy pokój jednoosobowy'},
//   { liczba_osob: 2, name: 'Pokój 2', cena: 150, liczba_dostepnych: 3, description: 'Pokój z widokiem na morze'},
//   { liczba_osob: 3, name: 'Pokój 3', cena: 200, liczba_dostepnych: 3, description: 'Apartament rodzinny'}
// ];
const ELEMENT_DATA: RoomDTO[] = [
  {
    id:1,
    capacity:3,
     description:"Desc",
     facilities: [],
     name:"Pokoje",
     placeId:3,
     pricePerNight: 30,
     state: "AVAILABLE"
  }
]

@Component({
  selector: 'app-accomodation-page',
  templateUrl: './accomodation-page.component.html',
  styleUrls: ['./accomodation-page.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, FormsModule, CommonModule, MatTableModule, ReviewComponentComponent]
})


export class AccomodationPageComponent {
  @Input() imageUrl: string ='https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() smallImage: string ='https://material.angular.io/assets/img/examples/shiba1.jpg';
  @Input() image2: string ='https://via.placeholder.com/300x200';
  @Input() price: number = 100;
  @Input() address: string = 'adres';
  @Input() description: string = 'przykladowy opis';
  @Input() rating: number = 7.5;
  // room: AccomodationElement = {placeID:1,roomID:1, name: '', liczba_osob: 0, cena: 0, liczba_dostepnych: 0, description: '' };
  currentImage: string = this.imageUrl;
  selectedRooms: RoomDTO[] = [];
  displayedColumns: string[] = ['liczba_osob', 'name', 'cena','liczba_dostepnych', 'description'];
  dataSource = ELEMENT_DATA;
  form!: FormGroup;

  constructor(private reservationService: MyReservationsComponent, private fb: FormBuilder) { }
  ngOnInit() {
    // Initialize the form with validators if needed
    this.form = this.fb.group({
      roomID: ['', Validators.required],
      placeID: ['', Validators.required],

    });
  }
  setCurrentImage(image: string) {
    this.currentImage = image;
  }

  submitOrder() {
    console.log("Metoda submitOrder() została wywołana.");
  if (this.form.valid && this.selectedRooms.length > 0) {

    const roomID = this.selectedRooms[0].id;


    this.form.patchValue({ roomID });


    const placeID = this.form.get('placeID')!.value;


    const selectedRoomsWithIds = this.selectedRooms.map(room => ({ ...room, placeID, roomID }));
    this.reservationService.addSelectedRooms(selectedRoomsWithIds);
  } else {
    console.warn('Form is not valid or no room selected.');
    this.reservationService.addSelectedRooms(this.selectedRooms);
  }
}

isRoomSelected(room: RoomDTO): boolean {
  return this.selectedRooms.includes(room);
}
toggleRoomSelection(room: RoomDTO) {
  const index = this.selectedRooms.findIndex(selectedRoom => selectedRoom === room);
  if (index !== -1) {

    this.selectedRooms.splice(index, 1);
  } else {

    this.selectedRooms.push(room);
  }
}
}
