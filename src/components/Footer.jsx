import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-[#155E63] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2 flex items-center gap-2">
            <FiPhone /> +91 9371525953
          </p>
          <p className="mb-2 flex items-center gap-2">
            <FiPhone /> +91 8668821668
          </p>
          <p className="mb-2">Email: <span className="font-semibold">example@gmail.com</span></p>
          
          <h3 className="text-lg font-semibold mt-4">Addresses:</h3>
          <p className="mb-1">Sambhajinagar - Kolhapur</p>
          <p>Skyi Tower - Pune</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="p-3 rounded-full bg-white text-[#155E63] hover:bg-[#e0f2f1] transition">
              <FaFacebook size={20}/>
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-[#155E63] hover:bg-[#e0f2f1] transition">
              <FaTwitter size={20}/>
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-[#155E63] hover:bg-[#e0f2f1] transition">
              <FaLinkedin size={20}/>
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-[#155E63] hover:bg-[#e0f2f1] transition">
              <FaYoutube size={20}/>
            </a>
          </div>
        </div>

        {/* About / Quick Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-2">
            We are committed to shaping young minds by blending creativity, culture, and education. Our approach strengthens the connection between parents, educators, and students, nurturing emotionally aware, confident, and responsible individuals for the future.
          </p>
          <p className="mb-2">
            Through art-based learning, we help students express emotions, understand values, and build strong moral foundations.
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-[#0e3d3f] pt-6 text-center text-sm text-[#cce4e1]">
        &copy; {new Date().getFullYear()} Aksharmala All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
