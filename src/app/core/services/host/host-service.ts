import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostModel, HostProfilePayload} from '../../models/host.model';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  private http = inject(HttpClient)
  getHostDetail(): Observable<HostModel>{
    return this.http.get<HostModel>(API_ENDPOINTS.HOST_DETAIL)
  }

  updateHostProfile(hostPayload: HostProfilePayload): Observable<HostModel> {
    return this.http.patch<HostModel>(API_ENDPOINTS.HOST_DETAIL, hostPayload)
  }
}
