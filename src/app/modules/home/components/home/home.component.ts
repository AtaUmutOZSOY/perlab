import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { Announcement } from 'src/app/modules/announcement/models/announcement';
import { NewsFeed } from 'src/app/modules/announcement/models/news-feed';
import { AnnouncementService } from 'src/app/modules/announcement/services/announcement.service';
import { Event } from 'src/app/modules/event/models/event';
import { EventService } from 'src/app/modules/event/services/event.service';
import { ListResponseModel } from 'src/app/responses/list-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  announcements:Announcement[]=[]
  events:Event[]=[]
  constructor(private announcementService:AnnouncementService,private eventService:EventService){

  }
  
  ngOnInit(): void {
  this.getAllAnnouncements();
  this.getAllEvents();
  console.log(this.announcements);
  console.log(this.events);
}

  getAllAnnouncements(){
    this.announcementService.getAllAnnouncements().subscribe(
      {next:(response)=>{
        this.announcements = response.data
      }}
    )
  }
  getAllEvents(){
    this.eventService.getAllEvents().subscribe(
      {
        next:(response)=>{
          this.events = response.data
        }
      }
    )
  }
}
