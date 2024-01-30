
import {Component, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [MatGridListModule],
  standalone: true,
})

export class MainPageComponent {
 
  constructor(private  router: Router){}
  goToProfile(){
    this.router.navigateByUrl('/profile');
  }
  goToSearching(){
    this.router.navigateByUrl('/places');

  }
  goToReservations(){
    this.router.navigateByUrl('/reservations');

  }
  goToObjects(){
    this.router.navigateByUrl('/places/my');

  }
}
