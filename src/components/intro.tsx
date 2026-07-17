'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-6 text-center sm:my-20"
    >
      {/* Animated Backend Terminal Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.1,
          duration: 0.6,
        }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute size-[130px] rounded-full border border-primary/20 bg-primary/5 blur-md animate-pulse" />
        <div className="absolute size-[120px] rounded-full border-2 border-dashed border-primary/30 animate-[spin_40s_linear_infinite]" />
        <div className="absolute size-[110px] rounded-full border border-dotted border-violet-500/40 animate-[spin_20s_linear_infinite_reverse]" />
        <div className="relative flex size-24 items-center justify-center rounded-full border-2 border-primary/35 bg-gradient-to-tr from-primary/10 to-violet-600/10 shadow-lg backdrop-blur-sm">
          <Icons.terminal className="text-primary size-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.4,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 transition-all hover:bg-green-500/10"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-green-600 dark:text-green-400">
            Available for work!
          </span>
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl"
      >
        Hi, I&#39;m a{' '}
        <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
          Backend Software Engineer
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-2xl leading-relaxed text-md"
      >
        I&apos;m Awolad Hossain, a backend engineer specializing in
        high-concurrency distributed systems using{' '}
        <strong className="text-foreground">
          Go, Node.js/NestJS, and PostgreSQL
        </strong>
        . I focus on database performance optimization, distributed locking
        strategies (Redis), and secure containerized environments.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-row flex-wrap justify-center gap-3"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full shadow-md shadow-primary/10 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
        >
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full transition-all hover:translate-y-[-2px]"
          asChild
        >
          <a href="/Awolad_Hossain_Resume.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full transition-all hover:translate-y-[-2px] hover:text-primary hover:border-primary/45"
            asChild
          >
            <Link
              href="https://www.linkedin.com/in/awoladhossain/"
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full transition-all hover:translate-y-[-2px] hover:text-primary hover:border-primary/45"
            asChild
          >
            <Link
              href="https://github.com/awoladhossain"
              aria-label="Github"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
