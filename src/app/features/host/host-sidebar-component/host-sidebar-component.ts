import { Component } from '@angular/core';
import {LogoutButton} from "../../shared/logout-button/logout-button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {DateIcon} from '../../shared/icons/date-icon/date-icon';
import {AnalyticsIcon} from '../../shared/icons/analytics-icon/analytics-icon';
import {BookingIcon} from '../../shared/icons/booking-icon/booking-icon';
import {ProfileIcon} from '../../shared/icons/profile-icon/profile-icon';

@Component({
  selector: 'app-host-sidebar-component',
  imports: [
    LogoutButton,
    RouterLink,
    RouterLinkActive,
    DateIcon,
    AnalyticsIcon,
    BookingIcon,
    ProfileIcon
  ],
  templateUrl: './host-sidebar-component.html',
  styleUrl: './host-sidebar-component.scss',
})
export class HostSidebarComponent {

}
