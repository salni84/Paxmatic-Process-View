import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DepartmentProcessComponent } from './department-process.component';

describe('DepartmentProcessComponent', () => {
  let component: DepartmentProcessComponent;
  let fixture: ComponentFixture<DepartmentProcessComponent>;
  let element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Abteilungsprozesse');
  });
});
