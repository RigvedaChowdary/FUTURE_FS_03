import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { locations } from '../data/movies';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-24 min-h-screen">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-6 animate-fade-in">
            <Check size={28} className="text-champagne" />
          </div>
          <h1 className="font-display text-4xl font-semibold text-charcoal mb-4 animate-fade-in-up">
            Message Sent
          </h1>
          <p className="text-soft-grey text-sm mb-8 animate-fade-in-up">
            Thank you for reaching out. Our team will respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: '', email: '', subject: '', message: '' });
            }}
            className="px-8 py-3 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-charcoal/90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mt-2">
            Contact Us
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-5 py-3.5 rounded-xl border bg-white text-sm text-charcoal placeholder:text-soft-grey/60 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 focus:border-red-400' : 'border-charcoal/10 focus:border-champagne'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-5 py-3.5 rounded-xl border bg-white text-sm text-charcoal placeholder:text-soft-grey/60 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-charcoal/10 focus:border-champagne'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-5 py-3.5 rounded-xl border bg-white text-sm text-charcoal placeholder:text-soft-grey/60 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-400 focus:border-red-400' : 'border-charcoal/10 focus:border-champagne'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  className={`w-full px-5 py-3.5 rounded-xl border bg-white text-sm text-charcoal placeholder:text-soft-grey/60 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-400' : 'border-charcoal/10 focus:border-champagne'
                  }`}
                  placeholder="Tell us more..."
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 hover:shadow-lg hover:shadow-champagne/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-champagne" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">CineVerse Banjara Hills</p>
                    <p className="text-xs text-soft-grey mt-0.5">Road No. 2, Banjara Hills, Hyderabad, Telangana 500034</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-champagne" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">+91 40 2355 0140</p>
                    <p className="text-xs text-soft-grey mt-0.5">Mon - Sun, 10am - 11pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-champagne" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">hello@cineversemultiplex.in</p>
                    <p className="text-xs text-soft-grey mt-0.5">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-champagne" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">Open Daily</p>
                    <p className="text-xs text-soft-grey mt-0.5">10:00 AM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title="CineVerse Multiplex Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.4497!3d17.4198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e2c0c0c0c1%3A0x8c0c0c0c0c0c0c0c!2sBanjara%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1635810208028!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Other locations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                All Locations
              </h3>
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-medium text-charcoal">{loc.name}</p>
                    <p className="text-xs text-soft-grey">{loc.address}</p>
                    <p className="text-xs text-soft-grey">{loc.phone}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-medium text-charcoal">{loc.name}</p>
                    <p className="text-xs text-soft-grey">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
