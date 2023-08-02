import { CONSUMET_URI, CONSUMET_MANGA_URI, CONSUMET_CHAPTER_URI } from "@/utils/constants"
import axios from 'axios'
import {MANGA} from '@consumet/extensions'
export default function useManga(){
    let API ={
        popular: CONSUMET_URI + "/advanced-search",
        info: CONSUMET_MANGA_URI + "/info",
        mangahere: CONSUMET_CHAPTER_URI + "/mangahere/read",
        mangadex: CONSUMET_CHAPTER_URI + "/mangadex/read"
    }
  // async function getRecent() {
  //   const data = await axios.get(API.recent,{
  //     params:{
  //       type:"MANGA"
  //     }
  //   })
  //   return data;
  // }

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
    const data = await axios.get(API.popular, {
      params:{
        type:"MANGA",
        perpage:1,
        sort:["TRENDING_DESC"]
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
        query: query
      }
    });
    return data;
  }
  async function getChapterMangahere(id:string){
    const data = await axios.get(API.mangahere, {
        params:{
          chapterId: id
        }
    })
    return data;
  }
  async function getChapterMangadex(id:string){
    const mangadex = new MANGA.MangaDex()
    const res = mangadex.fetchChapterPages(id).then(data => {
    return data
})
  }
  return {
    // getRecent,
    getTrending,
    getPopular,
    getInfo,
    getSearch,
    getChapterMangahere,
    getChapterMangadex
  };
}