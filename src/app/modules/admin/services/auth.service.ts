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

  isAuthenticated:boolean=false;
  apiUrl:string=environment.apiUrl+'Auths/'
  constructor(private httpClient:HttpClient) { }

  logIn(userForLoginDto:UserForLoginDto):Observable<SingleResponseModel<TokenModel>>{
    let newUrl:string=this.apiUrl+'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl,userForLoginDto);
  }
  checkAuthentication(tokenModel: TokenModel): boolean {
    const now = new Date();
    // Token'ın varlığını ve süresinin geçmemiş olmasını kontrol ediyoruz.
    if (tokenModel && tokenModel.token && tokenModel.expiration > now) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  // Kimlik doğrulama durumunu döndür
  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }
}
