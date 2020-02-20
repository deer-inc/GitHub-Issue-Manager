import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encode'
})
export class EncodePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return encodeURIComponent(value);
  }
}
