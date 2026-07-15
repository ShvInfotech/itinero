import api from '@/services/api';
import { ENDPOINTS } from '@/services/endpoints';

export const hotelService = {
  search: (params) => api.get(ENDPOINTS.HOTELS.SEARCH, params),
  getDetails: (id) => api.get(ENDPOINTS.HOTELS.DETAILS(id)),
  getRooms: (id) => api.get(ENDPOINTS.HOTELS.ROOMS(id)),
  getReviews: (id) => api.get(ENDPOINTS.HOTELS.REVIEWS(id)),
};

