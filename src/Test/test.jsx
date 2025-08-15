import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollSmoother);

export default function Test() {
  useLayoutEffect(() => {
    // Run only in the browser
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-black text-white min-h-screen">
        <div className="h-[300px] w-[300px] mx-auto mt-20">
          <Spline scene="https://prod.spline.design/GHlOXEus1N0oQFxa/scene.splinecode" />
        </div>

        <p className="mt-40 text-center text-xl">
          Scroll down smoothly with GSAP 🚀
        </p>

        {/* Extra space so scroll is visible */}
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}
