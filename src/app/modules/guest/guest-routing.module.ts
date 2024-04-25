import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationsComponent } from 'src/app/components/collaborations/collaborations.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { PublicationsComponent } from 'src/app/components/publications/publications.component';
import { TeamComponent } from 'src/app/components/team/team.component';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

const guestRoutes: Routes = [
  {
    path: "guest",
    component: GuestLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "publications", component: PublicationsComponent },
      { path: "team", component: TeamComponent },
      { path: "collaborations", component: CollaborationsComponent }
    ]
  },
  

];


@NgModule({
  imports: [RouterModule.forRoot(guestRoutes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
