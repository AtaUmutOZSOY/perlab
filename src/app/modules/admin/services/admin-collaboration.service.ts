import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Collaboration } from '../models/collaboration';

@Injectable({
  providedIn: 'root'
})
export class AdminCollaborationService {

  apiUrl:string=environment.apiUrl+'Collaborations/';

  constructor(private httpClient:HttpClient) { }

  getAllCollaborations():Observable<ListResponseModel<Collaboration>>{
    let newUrl = this.apiUrl+'getAllCollaborations';
    return this.httpClient.get<ListResponseModel<Collaboration>>(newUrl);
  }
}
