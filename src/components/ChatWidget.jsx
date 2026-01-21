import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChatWidget() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/ai-consultant")}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-full
                 bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl
                 hover:scale-105 transition animate-bounce-subtle"
      aria-label="Chat with XCEED AI"
    >
      🤖
      <span className="text-base font-semibold">
        Chat with me
      </span>

      {/* subtle animation */}
      <style>{`
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite;
        }
      `}</style>
    </button>
  );
}
