'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  // function handleSubmitFromData
  const handleSubmitFromData = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }
    toast.success('Email sent successfully!');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 dark:text-white/80 -mt-6'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:hurleywflow@gmail.com'>
          hurleywflow@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='dark:text-black mt-5 flex flex-col gap-5'
        onSubmit={handleSubmitFromData}
      >
        <input
          className='borderBlack dark:bg-white h-14 rounded-lg px-4 transition-all dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='borderBlack dark:bg-white my-3 h-52 rounded-lg p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
