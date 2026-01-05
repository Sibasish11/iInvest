
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { gemini } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm iINVEST. I'm here to help you understand market movements and economic events in simple terms. What would you like to learn about today? For example, you could ask about CPI, interest rates, or why a specific sector might be moving.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await gemini.sendMessage(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-w-5xl mx-auto w-full bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-slate-100">
      <div className="px-8 py-6 border-b bg-white/90 backdrop-blur-xl sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Investment Concierge</h2>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Always Active</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-8 py-10 space-y-8 scroll-smooth">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[75%] px-6 py-5 ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-[2rem] rounded-tr-none shadow-xl shadow-blue-500/10' 
                : 'bg-slate-50 text-slate-800 rounded-[2rem] rounded-tl-none border border-slate-100'
            }`}>
              <div className="whitespace-pre-wrap leading-relaxed text-[16px] font-medium">
                {msg.content}
              </div>
              <div className={`text-[10px] mt-3 font-bold uppercase tracking-tighter opacity-40 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-50 rounded-[2rem] rounded-tl-none px-6 py-4 border border-slate-100">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-50/50 backdrop-blur-xl border-t border-slate-100">
        <div className="relative flex items-center max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Translate market jargon or ask about events..."
            className="w-full bg-white border border-slate-200 rounded-[2rem] py-5 px-8 pr-16 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-medium shadow-sm"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 p-3 rounded-[1.5rem] bg-slate-900 text-white hover:bg-blue-600 disabled:bg-slate-300 transition-all duration-300 group shadow-lg"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center font-bold text-slate-400 mt-4 uppercase tracking-[0.2em]">
          Clarifying The Markets • One Question At A Time
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
