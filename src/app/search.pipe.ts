import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false,
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchUser: string): any {
    if (!value || !searchUser) return value;
    searchUser = searchUser.toLowerCase();
    return value.filter(
      (exp: any) =>
        exp.name?.toLowerCase().includes(searchUser) ||
        exp.category?.toLowerCase().includes(searchUser) ||
        exp.amount?.toString().includes(searchUser) ||
        exp.description?.toLowerCase().includes(searchUser)
    );
  }
}
