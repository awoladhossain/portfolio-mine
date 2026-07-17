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
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/turfsync.png',
    title: 'TurfSync',
    description:
      'A production-grade sports arena booking and live streaming system. Features high-concurrency slot booking, multi-tenant dashboards, secure payment gateway integrations (bKash/SSLCommerz), real-time notifications via WebSockets & SMS, and automated database cleanup using Cron jobs.',
    technologies: [
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Socket.io',
      'Tailwind CSS',
      'Docker',
    ],
    links: {
      github: 'https://github.com/awoladhossain/turf-sync',
      demo: 'https://turfsync.vercel.app',
    },
  },
  {
    image: '/images/signvision.png',
    title: 'Sign Vision',
    description:
      'An AI-driven real-time computer vision system built to translate sign language into text and speech. Leverages YOLOv8 models with custom training datasets (10,000+ hand posture images), achieving a remarkable 97.4% detection accuracy for accessible communication.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'PyTorch', 'React'],
    links: {
      github: 'https://github.com/awoladhossain/sign-vision-cv',
    },
  },
  {
    image: '/images/project-2.png',
    title: 'Blog App AI',
    description:
      'A full‑stack MERN Blog Application featuring authentication, blog and category management, profile updates, image uploads, rich-text editing, comments, likes, real-time chat, AI-generated content, and deployment on Vercel.',
    technologies: [
      'React.js',
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
      'It is a real-time chat application built using ReactJS, Redux and Socket.IO on the frontend, and NodeJS, Express and MongoDB on the backend. The application allows users to sign up and log in to their accounts, and engage in real-time conversations with other users.',
    technologies: ['React.js', 'Redux', ' Socket.IO', 'Tailwind', 'MongoDB'],
    links: {
      github: 'https://github.com/awoladhossain/chat-box.git',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Backend Software Engineer',
    company: 'Neocoder (Akij Venture Ltd)',
    points: [
      'Engineered and optimized 5+ core enterprise HRIS and workflow automation endpoints using NestJS, cutting employee onboarding processing overhead by 42% and improving API scalability across the system lifecycle.',
      'Architected the backend service for the Store Sales & Inventory Module, streamlining warehouse-to-branch inventory transfers via multi-step, validated Transfer In/Out schemas with zero data mismatches.',
      'Implemented strict database-level transactional rules with Prisma, ensuring 100% data integrity for 5,000+ concurrent daily inventory and stock transactions.',
    ],
    period: 'Apr 2026 – Present',
    technologies: ['NestJS', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer',
    company: 'ASG SHOP™',
    points: [
      'Developed a multi-tenant centralized institution management system leveraging Node.js, Prisma, and PostgreSQL, efficiently isolating platform-wide relational data for multiple tenants.',
      'Designed and deployed a granular Role-Based Access Control (RBAC) infrastructure using custom caching middleware, securing API endpoints with permission-based access validations.',
      'Optimized complex SQL queries and database schemas to support an institutional hierarchy and real-time reporting, reducing query latency for large data aggregates by 30%.',
    ],
    period: 'Jul 2025 – Mar 2026',
    technologies: ['Node.js', 'Prisma', 'PostgreSQL', 'Express.js'],
  },
  {
    title: 'Software Engineer Intern (Backend-Adjacent)',
    company: 'NTS Nihon Global',
    points: [
      'Developed and integrated high-performance RESTful APIs for secure user onboarding, session management, and token-based authentication modules.',
      'Implemented backend network interceptors and data-caching layers, improving API response handling and reducing duplicate database queries.',
      'Restructured heavy JSON serialization payloads on the server side, achieving a 25% reduction in data transmission latency and eliminating downstream client-side rendering bottlenecks.',
    ],
    period: 'Jan 2025 – Jun 2025',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript'],
  },
] as const;

export const skillsData = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'JavaScript', icon: <Icons.javascript className="size-10" /> },
      { name: 'TypeScript', icon: <Icons.typescript className="size-10" /> },
      { name: 'Go', icon: <Icons.go className="size-10" /> },
      { name: 'Python', icon: <Icons.python className="size-10" /> },
      { name: 'Java', icon: <Icons.java className="size-10" /> },
      { name: 'HTML5', icon: <Icons.html className="size-10" /> },
      { name: 'CSS3', icon: <Icons.css className="size-10" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <Icons.react className="size-10" /> },
      { name: 'Next.js', icon: <Icons.nextjs className="size-10" /> },
      { name: 'NestJS', icon: <Icons.nestjs className="size-10" /> },
      { name: 'Spring Boot', icon: <Icons.springboot className="size-10" /> },
      { name: 'FastAPI', icon: <Icons.fastapi className="size-10" /> },
      { name: 'Express.js', icon: <Icons.express className="size-10" /> },
      { name: 'Node.js', icon: <Icons.nodejs className="size-10" /> },
      { name: 'Redux', icon: <Icons.redux className="size-10" /> },
      { name: 'Tailwind CSS', icon: <Icons.tailwind className="size-10" /> },
      { name: 'Sass', icon: <Icons.sass className="size-10" /> },
    ],
  },
  {
    category: 'Databases & DevOps',
    skills: [
      { name: 'MongoDB', icon: <Icons.mongodb className="size-10" /> },
      { name: 'PostgreSQL', icon: <Icons.postgresql className="size-10" /> },
      { name: 'Prisma ORM', icon: <Icons.prisma className="size-10" /> },
      { name: 'Docker', icon: <Icons.docker className="size-10" /> },
      { name: 'Kubernetes', icon: <Icons.kubernetes className="size-10" /> },
      { name: 'Git', icon: <Icons.git className="size-10" /> },
    ],
  },
] as const;

export const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'International Standard University, Dhaka, Bangladesh',
    period: 'July 2021 – June 2025',
    gpa: 'CGPA: 3.84 / 4.00',
    details:
      'Focused on backend engineering, data structures, algorithms, databases, and software design patterns. Conducted research and developed full-stack web applications and AI-driven backend APIs.',
  },
] as const;

export const achievementsData = [
  {
    title: 'First-Author Springer Publication',
    subtitle: 'Presented at BIM 2025 (Springer Proceedings)',
    description:
      'Conducted academic research as a lead author, supporting data-driven results and presenting findings.',
    type: 'publication',
  },
  {
    title: 'Co-Author IEEE Publication',
    subtitle: 'Peer-reviewed research at COMPAS 2024',
    description:
      'Collaborated on analyzing and publishing peer-reviewed research papers at international IEEE conferences.',
    type: 'publication',
  },
  {
    title: 'Open Source Creator',
    subtitle: 'Published NPM packages',
    description:
      'Designed and published modular NPM packages used actively by other developers globally.',
    type: 'open-source',
  },
  {
    title: 'AWS Certified Specialist',
    subtitle: 'AWS Educate (Storage and Compute)',
    description:
      'Completed AWS training on cloud architecture, covering scalable compute (EC2) and storage (S3) systems.',
    type: 'certification',
  },
  {
    title: 'GIT for Beginners',
    subtitle: 'KodeKloud Certification',
    description:
      'Mastered advanced version control concepts, branch management, and collaborative development workflows.',
    type: 'certification',
  },
] as const;
