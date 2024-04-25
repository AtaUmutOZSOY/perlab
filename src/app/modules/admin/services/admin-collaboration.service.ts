import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Collaboration } from '../models/collaboration';
import { ResponseModel } from 'src/app/responses/response-model';

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
  createCollaboration(collaboration: Collaboration):Observable<ResponseModel> {
    let newUrl = this.apiUrl+'createCollaboration';
    return this.httpClient.post<ResponseModel> (newUrl,collaboration);
  }
}
