import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from './header.component';
import {Location} from '@angular/common';
import {BasicProcessComponent} from '../basic-process/basic-process.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element;


  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {path: 'home', component: BasicProcessComponent}
        ])],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should test header', () => {
    expect(element.querySelector('a').text).toBe(' Home');
  });

  it('should navigate to HomeComponent', async (inject([Location], (location) => {

    fixture.nativeElement.querySelector('a').click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/home');
    });
  })));
});
