import { Component } from '@angular/core';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, RouterModule, MatListModule, MatFormFieldModule, MatTableModule, MatSelectModule, MatRadioModule, CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatPaginatorModule, MatDialogModule],

})
export class ChangePasswordDialogComponent {

  constructor(public dialogRef: MatDialogRef<ChangePasswordDialogComponent>, private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group({
      confirmPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }
  passwordForm: FormGroup
  save() {
    // this.dialogRef.close(this.form.value);
    this.dialogRef.close();
  }
  changePassword() {
    this.userService.changePassword(this.passwordForm.get('newPassword')!.value!).subscribe(res=>{
      this.dialogRef.close();

    });
  }

  close() {
    this.dialogRef.close();
  }
  canChangePassword() {
    return this.passwordForm.valid && this.passwordForm.get('newPassword')!.value! === this.passwordForm.get('confirmPassword')!.value!
  }
}
