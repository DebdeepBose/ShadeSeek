import { Link } from "react-router-dom";

export const Section8Main = () => {
  return (
    <div className="h-full w-full bg-black flex justify-center select-none">
      <div className="relative text-white max-w-8xl mx-auto px-[4%] lg:px-[12%] py-12 sm:py-16 lg:py-24 w-[98%] text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400">
            Connect
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Have questions or simply wanna get in touch?
        </p>

        <Link
          to="/ContactPage"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform inline-block"
        >
          Contact Me →
        </Link>
      </div>
    </div>
  );
};
