import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogoutButton} from '../../features/shared/logout-button/logout-button';
import {SidebarComponent} from '../../features/user/sidebar-component/sidebar-component';
import {NavbarComponent} from '../../features/user/navbar-component/navbar-component';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {

}
