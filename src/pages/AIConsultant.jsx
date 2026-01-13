// src/pages/AIConsultant.jsx
import React from "react";

export default function AIConsultant() {
  return (
    <div className="min-h-screen bg-slate-950">
      <iframe
        src="https://xceed-ai-backend-d6gxh2d8ecbrbjds.southeastasia-01.azurewebsites.net/chat-ui"
        title="XCEED AI Consultant"
        className="w-full h-screen border-0"
        loading="lazy"
      />
    </div>
  );
}
