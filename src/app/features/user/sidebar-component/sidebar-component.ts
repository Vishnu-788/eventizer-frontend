import { Component } from '@angular/core';
import {LogoutButton} from '../../shared/logout-button/logout-button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TimeIcon} from '../../shared/icons/time-icon/time-icon';
import {TicketsIcon} from '../../shared/icons/tickets-icon/tickets-icon';
import {BookingIcon} from '../../shared/icons/booking-icon/booking-icon';
import {DateIcon} from '../../shared/icons/date-icon/date-icon';
import {ProfileIcon} from '../../shared/icons/profile-icon/profile-icon';
import {AssistantIcon} from '../../shared/icons/assistant-icon/assistant-icon';

@Component({
  selector: 'app-sidebar-component',
  imports: [LogoutButton, RouterLink, RouterLinkActive, TicketsIcon, BookingIcon, DateIcon, ProfileIcon, AssistantIcon],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {

}
