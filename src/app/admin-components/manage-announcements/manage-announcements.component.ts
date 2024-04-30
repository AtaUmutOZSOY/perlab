import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminAnnouncementService } from 'src/app/modules/admin/services/admin-announcement.service';
import { Announcement } from 'src/app/modules/guest/models/announcement';
import { UpdateAnnouncementDialogComponent } from '../dialogs/update-announcement-dialog/update-announcement-dialog.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { CreateNewAnnouncementDialogComponent } from '../dialogs/create-new-announcement-dialog/create-new-announcement-dialog.component';

@Component({
  selector: 'app-manage-announcements',
  templateUrl: './manage-announcements.component.html',
  styleUrls: ['./manage-announcements.component.css']
})
export class ManageAnnouncementsComponent implements OnInit {

  dataSource = new MatTableDataSource<Announcement>([]); 
  displayedColumns = ['title', 'description', 'operations'];

  constructor(
    private toastrService: ToastrService,
    private adminAnnouncementService: AdminAnnouncementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllAnnouncements();
    console.log(this.dataSource.data)
  }

  

  openUpdateAnnouncementDialog(announcementId: number) {
    this.dialog.open(UpdateAnnouncementDialogComponent,{data:{announcementId}}).afterClosed().subscribe(
      ()=>{
        this.getAllAnnouncements();
      }
    );
  }

  openCreateNewAnnouncementDialog() {
    this.dialog.open(CreateNewAnnouncementDialogComponent).afterOpened().subscribe(
      ()=>{
        this.getAllAnnouncements();
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
        this.adminAnnouncementService.deleteAnnouncement(id).subscribe(
          {
            next:(response)=>{
              if (response.success) {
                this.toastrService.success(response.message,"Succeed");
                this.getAllAnnouncements();
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
  

  getAllAnnouncements() {
    this.adminAnnouncementService.getAllAnnouncements().subscribe({
      next: (response) => {
        if (response.success) {
          this.dataSource.data = response.data;
        } else {
          this.toastrService.error("An error occured while loading announcements list!", "Error!");
        }
      },
      error: (httpResponseError: HttpErrorResponse) => {
        console.log(httpResponseError);
      }
    });
  }
}
