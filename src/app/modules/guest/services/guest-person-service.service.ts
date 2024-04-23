import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroment/enviroment';
import { ListResponseModel } from 'src/app/responses/list-response-model';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class GuestPersonServiceService {

  apiUrl:string=environment.apiUrl+'Persons/';

  constructor(private httpClient:HttpClient) { }

  getAllPeople():Observable<ListResponseModel<Person>>{
    let newUrl = this.apiUrl + 'getAllPeople';
    return this.httpClient.get<ListResponseModel<Person>>(newUrl);
  }
}
