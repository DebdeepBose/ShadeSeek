import { useState } from "react";

export const ServiceCard = ({ title, description, bgImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  const slideOnTopOfGreenDiv = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className="h-[90%] w-[90%] flex hover:scale-105 transition-all duration-300 ease-out flex-auto justify-center rounded-2xl items-center flex-col bg-black relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
      <div className="relative z-10 text-center ">
        <div
          className="h-[250px] w-[300px] rounded-lg bg-transparent flex items-center justify-center text-white font-bold cursor-pointer transition-colors"
          onClick={slideOnTopOfGreenDiv}
        >
          <div>
            <h1 className="text-white font-bold text-4xl mb-2">
              {title}
            </h1>
            <p className="text-gray-300 font-semibold text-xl">
              {description}
            </p>
          </div>
        </div>
        <div
          className={`
            absolute top-3 -left-[47px] md:-left-[27px] h-[225px] w-[395px] md:w-[355px]
            flex items-center justify-center font-bold text-white
            bg-gradient-to-r from-blue-800/40 via-purple-500/30 to-pink-800/40
            backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl
            transition-all duration-200 ease-in-out
            ${isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0 pointer-events-none'
            }
          `}
          onClick={slideOnTopOfGreenDiv}
        >
          <h1 className="text-white font-bold text-[30px]">Slider LOL</h1>
        </div>
      </div>
    </div>
  );
};

