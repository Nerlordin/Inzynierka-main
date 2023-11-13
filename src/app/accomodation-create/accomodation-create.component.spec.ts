import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationCreateComponent } from './accomodation-create.component';

describe('AccomodationCreateComponent', () => {
  let component: AccomodationCreateComponent;
  let fixture: ComponentFixture<AccomodationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationCreateComponent]
    });
    fixture = TestBed.createComponent(AccomodationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
