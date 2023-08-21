import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import useManga from '@/hooks/useManga';

export default async function Home() {
  const { getPopular, getTrending } = useManga();
  const popularMangas = await getPopular();
  const trendingMangas = await getTrending();
  return (
    <div>
      <Carousel spotlightInfo={popularMangas.data.results} />
      <div className='xl:flex justify-between'>
        <div className='bigp:m-10 mt-10 flex flex-col items-center justify-center'>
          <p className='text-xl mb-10 uppercase font-bold text-violet-300 tracking-widest'>
            Recent Release
          </p>
          <div className='flex flex-wrap justify-center gap-3 bigp:gap-6 bigp:mx-24'>
            {trendingMangas.data.results.map((manga: any, index: number) => (
              <Card
                id={manga.id}
                key={index}
                title={manga.title.romaji}
                src={manga.image}
                additional={manga.rating}
              />
            ))}
          </div>
          <p
            className={`text-xl mt-20 bigp:mt-30 mb-10 uppercase font-bold text-violet-300 tracking-widest`}
          >
            Popular Release
          </p>
          <div className='flex flex-wrap justify-center gap-3 bigp:mx-24 bigp:gap-6'>
            {popularMangas.data.results.map((manga: any, index: number) => (
              <Card
                id={manga.id}
                key={index}
                title={manga.title.romaji}
                src={manga.image}
                additional={manga.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
