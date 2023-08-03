import React from "react";
import useManga from "@/hooks/useManga";
import {MANGA} from '@consumet/extensions'
import { Metadata } from "next";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "KukuManga",
    openGraph: {
      title: "Read manga free and simple at Kuku Manga",
    },
  }; 
}
async function page({params}: Props) {
  const id = decodeURIComponent(params.slug)
  const mangadex = new MANGA.MangaReader();
  let dataa
  const res = await mangadex.fetchChapterPages(id)
  return(
      <div className="">{
        res.map(
          (e:any) => (

              <img src={e.img} alt="aaa" className="mx-auto"/>
          )
        )
          }
      </div>
  );
}

export default page;