import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminEventServiceService } from 'src/app/modules/admin/services/admin-event-service.service';
import { Event } from 'src/app/modules/guest/models/event';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { UpdateEventDialogComponent } from '../dialogs/update-event-dialog/update-event-dialog.component';
import { CreateNewEventDialogComponent } from '../dialogs/create-new-event-dialog/create-new-event-dialog.component';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {

  dataSource = new MatTableDataSource<Event>([]); 

  
constructor(private adminEventService:AdminEventServiceService,
  private dialog:MatDialog,
  private toastrService:ToastrService
){

 }
 ngOnInit(): void {
    this.getAllEvents();
  }

  openConfirmDialog(id:number) {
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Confirm', message: 'Are you sure you want to delete this item?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminEventService.deleteEventById(id).subscribe(
          {
            next:(response)=>{
              if (response.success) {
                this.toastrService.success(response.message,"Succeed");
                this.getAllEvents();
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
    openUpdateEventDialog(eventId: number):void {
      this.dialog.open(UpdateEventDialogComponent, {data:{eventId}}).afterClosed().subscribe(
        ()=>{ this.getAllEvents();}
      )
    }
    openCreateNewEventDialog() {
      this.dialog.open(CreateNewEventDialogComponent).afterClosed().subscribe(
        ()=>{
          this.getAllEvents();
        }
      )  
    }

    getAllEvents(){
      this.adminEventService.getAllEvents().subscribe({
        next:(response)=>{
          this.dataSource.data = response.data;
        }, error:(httpErrorResponse:HttpErrorResponse)=>{
          console.log("API Response: "+httpErrorResponse);
        }
      })
    }
}
