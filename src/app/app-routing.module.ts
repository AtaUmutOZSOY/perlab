import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './modules/component/home/home.component';
import { flush } from '@angular/core/testing';
import { TeamComponent } from './modules/component/team/team.component';
import { PublicationsComponent } from './modules/component/publications/publications.component';
import { ProjectsComponent } from './modules/component/projects/projects.component';
import { CollaborationsComponent } from './modules/component/collaborations/collaborations.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"team",component:TeamComponent},
  {path:"publications",component:PublicationsComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"collaborations",component:CollaborationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
