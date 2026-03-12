import {Component, inject, signal} from '@angular/core';
import {EventService} from '../../../core/services/event-services/event-service';
import {EventDetail} from '../../../core/models/event.model';
import {ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-host-event-detail-component',
  imports: [DatePipe],
  templateUrl: './host-event-detail-component.html',
  styleUrl: './host-event-detail-component.scss',
})
export class HostEventDetailComponent {
  private eventService = inject(EventService);
  private activatedroute = inject(ActivatedRoute)
  event = signal<EventDetail | null>(null)
  ngOnInit() {
    const eventId = this.activatedroute.snapshot.paramMap.get('id')
    this.loadEvent(Number(eventId))
  }
  loadEvent(eventId: number | null) {
    if(!eventId) return
    this.eventService.getEventDetail(eventId).subscribe({
      next: event => {
        this.event.set(event)
      },
      error: event => {
        console.log("Error at Event Detail Host component")
      }
    })
  }
}
