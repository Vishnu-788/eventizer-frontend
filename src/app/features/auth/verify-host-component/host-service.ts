import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';
import {HostCompanyPayload, HostModel} from '../../../core/models/host.model';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  private http = inject(HttpClient)
  getHostFullDetails() {
    return this.http.get<HostModel>(API_ENDPOINTS.HOST_NOT_VERIFIED)
  }

  completeHostVerification(hostPayload: HostCompanyPayload) {
    return this.http.post(API_ENDPOINTS.HOST_CREATE, hostPayload)
  }
}
