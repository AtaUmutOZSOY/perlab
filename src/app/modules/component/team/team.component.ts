import { Component, OnInit } from '@angular/core';
import { Person } from '../../guest/models/person';
import { GuestPersonServiceService } from '../../guest/services/guest-person-service.service';
import { ImageHelperService } from '../../shared/services/image-helper.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamMembers: Person[] = [];

  constructor(
    private guestPersonService: GuestPersonServiceService,

  ) {}

  ngOnInit(): void {
    this.getAllTeamMembers();
  }

  getAllTeamMembers(): void {
    this.guestPersonService.getAllPeople().subscribe({
      next: (response) => {
        this.teamMembers = response.data;
        console.log(this.teamMembers)
      },
      error: (err) => console.error('Failed to load team members', err)
    });
  }
}
