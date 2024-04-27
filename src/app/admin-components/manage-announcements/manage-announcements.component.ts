import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminAnnouncementService } from 'src/app/modules/admin/services/admin-announcement.service';
import { Announcement } from 'src/app/modules/guest/models/announcement';

@Component({
  selector: 'app-manage-announcements',
  templateUrl: './manage-announcements.component.html',
  styleUrls: ['./manage-announcements.component.css']
})
export class ManageAnnouncementsComponent implements OnInit {

  dataSource = new MatTableDataSource<Announcement>([]); 
  displayedColumns = ['title', 'description', 'isNew', 'isImportant', 'operations'];

  constructor(
    private toastrService: ToastrService,
    private adminAnnouncementService: AdminAnnouncementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllAnnouncements();
    console.log(this.dataSource.data)
  }

  openConfirmDialog(arg0: any) {
    throw new Error('Method not implemented.');
  }

  openUpdateAnnouncementDialog(arg0: any) {
    throw new Error('Method not implemented.');
  }

  openCreateNewAnnouncementDialog() {
    throw new Error('Method not implemented.');
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
