import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Podstrona1Component } from './podstrona1/podstrona1.component';
import { Podstrona2Component } from './podstrona2/podstrona2.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AccomodationPageComponent } from './accomodation-page/accomodation-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { EditAccomodationComponent } from './edit-accomodation/edit-accomodation.component';
import { AccomodationFormComponent } from './accomodation-form/accomodation-form.component';
import { AccomodationCreateComponent } from './accomodation-create/accomodation-create.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomSelectionComponent } from './room-selection/room-selection.component';

const routes: Routes = [
 
  { path: 'podstrona1', component: Podstrona1Component },
  { path: 'podstrona2', component: Podstrona2Component },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'accomodation/:placeID', component: AccomodationPageComponent },
  { path: 'review', component: ReviewPageComponent },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'reservations', component: MyReservationsComponent},
  { path: 'reservations/edit', component: EditReservationComponent},
  { path: 'accomodation/edit', component: EditAccomodationComponent},
  { path: 'accomodation/form', component: AccomodationFormComponent},
  { path: 'accomodation/create', component: AccomodationCreateComponent},
  { path: 'room/create', component:RoomCreateComponent},
  { path: 'room', component:RoomSelectionComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
