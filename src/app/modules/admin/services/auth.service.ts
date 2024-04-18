import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment/enviroment';
import { UserForLoginDto } from '../dtos/user-for-login-dto';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/responses/response-model';
import { SingleResponseModel } from 'src/app/responses/single-response-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = environment.apiUrl+'Auths/';
  constructor(private httpClient:HttpClient) { }

  login(userForLoginDto:UserForLoginDto):Observable<SingleResponseModel<TokenModel>>{
    let newUrl = this.apiUrl + 'login'
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl,userForLoginDto);
  }
}
