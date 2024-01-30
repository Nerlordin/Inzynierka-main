import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../_services/reservation.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PlaceService } from '../_services/place.service';

@Component({
  selector: 'app-generate-report-dialog',
  templateUrl: './generate-report-dialog.component.html',
  styleUrls: ['./generate-report-dialog.component.css'],
  standalone: true,
  imports: [MatDatepickerModule, FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule, MatDialogModule],
})
export class GenerateReportDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { placeId: number },
    public dialogRef: MatDialogRef<GenerateReportDialogComponent>, private placeService: PlaceService, private fb: FormBuilder, private router: Router) {
  }
  generateReport() {
    this.placeService
      .generateReport(this.data.placeId, this.range.get('start')?.value!, this.range.get('end')?.value!)

  }

  saveFile(blobData: Blob) {
    const downloadLink = document.createElement('a');
    const url = window.URL.createObjectURL(blobData);
    downloadLink.href = url;
    downloadLink.download = 'nazwa_pliku'; // Zastąp 'nazwa_pliku' właściwą nazwą pliku
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(url);
  }

  range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });
}
