import { Component, OnInit } from '@angular/core';
import { Shero } from '../shero';
// import { SHEROES } from '../mock-sheroes';
import { SheroService } from '../shero.service';
import { MessageService } from '../message.service';

// 装饰器函数，用于为该组件指定 Angular 所需的元数据
// ng generate 创建了三个元数据属性
@Component({
  selector: 'app-sheroes',
  templateUrl: './sheroes.component.html',
  styleUrls: ['./sheroes.component.css']
})

export class SheroesComponent implements OnInit {
  // shero: Shero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // 添加sheroes属性来暴露SHEROES数组，以供绑定
  // sheroes = SHEROES;
  sheroes: Shero[] = [];
  selectedShero?: Shero;

  // 声明一个私有属性 sheroService，并将它标记为一个 SheroService 的注入点
  constructor(
    private sheroService: SheroService,
    private messageService: MessageService,
  ) {}

  // 生命周期钩子，放置初始化逻辑，Angular 在创建完组件后就会调用
  ngOnInit(): void {
    // 初始化英雄数据
    this.getSheroes();
  }

  onSelect(shero: Shero): void {
    this.selectedShero = shero;
    // 用户点击某个英雄时添加的消息
    this.messageService.add(`SheroesComponent: Selected shero id = ${shero.id}`)
  }

  // 从服务中获取英雄数据的方法
  getSheroes(): void {
    // this.sheroService.getSheroes() 是同步的，假设服务总能同步获取英雄列表数据
    // 但在使用异步调用的真实应用中是不可能的，目前是因为同步返回的是模拟数据
    // this.sheroes = this.sheroService.getSheroes();

    // 将同步转为异步
    // 新的版本等待 Observable 发出这个英雄数组，
    // 这可能立即发生，也可能会在几分钟之后。
    // 然后，subscribe() 方法把这个英雄数组传给这个回调函数，
    // 该函数把英雄数组赋值给组件的 heroes 属性
    this.sheroService.getSheroes().subscribe(sheroes => this.sheroes = sheroes);
  }
}
