import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CityEvent, EventDetail, EventPayload} from '../../models/event.model';
import {API_ENDPOINTS} from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private http = inject(HttpClient)
  getEventDetail(eventId: number){
    return this.http.get<EventDetail>(`${API_ENDPOINTS.HOST_EVENT_DETAIL}${eventId}`);
  }

  getEvents(){
    return this.http.get<CityEvent[]>(API_ENDPOINTS.HOST_EVENT_LIST)
  }

  createEvent(payload: EventPayload) {
    return this.http.post(API_ENDPOINTS.EVENT_CREATE, payload)
  }
}
