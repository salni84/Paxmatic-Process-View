import { LoginComponent } from './login.component';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {environment} from '../../../environments/environment';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element;


  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach( inject([], s => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test login-validation true',  () => {
    component.password = environment.password;
    component.passwordValidation();
    expect(component.password.length).toBe(0);
    expect(component.isLoggedIn).toBe(true);
  });

  it('should test login-validation false',  () => {
    component.password = 'abcd';
    component.passwordValidation();
    expect(component.password.length).toBe(4);
    expect(component.isLoggedIn).toBe(false);
    expect(component.errormessage).toBe('Passwort nicht korrekt!');
  });
});
