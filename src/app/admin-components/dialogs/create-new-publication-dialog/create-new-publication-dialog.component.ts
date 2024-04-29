import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateNewPublicationRequestDto } from 'src/app/modules/admin/dtos/create-new-publication-request-dto';
import { AdminPublicationService } from 'src/app/modules/admin/services/admin-publication.service';

@Component({
  selector: 'app-create-new-publication-dialog',
  templateUrl: './create-new-publication-dialog.component.html',
  styleUrls: ['./create-new-publication-dialog.component.css']
})
export class CreateNewPublicationDialogComponent implements OnInit {
  
  form!:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private adminPublicationService:AdminPublicationService,
    private toastrService:ToastrService,
    private matDialogRef:MatDialogRef<CreateNewPublicationDialogComponent>
  ){

  }
  

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      journalName:['',Validators.required],
      publishedYear:[null,Validators.required],
      issn:['',Validators.required],
      doi:['',Validators.required]
    })
  }

  onSubmit(){
    if (this.form.valid) {
      const newPublication:CreateNewPublicationRequestDto={
        doi: this.form.value.doi,
        issn:this.form.value.issn,
        journalName:this.form.value.journalName,
        publishedYear:this.form.value.publishedYear,
        title:this.form.value.title
      }
      this.adminPublicationService.createNewPublication(newPublication).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,'Success!');
            } else {
              this.toastrService.error(response.message, 'Error!');
            }
          },error:(httpErrorResponse)=>{
            console.log("API Error Response: "+ httpErrorResponse);
          }
        }
      )
      this.matDialogRef.close();
    }
  }

  close(){
    this.matDialogRef.close();
  } 
}
