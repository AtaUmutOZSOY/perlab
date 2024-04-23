import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './modules/component/home/home.component';
import { flush } from '@angular/core/testing';
import { TeamComponent } from './modules/component/team/team.component';
import { PublicationsComponent } from './modules/component/publications/publications.component';
import { ProjectsComponent } from './modules/component/projects/projects.component';
import { CollaborationsComponent } from './modules/component/collaborations/collaborations.component';
import { LoginComponent } from './modules/admin/components/login/login.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"team",component:TeamComponent},
  {path:"publications",component:PublicationsComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"collaborations",component:CollaborationsComponent},
  {path:"login",component:LoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent , canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
