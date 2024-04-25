import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GuestModule } from './modules/guest/guest.module';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './modules/admin/admin.module';
import { CreateNewCollaborationDialogComponent } from './admin-components/dialogs/create-new-collaboration-dialog/create-new-collaboration-dialog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpdateCollaborationNameDialogComponent } from './admin-components/dialogs/update-collaboration-name-dialog/update-collaboration-name-dialog.component';
import { UpdateCollaborationWebSiteDialogComponent } from './admin-components/dialogs/update-collaboration-web-site-dialog/update-collaboration-web-site-dialog.component';
import { ConfirmDialogComponent } from './admin-components/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,  

      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GuestModule,
    AdminModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
