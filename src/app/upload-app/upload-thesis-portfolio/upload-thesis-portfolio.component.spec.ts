import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadThesisPortfolioComponent } from './upload-thesis-portfolio.component';

describe('UploadThesisPortfolioComponent', () => {
  let component: UploadThesisPortfolioComponent;
  let fixture: ComponentFixture<UploadThesisPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadThesisPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadThesisPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
