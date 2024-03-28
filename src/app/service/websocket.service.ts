// src/app/websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;
  private messagesSubject = new Subject<any>();
  public messages$ = this.messagesSubject.asObservable(); // Components can subscribe to this

  constructor() { }

  public connect(k1: string): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket(k1);
      this.socket$.subscribe({
        next: (msg) => {
          console.log('message from server: ', msg);
          this.messagesSubject.next(msg); // Emit the message for subscribers
        },
        error: (err) => console.log(err),
        complete: () => console.log('complete')
      });
    }
  }
  

  private getNewWebSocket(k1: string): WebSocketSubject<any> {
    return webSocket(`ws://127.0.0.1:8000/ws/notifications/${k1}/`);
  }

  public sendMessage(msg: any): void {
    debugger
    if (this.socket$) {
      this.socket$.next(msg);
    }
  }

  public onMessage(): Observable<any> {
    debugger
    if (this.socket$) {
      return this.socket$.asObservable();
    }
    
    return new Observable()
  }
  
  public close(): void {
    if (this.socket$) {
      this.socket$.complete();
      // this.socket$ = null;
    }
  }
}
