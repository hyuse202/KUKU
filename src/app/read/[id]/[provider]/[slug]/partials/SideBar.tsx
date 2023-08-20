'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';
import { FaBackward, FaForward } from 'react-icons/fa';
const transition = [0.33, 1, 0.68, 1];

const SideBar = ({ list, anilistId, id, source }: any) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  const curIndex = list.findIndex((e: any) => e.id === id);
  const onPrev = () => {
    window.location.href = `
    /read/${anilistId}/${source}/${encodeURIComponent(list[curIndex + 1].id)}`;
  };
  const onNext = () => {
    window.location.href = `
    /read/${anilistId}/${source}/${encodeURIComponent(list[curIndex - 1].id)}`;
  };
  return (
    <motion.div
      className='flex-shrink-0 flex-grow-0 bg-base-300'
      animate={{ width: isOpen ? '250px' : '55px' }}
      transition={{ ease: transition, duration: 0.4 }}
      initial='initial'
    >
      <div className='flex flex-col h-full w-full p-4 space-y-4'>
        <div className=' w-full items-center justify-between'>
          <FaBars
            size={20}
            onClick={toggle}
            className='cursor-pointer hover:text-primary'
          />
          <FaBackward
            size={20}
            className='hover:text-primary cursor-pointer mt-2'
            onClick={onPrev}
          />
          <FaForward
            size={20}
            className='hover:text-primary cursor-pointer mt-2'
            onClick={onNext}
          />
          {isOpen && (
            <div className='overflow-hidden font-semibold line-clamp-1'>
              {' '}
              Chap: {list[curIndex].number}
            </div>
          )}
          {isOpen && (
            <ul className=' h-1/6 text-center overflow-auto bg-background-900'>
              {list.map((e: any, index: number) => {
                const isActive = curIndex === index;
                return (
                  <li
                    className={classNames(
                      'relative rounded px-4 py-2 cursor-pointer hover:bg-white/20 transition duration-300',
                      isActive && 'active-chapter',
                    )}
                    onClick={() => {
                      window.location.href = `
                                /read/${anilistId}/${source}/${encodeURIComponent(
                                  e.id,
                                )}`;
                    }}
                  >
                    Chap: {e.number}
                    {curIndex == index && (
                      <div className='absolute z-100 left-0 top-0 h-full w-1 bg-red-500'></div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default SideBar;
