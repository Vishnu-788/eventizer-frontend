import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-host-navbar-component',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './host-navbar-component.html',
  styleUrl: './host-navbar-component.scss',
})
export class HostNavbarComponent {
  navbarService = inject(NavbarTitleService)
  title = this.navbarService.title
}
