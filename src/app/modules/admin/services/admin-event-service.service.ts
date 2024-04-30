import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Event } from '../../guest/models/event';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/responses/response-model';
import { CreateNewsFeedRequestDto } from '../dtos/create-news-feed-request-dto';
import { UpdateEventRequestDto } from '../dtos/update-event-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminEventServiceService {

  private apiUrl:string=environment.apiUrl+'Events/';
  constructor(private httpClient:HttpClient) { }

  getAllEvents():Observable<ListResponseModel<Event>>{
    let newUrl:string=this.apiUrl+'getAllEvents';
    return this.httpClient.get<ListResponseModel<Event>>(newUrl);
  }
  deleteEventById(id:number):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+'deleteEventById/'+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
  updateEvent(updateEventRequestDto:UpdateEventRequestDto){
    let newUrl:string=this.apiUrl+'updateEvent';
    return this.httpClient.put<ResponseModel>(newUrl,updateEventRequestDto);
  }
  createEvent(event:CreateNewsFeedRequestDto){
    let newUrl:string=this.apiUrl+'createNewEvent';
    return this.httpClient.post<ResponseModel>(newUrl,event);
  }
}
