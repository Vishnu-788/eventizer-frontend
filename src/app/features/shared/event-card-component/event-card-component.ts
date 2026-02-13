import { Component, input } from '@angular/core';
import {CityEvent} from '../../../core/models/event.model';

@Component({
  selector: 'app-event-card-component',
  imports: [],
  templateUrl: './event-card-component.html',
  styleUrl: './event-card-component.scss',
})
export class EventCardComponent {
  event = input.required<CityEvent>()
}
