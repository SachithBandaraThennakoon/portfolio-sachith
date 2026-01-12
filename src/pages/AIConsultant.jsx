// src/pages/AIConsultant.jsx
import React, { useEffect, useRef, useState } from "react";

const API_BASE_URL = "https://xceed-ai-backend.azurewebsites.net";

export default function AIConsultant() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I’m the XCEED AI Consultant. Ask me about AI, BI, automation, or how XCEED can help your business exceed."
    }
  ]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((m) => [...m, { sender: "user", text: userMessage }, { sender: "typing" }]);

    try {
      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: userMessage
        })
      });

      const data = await res.json();
      setSessionId(data.session_id);

      setMessages((m) =>
        m.filter((x) => x.sender !== "typing").concat({ sender: "bot", text: data.reply })
      );
    } catch {
      setMessages((m) =>
        m.filter((x) => x.sender !== "typing").concat({
          sender: "bot",
          text: "Sorry, something went wrong. Please try again."
        })
      );
    }
  }

  return (
    <div className="flex justify-center py-12">
      <div className="w-full max-w-md h-[600px] bg-slate-950 rounded-xl shadow-xl flex flex-col border border-slate-800">
        <div className="px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-xl">
          <h3 className="font-semibold">🤖 XCEED AI Consultant</h3>
          <p className="text-xs opacity-90">Ask about AI, BI, automation, or strategy</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
          {messages.map((m, i) =>
            m.sender === "typing" ? (
              <div key={i} className="text-xs opacity-70">XCEED AI is typing…</div>
            ) : (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg ${
                  m.sender === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                {m.text}
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t border-slate-800 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about AI, BI, or business…"
            className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm outline-none"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
