/* eslint-disable react/react-in-jsx-scope */
import { block } from 'million/react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitBtnBlock = block(function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className=' disabled:bg-opacity-45 group mx-auto flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-[#BEB8AE]/80 text-xl text-yellow-50 outline-none transition-all hover:scale-110 hover:bg-[#BEB8AE] focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-[#BEB8AE]/50 dark:hover:bg-[#BEB8AE]'
      disabled={pending}
    >
      {pending ? (
        <div className='animate-spin h-5 w-5 rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-lg opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />{' '}
        </>
      )}
    </button>
  );
});
export default SubmitBtnBlock;
