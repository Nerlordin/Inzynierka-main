import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlacesComponent } from './my-places.component';

describe('MyPlacesComponent', () => {
  let component: MyPlacesComponent;
  let fixture: ComponentFixture<MyPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlacesComponent]
    });
    fixture = TestBed.createComponent(MyPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
