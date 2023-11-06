import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Podstrona2Component } from './podstrona2.component';

describe('Podstrona2Component', () => {
  let component: Podstrona2Component;
  let fixture: ComponentFixture<Podstrona2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Podstrona2Component]
    });
    fixture = TestBed.createComponent(Podstrona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
