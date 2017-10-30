import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: any, keyword: string): any {
    //procucts 是一个数组，filterField是product里的字段，keyword 是过滤关键字
    if(!filterField || !keyword){
      return list;
    }

    return list.filter(item =>{
      let fieldValue = item[filterField]+'';//如果传入的过滤字段是数字，+''转换为字符后可以使用indexOf
      console.log(typeof fieldValue);
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

  

}
