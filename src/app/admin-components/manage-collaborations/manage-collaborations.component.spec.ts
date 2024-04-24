import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCollaborationsComponent } from './manage-collaborations.component';

describe('ManageCollaborationsComponent', () => {
  let component: ManageCollaborationsComponent;
  let fixture: ComponentFixture<ManageCollaborationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCollaborationsComponent]
    });
    fixture = TestBed.createComponent(ManageCollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
