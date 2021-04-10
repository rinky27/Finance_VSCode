import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observer} from 'rxjs';
//import {EmpInfoModule} from '../modules/emp-info/emp-info.module';
import {UserLoginModule} from '../modules/user-login/user-login.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import { UserLoginComponent } from '../components/user-login/user-login.component';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  cust:UserLoginComponent;
  http:HttpClient;
  url:string='http://localhost:56054/api/UserLoginAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http:HttpClient) {this.http=http; }

  Login(name:string,pwd:string):Observable<string>{
    return this.http.get<string>(this.url+"/"+"Login"+"/"+name+"/"+pwd);
  }
}
