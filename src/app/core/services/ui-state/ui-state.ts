import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiState {
  isBlocking = signal(false)
  block() { this.isBlocking.set(true)}
  unblock() { this.isBlocking.set(false) }
}
