import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-filtry',
  templateUrl: './filtry.component.html',
  styleUrls: ['./filtry.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, MatSliderModule],
})
export class FiltryComponent {
  accomodation_type: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.accomodation_type = this._formBuilder.group({
      hotel: false,
      camping: false,
      pensjonat: false,
      cena: new FormControl(10), // Dodaj formControl cena i ustaw początkową wartość na 0
    });
  }
}