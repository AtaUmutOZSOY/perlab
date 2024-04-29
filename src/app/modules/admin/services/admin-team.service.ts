import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Person } from '../../guest/models/person';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {

  private apiUrl:string=environment.apiUrl+'Persons/';

  constructor(private httpClient:HttpClient) { }

  getAllTeamMembers():Observable<ListResponseModel<Person>>{
    let newUrl:string=this.apiUrl+'getAllPeople';
    return this.httpClient.get<ListResponseModel<Person>>(newUrl);
  }
}
