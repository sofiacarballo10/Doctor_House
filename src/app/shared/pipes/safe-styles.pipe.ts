import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'safeStyles',
})
export class SafeStylesPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(value);
  }
}
