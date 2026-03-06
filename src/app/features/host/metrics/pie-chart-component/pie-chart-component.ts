import {Component, input} from '@angular/core';
import {Chart, ChartConfiguration, registerables} from 'chart.js';
import {EventDetailAnalytics} from '../../../../core/models/analytics.model';
import {BaseChartDirective} from 'ng2-charts';

Chart.register(...registerables)
@Component({
  selector: 'app-pie-chart-component',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './pie-chart-component.html',
  styleUrl: './pie-chart-component.scss',
})
export class PieChartComponent {
  eventAnalytics = input<EventDetailAnalytics>()
  protected pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Revenue Distribution'
      }
    ]
  }

  protected pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  }

  ngOnInit() {
    this.prepareChart()
  }

  prepareChart() {
    const labels = this.eventAnalytics()?.daily.map(data => data.date)
    const revenue = this.eventAnalytics()?.daily.map(data => data.revenue)
    console.log("LOGGING FROM PIE CHART: ")
    console.log("LABELS: " + labels)
    console.log("REVENUE: " + revenue)
    this.pieChartData = {
      labels: labels,
      datasets: [
        {
          data: revenue,
        }
      ]
    }
  }
}
