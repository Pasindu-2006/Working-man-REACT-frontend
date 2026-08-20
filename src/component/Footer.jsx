import React from 'react';
import EmailIcon from '../assets/Email.svg';
import PhoneIcon from '../assets/Call-Blue.svg';
import FacebookIcon from '../assets/Social-facebook-1.svg';
import InstagramIcon from '../assets/Social-Instagram.svg';
import TwitterIcon from '../assets/Social-twitter.svg';
import WhatsAppIcon from '../assets/Social-Whatsapp.svg';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#11141B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-sm leading-tight">
            Contact us to get a quotation.
          </h2>
          <button className="bg-[#FF3B30] hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md transition-all duration-300">
            Contact Us
          </button>
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-gray-800">
          
          {/* Column 1: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest tips and tricks, updates, offers and discount right into your mailbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2.5 bg-white text-black text-sm rounded focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-[#2B95EC] hover:bg-blue-600 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-white/20 rounded-xs shrink-0 mt-0.5 inline-block" />
                <span>3249 Henery Street, Kansas 67204</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={EmailIcon} alt="Email" className="w-5 h-5 shrink-0" />
                <span>info@template.com</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={PhoneIcon} alt="Phone" className="w-5 h-5 shrink-0" />
                <span>+ (100) 234-5678</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-1">Emergency 24/7 Service</p>
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <img src={PhoneIcon} alt="Emergency Phone" className="w-5 h-5" />
                <span>+1-800-777-584</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src={FacebookIcon} alt="Facebook" className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src={TwitterIcon} alt="Twitter" className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src={WhatsAppIcon} alt="WhatsApp" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Teams</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Template */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Template</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Styleguide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© Copyright 2025 by Housefix. Designed & Developed by Homwave. Powered by Webflow</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;