import {Component, input} from '@angular/core';
import {Chart, ChartConfiguration, registerables} from 'chart.js';
import {EventDetailAnalytics} from '../../../../core/models/analytics.model';
import {BaseChartDirective} from 'ng2-charts';

Chart.register(...registerables)
@Component({
  selector: 'app-bar-chart-component',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './bar-chart-component.html',
  styleUrl: './bar-chart-component.scss',
})

export class BarChartComponent {
  eventAnalytics = input<EventDetailAnalytics>()
  protected barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Seats Sold',
      }
    ]
  }

  ngOnInit() {
    this.prepareChart()
  }

  protected barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y"
  }

  prepareChart() {
    const labels = this.api_data.map(data => data.date)
    const seat_sold = this.api_data.map(data => data.seats_sold)

    this.barChartData = {
      labels: labels,
      datasets: [
        {
          data: seat_sold,
          label: 'Seats Sold',
        }
      ]
    }
  }

  api_data = [
    {
      id: 1,
      date: "2026-02-20",
      seats_sold: 4,
      revenue: "24.00",
      event: 1
    },
    {
      id: 2,
      date: "2026-02-21",
      seats_sold: 6,
      revenue: "36.00",
      event: 1
    },
    {
      id: 3,
      date: "2026-02-22",
      seats_sold: 8,
      revenue: "48.00",
      event: 1
    },
    {
      id: 4,
      date: "2026-02-23",
      seats_sold: 5,
      revenue: "30.00",
      event: 1
    },
    {
      id: 5,
      date: "2026-02-24",
      seats_sold: 10,
      revenue: "60.00",
      event: 1
    },
    {
      id: 6,
      date: "2026-02-25",
      seats_sold: 7,
      revenue: "42.00",
      event: 1
    },
    {
      id: 7,
      date: "2026-02-26",
      seats_sold: 9,
      revenue: "54.00",
      event: 1
    },
    {
      id: 8,
      date: "2026-02-27",
      seats_sold: 6,
      revenue: "36.00",
      event: 1
    }
  ];
}
