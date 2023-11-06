import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class ProfilePageComponent {
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
}
