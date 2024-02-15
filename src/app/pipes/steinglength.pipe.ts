import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringlength',
  standalone: true,
})
export class SteinglengthPipe implements PipeTransform {
  transform(value: string, reqLength: number) {
    return value.slice(0, reqLength);
  }
}
