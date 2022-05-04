import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private authservice : AuthService) { }

  ngOnInit(): void {
    this.authService.SignOut();
  }

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  spinner: boolean = false;
  errorMsg: boolean = false;

  onSubmit(): void {
    this.loading();
    let user: any = {"username": this.loginForm.controls['username'].value, "password": this.loginForm.controls['password'].value} ;
    this.authservice.connect(user).toPromise()
      .then(
              res => {
                localStorage.setItem('token',res.token);
                this.onConnected();
              } 
      ).catch(
              err => { 
                this.errorMsg = true;
                this.loading();
              }
      );
    
  }

  onConnected(){
    this.authservice.getId().toPromise()
    .then(
      res => {
        console.log(res);
        localStorage.setItem('user_id',res.user_id);
        localStorage.setItem('user_role',res.user_role);
        this.loading();
        this.router.navigate(['profile/'+res.user_id]);
      }
    );
  }

  loading(){
    if(this.spinner)  this.spinner = false; else this.spinner = true;
  }

  hiddenError(){
    this.errorMsg = false;
  }


}
