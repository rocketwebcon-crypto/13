import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Phone, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../data';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
}

interface ChatLeadData {
  serviceId?: string;
  serviceName?: string;
  name?: string;
  phone?: string;
  date?: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! I'm the Oregon Septic assistant. How can I help you today?", 
      sender: 'bot',
      options: ['Get a Quote / Book', 'Emergency Help', 'Just Browsing']
    }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'init' | 'service' | 'name' | 'phone' | 'date' | 'done'>('init');
  const [leadData, setLeadData] = useState<ChatLeadData>({});
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
    setMessages(prev => [...prev, { id: Date.now(), text, sender, options }]);
  };

  const botReply = (text: string, nextStep: typeof step, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot', options);
      setStep(nextStep);
    }, 1000);
  };

  const saveLead = (finalData: ChatLeadData) => {
    const newLead = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'New (Chatbot)',
      serviceName: finalData.serviceName || 'General Inquiry',
      name: finalData.name || 'Anonymous',
      phone: finalData.phone || 'No Phone',
      email: '',
      address: '',
      date: finalData.date || 'Flexible',
      timeSlot: 'Via Chat',
      notes: 'Lead generated via automated chatbot.'
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem('os_leads') || '[]');
      localStorage.setItem('os_leads', JSON.stringify([newLead, ...existingLeads]));
    } catch (error) {
      console.warn("LocalStorage unavailable", error);
    }
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    processInput(option);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    addMessage(input, 'user');
    processInput(input);
    setInput('');
  };

  const processInput = (text: string) => {
    switch (step) {
      case 'init':
        if (text.includes('Emergency')) {
          botReply("For emergencies, please call our 24/7 line immediately at (541) 555-0199.", 'init');
        } else if (text.includes('Browsing')) {
          botReply("No problem! Feel free to look around. I'm here if you need me.", 'init');
        } else {
          botReply("Great! What type of service do you need?", 'service', servicesData.map(s => s.title));
        }
        break;

      case 'service':
        setLeadData({ ...leadData, serviceName: text });
        botReply("Got it. To get started, what is your full name?", 'name');
        break;

      case 'name':
        setLeadData(prev => ({ ...prev, name: text }));
        botReply(`Nice to meet you, ${text.split(' ')[0]}. What is the best phone number to reach you at?`, 'phone');
        break;

      case 'phone':
        setLeadData(prev => ({ ...prev, phone: text }));
        botReply("Thanks. Do you have a preferred day or time frame for this service? (e.g., 'Next Tuesday' or 'ASAP')", 'date');
        break;

      case 'date':
        const finalData = { ...leadData, date: text };
        setLeadData(finalData);
        saveLead(finalData);
        botReply("Perfect. I've sent your request to our dispatch team. They will call you shortly to confirm! Is there anything else?", 'done', ['No, thanks']);
        break;

      case 'done':
        botReply("Have a great day! Oregon Septic is here to help.", 'init');
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-lg shadow-2xl border-2 border-brand-black flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 mb-4">
          {/* Header */}
          <div className="bg-brand-black p-4 flex justify-between items-center border-b-4 border-brand-brown">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <div className="w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center border-2 border-white">
                    <MessageSquare size={20} className="text-brand-black" />
                 </div>
                 <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-brand-black rounded-full"></span>
              </div>
              <div>
                <h3 className="text-white font-stencil tracking-wider">Assistant</h3>
                <p className="text-gray-400 text-xs">Online | Replies Instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-brand-brown text-brand-black font-medium rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
               <div className="flex justify-start mb-4">
                 <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                 </div>
               </div>
            )}
            
            <div ref={messagesEndRef} />

            {/* Options Buttons */}
            {messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].options && !isTyping && (
              <div className="flex flex-wrap gap-2 mt-2">
                {messages[messages.length - 1].options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-brand-black text-white text-xs py-2 px-3 rounded-full hover:bg-brand-brown hover:text-brand-black transition-colors border border-brand-black"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-brown focus:bg-white transition-colors"
            />
            <button 
                type="submit" 
                disabled={!input.trim()}
                className="bg-brand-black text-brand-brown p-2 rounded hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-800' : 'bg-brand-brown hover:scale-110'} text-brand-black w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all border-4 border-brand-black group`}
      >
        {isOpen ? <X size={32} className="text-white" /> : <MessageSquare size={32} strokeWidth={2.5} className="group-hover:text-white transition-colors" />}
      </button>
    </div>
  );
};

export default Chatbot;