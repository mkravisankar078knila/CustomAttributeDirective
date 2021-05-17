import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { CustomValidators } from 'ngx-custom-validators';
// import { CreditCardValidators as ngCreditCardValidators  } from 'angular-cc-library';
//  import { CreditCardValidators  } from 'ngx-validators';

@Component({
  selector: 'app-payment-directive',
  templateUrl: './payment-directive.component.html',
  styleUrls: ['./payment-directive.component.css']
})
export class PaymentDirectiveComponent implements OnInit {
 cardDetails: FormGroup;
 cardType='';
 cardNo:string='';
 cardNoChange:boolean=false;

 constructor( private fb:FormBuilder) {
    this.cardDetails = this.fb.group({
      
      name:['',RxwebValidators.compose({validators:[
        RxwebValidators.required(),RxwebValidators.maxLength({value:20 })]})],
      cardType:[''],
      creditCards: ['',[Validators.required,CustomValidators.creditCard]],
      expirationDate: [''], //[<any>ngCreditCardValidators.validateExpDate]],
      cvc: ['',RxwebValidators.compose({validators:[RxwebValidators.required(),
        RxwebValidators.minLength({value:4 }),RxwebValidators.maxLength({value:4 })]})],

      address:['',RxwebValidators.maxLength({value:20 })],
      city:['',RxwebValidators.maxLength({value:20 })],
      country:['',RxwebValidators.maxLength({value:20 })],
      phoneNumber:['',RxwebValidators.compose({validators:[
         RxwebValidators.required(),RxwebValidators.mask({mask:'(999)-999 9999' })]})],
      email:['',RxwebValidators.compose({validators:[
        RxwebValidators.required(),RxwebValidators.email()]})]
     
    });
 
  }
      
 ngOnInit(): void { }

 onSubmit() {
  console.log(this.cardDetails.value);
  }


}






