import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';

@Component({
  selector: 'app-manage-collaborations',
  templateUrl: './manage-collaborations.component.html',
  styleUrls: ['./manage-collaborations.component.css']
})
export class ManageCollaborationsComponent implements OnInit {

  displayedColumns: string[] = [ 'collaborationName', 'collaborationWebSiteLink','operations'];
  dataSource = new MatTableDataSource<Collaboration>([]);
  collaboration:Collaboration[]=[];
  constructor(private adminCollaborationService:AdminCollaborationService){

  }
  
  ngOnInit(): void {
    this.getAllCollaborations();
    console.log(this.dataSource)

  }

  getAllCollaborations(){
    this.adminCollaborationService.getAllCollaborations().subscribe(
      {
        next:(response)=>{
          this.collaboration = response.data;
          this.dataSource.data = this.collaboration;
          console.log("ssas"+this.dataSource);
        },
        error:(error:HttpErrorResponse) =>{
          console.log(error);
        }
      }
    )
  }

}
