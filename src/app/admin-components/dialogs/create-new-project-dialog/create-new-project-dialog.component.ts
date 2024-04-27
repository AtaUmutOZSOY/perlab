import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/modules/admin/models/project';
import { AdminProjectsService } from 'src/app/modules/admin/services/admin-projects.service';

@Component({
  selector: 'app-create-new-project-dialog',
  templateUrl: './create-new-project-dialog.component.html',
  styleUrls: ['./create-new-project-dialog.component.css']
})
export class CreateNewProjectDialogComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private adminProjectService:AdminProjectsService,private dialogRef:MatDialogRef<CreateNewProjectDialogComponent>){

  }
  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    if (this.form.valid) {
      const  project:Project = {
          deadLine:this.form.value.deadLine,
          description:this.form.value.description,
          projectManagerFullName:this.form.value.projectManagerFullName,
          startDate:this.form.value.startDate,
          title:this.form.value.title,
          id:0
      }
      console.log(project)
      this.adminProjectService.createProject(project).subscribe(
        {
          next:(response)=>{
            if (response.success) {
              this.toastrService.success(response.message,"Succeed!");
              this.dialogRef.close();
            }else{
              this.toastrService.error(response.message,"Error!");
              this.dialogRef.close();
            }
          },
          error:(httpErrorResponse:HttpErrorResponse)=>{
            console.log( httpErrorResponse)
          }
        }
      )
    }
  }

  initForm(){
    this.form = this.formBuilder.group(
      {
        projectManagerFullName:['',Validators.required],
        startDate:[null,Validators.required],
        deadLine:[null,Validators.required],
        title:['',Validators.required],
        description:['',Validators.required],
      }
    )
  }
  close(){
    this.dialogRef.close();
  }
}
