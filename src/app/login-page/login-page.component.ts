import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatButtonModule, MatIconModule, RouterModule, MatCheckboxModule]
})
export class LoginPageComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required]);
 
  
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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private router: Router,private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
  
    this.authService.login(this.email.value!, this.password.value!).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigateByUrl("/places");
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
  }
}
