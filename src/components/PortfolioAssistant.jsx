import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioAssistant({ onCursorEnter, onCursorLeave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! I'm Neej AI. Ask me anything about Neej's projects, skills, experience, or contact information!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const suggestedPrompts = [
    "Who is Neej?",
    "What technologies does he use?",
    "Show me his best projects.",
    "What is his GitHub?",
    "How can I contact him?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedAnswer = "I'm not completely sure about that detail, but you can explore Neej's portfolio sections or reach out directly at neejbutani@gmail.com!";

      for (const item of portfolioData.aiAssistantKnowledge) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: matchedAnswer }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => onCursorEnter('hover')}
        onMouseLeave={onCursorLeave}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#FF1E1E] text-white shadow-2xl shadow-[#FF1E1E]/50 border border-white/30 flex items-center gap-2 cursor-pointer group"
        aria-label="Neej AI Assistant"
      >
        <Bot className="w-6 h-6" />
        <span className="hidden sm:inline-block font-heading font-bold text-xs uppercase tracking-wider pr-1">
          Neej AI
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute -top-1 -right-1" />
      </motion.button>

      {/* Chat Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[90vw] sm:w-[380px] h-[520px] bg-[#121212] border border-[#FF1E1E]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-[#050505] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF1E1E] text-white flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-white flex items-center gap-1.5">
                    Neej AI <Sparkles className="w-3 h-3 text-[#FF1E1E]" />
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400">
                    Portfolio Knowledge Agent
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080808]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#FF1E1E]/20 text-[#FF1E1E] flex items-center justify-center shrink-0 border border-[#FF1E1E]/30">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#FF1E1E] text-white rounded-br-none'
                        : 'bg-[#171717] text-gray-200 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                  <Bot className="w-4 h-4 text-[#FF1E1E] animate-spin" /> Neej AI is thinking...
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompt Pills */}
            <div className="p-2 bg-[#050505] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-gray-300 hover:text-white text-[10px] font-mono whitespace-nowrap border border-white/10 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#050505] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Neej AI a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#121212] text-white text-xs border border-white/10 focus:border-[#FF1E1E] focus:outline-none"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#FF1E1E] text-white hover:bg-[#FF2B2B] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
