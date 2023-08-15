"use client"
import React, {useEffect, useState} from "react";
import ChapterList from "./ChapterList";
export default function ProviderList(){
  const [selectOption, setSelecOption] = useState<string>('mangadex')
  useEffect(() => {
    const provider = localStorage.getItem("provider");
    if (!provider) {
      localStorage.setItem("provider", "mangadex");
    }
    else{
      setSelecOption(provider)
    }
  }, []);
    return(
      <>

        <div className="mt-8 flex items-center gap-4 w-full bigp:w-1/2 mb-5 bigp:mb-0">
            <div className="ml-8 text-xl font-bold w-[50%]">List chapter </div>
          <p className="text-base font-semibold">Source</p>
          <select
            className="select select-bordered w-[60%] lg:w-[400px] max-w-xs select-sm"
            onChange={(e) => {
              localStorage.setItem("provider", e.target.value);
              setSelecOption(e.target.value)
              window.location.reload()
            }}
            value={
              typeof window !== "undefined"
              ? localStorage.getItem("provider") ?? "mangadex"
              : ""
            }
            >
            <option value="mangahere">Mangahere</option>
            <option value="mangareader">Mangareader</option>
            <option value="mangadex">Mangadex</option>
          </select>
        </div>
        <ChapterList/>
      </>
    )
}