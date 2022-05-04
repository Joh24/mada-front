import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = environment.UrlBack;
  baseLogin : string = environment.UrlLogin;

  constructor(private router: Router, private http :HttpClient) { 
    
  }

  
  public connect(userInfo: any){

      let header = new HttpHeaders().set('content-type', 'application/json');

      return this.http.post<any>(this.baseLogin+'authentication_token', userInfo, {'headers':header});

  }

  public isLoggedIn(): boolean {
      return localStorage.getItem('token') !== null;
  }

  public SignOut() {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
  }

  public getId(){
    let token = localStorage.getItem("token");
    let header = new HttpHeaders().set('content-type', 'application/json').set('Authorization',`Bearer ${token}`);
    return this.http.get<any>(this.baseLogin+'api/user/helper', {'headers':header});
  }

}