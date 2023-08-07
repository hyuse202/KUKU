"use client";
import { IAnime } from "@/@types/EnimeType";
import Link from "next/link";
import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselProps = {
  spotlightInfo: IAnime[];
};

function Carousel({ spotlightInfo }: CarouselProps) {
  return (
    <ReactCarousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      dynamicHeight
      stopOnHover
    >
      {spotlightInfo.map((anime:any, index: number) => (
        <CarouselSingle
          key={index}
          id={anime.id}
          src={anime.cover}
          title={anime.title.english}
          description={anime.description}
        />
      ))}
    </ReactCarousel>
  );
}

type CarouselSingleProps = {
  id: string;
  src: string;
  title: string;
  description: string;
};

function CarouselSingle({
  id,
  src,
  title,
  description,
}: CarouselSingleProps) {
  return (
    <div id={`slide${id}`} className="relative w-full h-[300px] lg:h-[700px]">
      <img
        src={src}
        className="w-full h-full object-cover lg:opacity-50 opacity-30"
      />
      <div className="absolute flex flex-col text-start items-start space-y-5 lg:left-20 left-5 top-10 lg:top-1/3 w-1/2 h-3/4 overflow-hidden">
        <p className="text-xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-pink-300">
          {title}
        </p>
        <p
          className="font-normal text-base lg:text-md leading-relaxed line-clamp-6"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div>
          <Link
            href={`/info/${encodeURIComponent(id)}`}
            className="btn btn-sm btn-outline lg:btn-md"
          >
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
