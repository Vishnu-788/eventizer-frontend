export interface TicketResponse {
  id: number;
  booking: number;
  seats: number[];   // array of seat IDs (currently)
  username: string;
  event_starts: string;  // "HH:mm:ss"
  event_ends: string;    // "HH:mm:ss"
  issued_at: string;     // ISO datetime
  expires_at: string;    // ISO datetime
}
