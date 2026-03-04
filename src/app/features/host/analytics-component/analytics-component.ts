import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {EventService} from '../../../core/services/event-services/event-service';
import {CityEvent} from '../../../core/models/event.model';

@Component({
  selector: 'app-analytics-component',
  imports: [],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.scss',
})

export class AnalyticsComponent {
  private navbarService = inject(NavbarTitleService)
  private eventService = inject(EventService)

  protected isOpen = signal(false)
  protected selectedEvent = signal<CityEvent | undefined>(undefined)
  protected events = signal<CityEvent[]>([])
  // protected eventAnalytics = signal<>

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

  toggleDropdown() { this.isOpen.set(!this.isOpen()); }

  select(event: CityEvent) {
    this.selectedEvent.set(event);
  }
}
