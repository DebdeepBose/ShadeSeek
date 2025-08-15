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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    return () => {
      smoother.kill();
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

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <div
          id="section-1"
          className="h-[100vh] w-full bg-black pt-4 flex justify-center items-start"
        >
          <div
            id="header"
            className="w-full max-w-[1600px] px-4 flex items-center justify-between pl-4 pr-8 "
          >
            <div className="text-white  flex justify-end text-2xl mt-3 font-bold ml-2">Shade<span className="text-pink-500 hover:text-blue-500 transition-colors  duration-300 cursor-pointer">Seek</span></div>

            {isMobile ? <Loader /> : <Nav />}

            <div className="hidden md:block">
              <Explore />
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default App;
