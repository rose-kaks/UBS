import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const fetchResponse = async (userMessage: string) => {
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      if (!API_KEY) throw new Error("Missing API key");

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;  // ✅ Using correct model

      const requestBody = {
        contents: [{ parts: [{ text: userMessage }] }],
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      console.log("Response Status:", response.status);
      const data = await response.json();
      console.log("Full API Response:", data);

      if (!response.ok || !data.candidates) throw new Error(`API Error: ${response.statusText}`);

      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";

      return botReply;
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Error getting response. Please try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = await fetchResponse(input);
    setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        onClick={toggleChatbot}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[400px] bg-white p-4 shadow-lg rounded-lg border border-gray-300 z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Study Bot</h2>
            <button className="text-gray-500 hover:text-red-500" onClick={toggleChatbot}>
              ✖
            </button>
          </div>

          {/* Messages Container */}
          <div className="mt-2 h-72 overflow-y-auto border rounded p-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right text-blue-700"
                    : "bg-gray-200 text-left text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Field */}
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 border p-2 rounded-l focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask something study-related..."
            />
            <button
              className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
