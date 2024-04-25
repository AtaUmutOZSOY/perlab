import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateCollaborationWebSiteLinkRequestDto } from 'src/app/modules/admin/dtos/update-collaboration-web-site-link-request-dto';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';

@Component({
  selector: 'app-update-collaboration-web-site-dialog',
  templateUrl: './update-collaboration-web-site-dialog.component.html',
  styleUrls: ['./update-collaboration-web-site-dialog.component.css']
})
export class UpdateCollaborationWebSiteDialogComponent implements OnInit {
  
  form!:FormGroup;

  constructor(private adminCollaborationService:AdminCollaborationService,
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<UpdateCollaborationWebSiteDialogComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number } // Correct syntax for @Inject
    
  ){

  }
  
  ngOnInit(): void {
    this.initializeForm();
  }

  updateCollaborationWebSiteLink(link:string){

  }

  initializeForm(){
    this.form = this.formBuilder.group({
      newCollaborationWebSiteLink:['',Validators.required]
    })
  }

  onSubmit(){
    debugger
    if (this.form.valid){
      const dto:UpdateCollaborationWebSiteLinkRequestDto = {
        id:this.data.id,
        newCollaborationWebSiteLink:this.form.value.newCollaborationWebSiteLink
      };
      this.adminCollaborationService.updateCollaborationWebSiteLink(dto).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,'Succeed');
              this.dialogRef.close();
            }
          },error:(error:HttpErrorResponse)=>{
            console.log(error);
          }
        }
      )
    }
  }

  close(){
    this.dialogRef.close();
  }
}
