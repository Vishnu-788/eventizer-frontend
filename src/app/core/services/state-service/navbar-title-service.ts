import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarTitleService {
  private _title = signal<string>('Dashboard')
  title = this._title.asReadonly();

  setTitle(title: string) {
    this._title.set(title)
  }
}
