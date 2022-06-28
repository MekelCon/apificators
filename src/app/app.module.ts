import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ReportFishingComponent } from './page/report-fishing/report-fishing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportFishingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
