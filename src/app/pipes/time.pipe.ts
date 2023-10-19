import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value % 100 >= 10 && value % 100 <= 20){
      return value + ' минут'
    }
    if(value % 10 === 2 || value % 10 === 3 || value % 10 === 4){
      return value + ' минуты'
    }
    if(value % 10 === 1){
      return value + ' минута'
    }
    return value + ' минут'
  }

}
