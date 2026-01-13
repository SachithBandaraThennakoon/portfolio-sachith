// src/pages/AIConsultant.jsx
import React from "react";

export default function AIConsultant() {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <iframe
        src="https://xceed-ai-backend-d6gxh2d8ecbrbjds.southeastasia-01.azurewebsites.net/chat-ui"
        title="XCEED AI Consultant"
        className="w-full h-[calc(100vh-80px)] border-0"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
