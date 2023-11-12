import { Component, OnInit } from '@angular/core';
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
  selector: 'app-accomodation-form',
  templateUrl: './accomodation-form.component.html',
  styleUrls: ['./accomodation-form.component.css'],
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
export class AccomodationFormComponent {
  
  roomID: number = 0;
  placeID: number = 0;
  arrivalDate: Date = new Date();
  departureDate: Date= new Date();

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      roomID: this.roomID,
      placeID: this.placeID,
      arrivalDate: this.arrivalDate.toISOString(),
      departureDate: this.departureDate.toISOString()
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      arrivalDate: [null, [Validators.required]],
      departureDate: [null, [Validators.required]]
    });
  }

 goToPayment() {
   
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
 
}
}