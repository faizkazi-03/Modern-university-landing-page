import {
  Laptop,
  BarChart3,
  Palette,
  Settings,
  Bot,
  Microscope
} from "lucide-react";
import {
  Target,
  GraduationCap,
  Building2,
  Briefcase,
  Globe,
  Lightbulb
} from "lucide-react";
import {
  User,
  UserRound,
} from "lucide-react";
export const navbarLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const heroContent = {
  headline: 'Shape Your Future With World-Class Education',
  subtext: 'Join a community of innovators, thinkers, and leaders. Experience education that transforms careers and shapes the future.',
  ctaButtons: [
    { text: 'Explore Programs', href: '#programs', primary: false },
    { text: 'Apply Now', href: '#apply', primary: true },
  ],
};

export const aboutContent = {
  title: 'About Our University',
  description: 'We are a premier institution dedicated to excellence in education, innovation, and research. Our mission is to empower students with knowledge, skills, and values to become leaders in their fields.',
  mission: 'To provide world-class education that fosters innovation, critical thinking, and global citizenship.',
  stats: [
    { value: '15,000+', label: 'Students' },
    { value: '500+', label: 'Faculty' },
    { value: '120+', label: 'Courses' },
    { value: '95%', label: 'Placement Rate' },
  ],
};

export const programs = [
  {
    icon: <Laptop size={40} className="text-purple-600" />,
    title: 'Computer Science',
    description: 'Master programming, AI, and software development with cutting-edge curriculum.',
  },
  {
   icon: <BarChart3 size={40} className="text-purple-600" />,
    title: 'Business Administration',
    description: 'Develop leadership skills and business acumen for the corporate world.',
  },
  {
    icon: <Palette size={40} className="text-purple-600" />,
    title: 'Design & Media',
    description: 'Explore creative fields including graphic design, animation, and digital media.',
  },
  {
    icon: <Settings size={40} className="text-purple-600" />,
    title: 'Engineering',
    description: 'Build the future with mechanical, electrical, and civil engineering programs.',
  },
  {
    icon: <Bot size={40} className="text-purple-600" />,
    title: 'AI & Data Science',
    description: 'Dive into machine learning, data analytics, and artificial intelligence.',
  },
  {
    icon: <Microscope size={40} className="text-purple-600" />,
    title: 'Biotechnology',
    description: 'Combine biology and technology to solve global challenges in healthcare.',
  },
];

export const whyChooseUs = [
  {
    icon: <Target size={40} className="text-purple-600" />,
    title: 'Industry-Focused Curriculum',
    description: 'Courses designed with input from leading companies to ensure job readiness.',
  },
  {
    icon: <GraduationCap size={40} className="text-purple-600" />,
    title: 'Experienced Faculty',
    description: 'Learn from industry experts and renowned researchers with real-world experience.',
  },
  {
    icon: <Building2 size={40} className="text-purple-600" />,
    title: 'Modern Campus',
    description: 'State-of-the-art facilities with labs, libraries, and collaborative spaces.',
  },
  {
    icon: <Briefcase size={40} className="text-purple-600" />,
    title: 'Placement Assistance',
    description: 'Dedicated career services with 95% placement rate in top companies.',
  },
  {
    icon: <Globe size={40} className="text-purple-600" />,
    title: 'Global Partnerships',
    description: 'International collaborations and exchange programs with leading universities.',
  },
  {
    icon: <Lightbulb size={40} className="text-purple-600" />,
    title: 'Innovation Labs',
    description: 'Access to cutting-edge research facilities and startup incubation programs.',
  },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    course: 'Computer Science',
   avatar: <GraduationCap size={40} className="text-purple-600" />,
    text: 'The education I received here transformed my career. The practical approach and industry connections helped me land my dream job at a tech giant.',
  },
  {
    name: 'Michael Chen',
    course: 'Business Administration',
    avatar: <UserRound size={40} className="text-purple-600" />,
    text: 'The business program gave me the skills and confidence to start my own company. The mentorship and networking opportunities were invaluable.',
  },
  {
    name: 'Emily Rodriguez',
    course: 'Design & Media',
    avatar: <UserRound size={40} className="text-purple-600" />,
    text: 'Creative freedom combined with technical expertise - this program perfectly prepared me for the competitive design industry.',
  },
];

export const ctaContent = {
  title: 'Start Your Academic Journey Today',
  description: 'Join thousands of students who are already shaping their future with us. Applications are now open for the upcoming academic year.',
  buttons: [
    { text: 'Apply Now', href: '#apply', primary: true },
    { text: 'Download Brochure', href: '#brochure', primary: false },
  ],
};

export const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
  ],
  resources: [
    { name: 'Library', href: '#library' },
    { name: 'Research', href: '#research' },
    { name: 'Career Services', href: '#career' },
    { name: 'Alumni', href: '#alumni' },
  ],
  contact: {
    email: 'admissions@university.edu',
    phone: '+1 (555) 123-4567',
    address: '123 University Avenue, Education City, EC 12345',
  },
  social: [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
  ],
};
