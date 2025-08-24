import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 import Link

export const ServiceCard = ({ 
  title, 
  description, 
  bgImage, 
  overlayTitle, 
  overlayDesc,
  link, 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCard = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className="relative inset-0 flex hover:scale-105 transition-all duration-300 ease-out flex-auto justify-center rounded-2xl items-center flex-col bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

      <div className="relative w-full z-10 text-center">
        <div
          className="h-[250px] w-full rounded-lg bg-transparent flex items-center justify-center text-white font-bold cursor-pointer transition"
          onClick={toggleCard}
        >
          <div>
            <h1 className="text-white font-bold text-4xl mb-2">{title}</h1>
            <p className="text-gray-300 font-semibold text-xl">{description}</p>
          </div>
        </div>

        <div
          className={`
            absolute inset-0 
            flex flex-col items-center justify-center text-center font-bold text-white
            bg-gradient-to-r from-blue-800/40 via-purple-500/30 to-pink-800/40
            backdrop-blur-md border border-white/20 shadow-lg shadow-pink-500/20 rounded-2xl
            transition-all duration-300 ease-out
            ${isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-6 opacity-0 scale-95 pointer-events-none'}
          `}
        >

          <button
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10"
            onClick={toggleCard}
          >
            <X size={18} />
          </button>

          <h1 className="bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent font-bold text-lg md:text-xl px-4">
            {overlayTitle}
          </h1>

          <p className="text-gray-200 font-medium mt-2 px-4 text-sm md:text-base">
            {overlayDesc}
          </p>

          <Link to= {link}>
            <button className="mt-4 px-4 py-2 rounded-3xl border border-transparent bg-gradient-to-r from-pink-500 to-pink-300 hover:shadow-lg active:scale-95 hover:scale-110 transition">
              <span className="rounded-lg text-white">Check Out</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
