import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the login method', async () => {
    fixture.detectChanges();
    spyOn(component, 'login');
    const submitButton = fixture.debugElement.nativeElement.querySelector('#login-button');
    submitButton.click();
    expect(component.login).toHaveBeenCalledTimes(1);
  });

  it('should test the login form validation ', async () => {
    fixture.whenStable().then( () => {
      // console.log(component.form.form.controls.email.value);
      expect(component.form.valid).toBeFalsy();

      component.form.form.controls.email.setValue('tech@arzttermine.de');
      component.form.form.controls.password.setValue('test1234');
      expect(component.form.valid).toBeTruthy();
    });
  });

  it('should test input errors', async () => {
    fixture.whenStable().then( () => {
      // console.log(component.form.form.controls.email.value);
      expect(component.form.valid).toBeFalsy();
      component.form.form.controls.email.setValue('tech');
      component.form.form.controls.password.setValue('');
      expect(component.form.form.controls.email.errors).toBeTruthy();
      expect(component.form.form.controls.password.errors).toBeTruthy();
    });
  });

  it('should display error messages', async () => {
    fixture.whenStable().then( () => {
      component.errorMessage = 'Fehler';
      component.loginError = true;
      const errorMessages = fixture.debugElement.nativeElement.querySelector('.error-message').errorMessage;
      expect(errorMessages).toContain('Fehler');
    });
  });

  it('should display the password reset form', async () => {
    fixture.whenStable().then( () => {
      component.showLogin = false;
      expect(fixture.debugElement.nativeElement.querySelector('mat-card-title').html).toContain('Passwort vergessen?')
    });
  });

});
