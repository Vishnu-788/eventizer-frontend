import { Component } from '@angular/core';
import {LogoutButton} from '../../shared/logout-button/logout-button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-admin-sidebar-component',
  imports: [
    LogoutButton,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './admin-sidebar-component.html',
  styleUrl: './admin-sidebar-component.scss',
})
export class AdminSidebarComponent {

}
