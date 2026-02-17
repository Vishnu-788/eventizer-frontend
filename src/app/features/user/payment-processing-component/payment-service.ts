import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, interval, of, switchMap, takeWhile} from 'rxjs';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private http = inject(HttpClient);
  private readonly MAX_DURATION = 60000;
  private readonly POLL_INTERVAL = 3000;

  startPolling(orderId: string) {
    const maxTries = this.MAX_DURATION / this.POLL_INTERVAL;
    let tries = 0;
    return interval(this.POLL_INTERVAL).pipe(
      switchMap(() => {
        tries++;
        return this.http.get(`${API_ENDPOINTS.PAYMENT_STATUS_POLLING}${orderId}/`);
      }),

      takeWhile((response: any) => {
        const finished = response.status === 'completed' || response.status === 'failed';
        return !finished && tries < maxTries;
      }, true),

      catchError(err => {
        console.error('Polling error', err);
        return of({ status: 'ERROR' });
      })
    );
  }
}
