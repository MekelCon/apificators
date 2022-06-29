import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'apificators';
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: "login" },
            { label: 'Profile', icon: 'pi pi-fw pi-home', routerLink: "profile" },
            { label: 'Data Explorer', icon: 'pi pi-fw pi-home', routerLink: "data-explorer" }
        ];
    }

}
