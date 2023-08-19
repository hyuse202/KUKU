import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import useManga from '@/hooks/useManga';

export default async function Home() {
  const { getPopular, getTrending } = useManga();
  const popularAnimes = await getPopular();
  const trendingMangas = await getTrending();
  return (
    <div>
      <Carousel spotlightInfo={popularAnimes.data.results} />
      <div className="xl:flex justify-between">
        <div className="bigp:m-10 mt-10 flex flex-col items-center justify-center">
          <p className="text-xl mb-10 uppercase font-bold text-violet-300 tracking-widest">Recent Release</p>
          <div className="flex flex-wrap justify-center gap-3 bigp:gap-6 bigp:mx-24">
            {trendingMangas.data.results.map((anime: any, index: number) => (
              <Card
                id={anime.id}
                key={index}
                title={anime.title.romaji}
                src={anime.image}
                additional={anime.rating}
              />
            ))}
          </div>
          <p className={`text-xl mt-20 bigp:mt-30 mb-10 uppercase font-bold text-violet-300 tracking-widest`}>
            Popular Release
          </p>
          <div className="flex flex-wrap justify-center gap-3 bigp:mx-24 bigp:gap-6">
            {popularAnimes.data.results.map((anime: any, index: number) => (
              <Card
                id={anime.id}
                key={index}
                title={anime.title.romaji}
                src={anime.image}
                additional={anime.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
