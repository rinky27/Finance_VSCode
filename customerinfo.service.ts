import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import {CustomerinfoModule } from '../module/customerinfo/customerinfo.module';
import { Observable } from 'rxjs/internal/observable';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerinfoService {
  emp : CustomerinfoModule;
  http : HttpClient;
  url : string = "http://localhost:56054/api/AdminAPI"
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http = http;}
  GetCustomers() : Observable<CustomerinfoModule[]>
  {
    return this.http.get<CustomerinfoModule[]>(this.url + "/" + "GetAllCustomers");
  }

  GetCustomerById(id : number) : Observable<CustomerinfoModule>
  {
    return this.http.get<CustomerinfoModule>(this.url + "/" + "GetCustomerById" + "/" + id);
  }

  AdminLogin(name : string, password : string) : Observable<string>
  {
    return this.http.get<string>(this.url + "/" + "AdminLogin" + "/" + name + "/" + password);
  }

}







  

  
  