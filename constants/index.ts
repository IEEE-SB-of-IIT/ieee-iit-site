import { Chapters } from "@/lib/types";

export const counterItems = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 1000, suffix: "+", label: "Active Members" },
  { value: 9, suffix: "th", label: "Ranked Worldwide" },
  { value: 1, suffix: "st", label: "Ranked in Sri Lanka" },
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
  },
  {
    id: 'RAS',
    name: 'Robotics and Automation Society',
    description:
      'Focuses on the advancement of robotics, automation, and intelligent systems through research and hands-on projects.',
    icon: 'RAS.png',
    instagram: 'https://instagram.com/ieee_ras_iit',
    facebook: 'https://facebook.com/ieee_ras_iit',
  },
  {
    id: 'WIE',
    name: 'Women in Engineering',
    description:
      'Empowers and supports women engineers and students, fostering diversity, inclusion, and leadership in engineering.',
    icon: 'WIE.png',
    instagram: 'https://instagram.com/ieee_wie_iit',
    facebook: 'https://facebook.com/ieee_wie_iit',
  },
  {
    id: 'CIS',
    name: 'Computational Intelligence Society',
    description:
      'Advances the theory and application of neural networks, fuzzy systems, evolutionary computation, and AI.',
    icon: 'CIS.png',
    instagram: 'https://instagram.com/ieee_cis_iit',
    facebook: 'https://facebook.com/ieee_cis_iit',
  },
  {
    id: 'EMBS',
    name: 'Engineering in Medicine and Biology Society',
    description:
      'Bridges engineering and medicine to improve healthcare through biomedical innovation and research.',
    icon: 'EMBS.png',
    instagram: 'https://instagram.com/ieee_embs_iit',
    facebook: 'https://facebook.com/ieee_embs_iit',
  },
];