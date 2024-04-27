import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/modules/admin/models/project';
import { AdminProjectsService } from 'src/app/modules/admin/services/admin-projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/app/enviroment/enviroment';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewProjectDialogComponent } from '../dialogs/create-new-project-dialog/create-new-project-dialog.component';
import { UpdateProjectDialogComponent } from '../dialogs/update-project-dialog/update-project-dialog.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  dataSource = new MatTableDataSource<Project>();

  constructor(private adminProjectService: AdminProjectsService,
    private dialog:MatDialog,
    private toastrService:ToastrService  
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.adminProjectService.getAllProjects().subscribe({
      next: (response) => {
        this.dataSource.data = response.data;
      },
      error: (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse);
      }
    });
  }
  openCreateNewProjectDialog(){
    this.dialog.open(CreateNewProjectDialogComponent).afterClosed().subscribe(
      ()=>{
        this.getAllProjects();
      }
    )
  }
  openUpdateProjectDialog(project:Project){
    this.dialog.open(UpdateProjectDialogComponent,{data:{project}}).afterClosed()
    .subscribe(()=>this.getAllProjects());
  }
  
  openConfirmationDialog(id:number){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Confirm', message: 'Are you sure you want to delete this project?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminProjectService.deleteProject(id).subscribe(
          {
            next:(response)=>{
              if (response.success) {
                this.toastrService.success(response.message,"Succeed");
                this.getAllProjects();
              } else{
                this.toastrService.error(response.message,"Error")
              }
            },
            error:(httpErrorResponse:HttpErrorResponse)=>{
              console.log(httpErrorResponse)
            }
          }
        )
      } else {
        console.log('User dismissed the action');
      }
    });
    
  }
}
