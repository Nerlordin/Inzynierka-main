import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponentComponent } from './review-component.component';

describe('ReviewComponentComponent', () => {
  let component: ReviewComponentComponent;
  let fixture: ComponentFixture<ReviewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponentComponent]
    });
    fixture = TestBed.createComponent(ReviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
