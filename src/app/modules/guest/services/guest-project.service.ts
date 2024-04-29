import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Project } from '../../admin/models/project';

@Injectable({
  providedIn: 'root'
})
export class GuestProjectService {

  apiUrl:string=environment.apiUrl+'Projects/';
  constructor(private httpClient:HttpClient) { }

  getAllProjects():Observable<ListResponseModel<Project>>{
    let newUrl = this.apiUrl+'getAllProjects';
    return this.httpClient.get<ListResponseModel<Project>>(newUrl)
  }
}
