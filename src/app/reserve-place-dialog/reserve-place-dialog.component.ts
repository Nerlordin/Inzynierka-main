import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../_services/reservation.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-reserve-place-dialog',
  templateUrl: './reserve-place-dialog.component.html',
  styleUrls: ['./reserve-place-dialog.component.css'],
  standalone: true,
  imports: [MatDatepickerModule,FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule, MatDialogModule],
})
export class ReservePlaceDialogComponent {

  constructor(public dialogRef: MatDialogRef<ReservePlaceDialogComponent>, private reservationService: ReservationService, private fb: FormBuilder, private router: Router) {

  }
  range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });
}
