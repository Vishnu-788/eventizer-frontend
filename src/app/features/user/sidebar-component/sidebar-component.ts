import { Component } from '@angular/core';
import {LogoutButton} from '../../shared/logout-button/logout-button';

@Component({
  selector: 'app-sidebar-component',
  imports: [LogoutButton],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {

}
