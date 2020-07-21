import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPreviewComponent } from './feedback-preview.component';

describe('FeedbackPreviewComponent', () => {
  let component: FeedbackPreviewComponent;
  let fixture: ComponentFixture<FeedbackPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
