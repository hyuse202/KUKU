import React from "react";
import useManga from "@/hooks/useManga";
import {MANGA} from '@consumet/extensions'
import { Metadata } from "next";
import Bar from "./partials/Bar";
type Props = {
  params: {  [key: string]: string | string[]  };
  searchParams: { [key: string]: string  };
};
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "KukuManga",
    openGraph: {
      title: "Read manga free and simple at Kuku Manga",
    },
  }; 
}
async function page({params, searchParams}: Props) {
  const anilist_id = params.params[0];
  const chapter_index = parseInt(searchParams.index)
  const id = decodeURIComponent(params.params[1])
  const {getInfo} = useManga();
  // const info:any = await getInfo(anilist_id, "mangareader");
  // const list = info.data.chapters
  // let List = []
  // let index = 0;
  //   while(true){
  //     if(list[index] == undefined) 
  //       break
  //       index++
  //   }
  //   while(index--)
  //     List.push(list[index])

  // const mangadex = new MANGA.MangaReader();
  // const res = await mangadex.fetchChapterPages(id)
  return(
      <div className="">
        <div>{anilist_id} {chapter_index} {id}</div>
        {/* <Bar list = {List} chapterIndex = {chapter_index} anilistId = {anilist_id}/>
        {
        res.map(
          (e:any) => (

              <img src={e.img} alt="aaa" className="mx-auto"/>
          )
        )
          } */}
      </div>
  );
}

export default page;