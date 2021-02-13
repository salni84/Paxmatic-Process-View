import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProcessComponent } from './department-process.component';

describe('DepartmentProcessComponent', () => {
  let component: DepartmentProcessComponent;
  let fixture: ComponentFixture<DepartmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
