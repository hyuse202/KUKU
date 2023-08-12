"use client";
import React,{useEffect, useState} from "react";
import useManga from "@/hooks/useManga";
import { useRouter, useParams } from "next/navigation"
import Loading from "@/components/LoadingSingle";
export default function ChapterList(){
  const {getInfo} = useManga();
  const anilistId = useParams().slug
  const [chapters, setChapters] = useState<any> (null);
  const router = useRouter()
  useEffect(() => {
    async function fetchChapters() {
      let data  
        if(typeof window !== undefined){
          const source = localStorage?.getItem("provider")
          const response = await getInfo(anilistId, source)
          data = response.data
        }
        setChapters(data.chapters);
        console.log(data.chapters)
    }

    fetchChapters();
  }, []);
    return(
      chapters?
     (<div className="flex flex-col space-y-4 ml-8 mt-4 w-[50%] mb-8">
           
        {
              chapters?.map(
              (e:any, index:number) => (
              <span className="align-center flex flex-row hover:bg-white/20 text-gray-200 transition duration-300 rounded p-[0_0.375rem]">
                <p
              onClick={
                () => router.push(
                  typeof window !== undefined ?
                  `/read/${anilistId}/${localStorage.getItem("provider")}/${encodeURIComponent(e.id)}`
                  : "/"
                  )
                }
                className="w-[80%] cursor-pointer">{e.title}
                </p>
              </span>
            )
            )
      
              }
    </div>) :(<Loading/>)
    )
}