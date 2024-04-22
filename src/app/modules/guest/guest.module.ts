import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    HeaderComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class GuestModule { }
