import api from '@/services/api';
import { ENDPOINTS } from '@/services/endpoints';

export const veroService = {
  chat: (message) => api.post(ENDPOINTS.VERO.CHAT, { message }),
  getSuggestions: (context) => api.get(ENDPOINTS.VERO.SUGGESTIONS, context),
};

