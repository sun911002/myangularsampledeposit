import { Directive } from '@angular/core';
import{ NG_VALIDATORS,Validator,AbstractControl}from '@angular/forms';

@Directive({
  selector: '[appComparepassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ComparepasswordDirective,
    multi:true
    }]
})
export class ComparepasswordDirective implements Validator {

 // @Input() appComparepassword:string;
  constructor() { }
 
  validate(pwdGroup:AbstractControl):{[key:string]:any}|null
  {
  /*const cpwd=control.parent.get(this.appComparepassword);
  console.log(cpwd);
  console.log(control.value);
  if(cpwd && cpwd.value!==control.value)
  {
  return {'notequal':true};
  }
  return null;
*/  

 const pwd=pwdGroup.get('password');
 //console.log(pwd.value);
 const cpwd=pwdGroup.get('conformpassword');
 //console.log(cpwd.value);

 if(pwd && cpwd && pwd.value!==cpwd.value){
   return {'notequal':true};
 }
 return null;

}
}
