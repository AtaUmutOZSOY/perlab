import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Person } from 'src/app/modules/guest/models/person';
import { GuestPersonServiceService } from 'src/app/modules/guest/services/guest-person-service.service';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamMembers: Person[] = [];
  faLinkedin = faLinkedin;
  faResearchGate = faResearchgate
  constructor(
    private guestPersonService: GuestPersonServiceService,
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/socialIcons/linkedin.svg')
    ),
    this.matIconRegistry.addSvgIcon(
      'researchgate',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/socialIcons/researchgate.svg')
    )
  }

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
  navigateToLink(url: string): void {
    window.open(url, '_blank');
  }
}
