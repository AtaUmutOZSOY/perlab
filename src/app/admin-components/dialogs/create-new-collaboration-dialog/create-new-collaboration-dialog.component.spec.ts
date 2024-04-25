import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCollaborationDialogComponent } from './create-new-collaboration-dialog.component';

describe('CreateNewCollaborationDialogComponent', () => {
  let component: CreateNewCollaborationDialogComponent;
  let fixture: ComponentFixture<CreateNewCollaborationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewCollaborationDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewCollaborationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
