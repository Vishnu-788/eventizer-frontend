import {Component, inject, signal} from '@angular/core';
import {ManageHostService} from '../../../core/services/admin-services/manage-host-service';
import {HostModel} from '../../../core/models/host.model';

@Component({
  selector: 'app-view-hosts-requests',
  imports: [],
  templateUrl: './view-hosts-requests.html',
  styleUrl: './view-hosts-requests.scss',
})
export class ViewHostsRequests {
  private hostService = inject(ManageHostService)
  protected hostRequests = signal<HostModel[]>([])

  ngOnInit() {
    this.loadRequests()
  }

  loadRequests() {
    this.hostService.getHostRequests().subscribe({
      next: (hosts) => {
        this.hostRequests.set(hosts)
      },
      error: (error) => {
        console.log('Error getting host requests' + error);
      }
    })
  }

  handleClick(hostId: number, status: string) {
    this.hostService.updateHostStatus(hostId, status).subscribe({
      next: () => {
        this.hostRequests.update(hosts =>
          hosts.filter(host => host.user.id !== hostId)
        );
      },
      error: error => {
        console.log("Error occurred at updating host status by admin " + error)
      }
    })

  }
}
