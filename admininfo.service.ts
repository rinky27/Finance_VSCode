
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observer}from'rxjs';
import{HttpHeaders}from'@angular/common/http';
import{Observable}from'rxjs/internal/observable';
 import {AdminModule} from 'src/app/module/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class AdmininfoService {
  Admin:AdminModule;
  http:HttpClient;
  url:string='http://localhost:56054/api/AdminAPI';
  httpOptions={headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
  };

  constructor(http:HttpClient) {this.http=http;}
  AdminLogin(AdminName:string,AdminPassword:string):Observable<string>
  {
    return this.http.get<string>(this.url+'/'+'AdminLogin'+'/'+AdminName+'/'+AdminPassword);
  }
}




 