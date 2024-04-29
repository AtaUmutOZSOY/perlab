import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEventDialogComponent } from './create-new-event-dialog.component';

describe('CreateNewEventDialogComponent', () => {
  let component: CreateNewEventDialogComponent;
  let fixture: ComponentFixture<CreateNewEventDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewEventDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
