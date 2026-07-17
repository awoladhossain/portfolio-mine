'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { achievementsData, educationData } from '@/lib/data';

export const Education = () => {
  const { ref } = useSectionInView('Education');

  return (
    <section
      ref={ref}
      id="education"
      className="mx-auto my-10 w-full max-w-4xl scroll-mt-28 px-4 md:mb-20 md:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Education & Achievements"
          content="My academic background, peer-reviewed research publications, and open-source contributions."
        />
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column: Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="mb-2 flex items-center gap-3">
            <Icons.graduationCap className="text-primary size-6" />
            <h3 className="text-foreground text-xl font-bold">Education</h3>
          </div>

          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card/30 border border-border/50 backdrop-blur-sm group flex flex-col gap-3 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <h4 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors duration-200">
                  {edu.degree}
                </h4>
                <p className="text-muted-foreground mt-1 text-sm">
                  {edu.institution}
                </p>
              </div>

              <div className="text-muted-foreground flex flex-wrap gap-2 text-xs">
                <span className="bg-background/40 border border-border/50 flex items-center gap-1 rounded-md px-2 py-1">
                  <Icons.calendar className="size-3.5" />
                  {edu.period}
                </span>
                <span className="bg-background/40 border border-border/50 text-foreground flex items-center gap-1 rounded-md px-2 py-1 font-medium">
                  <Icons.award className="text-primary size-3.5" />
                  {edu.gpa}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Right Column: Achievements & Publications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="mb-2 flex items-center gap-3">
            <Icons.award className="text-primary size-6" />
            <h3 className="text-foreground text-xl font-bold">
              Publications & Open Source
            </h3>
          </div>

          <div className="space-y-4">
            {achievementsData.map((ach, idx) => (
              <div
                key={idx}
                className="bg-card/30 border border-border/50 backdrop-blur-sm group flex gap-4 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="bg-background/40 border border-border/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300">
                  {ach.type === 'publication' ? (
                    <Icons.bookOpen className="size-5" />
                  ) : ach.type === 'certification' ? (
                    <Icons.award className="size-5" />
                  ) : (
                    <Icons.terminal className="size-5" />
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="text-md text-foreground group-hover:text-primary font-semibold transition-colors duration-200">
                    {ach.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-medium">
                    {ach.subtitle}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
