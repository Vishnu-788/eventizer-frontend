import {Component, computed, input} from '@angular/core';
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
  eventAnalytics = input.required<EventDetailAnalytics>()

  protected barChartData = computed<ChartConfiguration<'bar'>['data']>(()=> {
    const analytics = this.eventAnalytics().daily
    return {
      labels: analytics.map(data => data.date),
      datasets: [
        {
          data: analytics.map(data => data.seats_sold),
          label: "Seats Sold"
        }
      ]
    }
  })
  protected barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y"
  }
}
