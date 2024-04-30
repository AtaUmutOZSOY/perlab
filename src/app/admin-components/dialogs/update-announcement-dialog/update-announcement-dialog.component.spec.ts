import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog.component';

describe('UpdateAnnouncementDialogComponent', () => {
  let component: UpdateAnnouncementDialogComponent;
  let fixture: ComponentFixture<UpdateAnnouncementDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAnnouncementDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateAnnouncementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
