import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Publication } from 'src/app/modules/admin/models/publication';
import { GuestPublicationService } from 'src/app/modules/guest/services/guest-publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  
  displayedColumns: string[] = ['publicationTitle', 'journalName','publishedYear','doi','issn'];
  dataSource = new MatTableDataSource<Publication>([]); 
  
  publications:Publication[]=[];

  constructor(
    private guestPublicationService:GuestPublicationService,
    private toastrService:ToastrService,

  ){}

  ngOnInit(): void {
    this.getAllGuestPublications();
  }


  getAllGuestPublications(){
    this.guestPublicationService.getGuestPublications().subscribe(
      {
        next:(response) => {
         if(response.success){
            this.publications = response.data;
            this.dataSource.data = this.publications;
          } else {
            this.toastrService.error("Server error!", "Error");
          }
        },error:(error:HttpErrorResponse)=>{
          console.log(error);
        }
      }
    );
  }




}
