'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    if (!env.RESEND_API_KEY) {
      console.warn(
        'RESEND_API_KEY is not defined in the environment variables.'
      );
      return {
        error:
          'Email sending is not configured (missing API key). Please email me directly.',
      };
    }

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'awoladh04@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch (err) {
    console.error('Error sending email:', err);
    return {
      error: `Something went wrong!`,
    };
  }
};
