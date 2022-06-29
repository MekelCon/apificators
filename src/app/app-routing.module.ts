import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataExplorerComponent } from './page/data-explorer/data-explorer.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'data-explorer', component: DataExplorerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
