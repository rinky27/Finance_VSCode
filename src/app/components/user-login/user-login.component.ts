import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserLoginModule} from '../../modules/user-login/user-login.module';
import {UserLoginService} from '../../services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model:any =[];
  svc:UserLoginService;
  cust=new UserLoginModule();
  constructor(svc:UserLoginService) {
    this.svc = svc;
   }
  ngOnInit(): void {
    
  }
  Login(loginForm:NgForm):void{
    this.cust.Username = loginForm.value.name;
    this.cust.Password = loginForm.value.pwd;
    this.svc.Login(this.cust.Username,this.cust.Password).subscribe((data:string)=>{
      alert(data);
    })
  }

}
