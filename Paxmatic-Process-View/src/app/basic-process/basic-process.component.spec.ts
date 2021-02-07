import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProcessComponent } from './basic-process.component';

describe('BasicProcessComponent', () => {
  let component: BasicProcessComponent;
  let fixture: ComponentFixture<BasicProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
