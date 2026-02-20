import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostModel} from '../../models/host.model';
import {API_ENDPOINTS} from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  private http = inject(HttpClient)
  getHostDetail() {
    return this.http.get<HostModel>(API_ENDPOINTS.HOST_DETAIL)
  }
}
