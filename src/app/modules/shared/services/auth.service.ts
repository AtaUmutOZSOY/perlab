import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLoginDto } from '../request-dtos/user-for-login-dto';
import { environment } from 'src/app/enviroment/enviroment';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/responses/single-response-model';
import { TokenModel } from '../models/token-model';
import { ResponseModel } from 'src/app/responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string=environment.apiUrl+'Auths/'
  constructor(private httpClient:HttpClient) { }

  logIn(userForLoginDto:UserForLoginDto):Observable<SingleResponseModel<TokenModel>>{
    let newUrl:string=this.apiUrl+'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl,userForLoginDto);
  }
  isAuthenticated(tokenModel:TokenModel):Observable<ResponseModel>{
    let newUrl:string=this.apiUrl+'checkUserAuthentication';
    return this.httpClient.post<ResponseModel>(newUrl,tokenModel);
  }
}
