import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForLoginDto } from 'src/app/modules/admin/request-dtos/user-for-login-dto';
import { AuthService } from 'src/app/modules/admin/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private router:Router){

  }
  
  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userForLoginDto: UserForLoginDto = Object.assign({}, this.loginForm.value);
      this.authService.logIn(userForLoginDto).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastrService.success("Login Success");
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("expiration", response.data.expiration.toString());
            // Burada bir timeout ekleyerek navigasyonu geciktirebiliriz.
            setTimeout(() => {
              this.router.navigate(['/admin']);
            }, 100);
          } else {
            this.toastrService.error(response.message, 'Login Failed');
          }
        },
        error: (httpErrorResponse: HttpErrorResponse) => {
          console.log("API error: ", httpErrorResponse.error);
          this.toastrService.error("Login Failed: " + httpErrorResponse.message, 'Error');
        }
      });
    }
  }
  

    initForm(){
      this.loginForm = this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
    }  
  }

  


