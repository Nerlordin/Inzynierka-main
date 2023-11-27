
import {Component, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { AccomodationCardComponent } from '../accomodation-card/accomodation-card.component';
import { FiltryComponent } from '../filtry/filtry.component';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone:true,
  imports: [MatPaginatorModule, AccomodationCardComponent, FiltryComponent, SearchComponent, CommonModule, MatDividerModule]
})
export class MainPageComponent {
  
  accommodations = [
    { 
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      name: 'Accommodation 1', 
      description: 'Description 1',  
      city: 'City 1',
      building: 'Building 1',
      street: 'Street 1',
      voivodeship: 'Voivodeship 1',
      country: 'Country 1',
      category: 'Category 1',
      rating: 4.5,
      placeID: 1
    },
    { 
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      name: 'Accommodation 2', 
      description: 'Description 2',  
      city: 'City 2',
      building: 'Building 2',
      street: 'Street 2',
      voivodeship: 'Voivodeship 2',
      country: 'Country 2',
      category: 'Category 2',
      rating: 4.0,
      placeID: 2
    },
    { 
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      name: 'Accommodation 3', 
      description: 'Description 3',  
      city: 'City 3',
      building: 'Building 3',
      street: 'Street 3',
      voivodeship: 'Voivodeship 3',
      country: 'Country 3',
      category: 'Category 3',
      rating: 3.5,
      placeID: 3
    },
    { 
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      name: 'Accommodation 4', 
      description: 'Description 4',  
      city: 'City 4',
      building: 'Building 4',
      street: 'Street 4',
      voivodeship: 'Voivodeship 4',
      country: 'Country 4',
      category: 'Category 4',
      rating: 4.8,
      placeID: 4
    },
    { 
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      name: 'Accommodation 5', 
      description: 'Description 5',  
      city: 'City 5',
      building: 'Building 5',
      street: 'Street 5',
      voivodeship: 'Voivodeship 5',
      country: 'Country 5',
      category: 'Category 5',
      rating: 3.2,
      placeID: 4
    },
  ];
  pagedOpinions: any[] = [];
  pageSize = 3; 
  onPageChange(event: PageEvent) {
    
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedOpinions = this.accommodations.slice(startIndex, endIndex);
  }
}
