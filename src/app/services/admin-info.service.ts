import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

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
