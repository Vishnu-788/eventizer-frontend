import {Component, inject, signal} from '@angular/core';
import {HostService} from './host-service';
import {ActivatedRoute } from '@angular/router';
// import {HostDetail} from '../../../core/models/host.model';

@Component({
  selector: 'app-verify-host-component',
  imports: [],
  templateUrl: './verify-host-component.html',
  styleUrl: './verify-host-component.scss',
})
export class VerifyHostComponent {
  private hostService = inject(HostService);
  private activatedRoute = inject(ActivatedRoute)
  // host = signal<HostDetail | null>(null)
  showVerificationForm = signal(false)
  errorMessage = signal<string | null>(null)
  ngOnInit() {
     // const username = this.activatedRoute.snapshot.paramMap.get('username')
    this.loadHost()
  }

  private loadHost() {
    this.hostService.getHostFullDetails()
    .subscribe({
      next: host => {
        // this.host.set(host);
       },
      error: err => {
        if(err.code === "verification_not_started") {
          this.showVerificationForm.set(true)
        } else {
          this.errorMessage.set(err.detail)
        }
      }
    })
  }
}
