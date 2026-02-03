import { Chapters, Project } from "@/lib/types";
import { Award, Users, Globe, Trophy, Calendar } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

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
    instagram: 'https://www.instagram.com/ieeecs_iit/',
    facebook: 'https://www.facebook.com/IEEECSIIT',
    linkedin: 'https://www.linkedin.com/company/ieee-computer-society-student-chapter-of-iit',
    color: '#FAA41B',
  },
  {
    id: 'RAS',
    name: 'Robotics and Automation Society',
    description:
      'Focuses on the advancement of robotics, automation, and intelligent systems through research and hands-on projects.',
    icon: 'RAS.png',
    instagram: 'https://www.instagram.com/ieeeras_iit',
    facebook: 'https://www.facebook.com/ieeerasiit',
    linkedin: 'https://www.linkedin.com/company/ieee-robotics-and-automation-society-of-iit',
    color: '#990A2C',
  },
  {
    id: 'WIE',
    name: 'Women in Engineering',
    description:
      'Empowers and supports women engineers and students, fostering diversity, inclusion, and leadership in engineering.',
    icon: 'WIE.png',
    instagram: 'https://www.instagram.com/ieeewieiit/',
    facebook: 'https://www.facebook.com/ieeewieiit/',
    linkedin: 'https://www.linkedin.com/company/wie-affinity-group-of-iit/',
    color: '#742380',
  },
  {
    id: 'CIS',
    name: 'Computational Intelligence Society',
    description:
      'Advances the theory and application of neural networks, fuzzy systems, evolutionary computation, and AI.',
    icon: 'CIS.png',
    instagram: 'https://www.instagram.com/ieeecisiit',
    facebook: 'https://www.facebook.com/ieeecisiit',
    linkedin: 'https://www.linkedin.com/company/ieeecisiit',
    color: '#00AEEF',
  },
  {
    id: 'EMBS',
    name: 'Engineering in Medicine and Biology Society',
    description:
      'Bridges engineering and medicine to improve healthcare through biomedical innovation and research.',
    icon: 'EMBS.png',
    instagram: 'https://www.instagram.com/ieeeembs_iit/',
    facebook: 'https://facebook.com/ieee_embs_iit',
    linkedin: 'https://www.linkedin.com/company/ieeeembssbciit/',
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

export const projectsData: Project[] = [
  {
    id: 1,
    subtitle: "Startup Battle",
    title: "CodeSprint",
    description: "Sri Lanka's largest inter-university startup incubator empowering undergraduates to launch impactful tech.",
    image: "codesprint.png",
    className: "md:col-span-2 md:row-span-2",
    type: "large"
  },
  {
    id: 2,
    subtitle: "Robotics Contest",
    title: "MicroMaze",
    description: "A competitive micromouse robotics challenge fostering innovation.",
    image: "micromaze.jpg",
    className: "",
    type: "split-right"
  },
  {
    id: 3,
    subtitle: "Hackathon",
    title: "CODERALLY",
    description: "A 24-hour hackathon testing competitive programming excellence.",
    image: "coderally.jpg",
    className: "",
    type: "split-right-large"
  },
  {
    id: 4,
    subtitle: "MedTech Summit",
    title: "IGNITE",
    description: "A two phase MedTech event sparking innovation through IT.",
    image: "ignite.png",
    className: "md:col-span-1 md:row-span-1 bg-ieee-dark text-white",
    type: "icon"
  },
  {
    id: 5,
    subtitle: "Mystery Hunt",
    title: "SHErlock",
    description: "A national problem solving competition celebrating women in STEM.",
    image: "sherlock.jpg",
    className: "md:col-span-2 bg-gradient-to-r from-ieee-lightest to-white",
    type: "split-half"
  }
];

export const contactInfo = {
  organization: "IEEE Student Branch of IIT",
  address: "57 Ramakrishna Road, Colombo 06, Sri Lanka",
  email: "ieee@iit.ac.lk",
  socials: {
    whatsapp: "https://whatsapp.com/channel/0029VaAQ5uq8kyyTdZYcEP1X",
    instagram: "https://www.instagram.com/ieeeiit",
    facebook: "https://www.facebook.com/ieeeinformatics",
    youtube: "https://www.youtube.com/@ieeesbiit",
    linkedin: "https://www.linkedin.com/company/ieeesbiit/",
    tiktok: "https://www.tiktok.com/@ieeesb.iit"
  },
  socialLinks: [
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029VaAQ5uq8kyyTdZYcEP1X",
      icon: FaWhatsapp,
      color: "#25D366",
      ariaLabel: "Chat on WhatsApp"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ieeeiit",
      icon: FaInstagram,
      color: "#E4405F",
      ariaLabel: "Follow on Instagram"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ieeeinformatics",
      icon: FaFacebookF,
      color: "#1877F2",
      ariaLabel: "Follow on Facebook"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ieeesbiit",
      icon: FaYoutube,
      color: "#FF0000",
      ariaLabel: "Subscribe on YouTube"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ieeesbiit/",
      icon: FaLinkedinIn,
      color: "#0A66C2",
      ariaLabel: "Follow on LinkedIn"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ieeesb.iit",
      icon: FaTiktok,
      color: "#000000",
      ariaLabel: "Follow on TikTok"
    }
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.3028095464551!2d79.859851!3d6.865271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba4e617b3d9%3A0xd5a3b0418f1cf497!2sInformatics%20Institute%20of%20Technology%20(IIT)!5e0!3m2!1sen!2sus!4v1768415764505!5m2!1sen!2sus"
};