import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Awolad Hossain | Full-stack developer',
  description:
    "Hello, I'm Awolad Hossain, a Full-stack developer from Bangladesh. I specialize in building scalable APIs, containerized applications, and modern web apps with React (Next.js) and Node.js.",
  keywords: [
    'Awolad Hossain',
    'Full-stack developer',
    'Bangladesh',
    'React',
    'Next.js',
    'Node.js',
    'Go',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'Web development',
    'Backend',
    'Frontend',
    'API development',
    'Software engineering',
    'Portfolio',
    'Projects',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
