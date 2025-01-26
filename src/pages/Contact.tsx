import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, Coffee } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    social: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        social: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-[#1b3a4b] rounded-lg p-8 border border-[#006466]/20 hover:border-[#65fefc] transition-colors duration-300">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a href="arpitkadam922@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover">
                  arpitkadam922@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">GitHub</h3>
                <a href="https://github.com/ArpitKadam" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover">
                  https://github.com/ArpitKadam
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <a href="https://linkedin.com/in/arpitkadam" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover">
                  linkedin.com/in/arpitkadam
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover">
                  Vasai, Mumbai
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover">
                  +91 8767375722
                </a>
              </div>
            </div>

            {/* Add Buy Me a Coffee link */}
            <div className="flex items-center space-x-4 mt-8">
              <Coffee className="w-6 h-6 text-[#65fefc]" />
              <div>
                <h3 className="text-white font-semibold">Support My Work</h3>
                <a
                  href="https://buymeacoffee.com/arpitkadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover"
                >
                  <span>Buy Me a Coffee</span>
                  <Coffee className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1b3a4b] rounded-lg p-8 border border-[#006466]/20 hover:border-[#65fefc] transition-colors duration-300">
          <h3 className="text-xl font-semibold text-white mb-6 hover:text-[#65fefc] transition-colors duration-300">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1 hover:text-[#65fefc] transition-colors duration-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#144552] border border-[#006466] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65fefc] focus:border-transparent hover:border-[#65fefc] disabled:opacity-50 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1 hover:text-[#65fefc] transition-colors duration-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#144552] border border-[#006466] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65fefc] focus:border-transparent hover:border-[#65fefc] disabled:opacity-50 transition-colors duration-300"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="social"
                className="block text-sm font-medium text-gray-300 mb-1 hover:text-[#65fefc] transition-colors duration-300"
              >
                Social Media
              </label>
              <input
                type="text"
                id="social"
                name="social"
                value={formData.social}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#144552] border border-[#006466] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65fefc] focus:border-transparent hover:border-[#65fefc] disabled:opacity-50 transition-colors duration-300"
                placeholder="Your social media handle"
              />
              {/* Example anchor tag for a social link */}
              {formData.social && (
                <a
                  href={`https://www.instagram.com/${formData.social}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover mt-2"
                >
                  <span>Visit my Social Media</span>
                </a>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1 hover:text-[#65fefc] transition-colors duration-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#144552] border border-[#006466] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65fefc] focus:border-transparent hover:border-[#65fefc] disabled:opacity-50 transition-colors duration-300"
                placeholder="Your email"
              />
              {/* Example anchor tag for email link */}
              {formData.email && (
                <a
                  href={`mailto:${formData.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-2 button-hover mt-2"
                >
                  <span>Send me an Email</span>
                </a>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1 hover:text-[#65fefc] transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-2 bg-[#144552] border border-[#006466] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65fefc] focus:border-transparent resize-none hover:border-[#65fefc] disabled:opacity-50 transition-colors duration-300"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#65fefc] text-[#1b3a4b] rounded-md font-semibold hover:bg-[#006466] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-hover"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>

            {status.type && (
              <div
                className={`mt-4 p-4 rounded-md text-center ${
                  status.type === 'success'
                    ? 'bg-[#006466] text-white'
                    : 'bg-red-500/20 text-red-200'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;