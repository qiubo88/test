import { Component } from '@angular/core';

@Component({ /*通过@Component将一个普通的typeScript类定义为一个组件*/
  selector: 'app-root', /*selector:组件的必备属性；定义了在html文件中的标签<app-root>*/
  templateUrl: './app.component.html', /*templateUrl:组件的必备属性；进行数据绑定*/
  styleUrls: ['./app.component.css']  /*styleUrls:组件的可选属性；对模板进行风格定义*/
})
export class AppComponent { /*控制器：一个typescript类*/
  title = 'This is the first app!'; /*title:类属性*/
  menu = [{
    title: '1',
    _open:true, //默认打开第一级
    items: [{
      title: '1.1',
      items: [
        {
          name: '1.1.1',
          title: 'xxx',
          items: []
        }
      ]
    }, {
      title: '1.2',
      items:[]
    }
    ]
  }]
}
