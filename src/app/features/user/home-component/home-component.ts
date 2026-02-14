import {Component, inject} from '@angular/core';
// import {LlmChatComponent} from '../llm-chat-component/llm-chat-component';
import {HomeService} from './home-service';
import {toSignal} from '@angular/core/rxjs-interop';
import {EventCardComponent} from '../../shared/event-card-component/event-card-component';



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
  private homeService = inject(HomeService)

  events = toSignal(this.homeService.getAllEvents(), { initialValue: [] });
}
