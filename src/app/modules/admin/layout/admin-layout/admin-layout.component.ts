import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenModel } from '../../models/token-model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{
  
  constructor(private autService:AuthService){

  }

  ngOnInit(): void {
    this.checkUserLoginState();
  }
  isLoggedIn:boolean=false;

  checkUserLoginState(): void {
    const expirationString = localStorage.getItem('expiration');
    if (expirationString) {
      const expiration = new Date(expirationString);
      const now = new Date();
      this.isLoggedIn = expiration > now;
    } else {
      this.isLoggedIn = false;
    }
  }
}
