/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Reveal } from './reveal';
import SectionHeadingBlock from './section-heading';
import SubmitBtnBlock from './submit-btn';
import { useRouter } from 'next/navigation';

const ContactBlock = () => {
  const { ref } = useSectionInView('Contact');
  const router = useRouter();
  // function handleSubmitFromData
  const handleSubmitFromData = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { data, error } = await sendEmail(formData);
    console.log(data);

    if (error) {
      toast.error(error);
      return;
    }
    toast.success('Email sent successfully!');
    (event.target as HTMLFormElement).reset();
    // get delay 3 seconds before navigating to home page
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // use Nextjs router to navigate to home page
    router.push('/');
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 h-fit w-[min(100%,38rem)] text-center sm:mb-28'
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
      <SectionHeadingBlock>Contact me</SectionHeadingBlock>

      <p className='-mt-6 mb-3 text-gray-700 dark:text-white/80'>
        Please contact me directly at{' '}
        <a
          className='hover:decoration-none text-gradient-siri font-semibold underline decoration-[#beb8ae] underline-offset-4'
          href='mailto:hurleywflow@gmail.com'
        >
          hurleywflow@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <Reveal>
        <form
          className='mt-5 flex flex-col gap-5 dark:text-black'
          onSubmit={handleSubmitFromData}
        >
          <input
            className='borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-80'
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your email'
          />
          <textarea
            className='borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-80'
            name='message'
            placeholder='Your message'
            required
            maxLength={5000}
          />
          <SubmitBtnBlock />
        </form>
      </Reveal>
    </motion.section>
  );
};
export default ContactBlock;
