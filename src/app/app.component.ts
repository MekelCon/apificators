import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from './services/LoginService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'apificators';
    items: MenuItem[] = [];
    public desktop=true
    public connected:boolean=false

    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit() {
        this.items = [
            { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: "profile" },
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: "dashboard" },
            { label: 'Data Explorer', icon: 'pi pi-fw pi-search', routerLink: "data-explorer" },
            { label: 'SPAMBEE', icon: 'pi pi-fw pi-external-link', routerLink: "spam-bee" }
        ];
        this.loginService.connected$.subscribe(isCOnnected => this.connected = true)
    }

    onResize(event: any) {
        if (window.screen.width < 700) { // Just for the demo when going through desktop to mobile size
            this.desktop = false;
        }else{
            this.desktop = true;
        }
    }

}
