import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Publication } from 'src/app/modules/admin/models/publication';
import { AdminPublicationService } from 'src/app/modules/admin/services/admin-publication.service';
import { CreateNewPublicationDialogComponent } from '../dialogs/create-new-publication-dialog/create-new-publication-dialog.component';

@Component({
  selector: 'app-manage-publications',
  templateUrl: './manage-publications.component.html',
  styleUrls: ['./manage-publications.component.css']
})
export class ManagePublicationsComponent implements OnInit {
openConfirmationDialog(id:number) {
throw new Error('Method not implemented.');
}
 
  displayedColumns:string[]=['title', 'journalName','publishedYear','doi','issn','operations']
  dataSource = new MatTableDataSource<Publication>();
  publications:Publication[]=[];


 constructor(private adminPublicationService:AdminPublicationService,
  private dialog:MatDialog,
 ){

 } 
  ngOnInit(): void {
    this.getAllPublications();
  }

 openCreatePublicationDialog(){
  this.dialog.open(CreateNewPublicationDialogComponent).afterClosed().subscribe(
    ()=>{
      this.getAllPublications();
    }
  )
 }
  openUpdatePublicationDialog(publication:Publication) {
  throw new Error('Method not implemented.');
}
getAllPublications(){
  this.adminPublicationService.getAllPublications().subscribe(
    {
      next:(response)=>{
        this.publications = response.data;
        this.dataSource.data=this.publications;
      },
      error:(httpErrorResponse:HttpErrorResponse)=>{
        console.log(httpErrorResponse);
      }
    }
  );
}


}
