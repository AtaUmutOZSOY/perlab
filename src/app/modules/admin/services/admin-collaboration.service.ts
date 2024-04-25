import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Collaboration } from '../models/collaboration';
import { ResponseModel } from 'src/app/responses/response-model';
import { CreateCollaborationRequestDto } from '../dtos/create-collaboration-request-dto';
import { UpdateCollaborationNameRequestDto } from '../dtos/update-collaboration-name-request-dto';
import { UpdateCollaborationWebSiteLinkRequestDto } from '../dtos/update-collaboration-web-site-link-request-dto';

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
  createCollaboration(createCollaborationRequestDto: CreateCollaborationRequestDto):Observable<ResponseModel> {
    let newUrl = this.apiUrl+'createCollaboration';
    return this.httpClient.post<ResponseModel> (newUrl,createCollaborationRequestDto);
  }
  updateCollaborationName(updateCollaborationNameRequestDto:UpdateCollaborationNameRequestDto):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'updateCollaborationName';
    return this.httpClient.put<ResponseModel>(newUrl,updateCollaborationNameRequestDto);
  }
  deleteCollaboration(id:number):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'deleteCollaborationById/'+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
  updateCollaborationWebSiteLink(updateCollaborationWebSiteLinkRequestDto:UpdateCollaborationWebSiteLinkRequestDto):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'updateCollaborationWebSiteLink';
    return this.httpClient.put<ResponseModel>(newUrl,updateCollaborationWebSiteLinkRequestDto);
  }
}
