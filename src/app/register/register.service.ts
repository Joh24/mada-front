import { Injectable } from '@angular/core';
import { user } from '../_services/user';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl : string = environment.UrlBack;
  baseLogin : string = environment.UrlLogin;

  constructor(private router: Router, private http :HttpClient) { }

  getFormValue(params: FormGroup){
    let userInfo : user = {      
      id: params.controls['id'].value == "" ? null:params.controls['id'].value,
      username: params.controls['username'].value == "" ? null:params.controls['username'].value,
      roles: params.controls['roles'].value == "" ? 'ROLE_USER':params.controls['roles'].value,
      password: params.controls['password'].value == "" ? null:params.controls['password'].value,
      email: params.controls['email'].value == "" ? null:params.controls['email'].value,
      sexe: params.controls['sexe'].value == "" ? null:params.controls['sexe'].value,
      firstname: params.controls['firstname'].value == "" ? null:params.controls['firstname'].value,
      name: params.controls['name'].value == "" ? null:params.controls['name'].value,
      birth: params.controls['birth'].value == "" ? null:params.controls['birth'].value,
      country: params.controls['country'].value == "" ? null:params.controls['country'].value,
      town:  params.controls['town'].value == "" ? null:params.controls['town'].value,
      langue: params.controls['langue'].value == "" ? null:params.controls['langue'].value,
      phonenumber: params.controls['phonenumber'].value == "" ? null:params.controls['phonenumber'].value,
      child:  params.controls['child'].value == "" ? null:params.controls['child'].value,
      livewith:  params.controls['livewith'].value == "" ? null:params.controls['livewith'].value,
      searchfor:  params.controls['searchfor'].value == "" ? null:params.controls['searchfor'].value,
      socialnetwork: params.controls['socialnetwork'].value == "" ? null:params.controls['socialnetwork'].value,
      pdp:  params.controls['pdp'].value == "" ? null:params.controls['pdp'].value,
      photos:params.controls['photos'].value  == "" ? null:params.controls['photos'].value,
    };
    return userInfo;
  }

  getForm(){
    let userInfo = new FormGroup({
          username: new FormControl(''),
          phonenumber: new FormControl(''),
          email: new FormControl(''),
          password: new FormControl(''),
          repeatpassword: new FormControl(''),
          id: new FormControl(''),
          roles: new FormControl(''),
          sexe: new FormControl(''),
          firstname: new FormControl(''),
          name: new FormControl(''),
          birth: new FormControl(''),
          country: new FormControl(''),
          town:  new FormControl(''),
          langue: new FormControl(''),
          child:  new FormControl(''),
          livewith:  new FormControl(''),
          searchfor:  new FormControl(''),
          socialnetwork: new FormControl(''),
          pdp:  new FormControl(''),
          photos:new FormControl(''),
        });
      return userInfo
  }

  getUserData(params : user){
    let userInfo =

      {
        "username": params.username,
        "roles": [
          params.roles
        ],
        "password": params.password == null ? 'password' :  params.password ,
        "email": params.email == null ? 'email' : params.email,
        "sexe": params.sexe == null ? 'sexe' : params.sexe,
        "firstname": params.firstname == null ? 'firstname' : params.sexe,
        "name": params.name  == null ? 'name' : params.name,
        "birth": params.birth  == null ? '1996-01-24T19:44:11.312Z': params.birth,
        "country": params.country  == null ? 'country':params.country ,
        "town": params.town  == null ? 'town' : params.town,
        "langue": params.langue == null ? []:[params.langue],
        "phonenumber": params.phonenumber  == null ? 'phonenumber': params.phonenumber ,
        "child": params.child  == null ? 0: params.child ,
        "livewith": params.livewith  == null ? 'livewith' : params.livewith ,
        "searchfor": params.searchfor  == null ? 'searchfor' :  params.searchfor,
        "socialnetwork": params.socialnetwork == null? []:[params.socialnetwork],
        "pdp": params.pdp  == null ? 'pdp' : params.pdp,
        //"photos": params.photos == null ? []: [params.photos]
      }

    return userInfo;
  }

      getDataQuery(userInfo : FormGroup){
        return this.getUserData(this.getFormValue(userInfo));
      }

      addUser(userInfo : FormGroup){
        let header = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<any>(this.baseUrl+'users',  this.getDataQuery(userInfo), {'headers':header});
      }

}
