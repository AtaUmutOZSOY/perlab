import { Component, OnInit } from '@angular/core';
import { AdminTeamServiceService } from '../../services/admin-team-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/modules/guest/models/person';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {
  
  dataSource!:MatTableDataSource<Person>;
  people:Person[]=[]
  displayedColumns:string[]=['firstName','middleName','lastName']
  constructor(private teamService:AdminTeamServiceService){

  }
  ngOnInit(): void {
    this.getAllPeople();
  }
  getAllPeople(){
    this.teamService.getAllPeople().subscribe({
      next:(response)=>{
        this.people = response.data
        this.dataSource.data = this.people;
      }
    })
  }
}
