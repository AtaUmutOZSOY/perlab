import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateEventRequestDto } from 'src/app/modules/admin/dtos/update-event-request-dto';
import { AdminEventServiceService } from 'src/app/modules/admin/services/admin-event-service.service';

@Component({
  selector: 'app-update-event-dialog',
  templateUrl: './update-event-dialog.component.html',
  styleUrls: ['./update-event-dialog.component.css']
})
export class UpdateEventDialogComponent implements OnInit {
  
  form!:FormGroup;

  constructor(private adminEventService:AdminEventServiceService,
    private toastrService:ToastrService,
    private matDialogRef:MatDialogRef<UpdateEventDialogComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { eventId: number },
    
  ){

  }


  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(){
    this.updateEvent();
  }
  createForm(){
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      eventLink:['',Validators.required],
      eventTime:[null,Validators.required]
    })
  }
  updateEvent(){
    if (this.form.valid) {
      const updateEventRequestDto:UpdateEventRequestDto={
        id:this.data.eventId,
        description:this.form.value.description,
        title:this.form.value.title,
        eventLink:this.form.value.eventLink,
        eventTime:this.form.value.eventTime
      }
      this.adminEventService.updateEvent(updateEventRequestDto).subscribe({
        next:(response)=>{
          if(response.success){
            this.toastrService.success(response.message,'Success!');
          } else{
            this.toastrService.error(response.message,'Error!');
          }
          this.matDialogRef.close()
        },error:(httpErrorResponse:HttpErrorResponse)=>{
          console.error(httpErrorResponse);          
        }
      })
    }
  }

  close(){
    this.matDialogRef.close();
  }
}
