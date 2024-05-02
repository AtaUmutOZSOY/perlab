import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTeamMemberDialogComponent } from './create-new-team-member-dialog.component';

describe('CreateNewTeamMemberDialogComponent', () => {
  let component: CreateNewTeamMemberDialogComponent;
  let fixture: ComponentFixture<CreateNewTeamMemberDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewTeamMemberDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewTeamMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
