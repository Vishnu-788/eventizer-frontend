import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {TicketResponse} from '../../../core/models/ticket.model';
import {TicketService} from '../../../core/services/ticket-services/ticket-service';

@Component({
  selector: 'app-tickets-component',
  imports: [],
  templateUrl: './tickets-component.html',
  styleUrl: './tickets-component.scss',
})
export class TicketsComponent {
  private titleService = inject(NavbarTitleService)
  private ticketService = inject(TicketService)
  tickets = signal<TicketResponse[] | null>(null)
  ngOnInit() {
    this.titleService.setTitle('Tickets');
    this.getTickets()
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets.set(tickets);
    })
  }
}
