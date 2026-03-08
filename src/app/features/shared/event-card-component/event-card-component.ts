import {Component, inject, input} from '@angular/core';
import {CityEvent} from '../../../core/models/event.model';
import {Router} from '@angular/router';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {DateIcon} from '../icons/date-icon/date-icon';
import {TimeIcon} from '../icons/time-icon/time-icon';
import {LocationIcon} from '../icons/location-icon/location-icon';


@Component({
  selector: 'app-event-card-component',
  imports: [
    DatePipe,
    NgOptimizedImage,
    DateIcon,
    TimeIcon,
    LocationIcon

  ],
  templateUrl: './event-card-component.html',
  styleUrl: './event-card-component.scss',
})

export class EventCardComponent {
  private router = inject(Router)
  componentNavigationUrl = input<string>()
  event = input.required<CityEvent>()
  handleClick() {
    const id = this.event().id
    this.router.navigate([this.componentNavigationUrl(), id])
  }
}
