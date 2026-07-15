/**
 * Application-wide configuration.
 * Single source of truth for env-based settings and feature flags.
 *
 * Usage:
 *   import { APP_CONFIG } from '@/app/config';
 *   if (APP_CONFIG.FEATURES.AI_CHAT) { ... }
 */

export const APP_CONFIG = {
  /** Application name used in titles, meta tags, etc. */
  APP_NAME: "Itinero",

  /** API base URL — override via VITE_API_URL env variable */
  API_BASE_URL: import.meta.env.VITE_API_URL || "https://api.itinero.com",

  /** Base path for client-side routing (matches vite.config.js `base`) */
  BASE_PATH: "/itinero",

  /** Default currency for price display */
  DEFAULT_CURRENCY: "INR",

  /** Default language */
  DEFAULT_LOCALE: "en-IN",

  /**
   * Feature flags — toggle features without code changes.
   * Set to `true` to enable, `false` to disable.
   */
  FEATURES: {
    AI_CHAT: true,
    FLIGHT_BOOKING: true,
    HOTEL_BOOKING: false,
    DEALS: true,
    USER_AUTH: false,
    DARK_MODE: false,
  },

  /** Pagination defaults */
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },

  /** Debounce delays (ms) */
  DEBOUNCE: {
    SEARCH: 300,
    RESIZE: 150,
    SCROLL: 100,
  },
};

/**
 * Responsive breakpoints (must match styles/responsive.css).
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};
