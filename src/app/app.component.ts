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
    public login:string='';
    public isB2B: boolean=false

    constructor(private router: Router, public loginService: LoginService) { }

    ngOnInit() {
        this.items = [
            { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: "profile" },
            { label: 'SPAMBEE', icon: 'pi pi-fw pi-external-link', routerLink: "spam-bee" }
        ];
        this.loginService.connected$.subscribe(login => {this.login = login; this.updateMenu()})
        this.loginService.isB2B$.subscribe(isB2B => {this.isB2B = isB2B; this.updateMenu()})
    }

    updateMenu(){
        console.log("updateMenu");
        let items : MenuItem[] = []

        if(this.login!==''){
            items.push({ label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: "profile" });

            items.push({ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: "dashboard" });
            if(this.isB2B){
                items.push({ label: 'Data Explorer', icon: 'pi pi-fw pi-search', routerLink: "data-explorer" });   
            } 
        }

        items.push({ label: 'SPAMBEE', icon: 'pi pi-fw pi-external-link', routerLink: "spam-bee" });
        
        this.items = items;
        console.log(this.items)
    }

    onResize(event: any) {
        if (window.screen.width < 700) { // Just for the demo when going through desktop to mobile size
            this.desktop = false;
        }else{
            this.desktop = true;
        }
    }

}
