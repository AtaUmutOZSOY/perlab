import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateNewsFeedRequestDto } from 'src/app/modules/admin/dtos/create-news-feed-request-dto';
import { AdminEventServiceService } from 'src/app/modules/admin/services/admin-event-service.service';
import { Event } from 'src/app/modules/guest/models/event';

@Component({
  selector: 'app-create-new-event-dialog',
  templateUrl: './create-new-event-dialog.component.html',
  styleUrls: ['./create-new-event-dialog.component.css']
})
export class CreateNewEventDialogComponent implements OnInit {
  
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private adminEventService:AdminEventServiceService,
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<CreateNewEventDialogComponent>
  ){

  }
  
  ngOnInit(): void {
    
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      eventTime:[null,Validators.required],
      eventLink:['',Validators.required],
    })
  }

  onSubmit(){

    this.createNewEvent();
  }


  createNewEvent(){
    if (this.form.valid) { 
    const newEvent:CreateNewsFeedRequestDto={
      description :this.form.value.description,
      title:this.form.value.title,
      eventLink:this.form.value.eventLink,
      eventTime:this.form.value.eventTime
    }
    this.adminEventService.createEvent(newEvent).subscribe(
       {
        next:(response)=>{
          if (response.success) {
            this.toastrService.success(response.message,'Success!');
            this.dialogRef.close();
          } else {
            this.toastrService.error(response.message,'Error!');
            this.dialogRef.close();

          }
        },error:(httpErrorResponse:HttpErrorResponse)=>{
          console.log("API Error Response: "+ httpErrorResponse);
        }
       }
      )
    }
  }
  close(){

  }
}
