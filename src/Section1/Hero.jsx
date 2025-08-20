import { Typewriter } from "react-simple-typewriter";
import { FaLocationArrow } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative mb-4 h-screen w-full flex flex-col items-center select-none justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="absolute top-1/2 left-64 animate-pulse -translate-y-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
        <div className="absolute top-1/2 right-64 animate-pulse -translate-y-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
      </div>
      <h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold text-center">
        Find Your{" "}
        <span className="inline-block align-middle animate-bounce text-blue-500 [animation-duration:1s]">
          Perfect
        </span>{" "}
        Home
      </h1>

      <h2 className="relative z-10 mt-4 text-white text-2xl md:text-4xl font-semibold text-center">
        Find{" "}
        <span className="text-pink-500">
          <Typewriter
            words={["Properties", "Rentals", "Hostels", "Hotels"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <h3 className="relative z-10 mt-4 animate-pulse [animation-duration:1.2s] text-blue-500 rotate-45 text-2xl font-bold cursor-pointer hover:scale-110 transition-all duration-100 active:scale-95">
        <FaLocationArrow />
      </h3>
    </section>
  );
};
