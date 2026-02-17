import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UiBlockingOverlay} from './features/shared/ui-blocking-overlay/ui-blocking-overlay';
import {UiState} from './core/services/ui-state/ui-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiBlockingOverlay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  uiStateService = inject(UiState)
  protected readonly title = signal('eventizer');

}
