import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./CSSMAIN/index.css";
import { Header } from "./NavBar/Header";
import { SidePanel } from "./NavBar/SidePanel";
import { Hero } from "./Section1/Hero";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const section2Ref = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const smootherRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Rent");
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownOptions = {
    Rent: ["Studio", "Apartments", "Houses", "Luxury Homes", "Office Spaces"],
    Buy: ["Status", "Property", "Active", "Sold"],
    Foreclosure: ["Categories", "Apartments", "Houses", "Luxury Homes"],
  };

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
          <Hero />
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
          <div className="absolute inset-0 bg-gray-800/50 z-[2]"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 text-white ">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Find Your Dream Home
            </h1>
            <p>Explore top properties</p>
            <div className="bg-[#15052da1] p-5 rounded-lg max-w-4xl w-full mx-auto">
              <div className="flex space-x-6 text-white font-semibold text-sm mb-4 border-b border-white/20">
                {["Rent", "Buy", "Foreclosure"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedOption(dropdownOptions[tab][0]);
                    }}
                    className={`uppercase pb-2 border-b-2 transition ${
                      activeTab === tab
                        ? `border-white text-white `
                        : "border-transparent text-white/70 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden">
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="p-[15px] text-[#5c727d] border-r outline-none text-lg cursor-pointer appearance-none"
                >
                  {dropdownOptions[activeTab].map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
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
