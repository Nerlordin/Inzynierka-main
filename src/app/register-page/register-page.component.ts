import { Component, Input } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { interval, firstValueFrom } from 'rxjs';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatButtonModule, MatIconModule, RouterModule],
})
export class RegisterPageComponent {
  constructor(protected authService: AuthService){

  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getUsernameErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.email.hasError('minlength')) {
      return 'Your username is too short';
    }
    return this.email.hasError('username') ? 'Not a valid username' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
  async onSubmit(): Promise<void> {
    if(await firstValueFrom(this.authService.checkEmail(this.email.value!))){
    this.authService.register(this.firstName.value!, this.lastName.value!, this.email.value!, this.password.value!).subscribe({
      next: data => {
      },
      error: err => {
      }
    });
  }else{
console.log("Nie dzialas")
  }
  }
}

