import React from 'react';
import { redirect } from 'next/navigation';
import useManga from '@/hooks/useManga';
import Card from '@/components/Card';

async function page({ searchParams }: any) {
  const { getSearch } = useManga();

  if (!searchParams.q) {
    redirect('/');
  }
  const animeInfo: any = await getSearch(searchParams.q);
  return (
    <div className='m-2 bigp:m-10 flex flex-col items-center'>
      <p className='text-2xl bigp:text-3xl mt-20'>
        Search Result for{' '}
        <span className='font-extrabold'>{searchParams.q}</span>
      </p>
      <div className='mt-10 flex flex-wrap justify-between bigp:justify-start xl:gap-8 bigp:gap-6 gap-3'>
        {animeInfo.data.results.map((manga: any, index: number) => (
          <Card
            id={manga.id}
            key={manga.id}
            title={manga.title.romaji}
            src={manga.image}
            additional={`Released: ${manga.year}`}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
