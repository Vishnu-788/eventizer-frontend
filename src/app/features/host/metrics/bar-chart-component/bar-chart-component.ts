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
    const labels = this.eventAnalytics()?.daily.map(data => data.date)
    const seat_sold = this.eventAnalytics()?.daily.map(data => data.seats_sold)
    console.log("LOGGING FROM BAR CHART: ")
    console.log("LABELS: " + labels)
    console.log("SEATS: " + seat_sold)

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
}
