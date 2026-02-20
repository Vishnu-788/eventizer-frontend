import { Component } from '@angular/core';
import {LogoutButton} from "../../shared/logout-button/logout-button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-host-sidebar-component',
  imports: [
    LogoutButton,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './host-sidebar-component.html',
  styleUrl: './host-sidebar-component.scss',
})
export class HostSidebarComponent {

}
