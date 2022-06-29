import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


import Donnut1 from './../../data/donnut1.json';
import Line1 from './../../data/line1.json';

interface NameCode {
  name: string,
  code: string
}
interface BY_DATA {
  label: string[];
  data: number[];
}
interface DONNUT_DATA {
  byDomain: BY_DATA,
  bySize: BY_DATA,
}
interface DATASET {
  label: string,
  data: number[]
}
interface LINE_DATA {
  labels: string[],
  datasets: DATASET[]
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  from: Date;
  to: Date;

  donnut1_graph_data: any;
  donnut1_chart_options: any;
  donnut1_data: DONNUT_DATA = Donnut1;
  donnut1_by: NameCode[];

  line1_graph_data: any;
  line1_chart_options: any;
  line1_data: LINE_DATA = Line1;


  selectedBy: NameCode;

  constructor() {
    this.to = new Date()
    this.from = new Date(this.to.getFullYear(), this.to.getMonth() - 1, 0);
    this.from.setDate(Math.min(this.to.getDate(), this.from.getDate()));
    this.donnut1_by = [
      { name: 'Domain', code: 'byDomain' },
      { name: 'Size', code: 'bySize' },
      { name: 'Country', code: 'byCountry' }
    ];
    this.selectedBy = this.donnut1_by[0]
    this.donnut1_chart_options = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };
    this.line1_chart_options = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }

  ngOnInit() {
    this.refreshDonnut()
  }

  onChangeBy(event: any) {
    this.refreshDonnut()
  }

  private refreshDonnut() {
    this.donnut1_graph_data = {
      labels: this.donnut1_data[this.selectedBy.code as keyof DONNUT_DATA].label,
      datasets: [
        {
          data: this.donnut1_data[this.selectedBy.code as keyof DONNUT_DATA].data,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#42C689"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#42C689"
          ]
        }
      ]
    };
    this.line1_graph_data = {
      labels: this.line1_data.labels,
       datasets: [
        {
          label: this.line1_data.datasets[0].label,
          data: this.line1_data.datasets[0].data,
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
        {
          label: this.line1_data.datasets[1].label,
          data: this.line1_data.datasets[1].data,
          fill: false,
          borderColor: '#FFA726',
          tension: .4
        }
      ]
    };
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