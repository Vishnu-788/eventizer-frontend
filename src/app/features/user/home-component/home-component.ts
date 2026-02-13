import { Component } from '@angular/core';
import {LlmChatComponent} from '../llm-chat-component/llm-chat-component';

@Component({
  selector: 'app-home-component',
  imports: [
    LlmChatComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
