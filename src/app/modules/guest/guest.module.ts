import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { GuestRoutingModule } from './guest-routing.module';
import { TeamComponent } from 'src/app/components/team/team.component';
import { CollaborationsComponent } from 'src/app/components/collaborations/collaborations.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { PublicationsComponent } from 'src/app/components/publications/publications.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn icon
import { MatTooltipModule } from '@angular/material/tooltip';

library.add(faLinkedin);


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    PublicationsComponent,
    ProjectsComponent,
    CollaborationsComponent,
    GuestLayoutComponent,
  ],
  imports: [
    FontAwesomeModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,    
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    GuestRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports:[]
})
export class GuestModule { }
