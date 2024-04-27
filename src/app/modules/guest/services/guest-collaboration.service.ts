import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Collaboration } from '../../admin/models/collaboration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestCollaborationService {

  apiUrl:string=environment.apiUrl+"Collaborations/";

  constructor(private httpClient:HttpClient) { }

  getAllCollaborations():Observable<ListResponseModel<Collaboration>>{
    let newUrl = this.apiUrl+"getAllCollaborations";
    return this.httpClient.get<ListResponseModel<Collaboration>>(newUrl);
  }
}
