import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { SubProcessComponent } from './sub-process.component';

describe('SubProcessComponent', () => {
  let component: SubProcessComponent;
  let fixture: ComponentFixture<SubProcessComponent>;
  let element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Teilprozesse');
  });
});
