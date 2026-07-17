'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: '-50px',
      }}
      custom={index}
      className="bg-card/30 border border-border/50 backdrop-blur-sm group flex flex-col justify-between rounded-2xl p-6 shadow-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="space-y-4">
        <Link
          href={links.github}
          aria-label={title}
          target="_blank"
          className="border-border/50 bg-background/50 relative block aspect-video w-full overflow-hidden rounded-xl border"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </Link>
        <div>
          <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {technologies.map((tech) => (
            <span
              className="bg-background/40 border-border/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary rounded-md border px-2.5 py-1 text-xs transition-colors duration-200"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-border/40 mt-6 flex items-center gap-3 border-t pt-4">
        <Link
          href={links.github}
          target="_blank"
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-primary/15"
        >
          <Icons.github className="size-4" />
          <span>Source Code</span>
        </Link>
        {'demo' in links && (links as { demo?: string }).demo && (
          <Link
            href={(links as { demo: string }).demo}
            target="_blank"
            className="bg-secondary text-secondary-foreground border border-border/50 flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all hover:bg-primary/5 hover:border-primary/30 hover:text-primary hover:translate-y-[-1px]"
          >
            <Icons.preview className="size-4" />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
};
