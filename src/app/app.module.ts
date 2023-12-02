import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Podstrona1Component } from './podstrona1/podstrona1.component';
import { Podstrona2Component } from './podstrona2/podstrona2.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AccomodationCardComponent } from './accomodation-card/accomodation-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltryComponent } from './filtry/filtry.component';
import { MatSliderModule } from '@angular/material/slider';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { AccomodationPageComponent } from './accomodation-page/accomodation-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CdkColumnDef } from '@angular/cdk/table';
// import { httpInterceptorProviders } from './_services/http-request-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponentComponent } from './review-component/review-component.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { PlacesComponent } from './places/places.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { httpInterceptorProviders } from './_services/http-request-interceptor';
import { MyPlacesComponent } from './my-places/my-places.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { EditAccomodationComponent } from './edit-accomodation/edit-accomodation.component';
import { AccomodationFormComponent } from './accomodation-form/accomodation-form.component';
import { AccomodationCreateComponent } from './accomodation-create/accomodation-create.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomSelectionComponent } from './room-selection/room-selection.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ReservePlaceDialogComponent } from './reserve-place-dialog/reserve-place-dialog.component';
import { GenerateReportDialogComponent } from './generate-report-dialog/generate-report-dialog.component';
import { SearchPlaceDetailsComponent } from './search-place-details/search-place-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Podstrona1Component,
    Podstrona2Component,
    FooterComponent,
    RoomSelectionComponent,


    CreateRoomComponent,
    RoomsComponent,


  ],
  imports: [
    SearchPlaceDetailsComponent,
    GenerateReportDialogComponent,
    MatDialogModule,
    ChangePasswordDialogComponent,
    ReservePlaceDialogComponent,
    RoomDetailsComponent,
    MyOffersComponent,
    PlaceDetailsComponent,
    PlacesComponent,
    CreatePlaceComponent,
    MainPageComponent, MyPlacesComponent,
    RoomCreateComponent,
    AccomodationFormComponent,
    MyReservationsComponent,
    EditReservationComponent,
    EditAccomodationComponent,
    ProfilePageComponent,
    ReviewPageComponent,
    ReviewComponentComponent,
    MatPaginatorModule,
    MatMenuModule,
    HttpClientModule,
    MatDividerModule,
    AccomodationPageComponent,
    RouterModule,
    RegisterPageComponent,
    LoginPageComponent,
    BrowserModule,
    SearchComponent,
    NavbarComponent,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    AccomodationCardComponent,
    FiltryComponent,
    MatSliderModule,
    AccomodationCreateComponent,
  ],
  providers: [httpInterceptorProviders],

  // providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule {

}
