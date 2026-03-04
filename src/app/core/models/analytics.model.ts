export interface EventDailyAnalytics {
  id: number;
  date: string;
  seats_sold: number;
  revenue: number;
  event: number
}

export interface EventTotalAnalytics {
  id: number;
  total_seats_sold: number;
  total_revenue: number;
  last_booking_at: string;
}

export interface EventDetailAnalytics {
  daily: EventDailyAnalytics[];
  total: EventTotalAnalytics;
}
