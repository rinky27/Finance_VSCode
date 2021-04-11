import { Component, OnInit } from '@angular/core';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule } from 'src/app/module/customerinfo/customerinfo.module';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
 
  svc : CustomerinfoService;
  custlist:CustomerinfoModule[];
  
  constructor(svc : CustomerinfoService) {this.svc = svc;}

  ngOnInit(): void {
    /*it will load the data on form loading*/
    this.svc.GetCustomers().subscribe((data:CustomerinfoModule[])=>{
      this.custlist = data;
      console.log(this.custlist);
    });
  }
}


