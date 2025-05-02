import React from 'react';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950 border-t border-white/10 py-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footer-grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#footer-grid-gradient)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TalentSphere</h2>
            <p className="text-gray-300 text-sm">
              Connecting exceptional talent with forward-thinking companies. Your career journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Browse Jobs', 'Companies', 'For Employers', 'Career Resources'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 flex items-center group transition-colors">
                    <ChevronRight size={14} className="mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-300">123 Innovation Drive, Tech City, TC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-3" />
                <span className="text-gray-300">contact@talenthunt.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for the latest job opportunities</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 px-4 py-2 rounded-l-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring focus:ring-blue-400"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg transition">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-white/10 pt-4">
          &copy; {new Date().getFullYear()} TalentHunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;