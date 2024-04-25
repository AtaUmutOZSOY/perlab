import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';
import { CreateNewCollaborationDialogComponent } from '../dialogs/create-new-collaboration-dialog/create-new-collaboration-dialog.component';
import { UpdateCollaborationNameDialogComponent } from '../dialogs/update-collaboration-name-dialog/update-collaboration-name-dialog.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { UpdateCollaborationWebSiteDialogComponent } from '../dialogs/update-collaboration-web-site-dialog/update-collaboration-web-site-dialog.component';

@Component({
  selector: 'app-manage-collaborations',
  templateUrl: './manage-collaborations.component.html',
  styleUrls: ['./manage-collaborations.component.css']
})
export class ManageCollaborationsComponent implements OnInit {




  displayedColumns: string[] = [ 'collaborationName', 'collaborationWebSiteLink','operations'];
  dataSource = new MatTableDataSource<Collaboration>([]);
  collaboration:Collaboration[]=[];
  constructor(private adminCollaborationService:AdminCollaborationService,private dialog:MatDialog,private toastrService:ToastrService){

  }
  
  ngOnInit(): void {
    this.getAllCollaborations();
    console.log(this.dataSource)

  }

  openCreateNewCollaborationDialog():void
  {
    this.dialog.open(CreateNewCollaborationDialogComponent);
  }

  openUpdateCollaborationName(id: number) {
     this.dialog.open(UpdateCollaborationNameDialogComponent, { data: { id } }).afterClosed().subscribe(
      ()=>{
        this.getAllCollaborations();
      }
     );
  }
  
  openUpdateCollaborationWebSiteLinkDialog(id:number) {
    this.dialog.open(UpdateCollaborationWebSiteDialogComponent, { data: { id} }).afterClosed().subscribe(
      ()=>{
        this.getAllCollaborations();
      }
    );
    
  }
  
  openConfirmDialog(id:number) {
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Confirm', message: 'Are you sure you want to delete this item?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminCollaborationService.deleteCollaboration(id).subscribe(
          {
            next:(response)=>{
              if (response.success) {
                this.toastrService.success(response.message,"Succeed");
                this.getAllCollaborations();
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
