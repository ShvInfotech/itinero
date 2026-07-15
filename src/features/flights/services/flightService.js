import api from '@/services/api';
import { ENDPOINTS } from '@/services/endpoints';

/**
 * Flight API service.
 */
export const flightService = {
  search: (params) => api.get(ENDPOINTS.FLIGHTS.SEARCH, params),
  getDetails: (id) => api.get(ENDPOINTS.FLIGHTS.DETAILS(id)),
  getFares: (id) => api.get(ENDPOINTS.FLIGHTS.FARES(id)),
};

