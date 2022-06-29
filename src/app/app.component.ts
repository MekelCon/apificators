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
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: "dashboard" },
            { label: 'Report fishing', icon: 'pi pi-fw pi-calendar', routerLink: "report-fishing" }
        ];
    }

}
