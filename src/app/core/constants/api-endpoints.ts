const BASE = 'http://localhost:8000/api/v1'

export const API_ENDPOINTS = {
  LOGIN: `${BASE}/auth/token/`,
  SIGNUP: `${BASE}/auth/register/`,
  REFRESH_TOKEN: `${BASE}/auth/token/refresh/`,
  LOGOUT: `${BASE}/auth/logout/`,
}
