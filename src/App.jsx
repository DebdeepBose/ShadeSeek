import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./CSSMAIN/index.css";
import { Header } from "./NavBar/Header";
import { SidePanel } from "./NavBar/SidePanel";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const section2Ref = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const smootherRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExploreClick = () => {
    if (smootherRef.current && section2Ref.current) {
      smootherRef.current.scrollTo(section2Ref.current, true, "top");
    }
  };

  const handleBurgerClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div id="smooth-wrapper" ref={main}>
      <div className="w-full max-w-[1600px] bg-transparent">
        <Header
          isMobile={isMobile}
          isPanelOpen={isPanelOpen}
          onBurgerClick={handleBurgerClick}
          onExploreClick={handleExploreClick}
        />
      </div>
      <div id="smooth-content">
        <div
          id="section-1"
          className="relative mt-[-80px] h-[100vh] w-full flex flex-col items-center justify-start bg-black overflow-hidden"
        >
          <div className="h-[85%] w-full flex justify-center items-center mt-6 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gray-800/50 before:z-0"></div>
        </div>
        <SidePanel isPanelOpen={isPanelOpen} onLinkClick={handleBurgerClick} />

        <div
          ref={section2Ref}
          className="relative h-[100vh] w-full bg-blue-950 flex justify-center items-center overflow-hidden"
        >
          <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[1]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="sec1.mp4" type="video/mp4" />
          </video>

          {/* This is the new greyish overlay */}
          <div className="absolute inset-0 bg-gray-800/50 z-[2]"></div>

          {/* Content for this section should have a higher z-index to be visible on top of the overlay */}
          <h1 className="text-white text-5xl font-bold z-[3]">
            Find Your Dream House 
          </h1>
        </div>

        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default App;
