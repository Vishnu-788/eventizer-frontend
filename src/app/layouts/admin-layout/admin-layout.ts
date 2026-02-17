import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AdminSidebarComponent} from '../../features/admin/admin-sidebar-component/admin-sidebar-component';
import {AdminNavbarComponent} from '../../features/admin/admin-navbar-component/admin-navbar-component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    AdminSidebarComponent,
    AdminNavbarComponent
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
