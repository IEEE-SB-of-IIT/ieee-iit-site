'use client'
import React, { useState } from 'react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import { contactInfo } from '@/constants'
import { MapPin, Mail, UserPlus, ArrowUpRight, SendHorizonal } from 'lucide-react'
import { cn } from '@/lib/utils'
import Badge from './ui/Badge'
import Link from 'next/link'
import SocialIcon from './ui/SocialIcon'

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

  const inputClassName = "w-full px-4 py-4 bg-white/40 border border-white/50 rounded-xl text-ieee-dark placeholder:text-ieee-dark/40 focus:outline-none focus:ring-2 focus:ring-ieee-medium/20 focus:border-ieee-medium transition-all"

  return (
    <section id="contact" className="pb-32 bg-gradient-to-b from-transparent to-ieee-light/5">
      <Container>
        <SectionHeader title="Get in Touch" />
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Info and Map */}
          <div className="grid grid-cols-6 gap-6">
            {/* Row 1: Email and Join Us */}
            <Badge className="border-2 border-white col-span-3 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex items-center gap-4">
                <Mail className="scale-120 text-ieee-blue" />
                <a 
                href={`mailto:${contactInfo.email}`}
                className="text-ieee-gray font-semibold transition-colors break-all text-lg lowercase hover:text-ieee-blue transition-colors hover:cursor-pointer"
              >
                {contactInfo.email}
              </a>
              </div>
            </Badge>

            <Badge className="border-2 border-white col-span-3 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex items-center gap-4">
                <UserPlus className="scale-120 text-ieee-blue" />
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-1 text-lg font-semibold text-ieee-gray hover:text-ieee-blue transition-colors hover:cursor-pointer"> 
                    Join Us <ArrowUpRight size={24} />
                  </button>
                </Link>
              </div>
            </Badge>
            
            {/* Row 2: Social Medias (6 cols) */}
            {contactInfo.socialLinks.map((social) => (
              <SocialIcon
                key={social.name}
                href={social.href}
                ariaLabel={social.ariaLabel}
                icon={social.icon}
                className="col-span-1"
                style={{ 
                  '--hover-bg': `${social.color}1a`, 
                  '--hover-color': social.color,
                  '--hover-shadow': `${social.color}40` 
                } as React.CSSProperties}
              />
            ))}
            
            {/* Row 3: Address */}

            <Badge className="border-2 border-white col-span-6 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex items-center gap-4">
                <MapPin className="scale-120 text-ieee-blue" />
                <p className="text-ieee-gray font-semibold transition-colors break-all text-lg">
                {contactInfo.address}
              </p>
              </div>
            </Badge>

            {/* Row 4: Map */}
            <Badge className="border-2 border-white col-span-6 p-0 overflow-hidden min-h-[300px] flex-1 rounded-2xl">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px]"
              ></iframe>
            </Badge>
          </div>

          {/* Right Column - Contact Form */}
          <Badge className="border-2 border-white flex flex-col h-full !justify-start p-10 rounded-2xl">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-ieee-gray mb-2">Send us a Message</h3>
              <p className="text-ieee-gray/60 font-medium text-md">Have a question? We'd love to hear from you.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name-bento" className="block text-ieee-gray/80 font-bold text-sm uppercase tracking-wider ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name-bento"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email-bento" className="block text-ieee-gray/80 font-bold text-sm uppercase tracking-wider ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email-bento"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="subject-bento" className="block text-ieee-gray/80 font-bold text-sm uppercase tracking-wider ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject-bento"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="space-y-3 flex-1 flex flex-col">
                <label htmlFor="message-bento" className="block text-ieee-gray/80 font-bold text-sm uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  id="message-bento"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={cn(inputClassName, "resize-none flex-1 min-h-[100px]")}
                ></textarea>
              </div>

              <div className="flex justify-center mt-auto">
                <button
                  type="submit"
                  className="w-75 bg-ieee-blue hover:bg-ieee-medium text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-ieee-medium/20 text-lg hover:cursor-pointer"
                >
                  <span>Send Message</span>
                  <SendHorizonal className="scale-90" />
                </button>
              </div>
            </form>
          </Badge>
        </div>
      </Container>
    </section>
  )
}

export default Contact
