import React from 'react'
import { ArrowRight, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen pt-48 pb-20 px-4 flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      
      {/* Background Decor - Subtle Circuit Lines would go here, simulated with gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-ieee-light/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-ieee-medium/10 rounded-full blur-[80px]" />
      </div>

      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-12">
        
        {/* Left Side: Visuals (Globe & Cards) */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl relative h-[400px] lg:h-[600px] flex items-center justify-center order-2 lg:order-1">
          {/* The Globe Image */}
          <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl relative z-0 border-4 border-white/20">
            <img 
              src="images/logos/SB_globe.png" 
              alt="Global Technology" 
              className="w-full h-full object-cover opacity-90"
            />
            {/* Overlay gradient to blend it */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ieee-dark/60 to-transparent mix-blend-overlay"></div>
          </div>

          {/* Floating Glass Card 1 */}
          <div className="absolute top-[10%] left-[5%] lg:left-[-20px] bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-xl shadow-xl w-48 animate-bounce-slow z-10">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-ieee-light/30 flex items-center justify-center text-white">
                    <Calendar size={14} />
                </div>
                <div className="h-2 w-20 bg-white/20 rounded-full"></div>
             </div>
             <div className="space-y-2">
                 <div className="h-2 w-full bg-white/10 rounded-full"></div>
                 <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
             </div>
          </div>

          {/* Floating Glass Card 2 */}
          <div className="absolute bottom-[20%] right-[5%] lg:right-[-20px] bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-xl shadow-xl w-56 animate-float z-20">
             <div className="flex items-center justify-between mb-3">
                 <span className="text-white text-xs font-semibold">Active Members</span>
                 <Users size={16} className="text-ieee-light" />
             </div>
             <div className="flex -space-x-2 mb-3">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-gray-300 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i + 100}/100`} alt="user" className="w-full h-full object-cover" />
                     </div>
                 ))}
                 <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-ieee-medium flex items-center justify-center text-[10px] text-white font-bold">
                     +2k
                 </div>
             </div>
             <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-[70%] bg-ieee-light"></div>
             </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-ieee-light/10 border border-ieee-light/30 text-ieee-medium font-semibold text-sm tracking-wider uppercase mb-2">
            IEEE Student Branch of IIT
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-ieee-dark leading-[1.1] tracking-tight">
            Advancing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-medium to-ieee-light">Technology</span> <br/>
            for Humanity
          </h1>

          <p className="text-ieee-dark/70 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join a global community of innovators. We foster technological excellence through research, collaboration, and impactful projects that shape the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-ieee-medium to-ieee-light text-white rounded-xl shadow-lg shadow-ieee-medium/30 font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Join Us Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero