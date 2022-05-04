import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userInfo : FormGroup ;
  register: any;
  //this.userInfo.controls['repeatpassword'].value,


  constructor(register : RegisterService) { 

    this.userInfo = register.getForm();
    this.register = register;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(
      this.register.getDataQuery(this.userInfo)
    );
    this.register.addUser(this.userInfo).toPromise()
    .then(
      (      res: any) => {
        console.log(res);
      }
    );;
    console.log('-------------------------------');
  }

}
