
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule} from '../../module/customerinfo/customerinfo.module';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  alert:boolean=false;


 editCustomer=new FormGroup({
  CustName :new FormControl(''),
  PhoneNo : new FormControl(''),
  CustEmail :new FormControl(''),
  CustUsername : new FormControl(''),
  CustPassword :new FormControl(''),
  CustAddress:new FormControl(''),
  CardType:new FormControl(''),
  BankName:new FormControl(''),
  AccountNumber:new FormControl(''),
  IFSCCode:new FormControl('')
})


/*
RegNumber : number;
CustName : string;
PhoneNo : number;
CustEmail : string;
CustUsername : string;
CustPassword : string;
CustAddress:string;
CardType:string;
BankName:string;
AccountNumber:number;
IFSCCode:string;
*/
  model : any = [];
  svc : CustomerinfoService;
  cust = new CustomerinfoModule();
  constructor(svc : CustomerinfoService,private router:ActivatedRoute) {
    this.svc = svc;
  }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.id)
    this.svc.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
     this.editCustomer=new FormGroup({
        CustName :new FormControl(result['CustName']),
        PhoneNo : new FormControl(result['PhoneNo']),
        CustEmail :new FormControl(result['CustEmail']),
        CustUsername : new FormControl(result['CustUsername']),
        CustPassword :new FormControl(result['CustPassword']),
        CustAddress:new FormControl(result['CustAddress']),
        CardType:new FormControl(result['CardType']),
        BankName:new FormControl(result['BankName']),
        AccountNumber:new FormControl(result['AccountNumber']),
        IFSCCode:new FormControl(result['IFSCCode'])
    })
  })
}


UpdateCustomer(){
  this.svc.UpdateCustomer(this.router.snapshot.params.id,this.editCustomer.value).subscribe((result)=>{
    console.log(result,"Data Updated Successfully")
  })

}
/*
Update(updatecustomer : NgForm) : void
  {
    console.log(updatecustomer.value);
    this.cust.RegNumber =  updatecustomer.value.cid;
    this.cust.CustName =  updatecustomer.value.cname;
    this.cust.PhoneNo = updatecustomer.value.phone;
    this.cust.CustEmail = updatecustomer.value.custemail;
    this.cust.CustUsername=updatecustomer.value.custusername;
    this.cust.CustPassword=updatecustomer.value.password;
    this.cust.CustAddress = updatecustomer.value.custaddress;
    this.cust.CardType = updatecustomer.value.Card;
    this.cust.BankName = updatecustomer.value.Bank;
    this.cust.AccountNumber=updatecustomer.value.Accountno;
    this.cust.IFSCCode = updatecustomer.value.ifsc;
    //this.cust.ApprovalStatus = updatecustomer.value.ApprovalStatus;
    console.log(this.cust);
    this.svc.UpdateCustomer(this.cust.RegNumber, this.cust).subscribe((data:boolean)=>{
      if(data==true)
      {
        alert("Update Successfull");
      }
      else
      {
        alert("Update Unsuccessfull");
      }
    });
  }
 
}
*/

/*
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FormControl, NgForm } from '@angular/forms';
import { CustomerinfoService } from 'src/app/module/customerinfo.service';
import { CustomerinfoModule} from '../../module/customerinfo/customerinfo.module';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
    form: FormGroup;
    id: number;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private svc:CustomerinfoService
       
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
       // const passwordValidators = [Validators.minLength(6)];
       // if (this.isAddMode) {
        //    passwordValidators.push(Validators.required);
       // }

        this.form =new FormGroup({
          CustName :new FormControl(''),
          PhoneNo : new FormControl(''),
          CustEmail :new FormControl(''),
          CustUsername : new FormControl(''),
          CustPassword :new FormControl(''),
          CustAddress:new FormControl(''),
          CardType:new FormControl(''),
          BankName:new FormControl(''),
          AccountNumber:new FormControl(''),
          IFSCCode:new FormControl('')
        })



        if (!this.isAddMode) {
            this.svc.GetCustomerById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
     //   this.alertService.clear();

        // stop here if form is invalid
        
    }

   

    private updateUser() {
        this.svc.UpdateCustomer(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                   // this.alertService.success('User updated', { keepAfterRouteChange: true });
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                  //  this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
}

*/
}
