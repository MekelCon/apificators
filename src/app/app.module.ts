import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DataExplorerComponent } from './page/data-explorer/data-explorer.component';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataViewModule } from "primeng/dataview";
import { BadgeModule } from 'primeng/badge';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SpamBeeComponent } from './page/spam-bee/spam-bee.component';
import { LoginService } from './services/LoginService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DataExplorerComponent,
    DashboardComponent,
    SpamBeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BadgeModule,
    CardModule,
    ChartModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    TabMenuModule,
    ImageModule,
    ButtonModule,
    PanelModule,
    FieldsetModule,
    RadioButtonModule,
    DataViewModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
