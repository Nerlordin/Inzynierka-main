import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservePlaceDialogComponent } from './reserve-place-dialog.component';

describe('ReservePlaceDialogComponent', () => {
  let component: ReservePlaceDialogComponent;
  let fixture: ComponentFixture<ReservePlaceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservePlaceDialogComponent]
    });
    fixture = TestBed.createComponent(ReservePlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
