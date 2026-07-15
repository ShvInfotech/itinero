import React from "react";
import { PageLayout } from "@/components/layout";
import "./VeroPage.css";

/**
 * Full-page Vero AI chat experience.
 * TODO: Implement chat window, message bubbles, and suggestion chips.
 */
export default function VeroPage() {
  return (
    <PageLayout showVeroBot={false}>
      <section className="vero-page">
        <h1>Ask Vero — Your AI Travel Buddy</h1>
        {/* ChatWindow, MessageBubble, SuggestionChips */}
      </section>
    </PageLayout>
  );
}
