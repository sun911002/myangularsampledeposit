import { Directive,Input } from '@angular/core';
import{Validator,AbstractControl,NG_VALIDATORS} from '@angular/forms';


@Directive({
  selector: '[appSelectedValidator]',
  providers:[{
  provide:NG_VALIDATORS,
  useExisting:SelectedValidatorDirective,
  multi:true
  }]
})
export class SelectedValidatorDirective implements Validator {
    @Input('appSelectedValidator') default :string;
    constructor() { 
    }
    validate(control:AbstractControl):{[key:string]:any}|null{
      console.log(control.value); 
      console.log(this.default);    
     return  control.value==this.default? {'defaultSelected':true}:null;
     }
}
