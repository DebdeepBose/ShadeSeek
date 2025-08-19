import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Header } from "./NavBar/Header";
import { SidePanel } from "./NavBar/SidePanel";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Layout({ children }) {
  const section2Ref = useRef();
  const smootherRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
    return () => window.removeEventListener("resize", handleResize);
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
    <div id="smooth-wrapper">
      <div className="w-full max-w-[1600px] bg-transparent">
        <Header
          isMobile={isMobile}
          isPanelOpen={isPanelOpen}
          onBurgerClick={handleBurgerClick}
          onExploreClick={handleExploreClick}
        />
      </div>

      <div id="smooth-content">{children}</div>

      <SidePanel isPanelOpen={isPanelOpen} onLinkClick={handleBurgerClick} />
    </div>
  );
}
