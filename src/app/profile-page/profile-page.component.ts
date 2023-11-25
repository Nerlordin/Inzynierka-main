import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class ProfilePageComponent {
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(public dialog: MatDialog, private router: Router) { }

  changePassword(): void {
     

    // this.router.navigateByUrl('/profile'); 
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/profile'); 
      console.log('Dialog został zamknięty');
    });
    //   this.dialog.open(ChangePasswordDialogComponent, {
    //   width: '250px',
    //   disableClose: true,
    //   closeOnNavigation: true,
    //   autoFocus: true,
    //   position: {
    //   'top': '0',
    //   left: '0'
    //   }
    // });
    // const dialogOverlay = document.querySelector('.dialog-overlay');
  //   dialogOverlay?.classList.add('show-dialog')
  
  // function closeDialog() {
  //   const dialogOverlay = document.querySelector('.dialog-overlay');
  //   dialogOverlay?.classList.remove('show-dialog')
  }
}
