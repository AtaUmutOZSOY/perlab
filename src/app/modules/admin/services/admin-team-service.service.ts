import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Person } from '../../guest/models/person';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamServiceService {

  apiUrl: string = environment.apiUrl+'Persons/';

  constructor(private httpClient:HttpClient) { }

  getAllPeople():Observable<ListResponseModel<Person>>{
    let newUrl:string= this.apiUrl+'getAllPeople';
    return this.httpClient.get<ListResponseModel<Person>>(newUrl);
  }
  deletePerson(id:number):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+'deletePersonById/'+id;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
  updatePersonVisualRank(id:number,visualRank:number):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+`updatePersonVisualRank?id=${id}&visualrank=${visualRank}`;
    return this.httpClient.put<ResponseModel>(newUrl,null);
  }
}
