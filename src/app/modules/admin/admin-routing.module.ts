import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ManageTeamComponent } from 'src/app/admin-components/manage-team/manage-team.component';
import { ManagePublicationsComponent } from 'src/app/admin-components/manage-publications/manage-publications.component';
import { ManageProjectsComponent } from 'src/app/admin-components/manage-projects/manage-projects.component';
import { ManageCollaborationsComponent } from 'src/app/admin-components/manage-collaborations/manage-collaborations.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ManageAuthorsComponent } from 'src/app/admin-components/manage-authors/manage-authors.component';
import { ManageEventsComponent } from 'src/app/admin-components/manage-events/manage-events.component';
import { ManageAnnouncementsComponent } from 'src/app/admin-components/manage-announcements/manage-announcements.component';

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "", redirectTo: "manage-team", pathMatch: "full" },
      { path: "manage-authors", component: ManageAuthorsComponent },
      { path: "manage-events", component: ManageEventsComponent },
      { path: "manage-announcements", component: ManageAnnouncementsComponent },
      { path: "manage-team", component: ManageTeamComponent },
      { path: "manage-projects", component: ManageProjectsComponent },
      { path: "manage-publications", component: ManagePublicationsComponent },
      { path: "manage-collaborations", component: ManageCollaborationsComponent },
    ],
    canActivate:[AuthGuard],
  },
  {
    path: "login", component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
