'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, ArrowRight, Download, CheckCircle2, IndianRupee } from 'lucide-react';

const DonationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data for the email service
    const formData = {
      access_key: "06fa3121-d223-4dae-8d9a-53751d49ee03",
      subject: "New Donation Lead - Rupee Ready",
      from_name: "Rupee Ready Website",
      email: email,
      contact_number: phone,
      message: `A user is interested in donating. \nEmail: ${email} \nPhone: ${phone}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-12 md:pb-20">
      {/* Header Section */}
      <section className="bg-zinc-30 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-50 border border-green-100 mb-4 md:mb-6"
          >
            <Heart size={14} className="md:w-4 md:h-4 text-green-600" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-green-700">Make an Impact</span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-4 md:mb-6">
            Invest in a Child's Future.
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Your contribution directly funds financial literacy kits and educational materials for youth across India.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-16">
        {/* Left Side - Impact Information */}
        <div className="space-y-8 md:space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 md:mb-8 text-black">The Impact of ₹250</h3>
            <div className="relative p-6 md:p-8 bg-blue-950 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl text-white">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="bg-[#76e094] p-5 md:p-6 rounded-2xl md:rounded-3xl text-black flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px]">
                  <IndianRupee size={28} className="md:w-8 md:h-8" strokeWidth={3} />
                  <span className="text-3xl md:text-4xl font-bold mt-2">250</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">One Book Set</h4>
                  <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                    A single donation of ₹250 provides one child with a complete "Rupee Ready" book set, covering money safety and basic taxes.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#76e094] opacity-10 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <BookOpen />, title: "Learning", desc: "Materials reach a child" },
              { icon: <CheckCircle2 />, title: "Safety", desc: "Digital fraud awareness" },
              { icon: <Heart />, title: "Success", desc: "Personal follow-up" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-zinc-100 text-center shadow-sm">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-blue-950">
                  {React.cloneElement(step.icon, { size: 18, className: "md:w-5 md:h-5" })}
                </div>
                <h5 className="font-bold text-black text-xs md:text-sm mb-1">{step.title}</h5>
                <p className="text-[11px] md:text-xs text-zinc-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Donation Form */}
        <div className="bg-white rounded-2xl md:rounded-[3rem] p-6 md:p-8 lg:p-12 shadow-2xl border border-zinc-100 h-fit">
          {!submitted ? (
            <>
              <div className="mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-black font-serif mb-2">Get Started</h3>
                <p className="text-zinc-500 text-xs md:text-sm">
                  Enter your details below. I will personally contact you to assist with the process and thank you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-zinc-50 border border-zinc-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#76e094] transition-all text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Contact Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-zinc-50 border border-zinc-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#76e094] transition-all text-sm md:text-base"
                  />
                </div>

                <div className="pt-3 md:pt-4 space-y-3 md:space-y-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-black text-white py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-2 md:gap-3 hover:bg-zinc-800 transition-all group shadow-lg disabled:bg-zinc-400 text-sm md:text-base"
                  >
                    {isSubmitting ? "Sending..." : "Complete Donation Info"}
                    {!isSubmitting && <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  
                  <a 
                    href="/flyer.png" 
                    download="RupeeReady_Flyer.png"
                    className="w-full bg-white border border-zinc-200 text-black py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-2 md:gap-3 hover:bg-zinc-50 transition-all text-center no-underline text-sm md:text-base"
                  >
                    Download Program Flyer
                    <Download size={18} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 md:py-10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <CheckCircle2 size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-3 md:mb-4">Thank You!</h3>
              <p className="text-zinc-600 mb-6 md:mb-8 text-sm md:text-base px-2">
                I've received your details. I will reach out to you personally to help you through the donation process and share how much your support means.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-950 font-bold hover:underline text-sm md:text-base"
              >
                Go Back
              </button>
            </motion.div>
          )}

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-zinc-100 text-center">
            <p className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">
              100% of your donation goes directly to educational kits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;