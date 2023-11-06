import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationCardComponent } from './accomodation-card.component';

describe('AccomodationCardComponent', () => {
  let component: AccomodationCardComponent;
  let fixture: ComponentFixture<AccomodationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationCardComponent]
    });
    fixture = TestBed.createComponent(AccomodationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
