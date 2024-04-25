import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './modules/guest/layout/guest-layout/guest-layout.component';
import { AdminLayoutComponent } from './modules/admin/layout/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path:"",redirectTo:"guest/home",pathMatch:"full"}, 
  {path:"manage",component:AdminLayoutComponent,canActivate:[AuthGuard]},
  { path: '**', component: NotFoundComponent } // Bu satır en sona eklenir

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
