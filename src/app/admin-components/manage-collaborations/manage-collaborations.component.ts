import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';
import { CreateNewCollaborationDialogComponent } from '../dialogs/create-new-collaboration-dialog/create-new-collaboration-dialog.component';

@Component({
  selector: 'app-manage-collaborations',
  templateUrl: './manage-collaborations.component.html',
  styleUrls: ['./manage-collaborations.component.css']
})
export class ManageCollaborationsComponent implements OnInit {

  displayedColumns: string[] = [ 'collaborationName', 'collaborationWebSiteLink','operations'];
  dataSource = new MatTableDataSource<Collaboration>([]);
  collaboration:Collaboration[]=[];
  constructor(private adminCollaborationService:AdminCollaborationService,private dialog:MatDialog){

  }
  
  ngOnInit(): void {
    this.getAllCollaborations();
    console.log(this.dataSource)

  }

  openCreateNewCollaborationDialog():void
  {
    this.dialog.open(CreateNewCollaborationDialogComponent);
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
