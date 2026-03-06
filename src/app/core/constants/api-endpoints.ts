const BASE = 'http://localhost:8000/api/v1'

export const API_ENDPOINTS = {
  LOGIN: `${BASE}/auth/token/`,
  SIGNUP: `${BASE}/auth/register/`,
  REFRESH_TOKEN: `${BASE}/auth/token/refresh/`,
  LOGOUT: `${BASE}/auth/logout/`,

  // User routes
  GET_ALL_EVENTS: `${BASE}/events/`,
  GET_EVENT_DETAILS: `${BASE}/events/`, // Pass the event id via request params.
  GET_EVENT_SEATS: `${BASE}/events/seats/`, // Pass the event id via request params.
  CONFIRM_BOOKING: `${BASE}/bookings/`,
  PAYMENT_BOOKING: `${BASE}/payments/`, // Pass the booking id via request url and attach '/booking' at the end.
  PAYMENT_STATUS_POLLING: `${BASE}/payments/status/`, // Pass the PayPal order id in the url.
  GET_TICKETS: `${BASE}/tickets/`,
  MANAGE_USER_PROFILE: `${BASE}/auth/user/`,
  GET_USER_BOOKINGS: `${BASE}/bookings/user/list/`,

  // Host routes
  HOST_DETAIL: `${BASE}/hosts/me/`,
  HOST_CREATE : `${BASE}/hosts/create/`,
  HOST_NOT_VERIFIED: `${BASE}/hosts/me/not-verified/`,
  EVENT_CREATE: `${BASE}/events/host/create/`,
  HOST_EVENT_LIST: `${BASE}/events/host/list/`,
  HOST_EVENT_DETAIL: `${BASE}/events/host/detail/`,
  GET_HOST_EVENT_RELATED_BOOKINGS: `${BASE}/bookings/host/view-booking/`, // Pass the event ID.
  GET_EVENT_DETAIL_ANALYTICS: (event_id: number) => `${BASE}/analytics-metrics/event/${event_id}/detail/`,
  GET_HOST_EVENT_DAILY_ANALYTICS: (event_id: number) => `${BASE}/analytics-metrics/daily/${event_id}/event/`,
  GET_HOST_EVENT_TOTAL_ANALYTICS: (event_id: number) => `${BASE}/analytics-metrics/total/${event_id}/event/`,

  // Admin routes
  GET_HOSTS: `${BASE}/hosts/admin/`,
  UPDATE_HOST_STATUS: (hostId: number) => `${BASE}/hosts/admin/${hostId}/update-status/`,
}
