import {Component, inject} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-analytics-component',
  imports: [],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.scss',
})
export class AnalyticsComponent {
  navbarService = inject(NavbarTitleService)
  ngOnInit() { this.navbarService.setTitle('Analytics') }
}
