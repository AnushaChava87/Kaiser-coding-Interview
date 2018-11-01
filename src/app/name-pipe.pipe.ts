import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
       value.sort((a:any,b:any)=>{
       a = a.first_name.toLowerCase();
       b = b.first_name.toLowerCase();
       return (a < b) ? -1 : (a > b) ? 1 : 0;
    })
    }
    return value;
  }

}
