import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from 'src/app/components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ManageCollaborationsComponent } from 'src/app/admin-components/manage-collaborations/manage-collaborations.component';
import { CreateNewCollaborationDialogComponent } from 'src/app/admin-components/dialogs/create-new-collaboration-dialog/create-new-collaboration-dialog.component';
import { UpdateCollaborationNameDialogComponent } from 'src/app/admin-components/dialogs/update-collaboration-name-dialog/update-collaboration-name-dialog.component';
import { UpdateCollaborationWebSiteDialogComponent } from 'src/app/admin-components/dialogs/update-collaboration-web-site-dialog/update-collaboration-web-site-dialog.component';
import { ConfirmDialogComponent } from 'src/app/admin-components/dialogs/confirm-dialog/confirm-dialog.component';
import { ManageProjectsComponent } from 'src/app/admin-components/manage-projects/manage-projects.component';
import { CreateNewProjectDialogComponent } from 'src/app/admin-components/dialogs/create-new-project-dialog/create-new-project-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateProjectDialogComponent } from 'src/app/admin-components/dialogs/update-project-dialog/update-project-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManageAuthorsComponent } from 'src/app/admin-components/manage-authors/manage-authors.component';
import { ManageEventsComponent } from 'src/app/admin-components/manage-events/manage-events.component';
import { ManageAnnouncementsComponent } from 'src/app/admin-components/manage-announcements/manage-announcements.component';
import { UpdateEventDialogComponent } from 'src/app/admin-components/dialogs/update-event-dialog/update-event-dialog.component';
import { CreateNewEventDialogComponent } from 'src/app/admin-components/dialogs/create-new-event-dialog/create-new-event-dialog.component';
import { ManagePublicationsComponent } from 'src/app/admin-components/manage-publications/manage-publications.component';
import { CreateNewPublicationDialogComponent } from 'src/app/admin-components/dialogs/create-new-publication-dialog/create-new-publication-dialog.component';
import { ManageTeamComponent } from 'src/app/admin-components/manage-team/manage-team.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    ManageAuthorsComponent,
    ManageCollaborationsComponent,
    ManageProjectsComponent,
    ManageAnnouncementsComponent,
    ManageEventsComponent,
    ManagePublicationsComponent,
    ManageTeamComponent,
    CreateNewCollaborationDialogComponent,
    UpdateCollaborationNameDialogComponent,
    UpdateCollaborationWebSiteDialogComponent,
    CreateNewProjectDialogComponent,  
    ConfirmDialogComponent,
    UpdateProjectDialogComponent,
    UpdateEventDialogComponent,
    CreateNewEventDialogComponent,
    CreateNewPublicationDialogComponent,


  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 3000, // 3 seconds
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass:"toast-bottom-right"
    }),
    CommonModule,
    MatDialogModule,
    AdminRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
