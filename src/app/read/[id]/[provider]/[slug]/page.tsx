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
  const { getInfo, getChapterManga } = useManga();
  const info: any = await getInfo(anilist_id);
  const res: any = await getChapterManga(anilist_id, id, params.provider);
  console.log(res.data[0]);
  return (
    <div className="flex w-full h-screen overflow-auto">
      {/* <SideBar list={List} id={id} anilistId= {anilist_id} source={params.provider}/> */}
      <div className="relative z-30 h-full w-full overflow-auto">
        {/* <Display chapter={res.data} info={info.data} /> */}
        {Object.keys(res.data).map((e: any) => (
          <div>
            {' '}
            <img
              src={`https://image.eltik.net/image-proxy?url=${encodeURIComponent(
                `${res.data[e].url}`,
              )}&headers=${encodeURIComponent(JSON.stringify({ Referer: 'https://mangadex.org' }))}`}
              alt="aa"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Page;
