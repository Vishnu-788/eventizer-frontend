import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {EventDetailService} from './event-detail-service';
import {EventDetail} from '../../../core/models/event.model';


@Component({
  selector: 'app-event-detail-component',
  imports: [
    RouterLink,
    // RouterLink
  ],
  templateUrl: './event-detail-component.html',
  styleUrl: './event-detail-component.scss',
})

export class EventDetailComponent {
  eventId: string | null = null;
  event = signal<EventDetail | null>(null);
  private activatedRoute = inject(ActivatedRoute)
  private eventDetailService = inject(EventDetailService)
  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getEvent()
  }

  getEvent(){
    return this.eventDetailService
      .getEventDetail(Number(this.eventId))
      .subscribe({
        next: event => {
          console.log("Got event", event);
          this.event.set(event);
        },
        error: err => {
          console.error("Logging error in Event detail")
        }
      })
  }
}
