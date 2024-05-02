import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Person } from '../../guest/models/person';
import { ResponseModel } from 'src/app/responses/response-model';
import { CreateNewPersonRequestDto } from '../request-dtos/create-new-person-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {

  private apiUrl:string=environment.apiUrl+'Persons/';

  constructor(private httpClient:HttpClient) { }

  createNewTeamMember(createNewPersonRequestDto:CreateNewPersonRequestDto):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+'createNewPerson';
    return this.httpClient.post<ResponseModel>(newUrl,createNewPersonRequestDto);
  }
  getAllTeamMembers():Observable<ListResponseModel<Person>>{
    let newUrl:string=this.apiUrl+'getAllPeople';
    return this.httpClient.get<ListResponseModel<Person>>(newUrl);
  }
}
