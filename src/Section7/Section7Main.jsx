import { Link } from "react-router-dom";

export const Section7Main = () => {
  return (
    <div className="h-full w-full bg-black flex justify-center select-none">
      <div className="relative text-white max-w-8xl mx-auto px-[4%] lg:px-[12%] py-12 sm:py-16 lg:py-24 w-[98%]">
        
        <div className="flex justify-between items-center mb-12 flex-col sm:flex-row gap-6 lg:gap-0">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
              Get to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400">
                Know Us
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium max-w-2xl">
              Learn more about who we are, what we do, and how we help people
              discover their dream properties.
            </p>
          </div>

          <Link
            to="/AboutPage"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            About Us →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Who We Are</h3>
            <p className="text-gray-400 text-sm">
              A passionate team dedicated to redefining the real estate experience with trust and transparency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">What We Do</h3>
            <p className="text-gray-400 text-sm">
              From buying and selling to rentals and investments, we guide you through every step.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Our Properties</h3>
            <p className="text-gray-400 text-sm">
              Explore a diverse range of properties including luxury homes, rentals, and farmhouses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
