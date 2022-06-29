import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {

    private connected: Subject<boolean> = new Subject<boolean>();
    connected$: Observable<boolean> = this.connected.asObservable();

    connect():void{
        this.connected.next(true);
    }
}
