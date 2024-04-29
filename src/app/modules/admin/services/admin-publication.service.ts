import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Publication } from '../models/publication';
import { environment } from 'src/app/enviroment/enviroment';
import { ResponseModel } from 'src/app/responses/response-model';
import { CreateNewPublicationRequestDto } from '../dtos/create-new-publication-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminPublicationService {

  apiUrl:string=environment.apiUrl+'Publications/';
  constructor(private httpClient:HttpClient) { }

  getAllPublications():Observable<ListResponseModel<Publication>>{
    let newUrl = this.apiUrl + "getAllPublications";
    return this.httpClient.get<ListResponseModel<Publication>>(newUrl);
  }
  createNewPublication(createNewPublicationRequestDto:CreateNewPublicationRequestDto):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+"createNewPublication";
    return this.httpClient.post<ResponseModel>(newUrl, createNewPublicationRequestDto);
  }

    
  deletePublicationById(id:number):Observable<ResponseModel>{
    let newUrl = this.apiUrl+"deletePublicationById/"+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
  updatePublication(){

  }
}
