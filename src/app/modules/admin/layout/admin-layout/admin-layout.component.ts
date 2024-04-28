import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenModel } from '../../models/token-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{
  
  constructor(private autService:AuthService,private router:Router,private toastrService:ToastrService){

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

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    this.router.navigate(['/login']);
    this.toastrService.info('Please sign in!')
  } 
}
