import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Shero } from './shero';
import { SHEROES } from './mock-sheroes';
import { MessageService } from './message.service';

// 这个服务类添加了 @Injectable() 装饰器
// 它把这个类标记为依赖注入系统的参与者之一
// SheroService 类将会提供一个可注入的服务，它还可以拥有自己的待注入的依赖
// @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样

@Injectable({
  providedIn: 'root'
})
export class SheroService {

  // 典型的服务中的服务场景，将 MessageService 注入到了 SheroService 中
  // 而 SheroService 又被注入到了 SheroComponent 中
  constructor(private messageService: MessageService) { }

  // 返回模拟的英雄列表的方法
  // getSheroes(): Shero[] {
  //   return SHEROES;
  // }

  getSheroes(): Observable<Shero[]> {
    const sheroes = of(SHEROES);
    // 在获取到英雄数组时发送一条消息
    this.messageService.add('SheroService: fetched sheroes');
    return sheroes;
  }
}
