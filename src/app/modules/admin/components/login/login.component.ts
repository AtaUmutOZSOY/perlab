import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForLoginDto } from 'src/app/modules/shared/request-dtos/user-for-login-dto';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup;
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private toastrService:ToastrService,private router:Router){

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      const userForLoginDto:UserForLoginDto = {
        email: this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.authService.logIn(userForLoginDto).subscribe(
        {
          next:(response) => {
            if (response.success) {
              this.toastrService.success(response.message);
              localStorage.setItem('token' , response.data.token);
              localStorage.setItem('expiration',response.data.expiration.toString())
              this.router.navigate(['/admin-dashboard'])
            }else(
              this.toastrService.error(response.message, "Error")
            )
          },
          error:(error) => {
            console.log(error)
            this.toastrService.error(error,"Error");
          }
        }
      )        
    }
  }

}
