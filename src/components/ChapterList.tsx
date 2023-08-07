"use client";
import useManga from "@/hooks/useManga";
import { useRouter } from "next/navigation"
interface ChapterProps {
  id: string;
  title: string;
  releaseDate: string;  
};
export default function ChapterList({list, id}: any){
    const {getInfo} = useManga()
    const router = useRouter()
    let List = [] as ChapterProps[]
    let index = 0;
    while(true){
      if(list[index] == undefined) 
        break
        index++
    }
    while(index--)
      List.push(list[index])
    return(
      <div className="flex flex-col space-y-4 ml-8 mt-4 w-[50%] mb-8">
          
        {
              List.map(
              (e:any, index:number) => (
              <span className="align-center flex flex-row hover:bg-white/20 text-gray-200 transition duration-300 rounded p-[0_0.375rem]">
                <p
              onClick={
                () => router.push(
                  `/read/mangareader/${id}?index=${encodeURIComponent(e.id)}`
                  )
                }
                className="w-[80%] cursor-pointer">{e.title}
                </p>
                {/* <p className="">{e.chapterNumber}</p> */}
              </span>
            )
            )
        }
     
    </div>
    )
}