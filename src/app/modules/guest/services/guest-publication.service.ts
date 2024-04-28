import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Publication } from '../../admin/models/publication';

@Injectable({
  providedIn: 'root'
})
export class GuestPublicationService {

  apiUrl:string=environment.apiUrl+"Publications/";

  constructor(private httpClient:HttpClient) { }


  getGuestPublications():Observable<ListResponseModel<Publication>>{
    let newUrl = this.apiUrl+'getAllPublications';
    return this.httpClient.get<ListResponseModel<Publication>>(newUrl);
  }
}
