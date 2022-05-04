import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { user } from '../_services/user';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  viewPicturePro : boolean = false;
  viewPicture : boolean = false;
  viewPictureUrl : any;
  viewPictureNum : any;
  viewPictureUrls : Array<any> = [];
  urlBack = environment.UrlLogin;
  private id:any;
  Femme = "Femme";
  Homme = "Homme";
  usr : user = {
    id: 0,
    username: "username",
    roles: ["roles"],
    sexe: "sexe",
    birth: "birth",
    country: "country",
    town:  "town",
    langue: ["langue"],
    child: "child",
    searchfor:  "searchfor",
    pdp:  "pdp"
  } ;

  constructor(private profile : ProfileService, private uriRoute : ActivatedRoute, ) {
    this.id = this.uriRoute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.getInfo();
  }

  viewPic(){
    this.viewPicture ? this.viewPicture = false : this.viewPicture = true;
  }

  viewPicPro(){
    this.viewPicturePro ? this.viewPicturePro = false : this.viewPicturePro = true;
  }

  changeViewPicUrl(param:any, num:number){
    this.viewPictureUrl = this.urlBack+param;
    this.viewPictureNum = num;
    this.viewPic();
  }
  getNextPic(){
    if(this.viewPictureNum == 10) {
        this.viewPictureUrl = this.urlBack+this.viewPictureUrls[0];
        this.viewPictureNum = 1;
    }else{
        this.viewPictureUrl = this.urlBack+this.viewPictureUrls[this.viewPictureNum];
        this.viewPictureNum++;
    }
    
  }

  getPreviewPic(){
    if(this.viewPictureNum == 1) {
        this.viewPictureUrl = this.urlBack+this.viewPictureUrls[9];
        this.viewPictureNum = 10;
    }else{
        this.viewPictureUrl = this.urlBack+this.viewPictureUrls[this.viewPictureNum - 2];
        this.viewPictureNum--;
    }
    
  }

  getInfo(){
    this.profile.getProfile(this.id).toPromise()
    .then(

      res => {
        this.setUsr(res);
        //console.log(this.usr);
      }

    ).catch(

    );
  }

  setUsr(param:any){
    let yearb = new Date(param.birth).getFullYear();
    let yearn = new Date().getFullYear(); 
    this.usr.id = param.id;
    this.usr.username = param.username;
    this.usr.roles = param.roles;
    this.usr.password = param.password;
    this.usr.email = param.email;
    this.usr.sexe = param.sexe;
    this.usr.firstname = param.firstname;
    this.usr.name = param.name;
    //this.usr.birth = param.birth;
    this.usr.birth = yearn - yearb;
    this.usr.country = param.country;
    this.usr.town = param.town;
    this.usr.langue = param.langue;
    this.usr.phonenumber = param.phonenumber;
    this.usr.child = param.child;
    this.usr.livewith = param.livewith;
    this.usr.searchfor = param.searchfor;
    this.usr.socialnetwork = param.socialnetwork[0];
    this.usr.pdp = param.pdp;
    this.usr.photos = param.photos[0];
    this.urlBack += "img-pic/"+param.username+"/";
    this.viewPictureUrls = [
      param.photos[0].photo01,
      param.photos[0].photo02,
      param.photos[0].photo03,
      param.photos[0].photo04,
      param.photos[0].photo05,
      param.photos[0].photo06,
      param.photos[0].photo07,
      param.photos[0].photo08,
      param.photos[0].photo09,
      param.photos[0].photo10
    ];
  }

}
