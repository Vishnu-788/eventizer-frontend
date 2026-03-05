import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {EventService} from '../../../core/services/event-services/event-service';
import {CityEvent} from '../../../core/models/event.model';
import {AnalyticsService} from '../../../core/services/analytics-services/analytics-service';
import {EventDetailAnalytics} from '../../../core/models/analytics.model';
import {Chart, ChartConfiguration, registerables} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables)

@Component({
  selector: 'app-analytics-component',
  imports: [BaseChartDirective],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.scss',
})

export class AnalyticsComponent {
  private navbarService = inject(NavbarTitleService)
  private eventService = inject(EventService)
  private analyticsService = inject(AnalyticsService)

  protected isOpen = signal(false)
  protected selectedEvent = signal<CityEvent | undefined>(undefined)
  protected events = signal<CityEvent[]>([])
  protected eventAnalytics = signal<EventDetailAnalytics | undefined>(undefined)
  protected lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data:[],
        label: 'Revenue',
        tension: 0.3
      }
    ]
  }
  protected lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  }

  ngOnInit() {
    this.navbarService.setTitle('Analytics')
    this.loadEvents()
    this.prepareChart()
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((events) => {
      const firstEvent = events[0]
      this.selectedEvent.set(firstEvent)
      this.select(firstEvent)
      this.events.set(events);
    })
  }

  loadEventAnalytics(eventId: number){
    this.analyticsService.getEventDetailAnalytics(eventId).subscribe({
      next: eventAnalytics => {
        this.eventAnalytics.set(eventAnalytics)
        console.log(`EventAnalytics: ${eventAnalytics}`)
      }, error: error => {
        console.log("Event Analytics Error: ", error);
      }
    })
  }

  prepareChart() {
    const labels = this.api_data.map(data => data.date)
    const revenue = this.api_data.map(data => Number(data.revenue))
    const seats_sold = this.api_data.map(data => data.seats_sold)
    // const labels = this.eventAnalytics()?.daily.map(data => data.date)
    // const revenue = this.eventAnalytics()?.daily.map(data => data.revenue)
    if(revenue === undefined) {
      return
    }


    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: revenue,
          label: 'Revenue'
        },
      ]
    }
  }
  toggleDropdown() { this.isOpen.set(!this.isOpen()); }

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
  select(event: CityEvent) {
    this.selectedEvent.set(event);
    this.loadEventAnalytics(event.id)
  }
}
