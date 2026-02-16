import { Component } from '@angular/core';
import {LogoutButton} from '../../shared/logout-button/logout-button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [LogoutButton, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {

}
