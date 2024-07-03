import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datepipe'
})
export class DatePipe1 implements PipeTransform {

  transform(value: any) {
    let datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'dd/MM/yyyy');
     return value;
 }

}
