'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import useLocalStorage from '@/hooks/useLocalStorage';
export default function List() {
  const { getWatched, delWatched } = useLocalStorage();
  const [animes, setAnimes] = useState<any | null>(null);

  useEffect(() => {
    setAnimes(getWatched());
  }, []);
  const onDelete = (key: string) => {
    delWatched(key);
    setAnimes(getWatched());
  };

  return animes !== null && Object.keys(animes).length > 0 ? (
    <>
      {Object.keys(animes)
        .reverse()
        .map((key: string) => (
          <Card
            id={animes[key].id}
            key={animes[key].id}
            title={animes[key].title}
            src={animes[key].image}
            additional="aa"
            episodeId={animes[key].chapterId}
            hasRemoveBtn={true}
            delCb={() => onDelete(key)}
          />
        ))}
    </>
  ) : (
    <></>
  );
}
