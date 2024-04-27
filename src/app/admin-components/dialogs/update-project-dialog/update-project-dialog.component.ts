import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/modules/admin/models/project';
import { AdminProjectsService } from 'src/app/modules/admin/services/admin-projects.service';

@Component({
  selector: 'app-update-project-dialog',
  templateUrl: './update-project-dialog.component.html',
  styleUrls: ['./update-project-dialog.component.css']
})
export class UpdateProjectDialogComponent implements OnInit {
  
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<UpdateProjectDialogComponent>,
    private adminProjectService:AdminProjectsService,
  ){

  }
  
  ngOnInit(): void {

  }

  initForm():void
  {
    this.form = this.formBuilder.group({
      newProjectManagerName:[''],
      newTitle:[''],
      newDescription:[''],
      newStartDate:[null],
      newDeadLine:[null],
    })

  }

  onSubmit(){

  }


  updateProject(){
    if (this.form.valid) {
      this.data.project = {
        deadLine:this.form.value.deadLine,
        description:this.form.value.description,
        projectManagerFullName:this.form.value.projectManagerFullName,
        startDate:this.form.value.startDate,
        title:this.form.value.title,
        id:0
      }
      this.adminProjectService.updateProject(this.data.project).subscribe({
        next:(response)=>{
          if (response.success) {
            this.toastrService.success(response.message,"Success!")
          }else{
            this.toastrService.error(response.message,"Error!")
          }
          this.dialogRef.close()

        }
      });
    }
    
  }
  close(){

  }

}
