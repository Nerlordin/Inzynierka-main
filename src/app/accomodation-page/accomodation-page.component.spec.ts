import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationPageComponent } from './accomodation-page.component';

describe('AccomodationPageComponent', () => {
  let component: AccomodationPageComponent;
  let fixture: ComponentFixture<AccomodationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationPageComponent]
    });
    fixture = TestBed.createComponent(AccomodationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
