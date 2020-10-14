import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTopicsComponent } from './current-topics.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('CurrentTopicsComponent', () => {
  let component: CurrentTopicsComponent;
  let fixture: ComponentFixture<CurrentTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        RouterModule.forRoot([])
      ],
      declarations: [ CurrentTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
