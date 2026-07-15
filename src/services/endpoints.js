/**
 * API endpoint registry.
 * All API URLs defined in one place — never hardcode URLs in components.
 *
 * Usage:
 *   import { ENDPOINTS } from '@/services/endpoints';
 *   const data = await api.get(ENDPOINTS.FLIGHTS.SEARCH, params);
 */

export const ENDPOINTS = {
  // ── Flights ─────────────────────────────
  FLIGHTS: {
    SEARCH: "/api/v1/flights/search",
    DETAILS: (id) => `/api/v1/flights/${id}`,
    FARES: (id) => `/api/v1/flights/${id}/fares`,
  },

  // ── Hotels ──────────────────────────────
  HOTELS: {
    SEARCH: "/api/v1/hotels/search",
    DETAILS: (id) => `/api/v1/hotels/${id}`,
    ROOMS: (id) => `/api/v1/hotels/${id}/rooms`,
    REVIEWS: (id) => `/api/v1/hotels/${id}/reviews`,
  },

  // ── Destinations ────────────────────────
  DESTINATIONS: {
    LIST: "/api/v1/destinations",
    TRENDING: "/api/v1/destinations/trending",
    DETAILS: (id) => `/api/v1/destinations/${id}`,
  },

  // ── Deals ───────────────────────────────
  DEALS: {
    LIST: "/api/v1/deals",
    FEATURED: "/api/v1/deals/featured",
  },

  // ── Booking ─────────────────────────────
  BOOKINGS: {
    CREATE: "/api/v1/bookings",
    DETAILS: (id) => `/api/v1/bookings/${id}`,
    MY_BOOKINGS: "/api/v1/bookings/mine",
    CANCEL: (id) => `/api/v1/bookings/${id}/cancel`,
  },

  // ── Auth ────────────────────────────────
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    LOGOUT: "/api/v1/auth/logout",
    REFRESH: "/api/v1/auth/refresh",
    PROFILE: "/api/v1/auth/profile",
  },

  // ── Vero AI ─────────────────────────────
  VERO: {
    CHAT: "/api/v1/vero/chat",
    SUGGESTIONS: "/api/v1/vero/suggestions",
  },
};
