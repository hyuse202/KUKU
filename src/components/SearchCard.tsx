import Link from 'next/link';
import React from 'react';

interface SearchCardProps {
  id: string;
  src: string;
  title: string;
  additional: string;
  cb: () => void;
}

function SearchCard({ id, src, title, cb }: SearchCardProps) {
  return (
    <Link
      href={`/info/${id}`}
      onClick={() => cb()}
      className='flex items-center gap-5 p-5 hover:cursor-pointer hover:bg-base-300 hover:text-purple-300'
    >
      <img
        src={src}
        alt={title}
        width={80}
        height={80}
        className='object-contain'
      />
      <div className=''>
        <p className='font-bold break-word capitalize'>{title}</p>
      </div>
    </Link>
  );
}

export default SearchCard;
