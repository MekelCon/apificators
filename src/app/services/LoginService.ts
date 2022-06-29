import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {

    private connected: Subject<boolean> = new Subject<boolean>();
    connected$: Observable<boolean> = this.connected.asObservable();

    connect():void{
        //console.log("connected : " + this.connected)
        //this.connected=true;
        //console.log("connected : " + this.connected)
    }

    isConnected(): boolean {
        return true;
    }

}
