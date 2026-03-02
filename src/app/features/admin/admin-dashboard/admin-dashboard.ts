import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {ManageHostService} from '../../../core/services/admin-services/manage-host-service';
import {HostModel} from '../../../core/models/host.model';
import {DatePipe, NgClass, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    DatePipe,
    TitleCasePipe,
    NgClass
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  private titleService = inject(NavbarTitleService)
  private hostService = inject(ManageHostService)

  hosts = signal<HostModel[]>([])

  ngOnInit() {
    this.titleService.setTitle('Admin Dashboard');
    this.loadHosts()
  }

  loadHosts() {
    this.hostService.getAllHosts().subscribe(hosts => {
      this.hosts.set(hosts)
    })
  }
}
