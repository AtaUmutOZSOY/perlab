import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/admin/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isAuthenticated:boolean=false;
  
  ngOnInit(): void {
    this.checkUserAuthentication();
  }

  constructor(private authService:AuthService){

  }
  
  title = 'Plant Evolution Research Laboratory';

  checkUserAuthentication(){
    var token = localStorage.getItem('token');

  }
}
