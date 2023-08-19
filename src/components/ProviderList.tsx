'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function ProviderList({ chapters, anilistId }: any) {
  const [selectOption, setSelecOption] = useState<string>('mangadex');
  let sourceIndex = 1;
  const router = useRouter();
  useEffect(() => {
    const provider = localStorage.getItem('provider');
    if (!provider) {
      localStorage.setItem('provider', 'mangadex');
    } else {
      setSelecOption(provider);
      //@ts-ignore
      sourceIndex = Object.keys(chapters).find(key => chapters[key].providerId === selectOption);
    }
  }, []);
  console.log(chapters.data[sourceIndex].chapters[0].id);
  return (
    <>
      <div className="mt-8 flex items-center gap-4 w-full bigp:w-1/2 mb-5 bigp:mb-0">
        <div className="bigp:ml-8 text-xl font-bold w-[50%]">List chapter </div>
        <p className="text-base font-semibold">Source</p>
        <select
          className="select select-bordered w-[60%] lg:w-[400px] max-w-xs select-sm"
          onChange={e => {
            localStorage.setItem('provider', e.target.value);
            setSelecOption(e.target.value);
            window.location.reload();
          }}
          value={typeof window !== 'undefined' ? localStorage.getItem('provider') ?? 'mangadex' : ''}
        >
          <option value="mangabuddy">MangaBuddy</option>
          <option value="mangasee">Mangasee123</option>
          <option value="mangadex">Mangadex</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 bigp:ml-8 mt-4 w-[50%] mb-8">
        {Object.keys(chapters.data[sourceIndex].chapters)?.map((e: any) => (
          <span className="align-center flex flex-row hover:bg-white/20 text-gray-200 transition duration-300 rounded p-[0_0.375rem]">
            <p
              onClick={() =>
                router.push(
                  //@ts-ignore
                  typeof window !== undefined
                    ? `/read/${anilistId}/mangadex/${encodeURIComponent(
                        chapters.data[sourceIndex].chapters[e].id,
                      )}`
                    : '/',
                )
              }
              className="w-[80%] cursor-pointer"
            >
              Chap: {chapters.data[sourceIndex].chapters[e].number}
            </p>
          </span>
        ))}
      </div>
    </>
  );
}
