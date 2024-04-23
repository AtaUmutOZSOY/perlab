import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageTeamComponent } from './components/manage-team/manage-team.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';
import { ManagePublicationsComponent } from './components/manage-publications/manage-publications.component';
import { ManageCollaborationsComponent } from './components/manage-collaborations/manage-collaborations.component';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,
  },
  {
    path:'manage-team',component:ManageTeamComponent,
  },
  {
    path:'manage-projects',component:ManageProjectsComponent,

  },
  {
    path:'manage-publications',component:ManagePublicationsComponent,

  },
  {
    path:'manage-collaborations',component:ManageCollaborationsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
