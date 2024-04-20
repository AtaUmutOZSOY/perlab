import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { NewsFeed } from '../../announcement/models/news-feed';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl:string=environment.apiUrl+'Events/';

  constructor(private httpClient:HttpClient) { }

  getAllEvents():Observable<ListResponseModel<Event>>{
    let newUrl= this.apiUrl+"getAllEvents";
    return this.httpClient.get<ListResponseModel<Event>>(newUrl);
  }
  
}
