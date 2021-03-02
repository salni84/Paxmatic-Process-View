import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import {BasicProcessComponent} from '../basic-process/basic-process.component';
import {ProcessService} from '../../../service/process-service';
import {Location} from '@angular/common';


describe('NavComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let element;



  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, BasicProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {path: 'home/basisprozesse', component: BasicProcessComponent}
        ])],
      providers: [ProcessService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should test header', () => {
    expect(element.querySelector('a').innerText).toBe('Prozessemiscellaneous_services');
  });


  it('should navigate to BasicProcessComponent', async (inject([Location], (location) => {

    fixture.nativeElement.querySelector('a').click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/home/basisprozesse');
    });
  })));
});
