import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-dark uppercase tracking-wider">Why Join Us</h2>
          <div className="w-20 h-1 bg-ieee-medium mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
             <h3 className="text-xl font-bold text-ieee-medium mb-4 uppercase group-hover:text-ieee-dark transition-colors">Our Mission</h3>
             <p className="text-ieee-dark/80 leading-relaxed text-sm">
               The IEEE Student Branch of IIT strives to advance technology for humanity by fostering a community of innovation. We focus on technical excellence, professional development, and collaborative learning to empower students in their engineering journey.
             </p>
          </div>

          {/* Vision */}
          <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
             <h3 className="text-xl font-bold text-ieee-medium mb-4 uppercase group-hover:text-ieee-dark transition-colors">Our Vision</h3>
             <p className="text-ieee-dark/80 leading-relaxed text-sm">
               We envision a world where technology seamlessly integrates with human needs. Our vision projects a future where our student members lead the way in sustainable technological solutions, ethical engineering, and global connectivity.
             </p>
          </div>

          {/* What We Do */}
          <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
             <h3 className="text-xl font-bold text-ieee-medium mb-4 uppercase group-hover:text-ieee-dark transition-colors">What We Do</h3>
             <p className="text-ieee-dark/80 leading-relaxed text-sm">
               The branch organizes workshops, hackathons, and guest lectures to bridge the gap between academic theory and industry practice. We create an environment that encourages experimentation, discussion, and hands-on learning.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About