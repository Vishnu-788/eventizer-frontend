import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {EventService} from '../../../core/services/event-services/event-service';
import {CityEvent} from '../../../core/models/event.model';
import {AnalyticsService} from '../../../core/services/analytics-services/analytics-service';
import {EventDetailAnalytics} from '../../../core/models/analytics.model';
import {LineChartComponent} from '../metrics/line-chart-component/line-chart-component';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {BarChartComponent} from '../metrics/bar-chart-component/bar-chart-component';
import {PieChartComponent} from '../metrics/pie-chart-component/pie-chart-component';


@Component({
  selector: 'app-analytics-component',
  imports: [
    LineChartComponent,
    CurrencyPipe,
    DatePipe,
    BarChartComponent,
    PieChartComponent
  ],
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


  ngOnInit() {
    this.navbarService.setTitle('Analytics')
    this.loadEvents()
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

  toggleDropdown() { this.isOpen.set(!this.isOpen()); }

  select(event: CityEvent) {
    this.selectedEvent.set(event);
    this.loadEventAnalytics(event.id)
  }
}
