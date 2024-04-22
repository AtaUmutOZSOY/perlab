import { Component, OnInit } from '@angular/core';
import { GuestAnnouncementService } from '../../guest/services/guest-announcement.service';
import { Announcement } from '../../guest/models/announcement';
import { GuestEventService } from '../../guest/services/guest-event.service';
import { Event } from '../../guest/models/event';

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
