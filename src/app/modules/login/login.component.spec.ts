import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceMock = {
      setUser: jest.fn()
    };

    const routerMock = {
      navigate: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas:[NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form with email and password controls', () => {
    component.ngOnInit();
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the email control required', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.hasError('required')).toBeTruthy();
  });

  it('should validate the email format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBeTruthy();
  });

  it('should make the password control required', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.hasError('required')).toBeTruthy();
  });

  it('should enforce a minimum length of 10 characters for the password', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('short');
    expect(passwordControl?.hasError('minlength')).toBeTruthy();
  });

  it('should call authService.setUser and navigate to /gif on goToGif', () => {
    component.loginForm.setValue({ email: 'test@example.com', password: 'longenoughpassword' });
    component.goToGif();

    expect(authService.setUser).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'longenoughpassword'
    });
    expect(router.navigate).toHaveBeenCalledWith(['/gif']);
  });
});
