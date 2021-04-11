import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule } from 'src/app/module/customerinfo/customerinfo.module';

@Component({
  selector: 'app-get-customer-by-id',
  templateUrl: './get-customer-by-id.component.html',
  styleUrls: ['./get-customer-by-id.component.css']
})
export class GetCustomerByIdComponent implements OnInit {
  cust  : any = [];
  svc : CustomerinfoService;
  c = new CustomerinfoModule();
  constructor(svc : CustomerinfoService) {this.svc = svc; }

  RegNumber:number
  CustName:string
  PhoneNo:number
  CustEmail:string
  CustUsername:string
  CustAddress:string
  CardType:string
  BankName:string
  ngOnInit(): void {
  }
  FindCustomer(getcustomers : NgForm) : void
  {
    console.log(getcustomers.value);
    this.c.RegNumber = getcustomers.value.Custid;
    this.svc.GetCustomerById(this.c.RegNumber).subscribe((data : CustomerinfoModule)=>{
      this.RegNumber = data.RegNumber;
      this.CustName = data.CustName;
      this.PhoneNo = data.PhoneNo;
      this.CustEmail = data.CustEmail;
      this.CustUsername = data.CustUsername;
      this.CustAddress = data.CustAddress;
      this.CardType=data.CardType;
      this.BankName=data.BankName;

      console.log(data.RegNumber + "," + data.CustName + "," + data.PhoneNo + "," + data.CustEmail + "," + data.CustUsername + "," + data.CustAddress);
    });
  }
}

  