import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class GuestEventService {

  apiUrl:string=environment.apiUrl+'Events/';
  constructor(private httpClient:HttpClient) { }

  getAllEvents():Observable<ListResponseModel<Event>>
  {
    let newPath=this.apiUrl+"getAllEvents";
    return this.httpClient.get<ListResponseModel<Event>>(newPath);
  }
}
