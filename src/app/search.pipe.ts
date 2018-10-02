import { Pipe, PipeTransform } from '@angular/core';
import{ Employee} from './models/employee.model';


@Pipe({
  name: 'search',
  
  
})
export class SearchPipe implements PipeTransform {
 private counter:number=1;
  transform(employees:Employee[], searchterm:string): Employee[] {
    this.counter++;
    console.log(this.counter);
    console.log(searchterm);
    if(!employees || !searchterm){
    return employees;
     }
     return employees.filter(item=>
      item.name.toLowerCase().indexOf(searchterm.toLowerCase())==-1);
    
     }
    }