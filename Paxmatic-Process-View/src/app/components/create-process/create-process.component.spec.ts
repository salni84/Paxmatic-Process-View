import { CreateProcessComponent } from './create-process.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CreateProcessComponent', () => {
  let component: CreateProcessComponent;
  let fixture: ComponentFixture<CreateProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
