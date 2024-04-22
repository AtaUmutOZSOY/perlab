import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Announcement } from '../models/announcement';

@Injectable({
  providedIn: 'root'
})
export class GuestAnnouncementService {

  apiUrl:string=environment.apiUrl+"Announcements/";
  constructor(private httpCLient:HttpClient) { }

  getAllAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newUrl = this.apiUrl+'getAllAnnouncements';
    return this.httpCLient.get<ListResponseModel<Announcement>>(newUrl);
  }

}
