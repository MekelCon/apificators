import { Component, OnInit } from '@angular/core';


import Donnut1 from './../../data/donnut1.json';


interface BY_DATA {
  label: string[];
  data: number[];
}
interface DONNUT_DATA {
  byDomain: BY_DATA,
  bySize: BY_DATA,
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
      labels: this.donnut1_data.byDomain.label,
      datasets: [
        {
          data: this.donnut1_data.byDomain.data,
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