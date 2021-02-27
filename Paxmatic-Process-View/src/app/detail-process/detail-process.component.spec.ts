import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DetailProcessComponent } from './detail-process.component';

describe('DetailProcessComponent', () => {
  let component: DetailProcessComponent;
  let fixture: ComponentFixture<DetailProcessComponent>;
  let element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Detailprozesse');
  });
});
