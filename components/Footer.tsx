import { Facebook, Linkedin, Youtube } from 'lucide-react';
import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/40 text-ieee-gray pt-10 pb-6 shadow-[0_25px_80px_rgba(15,23,42,0.15)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"></div>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left">
                <img src="/images/logos/sb.png" alt="SB Logo" className='w-75 mb-2'/>
            </div>
            <div className="flex gap-2">
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><Facebook size={18} className="text-gray-600 hover:text-gray-700" /></a>
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><FaWhatsapp size={18} className="text-gray-600 hover:text-gray-700" /></a>
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><FaInstagram size={18} className="text-gray-600 hover:text-gray-700" /></a>
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><Linkedin size={18} className="text-gray-600 hover:text-gray-700" /></a>
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><Youtube size={18} className="text-gray-600 hover:text-gray-700" /></a>
                <a href="#" className="flex items-center justify-center hover:scale-101 rounded-full border-1 border-gray-500/50 hover:border-gray-500/70 p-2"><FaTiktok size={18} className="text-gray-600 hover:text-gray-700" /></a>
            </div>
        </div>

        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ieee-gray/70">
            <div className="flex gap-6">
                <a href="#" className="hover:text-black transition-colors">About</a>
                <a href="#" className="hover:text-black transition-colors">Projects</a>
                <a href="#" className="hover:text-black transition-colors">Contact Us</a>
                <a href="#" className="hover:text-black transition-colors">Join Us</a>
            </div>
            <p>&copy; 2026 IEEE Student Branch of IIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
