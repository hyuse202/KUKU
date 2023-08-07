import React from "react";
import useManga from "@/hooks/useManga";
import { Metadata } from "next";
import Bar from "./partials/Bar";
type Props = {
  params: {slug: string};
  searchParams: { [key: string]: string};
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
  const anilist_id = params.slug;
  const id = decodeURIComponent(searchParams.index)
  const {getInfo, getChapterManga} = useManga();
  const info:any = await getInfo(anilist_id, "mangareader");
  const list = info.data.chapters
  let List = []
  let index = 0;
    while(true){
      if(list[index] == undefined) 
        break
        index++
    }
    while(index--)
      List.push(list[index])
  const res:any = await getChapterManga(id, "mangareader")
  return(
      <div className="">
        <div> {anilist_id} {id}</div>
        {/* <Bar list = {List} chapterIndex = {chapter_index} anilistId = {anilist_id}/> */}
        {
        res.data.map(
          (e:any) => (

              <img src={e.img} alt="aaa" className="mx-auto"/>
          )
        )
          }
      </div>
  );
}

export default page;