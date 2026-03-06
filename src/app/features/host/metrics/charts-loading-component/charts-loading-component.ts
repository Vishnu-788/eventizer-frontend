import {Component, input} from '@angular/core';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-charts-loading-component',
  imports: [],
  templateUrl: './charts-loading-component.html',
  styleUrl: './charts-loading-component.scss',
})
export class ChartsLoadingComponent {
  chartType = input<ChartType>('bar');

  bars = Array(7);
  points = Array(7);
}
