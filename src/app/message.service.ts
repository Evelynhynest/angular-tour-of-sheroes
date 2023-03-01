import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// 该服务公开其 messages 缓存和两个方法
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
