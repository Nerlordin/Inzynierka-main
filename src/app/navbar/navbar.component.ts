import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule, MatToolbarModule, MatMenuModule, CommonModule],
})
export class NavbarComponent {
  constructor(private storageService: StorageService){
    
  }
  logout(){
    this.storageService.signOut();
  }
  isLogged() : boolean {
    return this.storageService.isLoggedIn();
  }
}
