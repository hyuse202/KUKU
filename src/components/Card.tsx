"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {FaStar} from 'react-icons/fa'
type Props = {
  id: string;
  title: string;
  src: string;
  additional: string;
  episodeId?: string;
  hasRemoveBtn?: boolean;
  delCb?: () => void;
};

function Card({
  id,
  title,
  src,
  additional,
  episodeId,
  hasRemoveBtn = false,
  delCb,
}: Props) {
  const router = useRouter();
  return (
    <motion.div
      className="relative w-[45%] h-[250px] smp:w-[30%] smp:h-[290px] bigp:w-[12%] rounded-lg hover:cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.05 } }}
      whileHover={{ scale: 1.1 }}
    >
      {hasRemoveBtn && (
        <div
          className="absolute right-5 top-5 bg-base-100 shadow-xl rounded-full p-2 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out z-10"
          onClick={delCb}
        >
          <RxCross1 size="15" />
        </div>
      )}

      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          router.push(
            `/info/${encodeURIComponent(id)}`
          )
        }
      >
        <div className="flex flex-col space-y-5 bg-base-300 shadow-2xl relative">
          <img
            src={src}
            alt={title}
            className="w-full h-[250px] smp:h-[290px] object-cover rounded-xl"
          />
          <div className="absolute bottom-0 p-1 flex flex-col w-full bg-gradient-to-b from-transparent to-violet-800">
            <div className="absolute rounded p-1 right-0 bottom-7 flex flex-row text-xs gap-1 font-bold items-baseline justify-end text-slate-100 bg-gradient-to-r from-orange-600 to-yellow-400"> 
              <FaStar size={17}/>
                {additional}
            </div>
            <p className="font-extrabold text-sm sm:text-base capitalize truncate text-center text-slate-100">
              {title}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
