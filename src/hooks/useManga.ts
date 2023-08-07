import { CONSUMET_URI, CONSUMET_MANGA_URI, CONSUMET_CHAPTER_URI } from "@/utils/constants"
import axios from 'axios'
import { Sora } from "next/font/google";
export default function useManga(){
    let API ={
        popular: CONSUMET_URI + "/advanced-search",
        trending: CONSUMET_URI + "/advanced-search?sort=[%22TRENDING_DESC%22]",
        info: CONSUMET_MANGA_URI + "/info",
        read: CONSUMET_CHAPTER_URI,
    }
  async function getPopular() {
    const data = await axios.get(API.popular,{
      params:{
        type:"MANGA",
        perPage:35,
      }
    });
    return data;
  }
  async function getTrending(){
    const data = await axios.get(API.trending, {
      params:{
        type:"MANGA",
        perPage:21,
      }
    })
    return data;
  }
  async function getInfo(id: string, provider: string) {
    const data = await axios.get(API.info + "/" + id,{
      params:{
        provider
      }
    })
    return data;
  }

  async function getSearch(query: string) {
    const data = await axios.get(API.popular, {
      params:{
        type:"MANGA",
        query: query,
        perPage:42,
      }
    });
    return data;
  }
  async function getChapterManga(id:string, source: string){
    const data = await axios.get(API.read, {
        params:{
          chapterId: id,
          provider: source
        }
    })
    return data;
  }
  
  return {
    getTrending,
    getPopular,
    getInfo,
    getSearch,
    getChapterManga,
  };
}