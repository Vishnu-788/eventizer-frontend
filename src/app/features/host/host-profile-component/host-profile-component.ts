import {Component, inject, signal} from '@angular/core';
import {HostService} from '../../../core/services/host/host-service';
import {HostModel} from '../../../core/models/host.model';
import {RouterLink} from '@angular/router';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-host-profile-component',
  imports: [
    RouterLink
  ],
  templateUrl: './host-profile-component.html',
  styleUrl: './host-profile-component.scss',
})
export class HostProfileComponent {
  private navbarService = inject(NavbarTitleService)
  private hostService = inject(HostService)
  host = signal<HostModel | null>(null)
  ngOnInit() {
    this.navbarService.setTitle("Profile")
    this.hostService.getHostDetail().subscribe(host => {this.host.set(host)})
  }
}
