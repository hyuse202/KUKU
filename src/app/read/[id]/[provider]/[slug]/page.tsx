import React from "react";
import useManga from "@/hooks/useManga";
import { Metadata } from "next";
import SideBar from "./partials/SideBar";
type Props = {
  params: {
    slug: string, 
    provider:string,
    id: string
  };
};
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "KukuManga",
    openGraph: {
      title: "Read manga free and simple at Kuku Manga",
    },
  }; 
}
async function Page({params}: Props) {
  const anilist_id = params.id;
  const id = decodeURIComponent(params.slug)
  const {getInfo, getChapterManga} = useManga();
  const info:any = await getInfo(anilist_id, params.provider);
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
    const res:any = await getChapterManga(id, params.provider)
  return(
      <div className="flex w-full h-screen overflow-auto">
        <SideBar list={List} id={id} anilistId= {anilist_id}/>
        <div className="relative z-30 h-full w-full overflow-auto">

        {
          res.data.map(
            (e:any) => (
              
              <img src={e.img} alt="aaa" className="mx-auto"/>
              )
              )
            }
        </div>
      </div>
  );
}
export default Page