import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {TicketResponse} from '../../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private http = inject(HttpClient)

  getTickets() {
    return this.http.get<TicketResponse[]>(API_ENDPOINTS.GET_TICKETS)
  }
}
