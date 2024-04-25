import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CollaborationsComponent } from 'src/app/components/collaborations/collaborations.component';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';

@Component({
  selector: 'app-create-new-collaboration-dialog',
  templateUrl: './create-new-collaboration-dialog.component.html',
  styleUrls: ['./create-new-collaboration-dialog.component.css']
})
export class CreateNewCollaborationDialogComponent implements OnInit {

  constructor(private  dialogRef: MatDialogRef<CollaborationsComponent>,private formBuilder:FormBuilder,private collaborationService:AdminCollaborationService,private toastrService:ToastrService) {}
  
  x:any;
  ngOnInit(): void {
    this.initForm();
  }

  form!:FormGroup;

  close(){
    this.dialogRef.close();
  }

  initForm(){
    this.form = this.formBuilder.group({
      collaborationName: ['', Validators.required],
      collaborationWebSiteLink: ['', Validators.required],
      image: [null,Validators.required]
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.patchValue({ image: reader.result as string });
        this.form.get('image')!.updateValueAndValidity();
      };
      let s = reader.readAsDataURL(file);
      this.x = s;
    }
  }

  onSubmit(){
    if (this.form.valid) {
      const collaboration:Collaboration = Object.assign({}, this.form.value);
      this.collaborationService.createCollaboration(collaboration).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,"Succeed!")
              this.dialogRef.close();
            }
          },
          error:(error:HttpErrorResponse)=> {
            console.log("API Error Response: "+error)
          }
        }
      )
    }
  }
  
}


