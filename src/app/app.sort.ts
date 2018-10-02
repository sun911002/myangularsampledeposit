import{Pipe,PipeTransform}from '@angular/core';

@Pipe({name:'sort'})

export class sortstring implements PipeTransform{

    /*transform(value:any[], args:string):any{
    if(args=='ascending'){

        return  value.sort();
    }
    else if(args=='descending')
    {
        return value.sort().reverse();
    }
     

    }*/

    transform(value:string):any{
     console.log(value);
      var newstring:string='';
      var len=value.length;
      var a=[];
      console.log(len);
            
      for(var i=len-1;i>=0;i--){
          a.push(value[i]);
      }

      console.log(newstring);
     return a.join("");
     

    }


}



