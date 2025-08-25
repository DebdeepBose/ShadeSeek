import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Layers, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const base = {
        x: -60,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: true,
      };

      gsap.utils.toArray(".fade-slide").forEach((el) => {
        gsap.from(el, {
          ...base,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none play reverse",
            immediateRender: true,
          },
        });
      });

      gsap.utils.toArray(".service-card").forEach((el, i) => {
        gsap.from(el, {
          ...base,
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none play reverse",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>

      <div className="relative h-screen w-screen flex flex-col items-center select-none justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-64 -translate-y-1/2 animate-pulse md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
          <div className="absolute top-1/2 right-64 -translate-y-1/2 animate-pulse md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 p-6 text-center select-none fade-slide">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            About <span className="text-blue-500">Us</span>
          </h1>
          <h2 className="font-bold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-125">
            More than homes, we create connections
          </h2>
        </div>
      </div>
      <div className="pb-16 w-screen flex items-start justify-center bg-black pt-8 px-8 select-none">
        <div className="max-w-5xl text-center fade-slide">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Simplifying <span className="text-pink-500">Home</span> Hunting
          </h2>
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
            We believe finding your dream home should be exciting, not stressful. 
            That's why we bring all services together under one roof. Property 
            listings for Rentals, Luxury Apartments, Beach Houses, You name it!
            We sincerely hope your home hunt is smooth and efficient
          </p>
        </div>
      </div>
      <div className="bg-gray-900  py-20 px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 select-none ">
        <div className="service-card flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl shadow-md ">
          <Home className="h-12 w-12 text-sky-400 mb-4 hover:scale-105 transition-all duration-150" />
          <h3 className="text-xl font-bold text-white mb-2">End-to-End Services</h3>
          <p className="text-gray-300">
            From search to settlement, we handle every step so you don’t have to.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center p-6 bg-gray-800 select-none rounded-2xl shadow-md ">
          <Layers className="h-12 w-12 text-pink-400 mb-4 hover:scale-105 transition-all duration-150" />
          <h3 className="text-xl font-bold text-white mb-2">Multi-Layered Exploration</h3>
          <p className="text-gray-300">
            Take your own sweet time to explore multiple listings.
          </p>
        </div>

        <div className="service-card flex flex-col items-center text-center p-6 bg-gray-800 select-none rounded-2xl shadow-md">
          <Headphones className="h-12 w-12 text-green-400 mb-4 hover:scale-105 transition-all duration-150" />
          <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
          <p className="text-gray-300">
            Our experts are always available to guide you, every step of the way.
          </p>
        </div>
      </div>

      <div className="bg-black py-20 text-center ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 select-none">
          Ready to explore our <span className="text-pink-500">Services</span>?
        </h2>
        <Link
          to="/ChooseService"
          className="bg-sky-500 hover:bg-sky-600 select-none text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg"
        >
          Check Out Services
        </Link>
      </div>
    </div>
  );
};
