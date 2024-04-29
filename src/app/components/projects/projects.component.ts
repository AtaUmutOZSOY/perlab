import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from 'src/app/modules/admin/models/project';
import { GuestProjectService } from 'src/app/modules/guest/services/guest-project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = ['title','projectManagerFullName','startDate','deadLine', 'description'];
  
  dataSource = new MatTableDataSource<Project>([]); 
  
  projects:Project[]=[];

  constructor(private guestProejctService:GuestProjectService){

  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(){
    this.guestProejctService.getAllProjects().subscribe({
      next:(response)=>{
        this.projects = response.data;
        this.dataSource.data = this.projects;
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse);
      }
    });
  }


}
