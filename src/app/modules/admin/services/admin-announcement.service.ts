import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Announcement } from '../../guest/models/announcement';
import { ResponseModel } from 'src/app/responses/response-model';
import { UpdateAnnouncementRequestDto } from '../request-dtos/update-announcement-request-dto';
import { CreateNewsFeedRequestDto } from '../dtos/create-news-feed-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminAnnouncementService {

  private apiUrl:string=environment.apiUrl+'Announcements/';
  private newsFeedApiUrl:string=environment.apiUrl+'NewsFeeds/'
  constructor(private httpClient:HttpClient) { }

  createAnnouncement(createNewsFeedRequestDto:CreateNewsFeedRequestDto):Observable<ResponseModel>{
    let newUrl:string=this.newsFeedApiUrl+'createNewsFeed';
    return this.httpClient.post<ResponseModel>(newUrl,createNewsFeedRequestDto);
  }
  getAllAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newUrl:string = this.apiUrl + "getAllAnnouncements";
    return this.httpClient.get<ListResponseModel<Announcement>>(newUrl);
  }
  updateAnnouncement(updateAnnouncementRequestDto:UpdateAnnouncementRequestDto):Observable<ResponseModel>{
    let newUrl:string = this.apiUrl + 'updateAnnouncement';
    return this.httpClient.put<ResponseModel>(newUrl,updateAnnouncementRequestDto);
  }
  deleteAnnouncement(id:number):Observable<ResponseModel>{
    let newUrl:string = this.newsFeedApiUrl+'deleteNewsFeedById/'+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
}
