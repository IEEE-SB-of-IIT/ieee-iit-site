import React from 'react'
import { ArrowUpRight, Activity } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-ieee-light/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-dark uppercase tracking-wider">Flagship Projects</h2>
          <div className="w-20 h-1 bg-ieee-medium mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          
          {/* Main Large Card (Project 1) */}
          <div className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-auto rounded-3xl overflow-hidden group shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" 
               alt="Smart Campus AI" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-ieee-dark/90 via-ieee-dark/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-ieee-light font-mono text-sm mb-2 block">Project 1</span>
                <h3 className="text-3xl font-bold mb-2">Smart Campus AI</h3>
                <p className="text-gray-300 max-w-md text-sm mb-4">
                  Futuristic interface connecting the campus through an integrated AI network for efficient resource management.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold hover:text-ieee-light transition-colors">
                  View Case Study <ArrowUpRight size={16} />
                </button>
             </div>
          </div>

          {/* Side Card Top (Project 2) */}
          <div className="relative h-[250px] rounded-3xl overflow-hidden group shadow-lg bg-white/40 backdrop-blur-md border border-white/50">
             <div className="absolute top-0 right-0 w-1/2 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=600&auto=format&fit=crop" 
                  alt="Drone" 
                  className="w-full h-full object-cover object-center mask-image-linear-gradient" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest via-transparent to-transparent"></div>
             </div>
             <div className="relative z-10 p-6 h-full flex flex-col justify-center max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">Project 2</span>
                <h3 className="text-xl font-bold text-ieee-dark mb-2">Autonomous Drone Fleet</h3>
                <p className="text-ieee-dark/70 text-xs">
                  Drones for autonomous surveillance and delivery systems.
                </p>
             </div>
          </div>

           {/* Side Card Bottom (Project 3) */}
           <div className="relative h-[250px] rounded-3xl overflow-hidden group shadow-lg bg-white/40 backdrop-blur-md border border-white/50">
             <div className="absolute top-0 right-0 w-2/3 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop" 
                  alt="Solar" 
                  className="w-full h-full object-cover" 
                />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ieee-lightest"></div>
             </div>
             <div className="relative z-10 p-6 h-full flex flex-col justify-end max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">Project 3</span>
                <h3 className="text-xl font-bold text-ieee-dark mb-2">Renewable Energy Grid</h3>
                <p className="text-ieee-dark/70 text-xs">
                  Solar evolution for sustainable campus power.
                </p>
             </div>
          </div>

          {/* Bottom Row Card Left (Project 4) */}
          <div className="md:col-span-1 md:row-span-1 relative h-[200px] rounded-3xl overflow-hidden group shadow-lg bg-ieee-dark text-white flex items-center">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
             <div className="relative z-10 p-6 flex flex-row items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-ieee-medium/50 flex items-center justify-center border border-white/20">
                    <Activity className="text-ieee-light" />
                 </div>
                 <div>
                    <span className="text-ieee-light font-mono text-xs block mb-1">Project 4</span>
                    <h3 className="text-lg font-bold">IoT Health Monitor</h3>
                    <p className="text-gray-400 text-xs mt-1">Real-time health data analytics platform.</p>
                 </div>
             </div>
          </div>

          {/* Bottom Row Card Right (Project 5) */}
          <div className="md:col-span-2 relative h-[200px] rounded-3xl overflow-hidden group shadow-lg bg-gradient-to-r from-ieee-lightest to-white border border-white/60">
             <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" 
                  alt="Chip" 
                  className="w-full h-full object-cover opacity-80" 
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest to-transparent"></div>
             </div>
             <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">Project 5</span>
                <h3 className="text-2xl font-bold text-ieee-dark mb-2">Machine Learning Accelerator</h3>
                <p className="text-ieee-dark/70 text-sm">
                  Hardware acceleration for high-performance ML models and chip implementation.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects