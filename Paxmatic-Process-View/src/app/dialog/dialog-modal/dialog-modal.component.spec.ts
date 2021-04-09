import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalComponent } from './dialog-modal.component';

describe('DialogModalComponent', () => {
  let component: DialogModalComponent;
  let fixture: ComponentFixture<DialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModalComponent ]
    })
<<<<<<< HEAD
      .compileComponents();
=======
    .compileComponents();
>>>>>>> origin/master
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
<<<<<<< HEAD
=======

  it('should create', () => {
    expect(component).toBeTruthy();
  });
>>>>>>> origin/master
});
