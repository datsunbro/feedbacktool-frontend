import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewComponent } from './general-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';
import { MatNavList } from '@angular/material/list';

describe('GeneralViewComponent', () => {
  let component: GeneralViewComponent;
  let fixture: ComponentFixture<GeneralViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        GeneralViewComponent,
        FooterComponent,
        MatNavList
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
