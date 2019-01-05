import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadThesisReportComponent } from './upload-thesis-report.component';

describe('UploadThesisReportComponent', () => {
  let component: UploadThesisReportComponent;
  let fixture: ComponentFixture<UploadThesisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadThesisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadThesisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
