import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
//import {AdmininfoService} from 'src/app/services/admininfo.service';
//import {AdminModule} from 'src/app/module/admin/admin.module';
import {NgForm,FormsModule,FormGroup} from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule } from 'src/app/module/customerinfo/customerinfo.module';
import { AdminSelectComponent } from '../admin-select/admin-select.component';
//import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  svc:CustomerinfoService;
  name:string;
  pwd:string;
  model:any=[];
  ngzone : NgZone;
  router : Router;
  Admin= new CustomerinfoModule();
  constructor(svc : CustomerinfoService, ngzone : NgZone, router : Router) {
    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;
    
   }
  ngOnInit(): void {
  }
  
  AdminLogin(AdminForm:NgForm):void{
    this.name =this.model.userName;
    this.pwd=this.model.pwd;

    this.svc.AdminLogin(this.name,this.pwd).subscribe((data:string)=> {
    console.log(data);
    console.log(this.name+","+this.pwd);
    if(data=="Login Successful")
    {
      alert('Admin has successfully logged in');
    }
    else{
      alert('Invalid credentials');
    }

      //this.ngzone.run(()=>this.router.navigateByUrl('/GetAllCustomers'));
    //this.ngzone.run(()=>this.router.navigateByUrl('/GetCustomerById'));
    this.ngzone.run(()=>this.router.navigateByUrl('/AdminSelect'));
  });


  }

}







 
 
  
 
  

 


     







  




  
  