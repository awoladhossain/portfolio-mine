'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const skillVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const Skills = () => {
  return (
    <div className="mt-12 w-full max-w-4xl px-4 md:px-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillsData.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            custom={catIndex}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-card/30 border border-border/50 backdrop-blur-sm flex flex-col rounded-2xl p-6 transition-all duration-300 hover:bg-card/50 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
          >
            <h3 className="text-muted-foreground border-border/30 mb-5 border-b pb-2.5 text-xs font-semibold tracking-widest uppercase">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-background/40 border border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.12)] group flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 shadow-sm transition-all duration-200"
                >
                  <div className="text-muted-foreground group-hover:text-primary flex size-5 shrink-0 items-center justify-center transition-colors duration-200 [&>svg]:size-full">
                    {skill.icon}
                  </div>
                  <span className="text-foreground text-xs font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
