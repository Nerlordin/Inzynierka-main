import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../_services/place.service';
import { Place } from '../models/place';
import { CreatePlaceRequest } from '../models/create-place-request';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { RoomDTO } from '../models/roomDTO';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css'],
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule],
  standalone: true

})
export class CreatePlaceComponent {

  imageUrls: string[] = [];
  newImageUrl: string = '';
  selectedFile: File | null = null;
  createdPlaces: any[] = [];

  placeID: number = 0;
  placeForm: FormGroup;
  roomForm: FormGroup;
  rooms: RoomDTO[] = [];
  displayedColumns = [ 'description', 'name','capacity', 'pricePerNight', 'facilities', 'actions']
  constructor(private placeService: PlaceService, private fb: FormBuilder, private router: Router) {
    this.roomForm = this.fb.group({
      name: ['Daw', Validators.required],
      description: ['Daw', Validators.required],
      state: ['AVAILABLE', Validators.required],
      capacity: [23, Validators.required],
      pricePerNight: [200, Validators.required],
      facilities: ['WIFI', Validators.required],
    });
    this.placeForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      city: [null, Validators.required],
      building: [null, Validators.required],
      street: [null, Validators.required],
      voivodeship: [null, Validators.required],
      country: [null, Validators.required],
      category: [null, Validators.required],
      file: [''],
    });
  }
  possibleFacilities = ['SWIMMING_POOL', 'TV', "WIFI", 'TWIN_BED', 'SINGLE_BED']
  categories = [
    'HOTEL',
    'VILLA'
  ];
  states = ["AVAILABLE", "UNAVAILABLE"]
  voivodeships = [
    'LUBELSKIE',
    'LUBUSKIE',
    'OPOLSKIE',
    'ŁÓDZKIE',
    'POMORSKIE',
    'WIELKOPOLSKIE',
    'ZACHODNIO_POMORSKIE',
    'KUJAWSKO_POMORSKIE',
    'ŚLĄSKIE',
    'DOLNO_ŚLĄSKIE',
    'ŚWIĘTOKRZYSKIE',
    'ŚLĄSKIE',
    'ŁÓDZKIE',
    'MAZOWIECKIE',
    'MAŁOPOLSKIE'
  ]
  clearRooms() {
    this.rooms = [];
  }
  public addRoom(): void {
    let val = {
      capacity: this.roomForm.get('capacity')?.value!,
      pricePerNight: this.roomForm.get('pricePerNight')?.value!,
      description: this.roomForm.get('description')?.value!,
      name: this.roomForm.get('name')?.value!,
      facilities: this.roomForm.get('facilities')?.value!,
      state: this.roomForm.get('state')?.value!,
      id: this.rooms.length,
      placeId: 0,
    } as RoomDTO
    this.rooms = this.rooms.concat(val)
    this.roomForm.reset();
  }
  public removeRoom(roomDTO: RoomDTO) {
    this.rooms = this.rooms.filter(room => room.name != roomDTO.name);
  }
  public getFacilities(facilities: string[]): string {
    return facilities.join();
  }
  addImageUrl() {
    if (this.newImageUrl.trim() !== '') {
      this.imageUrls.push(this.newImageUrl);
      this.newImageUrl = '';
    }
  }

  removeImageUrl(index: number) {
    this.imageUrls.splice(index, 1);
  }
  /* onSubmit() {
     if (this.form.valid) {
       const apiUrl = 'your_server_api_url';
      
       this.http.post(apiUrl, this.form.value).subscribe(
         (response) => {
           console.log('Data sent successfully:', response);    
           this.form.reset(); 
         },
         (error) => {
           console.error('Error sending data:', error);
           this.form.reset(); 
         }
       );
     }
   }*/
  onSubmit() {
    {
      let request = {
        address: {
          building: this.placeForm.get('building')?.value,
          street: this.placeForm.get('street')?.value,
          city: this.placeForm.get('city')?.value
        },
        category: this.placeForm.get('category')?.value,
        name: this.placeForm.get('name')?.value,
        description: this.placeForm.get('description')?.value,
        rooms: this.rooms,
      } as CreatePlaceRequest;
      this.placeService.addPlace(request).subscribe(res => {
        this.router.navigateByUrl('/places/my')
      });
      if (this.placeForm.valid) {
        this.placeID++;
        const createdPlace = {
          placeID: this.placeID,
          ...this.placeForm.value,
        };
        this.createdPlaces.push(createdPlace);

        this.placeForm.reset();
      }
    }
  }

}