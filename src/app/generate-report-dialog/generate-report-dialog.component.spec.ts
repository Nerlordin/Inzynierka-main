import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDialogComponent } from './generate-report-dialog.component';

describe('GenerateReportDialogComponent', () => {
  let component: GenerateReportDialogComponent;
  let fixture: ComponentFixture<GenerateReportDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateReportDialogComponent]
    });
    fixture = TestBed.createComponent(GenerateReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
