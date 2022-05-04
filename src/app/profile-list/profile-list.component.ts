import { Component, OnInit } from '@angular/core';
import { ProfileListService } from './profile-list.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  private list : any;

  constructor(private serviceList: ProfileListService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(){
    this.serviceList.getProfileListe().subscribe((data) =>  {
      this.list = data;
      console.log(data);
    });
  }


}
