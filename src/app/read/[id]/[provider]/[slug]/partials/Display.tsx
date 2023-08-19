'use client';
import React, { use, useEffect } from 'react';
import { useParams } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
export default function Display({ chapter, info }: any) {
  const { setWatchedId } = useLocalStorage();
  const anilist: any = useParams().id;
  const source = useParams().provider;
  const chapterId = useParams().slug;
  useEffect(() => {
    setWatchedId({
      anislistId: anilist,
      title: info.title.romaji,
      sourceId: source,
      chapterId,
      image: info.image,
    });
  }, []);
  return (
    <>
      {chapter.map((e: any) => (
        <img
          src={`https://image.eltik.net/image-proxy?url=${encodeURIComponent(
            `${e.img}`,
          )}&headers=${encodeURIComponent(JSON.stringify({ Referer: 'https://mangadex.org' }))}`}
          alt="aaa"
          className="mx-auto"
        />
      ))}
    </>
  );
}
