'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Experience"
        content="Professional software engineering experience and technical achievements."
      />
      <div className="relative ml-4 max-w-screen-md md:ml-0">
        {experiencesData.map(
          ({ title, points, company, period, technologies }, index) => (
            <div key={company} className="group relative pb-10 pl-8 last:pb-0">
              {/* Vertical line connecting dots */}
              {index !== experiencesData.length - 1 && (
                <div className="bg-muted group-hover:bg-primary/30 absolute bottom-0 left-[7px] top-6 w-[2px] transition-colors duration-300" />
              )}

              {/* Dot */}
              <div className="border-primary bg-background group-hover:border-primary absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-125">
                <div className="bg-primary group-hover:bg-primary size-1.5 rounded-full transition-all duration-300" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                className={cn(
                  'bg-card/30 border border-border/50 backdrop-blur-sm -mt-4 space-y-4 rounded-2xl p-6 transition-all duration-300 hover:bg-card/50 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5'
                )}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 border border-primary/20 flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300">
                      <Icons.building className="text-primary size-5" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-lg font-bold leading-tight">
                        {title}
                      </h3>
                      <span className="text-muted-foreground text-sm font-semibold transition-colors group-hover:text-primary">
                        {company}
                      </span>
                    </div>
                  </div>
                  <div className="bg-secondary text-secondary-foreground border border-border/40 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-xs font-medium sm:self-center">
                    <Icons.calendar className="size-3.5" />
                    <span>{period}</span>
                  </div>
                </div>

                <ul className="text-muted-foreground space-y-2.5 pl-1">
                  {points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                    >
                      <span className="bg-primary/80 mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-background/80 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-primary rounded-md border px-2.5 py-1 text-xs transition-all duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
