import React, { useState, useEffect } from 'react';
import { Trash2, Lock, Phone, Calendar, Mail, MapPin, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

interface Lead {
  id: number;
  timestamp: string;
  status?: string; // Added to support chatbot distinction
  serviceName: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  timeSlot: string;
  notes: string;
}

const AdminLeads: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    try {
      const savedLeads = localStorage.getItem('os_leads');
      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      }
    } catch (error) {
      console.warn("Cannot access localStorage. Admin panel will be empty.", error);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  const deleteLead = (id: number) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const updatedLeads = leads.filter(l => l.id !== id);
      setLeads(updatedLeads);
      try {
        localStorage.setItem('os_leads', JSON.stringify(updatedLeads));
      } catch (error) {
        console.warn("Could not delete from storage", error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <>
         <SEO title="Admin Login | Oregon Septic" description="Restricted access." />
         <div className="min-h-screen bg-brand-dark flex items-center justify-center p-6">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md text-center border-4 border-brand-black">
                <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-brand-brown">
                    <Lock className="text-brand-brown" size={32} />
                </div>
                <h1 className="text-3xl font-stencil text-brand-black mb-2">Owner Access</h1>
                <p className="text-gray-500 mb-8 font-bold">Please enter your password.</p>
                <form onSubmit={handleLogin}>
                    <input 
                        type="password" 
                        className="w-full p-4 border-2 border-gray-300 rounded mb-4 focus:outline-none focus:border-brand-brown text-center font-bold text-xl tracking-widest"
                        placeholder="•••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    <button className="w-full bg-brand-brown text-brand-black font-black py-4 rounded hover:bg-brand-brownHover transition-colors uppercase tracking-wide shadow-lg">
                        Unlock Dashboard
                    </button>
                </form>
                <p className="mt-6 text-xs text-gray-400">Password hint: admin</p>
            </div>
         </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Lead Manager | Oregon Septic" description="Admin Dashboard" />
      <div className="min-h-screen bg-gray-100 pb-20">
        <div className="bg-brand-black text-white py-8 px-6 shadow-md border-b-4 border-brand-brown">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-stencil">Lead Manager</h1>
                <div className="flex gap-4 items-center">
                    <span className="bg-brand-brown text-brand-black px-4 py-2 rounded font-bold border-2 border-brand-brown">{leads.length} Active Leads</span>
                    <button onClick={() => setIsAuthenticated(false)} className="text-sm underline hover:text-brand-brown font-bold">Logout</button>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-6 py-8">
            {leads.length === 0 ? (
                <div className="bg-white p-16 rounded-lg shadow text-center border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-2xl font-stencil mb-4">No leads yet.</p>
                    <p className="text-gray-400">Waiting for customers to schedule service.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {leads.map((lead) => (
                        <div key={lead.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-8 border-brand-brown hover:shadow-xl transition-shadow relative">
                            {lead.status?.includes('Chatbot') && (
                                <div className="absolute top-4 right-4 text-brand-brown opacity-20 rotate-12">
                                    <MessageSquare size={60} />
                                </div>
                            )}
                            <div className="p-6 flex flex-col md:flex-row justify-between gap-6 relative z-10">
                                {/* Customer Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold text-brand-black">{lead.name}</h3>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs bg-brand-black text-white px-2 py-1 rounded font-mono text-center w-fit">{new Date(lead.timestamp).toLocaleDateString()}</span>
                                            {lead.status && <span className="text-xs bg-brand-brown text-brand-black px-2 py-1 rounded font-bold uppercase w-fit">{lead.status}</span>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                        <div className="flex items-center gap-2"><Phone size={16} className="text-brand-brown" /> <span className="font-bold">{lead.phone}</span></div>
                                        <div className="flex items-center gap-2"><Mail size={16} className="text-brand-brown" /> {lead.email || 'No Email'}</div>
                                        <div className="flex items-center gap-2 col-span-2"><MapPin size={16} className="text-brand-brown" /> {lead.address || 'No Address Provided'}</div>
                                    </div>
                                </div>

                                {/* Service Info */}
                                <div className="flex-1 border-l-2 border-gray-100 md:pl-6">
                                    <h4 className="font-black text-gray-400 mb-2 uppercase tracking-wider text-xs">Request Details</h4>
                                    <p className="font-stencil text-xl text-brand-black mb-1">{lead.serviceName}</p>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-3">
                                        <Calendar size={16} /> {lead.date} @ {lead.timeSlot}
                                    </div>
                                    {lead.notes && (
                                        <div className="bg-yellow-50 p-3 rounded text-sm text-gray-800 italic border-l-4 border-yellow-300">
                                            "{lead.notes}"
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-row md:flex-col justify-center items-center gap-2 border-l-2 border-gray-100 md:pl-6">
                                    <button 
                                        onClick={() => deleteLead(lead.id)}
                                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        title="Delete Lead"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </>
  );
};

export default AdminLeads;