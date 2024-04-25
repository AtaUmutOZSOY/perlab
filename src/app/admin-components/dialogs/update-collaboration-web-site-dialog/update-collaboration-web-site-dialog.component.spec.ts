import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollaborationWebSiteDialogComponent } from './update-collaboration-web-site-dialog.component';

describe('UpdateCollaborationWebSiteDialogComponent', () => {
  let component: UpdateCollaborationWebSiteDialogComponent;
  let fixture: ComponentFixture<UpdateCollaborationWebSiteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCollaborationWebSiteDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateCollaborationWebSiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
