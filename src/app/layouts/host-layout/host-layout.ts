import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoutButton} from '../../features/shared/logout-button/logout-button';

@Component({
  selector: 'app-host-layout',
  imports: [
    RouterOutlet,
    LogoutButton
  ],
  templateUrl: './host-layout.html',
  styleUrl: './host-layout.scss',
})
export class HostLayout {

}
