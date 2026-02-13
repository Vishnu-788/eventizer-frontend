import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoutButton} from '../../features/shared/logout-button/logout-button';

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    LogoutButton
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
