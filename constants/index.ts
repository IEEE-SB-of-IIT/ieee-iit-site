import { Chapters } from "@/lib/types";
import { Award, Users, Globe, Trophy, Calendar } from 'lucide-react';

export const counterItems = [
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 1000, suffix: "+", label: "Active Members", icon: Users },
  { value: 9, suffix: "th", label: "Ranked Worldwide", icon: Globe },
  { value: 1, suffix: "st", label: "Ranked in Sri Lanka", icon: Trophy },
  { value: 100, suffix: "+", label: "Events Organized", icon: Calendar },
];

export const navLinks = [
  {
    name: "Home",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Team",
    link: "#skills",
  },
  {
    name: "Contact Us",
    link: "#testimonials",
  },
];

export const chapters: Chapters[] = [
  {
    id: 'CS',
    name: 'Computer Society',
    description:
      'Promotes innovation and excellence in computer science, software engineering, and information technology.',
    icon: 'CS.png',
    instagram: 'https://instagram.com/ieee_cs_iit',
    facebook: 'https://facebook.com/ieee_cs_iit',
    linkedin: 'https://linkedin.com/ieee_cs_iit',
    color: '#FAA41B',
  },
  {
    id: 'RAS',
    name: 'Robotics and Automation Society',
    description:
      'Focuses on the advancement of robotics, automation, and intelligent systems through research and hands-on projects.',
    icon: 'RAS.png',
    instagram: 'https://instagram.com/ieee_ras_iit',
    facebook: 'https://facebook.com/ieee_ras_iit',
    linkedin: 'https://linkedin.com/ieee_ras_iit',
    color: '#990A2C',
  },
  {
    id: 'WIE',
    name: 'Women in Engineering',
    description:
      'Empowers and supports women engineers and students, fostering diversity, inclusion, and leadership in engineering.',
    icon: 'WIE.png',
    instagram: 'https://instagram.com/ieee_wie_iit',
    facebook: 'https://facebook.com/ieee_wie_iit',
    linkedin: 'https://linkedin.com/ieee_wie_iit',
    color: '#742380',
  },
  {
    id: 'CIS',
    name: 'Computational Intelligence Society',
    description:
      'Advances the theory and application of neural networks, fuzzy systems, evolutionary computation, and AI.',
    icon: 'CIS.png',
    instagram: 'https://instagram.com/ieee_cis_iit',
    facebook: 'https://facebook.com/ieee_cis_iit',
    linkedin: 'https://linkedin.com/ieee_cis_iit',
    color: '#00AEEF',
  },
  {
    id: 'EMBS',
    name: 'Engineering in Medicine and Biology Society',
    description:
      'Bridges engineering and medicine to improve healthcare through biomedical innovation and research.',
    icon: 'EMBS.png',
    instagram: 'https://instagram.com/ieee_embs_iit',
    facebook: 'https://facebook.com/ieee_embs_iit',
    linkedin: 'https://linkedin.com/ieee_embs_iit',
    color: '#7A2A82',
  },
];

export const aboutData = [
  {
    title: "Our Mission",
    description: "The IEEE Student Branch of IIT strives to advance technology for humanity by fostering a community of innovation. We focus on technical excellence, professional development, and collaborative learning to empower students in their engineering journey."
  },
  {
    title: "Our Vision",
    description: "We envision a world where technology seamlessly integrates with human needs. Our vision projects a future where our student members lead the way in sustainable technological solutions, ethical engineering, and global connectivity."
  },
  {
    title: "What We Do",
    description: "The branch organizes workshops, hackathons, and guest lectures to bridge the gap between academic theory and industry practice. We create an environment that encourages experimentation, discussion, and hands-on learning."
  }
];

export const projectsData = [
  {
    id: 1,
    subtitle: "Project 1",
    title: "Smart Campus AI",
    description: "Futuristic interface connecting the campus through an integrated AI network for efficient resource management.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
    type: "large"
  },
  {
    id: 2,
    subtitle: "Project 2",
    title: "Autonomous Drone Fleet",
    description: "Drones for autonomous surveillance and delivery systems.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=600&auto=format&fit=crop",
    className: "",
    type: "split-right"
  },
  {
    id: 3,
    subtitle: "Project 3",
    title: "Renewable Energy Grid",
    description: "Solar evolution for sustainable campus power.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    className: "",
    type: "split-right-large"
  },
  {
    id: 4,
    subtitle: "Project 4",
    title: "IoT Health Monitor",
    description: "Real-time health data analytics platform.",
    className: "md:col-span-1 md:row-span-1 bg-ieee-dark text-white",
    type: "icon"
  },
  {
    id: 5,
    subtitle: "Project 5",
    title: "Machine Learning Accelerator",
    description: "Hardware acceleration for high-performance ML models and chip implementation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    className: "md:col-span-2 bg-gradient-to-r from-ieee-lightest to-white",
    type: "split-half"
  }
];
