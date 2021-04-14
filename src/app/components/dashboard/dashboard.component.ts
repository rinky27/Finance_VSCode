import { Component, OnInit,NgZone } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router} from '@angular/router';
import { EmiCardInfoModule } from 'src/app/modules/emi-card-info/emi-card-info.module';
import { UserLoginComponent } from 'src/app/components/user-login/user-login.component';
import { NgForm } from '@angular/forms';
import { OrderDetailsModule } from 'src/app/modules/order-details/order-details.module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model:any=[];
  svc:UserLoginService;
  ngzone:NgZone;
  router:Router;
  userlogin:UserLoginComponent;

  order:OrderDetailsModule[];

  emicard=new EmiCardInfoModule(); 
  constructor(svc:UserLoginService,ngzone:NgZone,router:Router) {
    this.svc=svc;
    this.ngzone = ngzone;
    this.router=router;
   }
   //Emi Card Details

   cardno:number;
   regno:number;
   cardtype:string;
   validity:string;
   cardlimit:number;
   accountstatus:string;
   custname:string;
   custusername:string;

   //OrderDetails 
   /*
   transactionid:number;
   cardid:number;
   productid:number;
   quantity:number;
   totalamount:number;
   emiduration:number;
   emipaid:number;
   emibalance:number;
   createddate:number;  */


  ngOnInit(): void {
    this.custusername = localStorage.getItem("Uname");
    this.svc.GetCardDetails(this.custusername).subscribe((data:EmiCardInfoModule)=>
    {
      this.custname = data.CustName;
      this.regno= data.RegNumber;
      this.cardno=data.CardNumber;
      this.validity=data.ValidityPeriod;
      this.cardtype=data.CardType;
      this.accountstatus=data.AccountStatus;
      //this.projid=data.projid;

      console.log(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
      alert(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
       
    });

    this.svc.GetOrderDetails(this.custusername).subscribe((data:OrderDetailsModule[])=>
    {
        this.order=data;
        console.log(this.order);

    });
  }

  // CardDetails(idform:NgForm):void
  // {
  //   console.log(idform.value);
  //   this.emicard.Username=this.custusername;
    
  //   this.svc.GetCardDetails(this.emicard.Username).subscribe((data:EmiCardInfoModule)=>
  //   {
  //     this.custname = this.custusername;
  //     this.regno= data.RegNumber;
  //     this.cardno=data.CardNumber;
  //     this.validity=data.ValidityPeriod;
  //     this.cardtype=data.CardType;
  //     this.accountstatus=data.AccountStatus;
  //     //this.projid=data.projid;

  //     console.log(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
  //     alert(data.RegNumber + "," + data.CardNumber + "," + data.ValidityPeriod + "," + data.CardType + "," + data.AccountStatus );
       
  //   });
  // }
  

}