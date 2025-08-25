import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const KEY = "chat_msgs";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY);
      return saved ? JSON.parse(saved) : [{ from: "bot", text: "Hi! I'm here to help with donations, volunteers, and events." }];
    } catch {
      return [{ from: "bot", text: "Hi! I'm here to help with donations, volunteers, and events." }];
    }
  });
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(msgs));
  }, [msgs]);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, msgs]);

  const autoReply = (t) => {
    const s = t.toLowerCase();
    if (s.includes("donate")) return "Great! You can find more information on our Donate page. Every contribution helps.";
    if (s.includes("volunteer")) return "Awesome! Please head to the Volunteers page to see available roles and apply.";
    if (s.includes("event")) return "All upcoming events are listed on the Events page. We'd love to see you there!";
    return "Thank you for your message! I've noted that. For more specific inquiries, please use the navigation pages.";
  };

  const send = () => {
    const t = text.trim();
    if (!t) return;

    const userMsg = { from: "user", text: t };
    const botMsg = { from: "bot", text: autoReply(t) };

    setMsgs(m => [...m, userMsg, botMsg]);
    setText("");
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button 
        onClick={() => setOpen(v => !v)} 
        className="fixed bottom-6 right-6 bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg shadow-lg"
      >
        {open ? "—" : "Chat"}
      </button>

      <div className={`fixed bottom-24 right-6 w-[86vw] max-w-sm ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"} transition-all duration-300`}>
        <div className="bg-white rounded-lg shadow-2xl p-4 max-h-[70vh] flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-pink-500">NGO Assistant</h3>
            <button onClick={() => setOpen(false)} className="p-1 rounded-lg text-gray-400 hover:bg-gray-100">✕</button>
          </div>

          <div className="mt-2 flex-1 overflow-y-auto space-y-3 pr-2">
            {msgs.map((m, i) => (
              <div key={i} className={`text-sm flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${m.from === "user" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="mt-3 pt-3 border-t flex gap-2">
            <textarea 
              value={text} 
              onChange={e => setText(e.target.value)} 
              onKeyDown={onKey}
              placeholder="Type a message…" 
              rows={1}
              className="flex-1 w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <Button className="bg-pink-500 hover:bg-pink-600" onClick={send}>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
}