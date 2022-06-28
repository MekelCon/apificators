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
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "dashboard" },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: "report-fishing" }
        ];
    }

}
