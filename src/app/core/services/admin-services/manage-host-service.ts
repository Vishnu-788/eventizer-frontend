import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {HostModel} from '../../models/host.model';

@Injectable({
  providedIn: 'root',
})
export class ManageHostService {
  private http = inject(HttpClient)
  getAllHosts(){
    return this.http.get<HostModel[]>(API_ENDPOINTS.GET_HOSTS)
  }

  getHostRequests() {
    return this.http.get<HostModel[]>(API_ENDPOINTS.GET_HOSTS, {
      params: {status: 'pending'}
    })
  }
}
