"use client"
import React from "react";
export default function ProviderList(){
    return(
        <div className="mt-8 flex items-center gap-4 w-full lg:w-1/2 order-1 lg:order-2 mb-5 lg:mb-0">
            <div className="ml-8 text-xl font-bold w-[50%]">List chapter</div>
          <p className="text-base font-semibold">Source</p>
          <select
            className="select select-bordered w-[60%] lg:w-[400px] max-w-xs select-sm"
            onChange={(e) => {
              localStorage.setItem("provider", e.target.value);
              window.location.reload();
            }}
            value={
              typeof window !== "undefined"
                ? localStorage.getItem("provider") ?? "Mangadex"
                : ""
            }
          >
            <option value="mangahere">Mangahere</option>
            <option value="mangareader">Mangareader</option>
            <option value="mangadex">Mangadex</option>
          </select>
        </div>
    )
}