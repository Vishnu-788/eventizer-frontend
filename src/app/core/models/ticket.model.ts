export interface TicketResponse {
  id: number;
  booking: number;
  seats: number[];   // array of seat IDs (currently)
  username: string;
  event_name: string;
  event_starts: string;
  event_ends: string;
  issued_at: string;     // ISO datetime
  expires_at: string;    // ISO datetime
}
