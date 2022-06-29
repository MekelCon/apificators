import { Component, OnInit } from '@angular/core';


import Donnut1 from './../../data/donnut1.json';


interface DONNUT_DATA {
  label: string[];
  data: number[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  chartOptions: any;

  donnut1_data: DONNUT_DATA = Donnut1;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: this.donnut1_data.label,
      datasets: [
        {
          data: this.donnut1_data.data,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
    this.getDarkTheme()
  }
  
  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    }
  }
}