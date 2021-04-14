// import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
// import {UserLoginModule} from '../../modules/user-login/user-login.module';
// import {UserLoginService} from '../../services/user-login.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserLoginModule } from 'src/app/modules/user-login/user-login.module';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username:string;
  userpwd:string;



  model:any =[];
  svc:UserLoginService;
  cust=new UserLoginModule();
  ngzone:NgZone;
  router:Router;
  constructor(svc:UserLoginService,ngZone:NgZone,router:Router) {
    this.svc = svc;
    this.ngzone = ngZone;
    this.router=router;
   }
  ngOnInit(): void {
 
  }
  showModal():void {
    ($("#myModal") as any).modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }
  Login(loginForm:NgForm):void{
    this.username = loginForm.value.name;
    this.userpwd = loginForm.value.pwd;
    console.log(this.cust);
    this.svc.Login(this.username,this.userpwd).subscribe((data:string)=>{
      if(data=="Login Successfull"){
        localStorage.setItem("Uname",this.username);
        setTimeout(()=>
        {
          this.ngzone.run(()=>this.router.navigateByUrl('/Dashboard'));
        },1000); 
      }
      else{
        alert(data);
        this.ngzone.run(()=>this.router.navigateByUrl('/UserLogin'));
      }
      
    })
  }


}
