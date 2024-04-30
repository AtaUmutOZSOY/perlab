import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateNewsFeedRequestDto } from 'src/app/modules/admin/dtos/create-news-feed-request-dto';
import { AdminAnnouncementService } from 'src/app/modules/admin/services/admin-announcement.service';
import { NewsFeedEnums } from 'src/app/modules/guest/enums/news-feed-enums';

@Component({
  selector: 'app-create-new-announcement-dialog',
  templateUrl: './create-new-announcement-dialog.component.html',
  styleUrls: ['./create-new-announcement-dialog.component.css']
})
export class CreateNewAnnouncementDialogComponent implements OnInit {
  
  form!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<CreateNewAnnouncementDialogComponent>,
    private adminAnnouncementService:AdminAnnouncementService,
  ){

  }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit(){
    this.createNewAnnouncement();
  }

  createForm(){
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }
  close(){
    this.dialogRef.close();
  }
  createNewAnnouncement(){
    if (this.form.valid) {
      const createNewsFeedRequestDto:CreateNewsFeedRequestDto={
        description:this.form.value.description,
        title:this.form.value.title,
        eventLink:'',
        eventTime:new Date(),
        newsFeedType:NewsFeedEnums.announcement
      }
      this.adminAnnouncementService.createAnnouncement(createNewsFeedRequestDto).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,"Success!");
            } else {
              this.toastrService.error(response.message,"Error!");
            }
            this.dialogRef.close();
          },error:(errorResponse:HttpErrorResponse)=>{
            console.log(errorResponse);
          }
        }
      )
    }    
  }
}
