import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  constructor(private http :HttpClient) { }


  private baseUrl : string = "localhost:81/";

  getProfileListe(){

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    let url : string = this.baseUrl+"data/profileList.json";

    return this.http.get(url, {headers: headers, responseType: 'json'});

  }

}
