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
  searchFilter: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.searchFilter = this._formBuilder.group({
      hotel: false,
      camping: false,
      pensjonat: false,
      maxPrice: new FormControl(10), 
    });
  }
}