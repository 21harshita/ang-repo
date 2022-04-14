import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'descPipe' })
export class Mypipe implements PipeTransform {
  transform(desc:any,  id: any, name: any, website: any): any {
    let today:Date = new Date(); 
    return desc + ': ' + 'Your ID is ' + id + '. Your Name is ' + name + '. Your Website is ' + website + '.';

  }
}
