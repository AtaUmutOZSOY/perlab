import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAnnouncementDialogComponent } from './create-new-announcement-dialog.component';

describe('CreateNewAnnouncementDialogComponent', () => {
  let component: CreateNewAnnouncementDialogComponent;
  let fixture: ComponentFixture<CreateNewAnnouncementDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewAnnouncementDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewAnnouncementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
