import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ReportFishingComponent } from './page/report-fishing/report-fishing.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report-fishing', component: ReportFishingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
