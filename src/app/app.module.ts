import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './modules/component/header/header.component';
import { SharedModule } from './modules/shared/shared.module';
import { GuestModule } from './modules/guest/guest.module';
import { NavbarComponent } from './modules/component/navbar/navbar.component';
import { HomeComponent } from './modules/component/home/home.component';
import { FooterComponent } from './modules/component/footer/footer.component';
import { TeamComponent } from './modules/component/team/team.component';
import { PublicationsComponent } from './modules/component/publications/publications.component';
import { ProjectsComponent } from './modules/component/projects/projects.component';
import { CollaborationsComponent } from './modules/component/collaborations/collaborations.component';
import { AdminModule } from './modules/admin/admin.module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TeamComponent,
    PublicationsComponent,
    ProjectsComponent,
    CollaborationsComponent,
  ],
  imports: [
    AdminModule,
    BrowserModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    GuestModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 3 seconds
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass:"toast-bottom-right"
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
