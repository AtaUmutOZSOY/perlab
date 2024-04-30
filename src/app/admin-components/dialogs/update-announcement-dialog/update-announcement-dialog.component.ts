import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateAnnouncementRequestDto } from 'src/app/modules/admin/request-dtos/update-announcement-request-dto';
import { AdminAnnouncementService } from 'src/app/modules/admin/services/admin-announcement.service';

@Component({
  selector: 'app-update-announcement-dialog',
  templateUrl: './update-announcement-dialog.component.html',
  styleUrls: ['./update-announcement-dialog.component.css']
})
export class UpdateAnnouncementDialogComponent implements OnInit {
  
  form!:FormGroup;

  constructor(private adminAnnouncementService:AdminAnnouncementService,
    @Inject(MAT_DIALOG_DATA) public data: { announcementId: number },
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<UpdateAnnouncementDialogComponent>
  ){

  }
  
  ngOnInit(): void {
    this.createForm();
  }
  
  onSubmit(){
    this.updateAnnouncement();
  }
  createForm(){
    this.form = this.formBuilder.group({
      title:["",Validators.required],
      description:["",Validators.required]
    })
  }
  updateAnnouncement(){
    if (this.form.valid) {
      const updateAnnouncementRequestDto:UpdateAnnouncementRequestDto={
        id:this.data.announcementId,
        description:this.form.value.description,
        title:this.form.value.title
      }
      this.adminAnnouncementService.updateAnnouncement(updateAnnouncementRequestDto).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,"Success!");
              this.dialogRef.close();
            }
            else{
              this.toastrService.error(response.message,"Error!");
            }
          },error:(errorResponse:HttpErrorResponse)=>{
            console.log(errorResponse);
          }
        }
      )
    }
  }
  close(){
    
  }
}
