import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './modules/guest/layout/guest-layout/guest-layout.component';
import { AdminLayoutComponent } from './modules/admin/layout/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:GuestLayoutComponent,pathMatch:'full'},
  {path:"manage",component:AdminLayoutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
