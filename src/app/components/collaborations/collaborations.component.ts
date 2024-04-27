import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { GuestCollaborationService } from 'src/app/modules/guest/services/guest-collaboration.service';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit {
  @Input() width: number = 300; // Varsayılan genişlik
  @Input() height: number = 200; // Varsayılan yükseklik
  collaborations:Collaboration[]=[];
  constructor(private guestCollaborationService:GuestCollaborationService){

  }
  
  ngOnInit(): void {
    this.getAllCollaborations();
  }

  getAllCollaborations(){
    this.guestCollaborationService.getAllCollaborations().subscribe({
      next:(response)=>{
        this.collaborations = response.data;
      },error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse);
      }
    })
  }

  
}
