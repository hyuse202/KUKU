import  Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import useManga from "@/hooks/useManga";

export default async function Home() {
  const { getPopular, getTrending} = useManga();
  const popularAnimes = await getPopular();
  const trendingMangas = await getTrending()
  return (
    <div>
      <Carousel spotlightInfo={popularAnimes.data.results} />
      <div className="xl:flex justify-between">
        <div className="lg:m-10 mt-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className="text-xl mb-10 uppercase font-bold text-pink-200 tracking-widest">
            Recent Release
          </p>
          <div className="flex flex-wrap justify-between lg:justify-start xl:gap-8 lg:gap-6 gap-3 m-2 lg:m-0">
            {trendingMangas.data.results.map((anime:any, index: number) => (
              <Card
                id={anime.id}
                key={index}
                title={anime.title.romaji}
                src={anime.image}
                additional={anime.status}
              />
            ))}
          </div>
          <p
            className={`text-xl mt-20 lg:mt-30 mb-10 uppercase font-bold text-pink-200 tracking-widest`}
          >
            Popular Release
          </p>
          <div className="flex flex-wrap justify-between lg:justify-start xl:gap-8 lg:gap-6 gap-3 m-2 lg:m-0">
            {popularAnimes.data.results.map((anime:any, index: number) => (
              <Card
                id={anime.id}
                key={index}
                title={anime.title.romaji}
                src={anime.image}
                additional={anime.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
