import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/data/application';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public applications: Application[] = Application.myApplications;

  ngOnInit(): void {
  }

}
