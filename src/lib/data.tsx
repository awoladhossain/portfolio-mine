import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.png',
    title: 'Blog App AI',
    description:
      'A full‑stack MERN Blog Application featuring authentication, blog and category management, profile updates, image uploads, rich-text editing, comments, likes, real-time chat, AI-generated content, and deployment on Vercel.',
    technologies: [
      'React',
      'Node.js',
      'Tailwind',
      'Shadcn/ui',
      'Gen AI',
      'JWT',
    ],
    links: {
      github: 'https://github.com/awoladhossain/blog-ai.git',
    },
  },
  {
    image: '/images/project-1.png',
    title: 'ChatApp',
    description:
      'ChatApp is a real-time chat application built using ReactJS, Redux and Socket.IO on the frontend, and NodeJS, Express and MongoDB on the backend.The application allows users to sign up and log in to their accounts, and engage in real-time conversations with other users.',
    technologies: ['React.js', 'Redux', ' Socket.IO', 'Tailwind', 'MongoDB'],
    links: {
      github: 'https://github.com/awoladhossain/chat-box.git',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Research Assistant',
    company: 'International Standard University, Dhaka',
    description:
      'Worked as a research assistant supporting faculty-led projects in computer science. Contributed to academic publications by conducting experiments, analyzing datasets, and writing technical documentation. Assisted in preparing papers that were later published in Springer and IEEE conferences.',
    period: '2024 - 2025',
    technologies: [
      'Python',
      'Data Analysis',
      'Research Writing',
      'Machine Learning',
    ],
  },
  {
    title: 'Android Developer Intern',
    company: 'NTS Nihon Global',
    description:
      'Completed a six-week internship focusing on Android and React Native application development. Developed and integrated RESTful APIs for user registration, login, and authentication modules, and designed UI components connected to backend services.',
    period: 'Jan 2025 - Feb 2025',
    technologies: [
      'React Native',
      'JavaScript',
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    title: 'Secretary',
    company: 'ISU IT Club',
    description:
      'Organized backend and database workshops for 200+ students, promoting technical learning. Coordinated hackathons and managed cross-functional teams with faculty advisors, fostering collaboration and technical growth.',
    period: '2023 - 2024',
    technologies: ['Leadership', 'Team Management', 'Event Coordination'],
  },
  {
    title: 'Backend Developer (Personal Project)',
    company: 'Sign Vision',
    description:
      'Built an AI-powered backend for real-time sign language recognition achieving 97% model accuracy. Managed a full computer vision pipeline with YOLO, processed 10,000+ samples, and deployed APIs for production use.',
    period: '2024',
    technologies: ['Python', 'YOLO', 'Computer Vision', 'API Development'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
