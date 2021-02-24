import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: any, field: string, direction: 'asc' | 'desc' = 'asc'): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    if (direction === 'desc') {
      return array.reverse();
    }
    return array;
  }

}
