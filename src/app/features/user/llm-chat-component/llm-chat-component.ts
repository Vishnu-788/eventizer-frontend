import {Component, inject} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-llm-chat-component',
  imports: [],
  templateUrl: './llm-chat-component.html',
  styleUrl: './llm-chat-component.scss',
})
export class LlmChatComponent {
  titleService = inject(NavbarTitleService);
  ngOnInit() {
    this.titleService.setTitle("Assistant")
  }
}
