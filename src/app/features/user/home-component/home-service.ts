import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';
import {CityEvent} from '../../../core/models/event.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient)

  getAllEvents(): Observable<CityEvent[]> {
    return this.http.get<CityEvent[]>(API_ENDPOINTS.GET_ALL_EVENTS)
  }
}
