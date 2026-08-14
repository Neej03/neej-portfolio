import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onCursorEnter, onCursorLeave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF1E1E', '#FF2B2B', '#FFFFFF', '#D90000']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF1E1E]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Text & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3">
                <Sparkles className="w-4 h-4" /> GET IN TOUCH
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.05]">
                Let's build something <span className="text-[#FF1E1E]">great together.</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-normal">
              Have a project in mind, a job opportunity, or just want to talk about tech, code, or AI? Feel free to send a message.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF1E1E]/20 text-[#FF1E1E] flex items-center justify-center border border-[#FF1E1E]/30 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-400">Direct Email</p>
                  <p className="text-base font-heading font-bold text-white group-hover:text-[#FF1E1E] transition-colors">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onCursorEnter('hover')}
                  onMouseLeave={onCursorLeave}
                  className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E] transition-all group"
                >
                  <GithubIcon className="w-5 h-5 text-[#FF1E1E]" />
                  <span className="text-sm font-heading font-bold text-white group-hover:text-[#FF1E1E] transition-colors">
                    GitHub Profile
                  </span>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onCursorEnter('hover')}
                  onMouseLeave={onCursorLeave}
                  className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E] transition-all group"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#FF1E1E]" />
                  <span className="text-sm font-heading font-bold text-white group-hover:text-[#FF1E1E] transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FF1E1E]/20 text-[#FF1E1E] flex items-center justify-center mx-auto border border-[#FF1E1E]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will respond as soon as possible!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#FF1E1E] text-white text-xs font-heading font-bold uppercase mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Name <span className="text-[#FF1E1E]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#050505] text-white border border-white/10 focus:border-[#FF1E1E] focus:outline-none transition-colors text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Email Address <span className="text-[#FF1E1E]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#050505] text-white border border-white/10 focus:border-[#FF1E1E] focus:outline-none transition-colors text-sm"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#050505] text-white border border-white/10 focus:border-[#FF1E1E] focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Your Message <span className="text-[#FF1E1E]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, requirements, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#050505] text-white border border-white/10 focus:border-[#FF1E1E] focus:outline-none transition-colors text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => onCursorEnter('hover')}
                  onMouseLeave={onCursorLeave}
                  className="w-full py-4 rounded-xl bg-[#FF1E1E] hover:bg-[#FF2B2B] text-white font-heading font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#FF1E1E]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
