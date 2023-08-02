import React from "react";
import useManga from "@/hooks/useManga";
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
  const {getChapterMangahere} = useManga()
  const chapters:any = await getChapterMangahere(id);
  return(
      <div>{
      chapters.data.map(
        (e:any) => (
          <img
            src={e.img}
          />
        )
      )}
      </div>
  );
}

export default page;
