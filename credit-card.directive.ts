import { Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit{
  @Input() CardNo: string='';
 
  constructor(private el:ElementRef) {}
  
  ngOnInit() {
    // this.el.nativeElement.classList.add(this.CardNo);
    this.CardType(this.CardNo);
  }
  
  CardType(number:any) {
   
    var regVisa = new RegExp("^4");
    var regAmex = new RegExp("^3[47]");
    var regMasterCard = new RegExp("^5[0-5]");
    var regMaestro = new RegExp("^5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390");
    var regDiners = new RegExp("^36");
    var regDinersCarteBlanche = new RegExp("^30[0-5]");
     var regVisaElectron =  RegExp("^(4026|417500|4508|4844|491(3|7))");
    
    if (regVisa.test(number) != false){ //&& ((number.length==16) || (number.length==19) ||(number.length==23)))
      this.el.nativeElement.src='assets/Visa.png';
    }
    else if (regAmex.test(number) != false){
      this.el.nativeElement.src='assets/Amex.png';
    }
    else if (regMasterCard.test(number) != false){
      this.el.nativeElement.src='assets/MasterCard.png';
    }
    else if (regMaestro.test(number) != false){
      this.el.nativeElement.src='assets/Maestro.png';
      this.el.nativeElement.alt='Maestro';
    }
    else if (regDiners.test(number) != false){
      this.el.nativeElement.src='assets/Diners.png';
      this.el.nativeElement.alt='Diners';
    }
    else if (regDinersCarteBlanche.test(number) != false){
      this.el.nativeElement.src='assets/DinersCarteBlanche.png';
      this.el.nativeElement.alt='DineeCarteBlanche';
    }
    else if (regVisaElectron.test(number) != false){
      this.el.nativeElement.src='assets/VisaElectron.png';
      this.el.nativeElement.alt='VisaElectron';
    }
    else{
      this.el.nativeElement.src='assets/Logo.jpg';
      this.el.nativeElement.alt='Card';
    }
  }
}
