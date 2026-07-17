import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Awolad Hossain | Backend Software Engineer',
  description:
    "Hello, I'm Awolad Hossain, a Backend Software Engineer from Bangladesh. I specialize in high-concurrency distributed systems, database optimization, and scalable APIs using Go, Node.js/NestJS, and PostgreSQL.",
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
