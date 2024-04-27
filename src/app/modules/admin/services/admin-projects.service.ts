import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Project } from '../models/project';
import { ResponseModel } from 'src/app/responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectsService {

  apiUrl:string=environment.apiUrl+'Projects/';

  constructor(private httpClient:HttpClient) { }

  getAllProjects():Observable<ListResponseModel<Project>>{
    let newUrl = this.apiUrl+'getAllProjects';
    return this.httpClient.get<ListResponseModel<Project>>(newUrl);
  }
  createProject(project:Project):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'createProject';
    return this.httpClient.post<ResponseModel>(newUrl,project);
  }
  updateProject(project:Project):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'updateProject';
    return this.httpClient.put<ResponseModel>(newUrl,project);
  }
  deleteProject(id:number):Observable<ResponseModel>{
    let newUrl = this.apiUrl+'deleteProjectById/'+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }


}
