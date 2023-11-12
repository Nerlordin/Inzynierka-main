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

@Component({
  selector: 'app-accomodation-create',
  templateUrl: './accomodation-create.component.html',
  styleUrls: ['./accomodation-create.component.css'],
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
    CommonModule
  ],
})
export class AccomodationCreateComponent {
  imageUrls: string[] = [];
  newImageUrl: string = '';
  selectedFile: File | null = null;
  createdPlaces: any[] = [];

  placeID: number = 0;
  form: FormGroup; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
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
    if (this.form.valid) {
      this.placeID++;
      const createdPlace = {
        placeID: this.placeID,
        ...this.form.value,
      };
      this.createdPlaces.push(createdPlace);
      this.form.reset();
    }
  }
}
