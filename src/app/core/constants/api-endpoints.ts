const BASE = 'http://localhost:8000/api/v1'

export const API_ENDPOINTS = {
  LOGIN: `${BASE}/auth/token/`,
  SIGNUP: `${BASE}/auth/register/`,
  REFRESH_TOKEN: `${BASE}/auth/token/refresh/`,
  LOGOUT: `${BASE}/auth/logout/`,

  GET_ALL_EVENTS: `${BASE}/events/`,
  GET_EVENT_DETAILS: `${BASE}/events/`, // Pass the event id via request params.
  GET_EVENT_SEATS: `${BASE}/events/seats/`, // Pass the event id via request params.
  CONFIRM_BOOKING: `${BASE}/bookings/`,
  PAYMENT_BOOKING: `${BASE}/payments/`, // Pass the booking id via request url and attach '/booking' at the end.
}
