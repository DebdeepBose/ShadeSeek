import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./CSSMAIN/index.css";
import { Header } from "./NavBar/Header";
import { SidePanel } from "./NavBar/SidePanel";
import { Section1Main } from "./Section1/Section1Main";
import { Section2Main } from "./Section2/Section2Main";
import { Section3Main } from "./Section3/Section3Main";
import { Section4Main } from "./Section4/Section4Main";

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
        <Section1Main /> 
        <Section2Main section2Ref={section2Ref} />
        <Section3Main />
        <Section4Main />

        <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
        <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center"></div>
      </div>
      <SidePanel isPanelOpen={isPanelOpen} onLinkClick={handleBurgerClick} />
    </div>
  );
}

export default App;