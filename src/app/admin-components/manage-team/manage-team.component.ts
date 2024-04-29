import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminTeamService } from 'src/app/modules/admin/services/admin-team.service';
import { Person } from 'src/app/modules/guest/models/person';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {
  

  people: Person[] = [];
  dataSource = new MatTableDataSource<Person>();

  constructor(private adminTeamService:AdminTeamService){

  }
  ngOnInit(): void {
    this.getAllTeamMembers();
  }

  openCreateTeamMemberDialog() {

    throw new Error('Method not implemented.');

  }

  displayedColumns:string[]=['fullName','graduateSchoolName','researchGateUrl','linkedInUrl','orcidUrl','visualRank','operations'];

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
