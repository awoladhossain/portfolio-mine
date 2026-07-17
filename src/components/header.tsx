'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-border/50 bg-background/50 dark:bg-background/30 sticky top-5 z-40 my-5 flex items-center gap-2 rounded-full border p-2 shadow-md shadow-violet-500/5 backdrop-blur-md sm:top-8 sm:my-8"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="text-foreground/80 hover:text-primary hover:bg-primary/5 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold sm:hidden"
          >
            Menu <Icons.chevronDown className="size-3.5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="border-border/50 bg-background/95 text-muted-foreground dark:bg-background/90 max-h-screen w-[90%] rounded-2xl shadow-xl shadow-violet-500/10 backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle className="text-md text-foreground self-start font-medium">
              Navigation
            </DialogTitle>
          </DialogHeader>
          <nav className="mt-4">
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={name}
                  className="border-border/40 hover:text-primary py-3 text-sm transition-colors [&:not(:last-child)]:border-b"
                >
                  <Link className="block" href={hash}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <ThemeToggle className="hover:bg-primary/5 text-foreground bg-transparent sm:hidden" />
      <nav className="text-muted-foreground hidden text-sm sm:block">
        <ul className="flex items-center gap-2">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className={cn(
                  'hover:text-foreground relative block rounded-full px-4 py-2 transition-colors duration-200',
                  activeSection === name && 'text-foreground font-medium'
                )}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="bg-primary/10 border-primary/20 absolute inset-0 -z-10 rounded-full border shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
          <li className="border-border/50 ml-2 border-l pl-2">
            <ThemeToggle className="hover:bg-primary/5 text-foreground bg-transparent" />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
