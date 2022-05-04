import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  baseUrl : string = environment.UrlBack;
  
  constructor(private http :HttpClient) { }

  getProfile(id:any){

      let header = new HttpHeaders().set('content-type', 'application/json');

      return this.http.get<any>(this.baseUrl+'users/'+id,  {'headers':header});

  }
}

