import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestModule } from './modules/guest/guest.module';
import { AdminModule } from './modules/admin/admin.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UpdateEventDialogComponent } from './admin-components/dialogs/update-event-dialog/update-event-dialog.component';
import { CreateNewEventDialogComponent } from './admin-components/dialogs/create-new-event-dialog/create-new-event-dialog.component';
import { CreateNewPublicationDialogComponent } from './admin-components/dialogs/create-new-publication-dialog/create-new-publication-dialog.component';


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
