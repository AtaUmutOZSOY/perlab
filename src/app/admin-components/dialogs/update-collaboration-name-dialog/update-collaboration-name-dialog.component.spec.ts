import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollaborationNameDialogComponent } from './update-collaboration-name-dialog.component';

describe('UpdateCollaborationNameDialogComponent', () => {
  let component: UpdateCollaborationNameDialogComponent;
  let fixture: ComponentFixture<UpdateCollaborationNameDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCollaborationNameDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateCollaborationNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
