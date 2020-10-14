import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPreviewComponent } from './feedback-preview.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

describe('FeedbackPreviewComponent', () => {
  let component: FeedbackPreviewComponent;
  let fixture: ComponentFixture<FeedbackPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        RouterModule.forRoot([]),
      ],
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
