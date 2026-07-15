import React from "react";
import { AI_BUDDY_IMAGES } from "@/constants/images";
import "./FloatingVeroBot.css";

/**
 * Sticky "Ask For Vero" bot at the bottom left.
 */
export default function FloatingVeroBot() {
  return (
    <div className="vero-bot">
      <div className="vero-bot__chat-bubble">
        <span>Ask For Vero</span>
      </div>
      <img
        src={AI_BUDDY_IMAGES.chatAvatar}
        className="vero-bot__avatar"
        alt="Vero AI Avatar"
      />
    </div>
  );
}
