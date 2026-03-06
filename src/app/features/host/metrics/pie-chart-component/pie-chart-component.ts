import {Component, computed, input} from '@angular/core';
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
  eventAnalytics = input.required<EventDetailAnalytics>()
  protected pieChartData = computed<ChartConfiguration<'pie'>['data']>(() => {
    const analytics = this.eventAnalytics().daily
    return {
      labels: analytics.map(data => data.date),
      datasets: [
        {
          data: analytics.map(data => data.revenue),
          label: "Revenue"
        }
      ]
    }
  })

  protected pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  }


}
