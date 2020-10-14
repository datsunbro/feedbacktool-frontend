import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './admin-view.component';
import { NavbarComponent} from '../navbar/navbar.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { RouterTestingModule} from '@angular/router/testing';
import { FooterComponent} from '../footer/footer.component';
import { MatNavList } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatSidenavModule,
        RouterTestingModule
      ],
      declarations: [
        AdminViewComponent,
        NavbarComponent,
        FooterComponent,
        MatNavList
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
