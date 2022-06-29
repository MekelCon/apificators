import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


import Donnut1 from './../../data/donnut1.json';
import Line1 from './../../data/line1.json';
import Radar1 from './../../data/radar1.json';

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
interface RADAR_DATA {
  labels: string[],
  data: number[]
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

  radar1_graph_data: any;
  radar1_chart_options: any;
  radar1_data: RADAR_DATA = Radar1;

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
    this.radar1_chart_options = {
      scale: {
        ticks: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
          angleLines: {
            color: 'rgba(255,255,255,0.2)'
          },
          suggestedMin: 0
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
            "#42C689",
            "#C642C6",
            "#52E9EA"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#42C689",
            "#C642C6",
            "#52E9EA"
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
    this.radar1_graph_data = {
      labels: this.radar1_data.labels,
      datasets: [
        {
          label: 'Count by my critria',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: this.radar1_data.data
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