import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTeamService } from 'src/app/modules/admin/services/admin-team.service';
import { Person } from 'src/app/modules/guest/models/person';
import { CreateNewTeamMemberDialogComponent } from '../dialogs/create-new-team-member-dialog/create-new-team-member-dialog.component';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {
  
  displayedColumns:string[]=['fullName','graduateSchoolName','researchGateUrl','linkedInUrl','orcidUrl','visualRank','operations'];

  people: Person[] = [];
  dataSource = new MatTableDataSource<Person>();

  constructor(private adminTeamService:AdminTeamService,private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.getAllTeamMembers();
  }

  openCreateTeamMemberDialog() {

    this.dialog.open(CreateNewTeamMemberDialogComponent).afterClosed().subscribe(
      ()=>{
        this.getAllTeamMembers();
      }
    );

  }


  getAllTeamMembers(){
    this.adminTeamService.getAllTeamMembers().subscribe(
      {
        next:(response)=>{
          console.log(response)
          this.people= response.data;
          this.dataSource.data = this.people;
        },
        error:(errorMessage)=>{console.log(errorMessage)}
      }
    )
  }
} 
