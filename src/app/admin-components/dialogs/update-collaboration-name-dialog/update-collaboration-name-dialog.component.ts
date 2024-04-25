import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateCollaborationNameRequestDto } from 'src/app/modules/admin/dtos/update-collaboration-name-request-dto';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';

@Component({
  selector: 'app-update-collaboration-name-dialog',
  templateUrl: './update-collaboration-name-dialog.component.html',
  styleUrls: ['./update-collaboration-name-dialog.component.css']
})
export class UpdateCollaborationNameDialogComponent implements OnInit {
  

  form!:FormGroup;

  constructor(private adminCollaborationService:AdminCollaborationService, 
    private formBuilder:FormBuilder,
    private dialogRef:MatDialogRef<UpdateCollaborationNameDialogComponent>,
    private toastrService:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number } // Correct syntax for @Inject
  ){

  }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      newCollaborationName:['',Validators.required]
    })
  }

  onSubmit(){
    debugger
    if (this.form.valid) {
      const dto:UpdateCollaborationNameRequestDto = {
        id:this.data.id,
        newCollaborationName:this.form.value.newCollaborationName
      }
      this.adminCollaborationService.updateCollaborationName(dto).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,"Succeed")
              this.dialogRef.close();
            }else{
              this.toastrService.error(response.message,"Error")
              this.dialogRef.close();
            }
          },
          error:(httpResponseError:HttpErrorResponse)=>{
            console.log("API Response: "+httpResponseError);
          }
        }
      )

    }
  }

  close(){
    this.dialogRef.close();
  }

  
}
