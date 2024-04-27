import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Announcement } from '../../guest/models/announcement';

@Injectable({
  providedIn: 'root'
})
export class AdminAnnouncementService {

  private apiUrl:string=environment.apiUrl+'Announcements/';
  constructor(private httpClient:HttpClient) { }

  getAllAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newUrl:string = this.apiUrl + "getAllAnnouncements";
    return this.httpClient.get<ListResponseModel<Announcement>>(newUrl);
  }
}
