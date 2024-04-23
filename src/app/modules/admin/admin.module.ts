import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageTeamComponent } from './components/manage-team/manage-team.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';
import { ManageCollaborationsComponent } from './components/manage-collaborations/manage-collaborations.component';
import { ManagePublicationsComponent } from './components/manage-publications/manage-publications.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    ManageTeamComponent,
    ManageProjectsComponent,
    ManageCollaborationsComponent,
    ManagePublicationsComponent
  ],
  imports: [
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports:[
    LoginComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule { }
