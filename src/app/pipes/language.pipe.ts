import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'language'})
export class LanguagePipe implements PipeTransform {
  transform(value: any, lang: string): any {
    console.log({value, lang});
    return value[lang] || '';
  }
}
