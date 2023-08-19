import React from 'react';
import SearchAnime from '@/partials/Search';
import { nightTokyo } from '@/utils/fonts';
import { AiFillGithub } from 'react-icons/ai';
function Header() {
  return (
    <>
      <div className="">
        <div className="navbar bg-gradient-to-b from-base-300 relative bigp:top-0 bigp:z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost bigp:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/history">History</a>
                </li>
                <li>
                  <a href="/followed">follow</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className={`${nightTokyo.className} pt-2 btn btn-ghost font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 tracking-widest`}
              >
                9x9
              </a>
            </div>
            <ul className="menu menu-horizontal px-1 font-semibold hidden bigp:flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/history">History</a>
              </li>
              <li>
                <a href="/followed">Follow</a>
              </li>
            </ul>
          </div>
          <div className="hidden w-full bigp:flex">
            <div className="mr-1 w-full flex flex-row gap-4">
              <SearchAnime />
              <a href="https://github.com/hyuse202/KUKU" target="_blank">
                <AiFillGithub className="inset-y-1" size={50} />
              </a>
            </div>
          </div>
          <div className="navbar-end gap-2 hidden bigp:flex"></div>
        </div>
        <div className="bigp:hidden">
          <SearchAnime />
        </div>
      </div>
    </>
  );
}

export default Header;
