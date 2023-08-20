import Link from 'next/link';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import React from 'react';
import { nightTokyo } from '@/utils/fonts';

export const Footer = (props: {}) => {
  return (
    <footer className='w-full bg-base-300 shadow-xl p-5 flex flex-col items-center space-y-5'>
      <a
        href='/'
        className={`${nightTokyo.className} pt-2 btn btn-ghost font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500 tracking-widest`}
      >
        9x9
      </a>
      <div className='flex space-x-5 items-center'>
        <a href='https://github.com/hyuse202' target='_blank'>
          <FaGithub size={30} />
        </a>
        <a href='https://discord.gg/6yAJ3XDHTt' target='_blank'>
          <FaDiscord size={30} />
        </a>
      </div>
      <div className='flex space-x-5'>
        <Link href='/tos' className='text-gray-300' shallow>
          Terms of Service
        </Link>
        <Link href='/dmca' className='text-gray-300' shallow>
          DMCA
        </Link>
      </div>
      <p className='text-sm text-gray-300'>
        KUKU does not store any files on our server, we only linked to the media
        which is hosted on 3rd party services.
      </p>
      <p className='text-sm text-gray-300'>Copyright &copy; KUKU</p>
    </footer>
  );
};
