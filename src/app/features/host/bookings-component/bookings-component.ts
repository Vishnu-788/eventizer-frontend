import {Component, inject} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-bookings-component',
  imports: [],
  templateUrl: './bookings-component.html',
  styleUrl: './bookings-component.scss',
})
export class BookingsComponent {
  navbarService = inject(NavbarTitleService)
  ngOnInit() { this.navbarService.setTitle('Bookings')}
}
