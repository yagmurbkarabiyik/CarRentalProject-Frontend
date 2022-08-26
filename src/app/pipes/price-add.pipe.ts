import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceAdd'
})
export class PriceAddPipe implements PipeTransform {

  transform(value: number, rate:number , ...args: unknown[] ): number|null {
    return value +(value*rate/100);
  }


}
