'use client'
import React, { useState } from 'react'
import Container from './ui/Container'
import { contactInfo } from '@/constants'
import { MapPin, Mail, UserPlus, ArrowUpRight, SendHorizonal } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="bg-ieee-dark text-white relative overflow-hidden" data-reveal>
      {/* Background decoration */}
      <div className="absolute top-[350px] left-0 w-[600px] h-[600px] bg-ieee-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ieee-medium/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Bold Typography */}
          <div className="lg:w-[40%] flex flex-col justify-start relative z-10 shrink-0">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter mb-8">
              let's <br />
              <span className="text-ieee-blue">connect</span> <br />
              & collaborate
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Have a question, idea, or want to collaborate? We'd love to hear from you. Reach out and let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["INNOVATE", "COLLABORATE", "CONNECT"].map((tag, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-semibold tracking-wider">
                  {tag}
                </div>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4 mt-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-ieee-blue transition-colors group"
              >
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-ieee-blue/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-white/70">
                <div className="p-3 rounded-full bg-white/10">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {contactInfo.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-3 rounded-full bg-white/10 text-white hover:text-white transition-all duration-300"
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-[60%] relative z-10">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-ieee-dark mb-2">Send us a Message</h3>
                <p className="text-ieee-dark/60 font-medium">Have a question? We'd love to hear from you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-ieee-dark/70 font-semibold text-sm uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-ieee-lightest border border-ieee-light/50 rounded-xl text-ieee-dark placeholder:text-ieee-dark/40 focus:outline-none focus:ring-2 focus:ring-ieee-blue/30 focus:border-ieee-blue transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-ieee-dark/70 font-semibold text-sm uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-ieee-lightest border border-ieee-light/50 rounded-xl text-ieee-dark placeholder:text-ieee-dark/40 focus:outline-none focus:ring-2 focus:ring-ieee-blue/30 focus:border-ieee-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-ieee-dark/70 font-semibold text-sm uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-ieee-lightest border border-ieee-light/50 rounded-xl text-ieee-dark placeholder:text-ieee-dark/40 focus:outline-none focus:ring-2 focus:ring-ieee-blue/30 focus:border-ieee-blue transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-ieee-dark/70 font-semibold text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-ieee-lightest border border-ieee-light/50 rounded-xl text-ieee-dark placeholder:text-ieee-dark/40 focus:outline-none focus:ring-2 focus:ring-ieee-blue/30 focus:border-ieee-blue transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 bg-ieee-dark text-white rounded-xl font-semibold hover:bg-ieee-blue transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <SendHorizonal size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
