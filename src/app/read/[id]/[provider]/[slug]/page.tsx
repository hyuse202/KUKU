import React from 'react';
import useManga from '@/hooks/useManga';
import { Metadata } from 'next';
import SideBar from './partials/SideBar';
import Display from './partials/Display';
type Props = {
  params: {
    slug: string;
    provider: string;
    id: string;
  };
};
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'KukuManga',
    openGraph: {
      title: 'Read manga free and simple at Kuku Manga',
    },
  };
}
async function Page({ params }: Props) {
  const anilist_id = params.id;
  const id = params.slug;
  const { getChapters, getChapterManga } = useManga();
  const info: any = await getChapters(anilist_id);
  const res: any = await getChapterManga(anilist_id, id, params.provider);
  let List: any = [];
  let index = 0;
  while(info.data[index] !== undefined)
  {
    let index0 = 0;
    if(info.data[index].providerId === params.provider){
      while(info.data[index].chapters[index0] !== undefined)
        {
          List.push(info.data[index].chapters[index0])
          index0++;
        }
    }
    index++;
  }
  return (
    <div className='flex w-full overflow-auto'>
      <SideBar list={List} id={id} anilistId= {anilist_id} source={params.provider}/>
      <div className='relative z-30 h-full w-full'>
        <Display chapter={res.data} info={info.data} />
      </div>
    </div>
  );
}
export default Page;
