"use client"
import React from 'react'
import { FaBackward, FaForward } from 'react-icons/fa'
const Bar = ({list, chapterIndex, anilistId} :any) => {
  const onPrev = () => {
    window.location.href = `
    /read/mangareader/${anilistId}/${encodeURIComponent(list[chapterIndex + 1].id)}?index=${chapterIndex + 1}`
  };
  const onNext = () => {
    window.location.href = `
    /read/mangareader/${anilistId}/${encodeURIComponent(list[chapterIndex - 1].id)}?index=${chapterIndex - 1}`
  };
    return(
        <>
        <FaBackward
          size={25}
          className="hover:text-primary cursor-pointer"
          onClick={onPrev}
        />
        <FaForward 
          size= {25}
          className="hover:text-primary cursor-pointer"
          onClick={onNext}
        />

        </>
    )
}
export default Bar