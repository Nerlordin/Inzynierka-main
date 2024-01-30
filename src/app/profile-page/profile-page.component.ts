import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {ChangePasswordDialogComponent} from '../change-password-dialog/change-password-dialog.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class ProfilePageComponent {

  constructor(public dialog: MatDialog, private router: Router) {
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/profile');
    });
  }
}
