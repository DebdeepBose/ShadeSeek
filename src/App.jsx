import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./CSSMAIN/index.css";
import { Header } from "./NavBar/Header";
import { SidePanel } from "./NavBar/SidePanel";
import { Hero } from "./Section1/Hero";
import { DropdownOptions } from "./Section2/dropDownArr"; 
import { Section2 } from "./Section2/MainSection2File";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const section2Ref = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const smootherRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Rent");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

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

  // Optional: A function to handle the search logic
  const handleSearch = () => {
    console.log(
      `Searching for: ${searchValue} in ${selectedOption} (${activeTab})`
    );
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
          <Hero />
        </div>
        <SidePanel isPanelOpen={isPanelOpen} onLinkClick={handleBurgerClick} />

        <Section2
          section2Ref={section2Ref}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          DropdownOptions={DropdownOptions}
        />

        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default App;
