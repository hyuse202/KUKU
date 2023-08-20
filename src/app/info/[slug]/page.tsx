import React from 'react';
import useManga from '@/hooks/useManga';
import { Metadata } from 'next';
import ProviderList from '@/components/ProviderList';
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.slug;
  const { getInfo } = useManga();
  const info: any = await getInfo(id);
  return {
    title: 'KUKU | ' + info.data.title.romaji,
    openGraph: {
      title: 'Read manga free and simple at KUKU',
      images: [info.data.image],
    },
  };
}
async function page({ params }: Props) {
  const id = params.slug;
  const { getInfo } = useManga();
  const info: any = await getInfo(id);
  return (
    <section className='block h-full bigp:w-3/4 mx-auto pt-4 flex-col items-center overflow-x-hidden md:flex-row md:items-start'>
      <div className='flex flex-col bigp:flex-row bigp:space-x-8'>
        <img
          src={info.data.coverImage}
          className='rounded object-cover bigp:ml-8 h-auto max-w-xs'
        />

        <div className='flex flex-col space-y-4 ml-0'>
          <p className='text-2xl font-semibold mt-4'>
            {info.data.title.romaji}
          </p>
          <p className=''>{info.data.title.english}</p>
          <div className='flex flex-wrap gap-4'>
            {info.data.genres.map((e: any) => (
              <span className='rounded-sm bg-zinc-500 mb-auto text-base p-[0_0.375rem]'>
                {e}
              </span>
            ))}
          </div>
          <p dangerouslySetInnerHTML={{ __html: info.data.description }}></p>
          <div className='gap-x-16 flex bigp:flex-row flex-wrap'>
            <div>
              <p>Rate</p>
              <p>{info.data.rating.mal}</p>
            </div>
            <div>
              <p>Release Date</p>
              <p>{info.data.year}</p>
            </div>
            <div>
              <p>Status</p>
              <p>{info.data.status}</p>
            </div>
            <div>
              <p>Poupularity</p>
              <p>{info.data.popularity.anilist}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <ProviderList chapters={info.data.chapters} anilistId={id} />
      </div>
    </section>
  );
}

export default page;
