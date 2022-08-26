import { CarDetail } from './../models/carDetail';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:CarDetail) => c.modelName.toLocaleLowerCase().indexOf(filterText)!==-1
     || c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1
     || c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1)
     :value;
  }

  
}
