import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ieee-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">IEEE Student Branch of IIT</h2>
                <p className="text-gray-400 text-sm">Empowering the next generation of engineers.</p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ieee-medium transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ieee-medium transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ieee-medium transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ieee-medium transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ieee-medium transition-colors"><Youtube size={18} /></a>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <p>&copy; 2024 IEEE Student Branch of IIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer