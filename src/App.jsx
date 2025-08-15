import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./CSSMAIN/index.css";
import { Nav } from "./NavBar/Nav";
import { Loader } from "./NavBar/Burger";
import { Explore } from "./NavBar/Explore";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const section2Ref = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const smootherRef = useRef(null);

  // State to control the mobile panel's visibility
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

  // Function to toggle the mobile panel's state
  const handleBurgerClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <div
          id="section-1"
          className="h-[100vh] w-full bg-black pt-4 flex justify-center items-start"
        >
          <div
            id="header"
            className="w-full max-w-[1600px] px-4 flex items-center justify-between pl-4 pr-8 z-[50]"
          >
            <div className="text-white flex justify-end text-2xl mt-3 font-bold ml-2">
              <span>Shade</span>
              <span className="text-pink-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                Seek
              </span>
            </div>

            {/* The Loader is now only in the header and has a high z-index */}
            {isMobile ? (
              <Loader isOpen={isPanelOpen} onClick={handleBurgerClick} />
            ) : (
              <Nav />
            )}

            <div className="hidden md:block">
              <Explore onClick={handleExploreClick} />
            </div>
          </div>
        </div>

        {/* The sliding mobile panel */}
        <div
          className={`fixed top-0 right-0 h-[500px] w-[200px] bg-gray-900 z-[49] transform transition-transform duration-500
          ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Panel content (your nav links) */}
          <div className="flex flex-col items-center rounded-lg mt-6 justify-center h-full space-y-8 text-white text-2xl font-bold">
            <div className="w-[200px] h-[400px] rounded-lg flex flex-col gap-6 items-center ">
              <a
                className="group mt-4 w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-blue-600 hover:text-white hover:bg-blue-600"
                href="#about"
                onClick={handleBurgerClick}>
                Home
              </a>
              <a
                className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-pink-400 hover:text-gray-900 hover:bg-pink-400"
                href="#services"
                onClick={handleBurgerClick}>
                About
              </a>
              <a
                className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-yellow-400 hover:text-gray-900 hover:bg-yellow-400"
                href="#contact"
                onClick={handleBurgerClick}>
                Blogs
              </a>
              <a
                className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-pink-400 hover:text-gray-900 hover:bg-pink-400"
                href="#services"
                onClick={handleBurgerClick}>
                Services
              </a>
              <a
                className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-blue-600 hover:text-white hover:bg-blue-600"
                href="#contact"
                onClick={handleBurgerClick}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div
          ref={section2Ref}
          className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"
        ></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default App;