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
  PAYMENT_STATUS_POLLING: `${BASE}/payments/status/`, // Pass the PayPal order id in the url.
  GET_TICKETS: `${BASE}/tickets/`,
  MANAGE_USER_PROFILE: `${BASE}/auth/user/`,
  GET_USER_BOOKINGS: `${BASE}/bookings/user/list/`,
  HOST_DETAIL: `${BASE}/hosts/me/`,
  HOST_CREATE : `${BASE}/hosts/create/`,
  HOST_NOT_VERIFIED: `${BASE}/hosts/me/not-verified/`,
  EVENT_CREATE: `${BASE}/events/host/create/`,
  HOST_EVENT_LIST: `${BASE}/events/host/list/`,
  HOST_EVENT_DETAIL: `${BASE}/events/host/detail/`,

}
