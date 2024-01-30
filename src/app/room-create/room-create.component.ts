import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatChipsModule
  ],
})

export class RoomCreateComponent {
  imageUrls: string[] = [];
  newImageUrl: string = '';
  selectedFile: File | null = null;
  createdRooms: any[] = [];
  form: FormGroup;
  roomID: number = 0;
  roomNameFilter: string = '';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      capacity: [null, Validators.required],
      name: [null, Validators.required],
      state: [null, Validators.required],
      pricepernight: [null, Validators.required],
      facilities: [null, Validators.required],
    });
    this.generateBasicRooms();
  }

  generateBasicRooms() {
    this.roomID++;
    const room1 = {
      roomID: this.roomID,
      capacity: 2,
      name: 'Basic Room 1',
      state: 'Available',
      pricepernight: 50,
      facilities: 'Wi-Fi, TV',
    };

    this.roomID++;
    const room2 = {
      roomID: this.roomID,
      capacity: 3,
      name: 'Basic Room 2',
      state: 'Occupied',
      pricepernight: 70,
      facilities: 'Wi-Fi, TV, Air Conditioning',
    };


    this.createdRooms.push(room1, room2);
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
  onSubmit() {
    if (this.form.valid) {
      this.roomID++;

      const createdRoom = {
        roomID: this.roomID,
        ...this.form.value,
        images: [...this.imageUrls],
      };

      this.createdRooms.push(createdRoom);
      this.form.reset();
      this.imageUrls = [];
    }
  }
}
