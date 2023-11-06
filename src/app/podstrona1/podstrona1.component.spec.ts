import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { Podstrona1Component } from './podstrona1.component';

describe('Podstrona1Component', () => {
  let component: Podstrona1Component;
  let fixture: ComponentFixture<Podstrona1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Podstrona1Component]
    });
    fixture = TestBed.createComponent(Podstrona1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
