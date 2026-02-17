import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';
import {HostDetail} from '../../../core/models/host.model';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  private http = inject(HttpClient)
  getHostFullDetails(username: string) {
    return this.http.get<HostDetail>(`${API_ENDPOINTS.HOST_DETAIL}${username}/`)
  }
}
