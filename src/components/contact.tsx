'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

import { sendEmailAction } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: TFormSchema) => {
    try {
      const response = await sendEmailAction(values);
      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast.success(response.data || 'Message sent successfully!');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mx-auto my-10 w-full max-w-[38rem] scroll-mt-28 text-center md:mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href="mailto:awoladh04@gmail.com">awoladh04@gmail.com</Link>
            </Button>{' '}
            or through this form.
          </>
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-4 px-4 text-left md:px-0"
      >
        <div className="flex flex-col gap-1.5">
          <input
            {...register('email')}
            type="email"
            placeholder="Your email address"
            disabled={isSubmitting}
            className="bg-card/25 border border-border/55 focus:border-primary/50 focus:bg-card/45 focus:ring-2 focus:ring-primary/10 text-foreground h-12 rounded-xl px-4 outline-none transition-all duration-300 placeholder:text-muted-foreground/60 disabled:opacity-50"
          />
          {errors.email && (
            <span className="text-destructive px-1 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <textarea
            {...register('message')}
            placeholder="Your message"
            disabled={isSubmitting}
            rows={5}
            className="bg-card/25 border border-border/55 focus:border-primary/50 focus:bg-card/45 focus:ring-2 focus:ring-primary/10 text-foreground resize-none rounded-xl p-4 outline-none transition-all duration-300 placeholder:text-muted-foreground/60 disabled:opacity-50"
          />
          {errors.message && (
            <span className="text-destructive px-1 text-xs">
              {errors.message.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="group flex h-11 w-full items-center justify-center gap-2 self-end rounded-xl px-6 transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-primary/15 sm:w-fit"
        >
          {isSubmitting ? (
            <>
              <svg
                className="text-primary-foreground size-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Icons.arrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </form>
    </motion.section>
  );
};
