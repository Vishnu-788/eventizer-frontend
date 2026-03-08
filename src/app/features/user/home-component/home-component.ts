import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EventCardComponent} from '../../shared/event-card-component/event-card-component';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {EventService} from '../../../core/services/event-services/event-service';

@Component({
  selector: 'app-home-component',
  imports: [
    // LlmChatComponent,
    EventCardComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})

export class HomeComponent {
  private homeService = inject(EventService)
  private titleService = inject(NavbarTitleService)
  ngOnInit() {
    this.titleService.setTitle('Explore Events');
  }
  events = toSignal(this.homeService.getUserAllEvents(), { initialValue: [] });
}
