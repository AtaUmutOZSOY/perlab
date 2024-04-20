import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { NewsFeed } from '../models/news-feed';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  apiUrl:string=environment.apiUrl+"Announcements/";
  constructor(private httpClient:HttpClient) { }

  getAllAnnouncements():Observable<ListResponseModel<NewsFeed>>{
    let newUrl:string=this.apiUrl+"getAllAnnouncements";
    return this.httpClient.get<ListResponseModel<NewsFeed>>(newUrl);
  }
}
