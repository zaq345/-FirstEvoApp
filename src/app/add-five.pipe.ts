import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive'
})
export class AddFivePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + 5;
  }

}
