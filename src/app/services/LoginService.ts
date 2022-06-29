import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {

    private login : string = ""
    public isB2BValue: boolean = false;

    private connected: Subject<string> = new Subject<string>();
    connected$: Observable<string> = this.connected.asObservable();

    private isB2B: Subject<boolean> = new Subject<boolean>();
    isB2B$: Observable<boolean> = this.isB2B.asObservable();


    connect(login : string):void{
        this.login = login;
        if(this.login==="B2B"){
            this.isB2BValue = true;
        }
        console.log("LoginService.login : " + login);
        console.log("LoginService.isB2B : " + this.isB2BValue);
        this.connected.next(this.login);
        this.isB2B.next(this.isB2BValue)
    }
}
