import React from "react";
import useManga from "@/hooks/useManga";
import { Metadata } from "next";
import ProviderList from "@/components/ProviderList"
import ChapterList from "@/components/ChapterList";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const defaultSource = "mangareader"
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.slug;
  const { getInfo } = useManga();
  const info:any = await getInfo(id, defaultSource);
  return {
    title: "KUKU | " + info.data.title.romaji,
    openGraph: {
      title: "Read manga free and simple at KUKU",
      images: [info.data.image],
    },
  }; 
}
async function page({params}: Props) {
  const id = params.slug;
  const {getInfo} = useManga();
  const info:any = await getInfo(id, defaultSource);
  return (
    <section className="block h-full pt-4 w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
      
      <div className="flex flex-row space-x-8">
        <img
          src = {info.data.image}
          className="rounded object-cover w-1/5 ml-8"
        />

        <div className="flex flex-col space-y-4">
          <p className="text-2xl font-semibold mt-4">{info.data.title.romaji}</p>
          <p className="">{info.data.title.english}</p>
          <div className="flex flex-wrap gap-4">
              {
                info.data.genres.map(
                  (e:any) => (
                    <span className="rounded-sm bg-zinc-500 mb-auto text-base p-[0_0.375rem]">{e}</span>
                    )
                )
              }
          </div>
          <p>{info.data.description}</p>
          <div className="gap-x-16 flex flex-row">
             <div>
                <p>Rate</p>   
                <p>{info.data.rating}%</p>
             </div>
             <div>
              <p>Release Date</p>
              <p>{info.data.releaseDate}</p>
             </div>
             <div>
              <p>Stauts</p>
              <p>{info.data.status}</p>
             </div>
            <div>
              <p>Poupularity</p>
              <p>{info.data.popularity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
      <ProviderList />
      <ChapterList {...info.data.chapters}/>
      </div>
    </section>
  );
}

export default page;