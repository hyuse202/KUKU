'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import useLocalStorage from '@/hooks/useLocalStorage';
export default function List() {
  const { getWatched, delWatched } = useLocalStorage();
  const [mangas, setmangas] = useState<any | null>(null);

  useEffect(() => {
    setmangas(getWatched());
  }, []);
  const onDelete = (key: string) => {
    delWatched(key);
    setmangas(getWatched());
  };

  return mangas !== null && Object.keys(mangas).length > 0 ? (
    <>
      {Object.keys(mangas).map((key: string) => (
        <Card
          id={key}
          key={mangas[key].id}
          title={mangas[key].title}
          src={mangas[key].image}
          additional={mangas[key].sourceId}
          episodeId={mangas[key].chapterId}
          hasRemoveBtn={true}
          delCb={() => onDelete(key)}
        />
      ))}
    </>
  ) : (
    <></>
  );
}
