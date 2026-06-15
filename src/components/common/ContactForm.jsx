import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { companyInfo } from '../../data/commonData';

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────────────────

const ContactForm = ({ variant = 'full', theme = 'dark' }) => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    projectType: 'Web Dev',
    message: ''
  });

  const projectTypes = ['Web Dev', 'Mobile', 'AI', 'Cloud', 'Design', 'Other'];

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (International support)
    if (formData.phone.trim()) {
      // Allows + at start, then 7-15 digits with spaces, hyphens, or parentheses
      const phoneRegex = /^\+?(\d[\d\s\-\(\)]{6,18}\d)$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid international phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setErrorMsg('Please correct the highlighted errors.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');
    setErrors({});

    const templateParams = {
      to_email: 'info@injazdigitalhub.com',
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      project_type: formData.projectType,
      phone: formData.phone || 'Not provided',
      subject: formData.subject || `New ${formData.projectType} Inquiry`,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  const isDark = theme === 'dark';

  const getInputClasses = (fieldName) => {
    const hasError = !!errors[fieldName];
    return `w-full px-5 py-4 rounded-2xl border transition-all duration-300 outline-none
    ${isDark
        ? `bg-white/5 ${hasError ? 'border-red-500/50' : 'border-white/10'} text-white focus:border-sky-500/50 focus:bg-white/10`
        : `bg-gray-50 ${hasError ? 'border-red-500/50' : 'border-gray-200'} text-gray-900 focus:border-sky-500/50 focus:bg-white`
      }`;
  };

  const labelClasses = (fieldName) => {
    const hasError = !!errors[fieldName];
    return `block text-[11px] font-black uppercase tracking-[0.25em] mb-3 ${hasError ? 'text-red-400' : isDark ? 'text-gray-500' : 'text-gray-400'}`;
  };

  const pillClasses = (active) => `px-5 py-3 rounded-xl border text-[12px] font-bold transition-all duration-500 cursor-pointer whitespace-nowrap
    ${active
      ? 'bg-accent border-accent text-white shadow-[0_10px_30px_rgba(15,95,106,0.25)] scale-[1.05]'
      : isDark
        ? 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:text-gray-900 shadow-sm'
    }`;

  // ── Success screen ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center text-center p-12 rounded-[32px] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-xl'
          }`}
      >
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <CheckCircle className="w-10 h-10 text-accent" />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sky-500 font-medium hover:underline"
        >
          Send another message <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Project Type */}
      <div>
        <label className={labelClasses('projectType')}>Project Type</label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <div
              key={type}
              onClick={() => {
                setFormData({ ...formData, projectType: type });
                if (errors.projectType) {
                  const newErrors = { ...errors };
                  delete newErrors.projectType;
                  setErrors(newErrors);
                }
              }}
              className={pillClasses(formData.projectType === type)}
            >
              {type}
            </div>
          ))}
        </div>
        {errors.projectType && (
          <p className="mt-2 text-[12px] font-bold text-red-400">{errors.projectType}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses('name')}>Full Name</label>
          <input
            type="text"
            className={getInputClasses('name')}
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) {
                const newErrors = { ...errors };
                delete newErrors.name;
                setErrors(newErrors);
              }
            }}
          />
          {errors.name && (
            <p className="mt-2 text-[12px] font-bold text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label className={labelClasses('email')}>Email Address</label>
          <input
            type="email"
            className={getInputClasses('email')}
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) {
                const newErrors = { ...errors };
                delete newErrors.email;
                setErrors(newErrors);
              }
            }}
          />
          {errors.email && (
            <p className="mt-2 text-[12px] font-bold text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {variant === 'full' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses('phone')}>Phone Number</label>
            <input
              type="tel"
              className={getInputClasses('phone')}
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) {
                  const newErrors = { ...errors };
                  delete newErrors.phone;
                  setErrors(newErrors);
                }
              }}
            />
            {errors.phone && (
              <p className="mt-2 text-[12px] font-bold text-red-400">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className={labelClasses('company')}>Company Name</label>
            <input
              type="text"
              className={getInputClasses('company')}
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClasses('subject')}>Subject</label>
            <input
              type="text"
              className={getInputClasses('subject')}
              placeholder="How can we help?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
        </div>
      )}

      <div>
        <label className={labelClasses('message')}>Message</label>
        <textarea
          rows={variant === 'full' ? 5 : 3}
          className={`${getInputClasses('message')} resize-none`}
          placeholder="Tell us about your project goals..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) {
              const newErrors = { ...errors };
              delete newErrors.message;
              setErrors(newErrors);
            }
          }}
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-[12px] font-bold text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/5 p-4 rounded-xl border border-red-400/20">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="font-bold uppercase tracking-wider text-[11px]">{errorMsg}</span>
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex-1 py-5 rounded-full bg-accent hover:bg-white text-white hover:text-accent font-black uppercase tracking-widest text-[13px] transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-70 shadow-[0_0_30px_rgba(15,95,106,0.15)] hover:shadow-[0_0_50px_rgba(15,95,106,0.3)] hover:scale-[1.02]"
        >
          {status === 'sending' ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;