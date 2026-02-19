export interface CityEvent {
  id: number;
  e_title: string;
  e_start_time: string;   // backend sends time string → keep string
  e_category: string;
  price: number;
  e_venue: string;
}


interface Host {
  company_name: string;
  company_contact_no: number;
  company_contact_email: string;
}

export interface EventDetail {
  id: number;
  host: Host;
  e_title: string;
  e_description: string;
  e_venue: string;
  e_date: string;        // ISO date string
  e_start_time: string;  // HH:mm:ss
  e_end_time: string;
  e_category: string;
  total_seats: number;
  price: number;
}

export interface EventPayload {
  e_title: string;
  e_description: string;
  e_venue: string;
  e_date: string;        // ISO date string
  e_start_time: string;  // HH:mm:ss
  e_end_time: string;
  e_category: string;
  total_seats: number;
  price: number;
}

