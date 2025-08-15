import React from 'react';
import { Nav } from "./Nav";
import { Loader } from "./Burger";
import { Explore } from "./Explore";

export const Header = ({ isMobile, isPanelOpen, onBurgerClick, onExploreClick }) => {
  return (
    <div
      id="header"
      className="w-full max-w-[1600px] px-4 flex items-center justify-between pl-4 pr-8 z-[50]"
    >
      <div className="text-white flex justify-end text-2xl mt-3 font-bold ml-2 cursor-pointer ">
        <span className='translate-y-[-2px] transition-all duration-300'>Shade</span>
        <span className="text-pink-500 hover:text-blue-500 hover:translate-y-[-3px] transition-all duration-300 cursor-pointer">
          Seek
        </span>
      </div>

      {isMobile ? (
        <Loader isOpen={isPanelOpen} onClick={onBurgerClick} />
      ) : (
        <Nav />
      )}

      <div className="hidden md:block">
        <Explore onClick={onExploreClick} />
      </div>
    </div>
  );
};