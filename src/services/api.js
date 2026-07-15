import { APP_CONFIG } from "@/app/config";

/**
 * Centralized HTTP client for all API calls.
 * Handles auth headers, error formatting, and response parsing.
 *
 * Usage:
 *   import api from '@/services/api';
 *   const flights = await api.get('/flights/search', { from: 'STV', to: 'JFK' });
 *   const booking = await api.post('/bookings', { flightId: '123', passengers: [...] });
 */

/**
 * Make an HTTP request.
 * @param {string} method - HTTP method
 * @param {string} endpoint - API endpoint (appended to base URL)
 * @param {object} options - { params, data, headers }
 * @returns {Promise<*>} Parsed response data
 */
async function request(method, endpoint, { params, data, headers = {} } = {}) {
  const url = new URL(endpoint, APP_CONFIG.API_BASE_URL);

  // Append query params
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });
  }

  // Build fetch options
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  // Add auth token if available
  const token = localStorage.getItem("itinero_auth_token");
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  // Add body for non-GET requests
  if (data && method !== "GET") {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url.toString(), options);

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(errorData.message || `HTTP ${response.status}`);
      error.status = response.status;
      error.data = errorData;
      throw error;
    }

    // Handle 204 No Content
    if (response.status === 204) return null;

    return await response.json();
  } catch (error) {
    // Network errors
    if (!error.status) {
      error.message = "Network error — please check your connection";
    }
    throw error;
  }
}

/**
 * API client with convenience methods.
 */
const api = {
  get: (endpoint, params) => request("GET", endpoint, { params }),
  post: (endpoint, data) => request("POST", endpoint, { data }),
  put: (endpoint, data) => request("PUT", endpoint, { data }),
  patch: (endpoint, data) => request("PATCH", endpoint, { data }),
  delete: (endpoint) => request("DELETE", endpoint),
};

export default api;
