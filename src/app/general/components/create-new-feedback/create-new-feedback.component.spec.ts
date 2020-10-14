import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFeedbackComponent } from './create-new-feedback.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

describe('CreateNewFeedbackComponent', () => {
  let component: CreateNewFeedbackComponent;
  let fixture: ComponentFixture<CreateNewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot([]),
      ],
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
