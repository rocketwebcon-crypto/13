import React, { useState } from 'react';
import { Calendar, Clock, Check, User, ArrowRight, ArrowLeft, ChevronRight, AlertCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../data';
import { Link, useSearchParams } from 'react-router-dom';

interface BookingData {
  serviceId: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const SchedulingWizard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');
  
  // specific check to ensure the passed service ID is valid before skipping step 1
  const isValidService = preSelectedService && (servicesData.some(s => s.id === preSelectedService) || preSelectedService === 'other');

  const [step, setStep] = useState(isValidService ? 2 : 1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false); // Add shake state
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceId: (isValidService ? preSelectedService : '') as string,
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM"
  ];

  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const validateStep = (currentStep: number) => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!bookingData.serviceId) {
        newErrors.serviceId = "Please select a service to continue.";
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!bookingData.date) {
        newErrors.date = "Please select a preferred date.";
        isValid = false;
      }
      if (!bookingData.timeSlot) {
        newErrors.timeSlot = "Please select a time window.";
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!bookingData.name.trim()) {
        newErrors.name = "Name is required.";
        isValid = false;
      }
      if (!bookingData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    if (!isValid) triggerShake();
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0); 
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
    setSubmitError(null);
  };

  const handleSubmit = () => {
    setSubmitError(null);
    if (!validateStep(3)) {
      setSubmitError("Please fill in the required fields to continue.");
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      const newLead = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'New',
        serviceName: servicesData.find(s => s.id === bookingData.serviceId)?.title || 'Other',
        ...bookingData
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem('os_leads') || '[]');
        localStorage.setItem('os_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (error) {
        console.warn("LocalStorage is not available.", error);
      }

      setIsSubmitting(false);
      setStep(4);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const updateField = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (submitError) setSubmitError(null);
  };

  const renderProgressBar = () => (
    <div className="flex justify-between items-center mb-8 px-2 relative">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-2 ${
            step >= i ? 'bg-brand-brown border-brand-brown text-brand-black' : 'bg-white border-gray-200 text-gray-400'
          }`}>
            {step > i ? <Check size={20} strokeWidth={3} /> : i}
          </div>
          <span className={`text-[10px] uppercase font-black mt-2 tracking-wider ${step >= i ? 'text-brand-black' : 'text-gray-400'}`}>
            {i === 1 ? 'Service' : i === 2 ? 'Time' : 'Details'}
          </span>
        </div>
      ))}
      <div className="absolute top-5 left-0 w-full h-1 bg-gray-100 -z-0 hidden md:block" />
      <div 
        className="absolute top-5 left-0 h-1 bg-brand-brown -z-0 transition-all duration-300 hidden md:block" 
        style={{ width: `${((step - 1) / 2) * 100}%` }}
      />
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-2xl border-4 border-brand-black overflow-hidden relative ${shake ? 'animate-shake' : ''}`}>
      {/* Header */}
      <div className="bg-brand-black p-8 text-white text-center border-b-4 border-brand-brown">
        <h3 className="text-3xl font-stencil">Request Service</h3>
        <p className="text-gray-400 text-sm font-bold tracking-wide uppercase mt-1">Fast & Secure Scheduling</p>
      </div>

      <div className="p-6 md:p-8">
        {step < 4 && renderProgressBar()}

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h4 className="text-2xl font-bold text-brand-black mb-6 text-center font-heading">What service do you need?</h4>
            {errors.serviceId && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded flex items-center gap-2 font-bold">
                <AlertCircle size={16} /> {errors.serviceId}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => updateField('serviceId', service.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all flex items-center gap-4 group ${
                    bookingData.serviceId === service.id 
                      ? 'border-brand-brown bg-brand-brown/10 ring-1 ring-brand-brown' 
                      : 'border-gray-200 hover:border-brand-black'
                  }`}
                >
                  <div className={`p-3 rounded border-2 ${bookingData.serviceId === service.id ? 'bg-brand-brown text-brand-black border-brand-brown' : 'bg-white text-gray-600 border-gray-200 group-hover:border-brand-black'}`}>
                    <service.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-black text-sm uppercase tracking-wide">{service.title}</span>
                  </div>
                </button>
              ))}
              <button
                  type="button"
                  onClick={() => updateField('serviceId', 'other')}
                  className={`p-4 rounded-lg border-2 text-left transition-all flex items-center gap-4 group ${
                    bookingData.serviceId === 'other'
                      ? 'border-brand-brown bg-brand-brown/10' 
                      : 'border-gray-200 hover:border-brand-black'
                  }`}
                >
                  <div className={`p-3 rounded border-2 ${bookingData.serviceId === 'other' ? 'bg-brand-brown text-brand-black border-brand-brown' : 'bg-white text-gray-600 border-gray-200 group-hover:border-brand-black'}`}>
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </div>
                  <span className="block font-bold text-brand-black text-sm uppercase tracking-wide">Other / Not Sure</span>
                </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Booking For:</span>
                <h4 className="text-2xl font-bold text-brand-black font-heading">
                    {servicesData.find(s => s.id === bookingData.serviceId)?.title || 'Other Service'}
                </h4>
                <button 
                    onClick={() => setStep(1)}
                    className="text-brand-brown text-xs font-bold underline mt-1 hover:text-brand-black"
                >
                    Change Service
                </button>
            </div>

            <h4 className="text-xl font-bold text-brand-black mb-6 text-center font-heading">When works best?</h4>
            
            <div className="mb-8">
              <label className="block text-sm font-black text-brand-black mb-3 uppercase tracking-wider flex justify-between">
                <span><Calendar size={16} className="inline mr-1 text-brand-brown" /> Preferred Date</span>
                {errors.date && <span className="text-red-600 text-xs lowercase flex items-center gap-1"><AlertCircle size={12} /> required</span>}
              </label>
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                {getNextDays().map((date) => {
                   const isSelected = bookingData.date === date.toDateString();
                   return (
                    <button
                      type="button"
                      key={date.toDateString()}
                      onClick={() => updateField('date', date.toDateString())}
                      className={`flex-shrink-0 w-24 p-3 rounded border-2 text-center transition-all ${
                        isSelected ? 'border-brand-brown bg-brand-brown text-brand-black' : 'border-gray-200 hover:border-brand-black'
                      } ${errors.date && !bookingData.date ? 'border-red-300 bg-red-50' : ''}`}
                    >
                      <span className={`block text-xs font-bold mb-1 uppercase ${isSelected ? 'text-brand-black/70' : 'text-gray-400'}`}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="block text-2xl font-black">{date.getDate()}</span>
                    </button>
                   )
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-brand-black mb-3 uppercase tracking-wider flex justify-between">
                <span><Clock size={16} className="inline mr-1 text-brand-brown" /> Arrival Window</span>
                {errors.timeSlot && <span className="text-red-600 text-xs lowercase flex items-center gap-1"><AlertCircle size={12} /> required</span>}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(slot => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => updateField('timeSlot', slot)}
                    className={`p-3 rounded border-2 text-sm font-bold transition-all ${
                      bookingData.timeSlot === slot 
                        ? 'bg-brand-black text-brand-brown border-brand-black' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-black'
                    } ${errors.timeSlot && !bookingData.timeSlot ? 'border-red-300 bg-red-50' : ''}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <h4 className="text-2xl font-bold text-brand-black mb-6 text-center font-heading">Contact Details</h4>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-black text-brand-black mb-2 uppercase tracking-wide">
                   Full Name <span className="text-brand-brown">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    value={bookingData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded font-medium focus:outline-none focus:border-brand-brown focus:bg-white transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-bold"><AlertCircle size={12}/> {errors.name}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div>
                    <label className="block text-sm font-black text-brand-black mb-2 uppercase tracking-wide">
                       Phone <span className="text-brand-brown">*</span>
                    </label>
                    <input 
                      type="tel" 
                      value={bookingData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded font-medium focus:outline-none focus:border-brand-brown focus:bg-white transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="(541) 555-0123"
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-bold"><AlertCircle size={12}/> {errors.phone}</p>}
                 </div>
                 <div>
                    <label className="block text-sm font-black text-brand-black mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      value={bookingData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded font-medium focus:outline-none focus:border-brand-brown focus:bg-white transition-colors"
                      placeholder="email@example.com"
                    />
                 </div>
              </div>
              <div>
                <label className="block text-sm font-black text-brand-black mb-2 uppercase tracking-wide">Service Address</label>
                <input 
                  type="text" 
                  value={bookingData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded font-medium focus:outline-none focus:border-brand-brown focus:bg-white transition-colors"
                  placeholder="1234 Oak St, Eugene OR"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-brand-black mb-2 uppercase tracking-wide">Additional Notes</label>
                <textarea 
                  value={bookingData.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded font-medium focus:outline-none focus:border-brand-brown focus:bg-white transition-colors h-24"
                  placeholder="Gate codes, dog on property, specific issues..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center py-10 animate-fadeIn">
            <div className="w-24 h-24 bg-brand-brown text-brand-black rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-brand-black shadow-xl">
              <Check size={48} strokeWidth={4} />
            </div>
            <h3 className="text-3xl font-stencil text-brand-black mb-4">Request Received!</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-xs mx-auto">
              Thanks {bookingData.name.split(' ')[0]}! We've received your request for <strong>{servicesData.find(s => s.id === bookingData.serviceId)?.title}</strong>.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 mb-8">
              <p className="text-brand-black font-bold mb-2 uppercase tracking-wide text-xs">What Happens Next?</p>
              <p className="text-gray-600 text-sm">
                Our dispatcher will call you at <strong>{bookingData.phone}</strong> within 2 hours to confirm the exact time.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
                <Link to="/admin" className="text-xs text-gray-400 hover:text-brand-black underline">
                    [Owner Demo: View Lead in Dashboard]
                </Link>
                <button 
                type="button"
                onClick={() => { setStep(1); setBookingData({ serviceId: '', date: '', timeSlot: '', name: '', phone: '', email: '', address: '', notes: '' }) }}
                className="text-brand-brown font-black uppercase tracking-wider hover:text-brand-black transition-colors"
                >
                Schedule Another Service
                </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex flex-col gap-2 mt-10 pt-6 border-t-2 border-gray-100">
            <div className="flex gap-4">
                {step > 1 && (
                <button 
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleBack}
                    className="px-6 py-4 rounded border-2 border-gray-300 font-bold text-gray-600 hover:bg-gray-100 hover:text-brand-black transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                    <ArrowLeft size={20} /> Back
                </button>
                )}
                <button 
                type="button"
                disabled={isSubmitting}
                onClick={step === 3 ? handleSubmit : handleNext}
                className="flex-1 bg-brand-brown hover:bg-brand-brownHover text-brand-black font-black py-4 px-6 rounded transition-all flex items-center justify-center gap-2 shadow-[0px_4px_0px_0px_rgba(160,120,70,1)] active:translate-y-[2px] active:shadow-none disabled:opacity-70 disabled:cursor-not-allowed text-lg uppercase tracking-wide"
                >
                {isSubmitting ? (
                    <>Processing <Loader2 className="animate-spin" size={20} /></>
                ) : (
                    <>{step === 3 ? 'Confirm Appointment' : 'Next Step'} <ArrowRight size={20} /></>
                )}
                </button>
            </div>
            
            {submitError && (
                <div className="mt-4 p-3 bg-red-50 border-2 border-red-100 text-red-600 rounded text-center text-sm font-bold flex items-center justify-center gap-2 animate-fadeIn">
                    <AlertCircle size={18} /> {submitError}
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulingWizard;