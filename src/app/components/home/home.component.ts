import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/modules/guest/models/announcement';
import { Event } from 'src/app/modules/guest/models/event';
import { GuestAnnouncementService } from 'src/app/modules/guest/services/guest-announcement.service';
import { GuestEventService } from 'src/app/modules/guest/services/guest-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  announcements:Announcement[]=[];
  events:Event[]=[];
  constructor(private guestAnnouncementService:GuestAnnouncementService,private guestEventService:GuestEventService){

  }
  ngOnInit(): void {
    this.getAllAnnouncements();
    this.getAllEvents();
  }
  getAllAnnouncements(){
    this.guestAnnouncementService.getAllAnnouncements().subscribe(
      {
        next:(response)=>{
          this.announcements=response.data;
          console.log(this.announcements)
        }
      }
    )
  }
  getAllEvents(){
    this.guestEventService.getAllEvents().subscribe(
      {
        next:(response)=>{
          this.events = response.data;
        }
      }
    )
  }

}
