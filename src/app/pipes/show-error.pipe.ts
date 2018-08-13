import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showerror'
})
export class ShowErrorPipe implements PipeTransform {

  transform(obj): any {
    var keys = Object.keys(obj);
    if (keys && keys.length>0) {
      return keys[0];
    }
    return '';
  }

}
