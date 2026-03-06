import {Component, computed, input} from '@angular/core';
import {Chart, ChartConfiguration, registerables} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {EventDetailAnalytics} from '../../../../core/models/analytics.model';

Chart.register(...registerables)
@Component({
  selector: 'app-line-chart-component',
  imports: [BaseChartDirective],
  templateUrl: './line-chart-component.html',
  styleUrl: './line-chart-component.scss',
})
export class LineChartComponent {
  eventAnalytics = input.required<EventDetailAnalytics>()

  protected lineChartData = computed<ChartConfiguration<'line'>['data']>(()=> {
    const analytics = this.eventAnalytics().daily
    return {
      labels: analytics.map(data => data.date),
      datasets: [
        {
          data: analytics.map(data => data.revenue),
          label: 'Revenue',
          tension: 0.3
        }
      ]
    }
  })

  protected lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  }
}
