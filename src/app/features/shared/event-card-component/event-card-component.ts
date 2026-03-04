import {Component, inject, input} from '@angular/core';
import {CityEvent} from '../../../core/models/event.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-event-card-component',
  imports: [

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

  protected convertToIsoDateTime(e_date: string, time: string) {
    return `${e_date}T${time}`
  }
}
