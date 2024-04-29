import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPublicationDialogComponent } from './create-new-publication-dialog.component';

describe('CreateNewPublicationDialogComponent', () => {
  let component: CreateNewPublicationDialogComponent;
  let fixture: ComponentFixture<CreateNewPublicationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewPublicationDialogComponent]
    });
    fixture = TestBed.createComponent(CreateNewPublicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
