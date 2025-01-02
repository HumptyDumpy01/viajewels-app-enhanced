import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrInitials',
  standalone: true
})
export class AbbrInitialsPipe implements PipeTransform {

  transform(initials: string): string {
    if (initials.includes(` `)) {
      const [first, last] = initials.split(` `);
      return `${first[0]}.${last[0]}`;
    } else {
      return `${initials[0]}`;
    }
  }

}
