import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HostSidebarComponent} from '../../features/host/host-sidebar-component/host-sidebar-component';
import {HostNavbarComponent} from '../../features/host/host-navbar-component/host-navbar-component';


@Component({
  selector: 'app-host-layout',
  imports: [
    RouterOutlet,
    HostSidebarComponent,
    HostNavbarComponent
  ],
  templateUrl: './host-layout.html',
  styleUrl: './host-layout.scss',
})
export class HostLayout {

}
