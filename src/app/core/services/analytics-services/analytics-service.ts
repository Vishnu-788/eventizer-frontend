import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {EventDailyAnalytics, EventTotalAnalytics} from '../../models/analytics.model';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private http = inject(HttpClient)

  getEventDailyAnalytics(eventId: number) {
    return this.http.get<EventDailyAnalytics[]>(API_ENDPOINTS.GET_HOST_EVENT_DAILY_ANALYTICS(eventId))
  }

  getEventTotalAnalytics(eventId: number) {
    return this.http.get<EventTotalAnalytics>(API_ENDPOINTS.GET_HOST_EVENT_TOTAL_ANALYTICS(eventId))
  }
}
