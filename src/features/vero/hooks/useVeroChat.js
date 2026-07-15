import { useState, useCallback } from 'react';

/**
 * Hook for Vero AI chat logic.
 * TODO: Connect to Vero API, handle message streaming.
 */
export default function useVeroChat() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const sendMessage = useCallback((text) => {
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    // TODO: Call veroService.chat(text)
  }, []);
  return { messages, isTyping, sendMessage };
}

