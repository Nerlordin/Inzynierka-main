import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaceDetailsComponent } from './search-place-details.component';

describe('SearchPlaceDetailsComponent', () => {
  let component: SearchPlaceDetailsComponent;
  let fixture: ComponentFixture<SearchPlaceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPlaceDetailsComponent]
    });
    fixture = TestBed.createComponent(SearchPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
