import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFeedbackComponent } from './create-new-feedback.component';

describe('CreateNewFeedbackComponent', () => {
  let component: CreateNewFeedbackComponent;
  let fixture: ComponentFixture<CreateNewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
