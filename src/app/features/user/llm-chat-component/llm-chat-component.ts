import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import { LlmService } from '../../../core/services/llm-services/llm-service';
import { LlmResponse, MessageModel } from '../../../core/models/llmResponse.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-llm-chat-component',
  imports: [ReactiveFormsModule],
  templateUrl: './llm-chat-component.html',
  styleUrl: './llm-chat-component.scss',
})
export class LlmChatComponent {
  titleService = inject(NavbarTitleService);
  llmService = inject(LlmService)

  protected messages = signal<MessageModel[]>([]);
  protected userQuery = new FormControl('');
  ngOnInit() {
    this.titleService.setTitle("Assistant")
  }

  handleSend() {
    const query = this.userQuery.value
    if(query === null) return;
    this.msgUpdateHelper(query, 'user');
    this.showThinking()
    this.llmService.get_llm_response(query).subscribe({
      next: (llmResponse: LlmResponse) => {
        this.removeThinking()
        this.msgUpdateHelper(llmResponse.llm_response, 'llm')
      },
      error: (error: HttpErrorResponse) => {
        this.removeThinking()
        console.error("Error getting response from the llm.", error)
      }
    })
  }

  showThinking() {
    this.messages.update((messages: MessageModel[]) => [...messages, {message: "Thinking...", author: 'llm'}])
  }

  removeThinking() {
    this.messages.update((messages: MessageModel[]) => messages.filter(msg => msg.message !== "Thinking..."))
  }

  msgUpdateHelper(msg: string, authr: 'llm' | 'user') {
    return this.messages.update((messages: MessageModel[]) => [...messages, {message: msg, author: authr}])
  }
}
