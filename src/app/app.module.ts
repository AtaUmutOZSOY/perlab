import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AdminModule } from './modules/admin/admin.module';
import { AnnouncementModule } from './modules/announcement/announcement.module';
import { AuthModule } from './modules/auth/auth.module';
import { CollaborationModule } from './modules/collaboration/collaboration.module';
import { ContactModule } from './modules/contact/contact.module';
import { EventModule } from './modules/event/event.module';
import { ProjectModule } from './modules/project/project.module';
import { PublicationModule } from './modules/publication/publication.module';
import { TeamModule } from './modules/team/team.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AnnouncementRoutingModule } from './modules/announcement/announcement-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { CollaborationRoutingModule } from './modules/collaboration/collaboration-routing.module';
import { ContactRoutingModule } from './modules/contact/contact-routing.module';
import { EventRoutingModule } from './modules/event/event-routing.module';
import { ProjectRoutingModule } from './modules/project/project-routing.module';
import { PublicationRoutingModule } from './modules/publication/publication-routing.module';
import { TeamRoutingModule } from './modules/team/team-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    AnnouncementRoutingModule,
    AuthRoutingModule,
    CollaborationRoutingModule,
    ContactRoutingModule,
    EventRoutingModule,
    ProjectRoutingModule,
    PublicationRoutingModule,
    TeamRoutingModule,
    HttpClientModule,
    AdminModule,
    AnnouncementModule,
    AuthModule,
    CollaborationModule,
    ContactModule,
    EventModule,
    ProjectModule,
    PublicationModule,
    TeamModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 3 seconds
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
