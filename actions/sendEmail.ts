'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

// get RESEND_TOKEN from environment variables
const resend = new Resend(process.env.RESEND_TOKEN);

export const sendEmail = async (formData: FormData) => {
  // get name input to extract values input
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'hurleywflow@gmail.com',
      subject: 'Message from portfolio contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      // validate error and return error message
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
