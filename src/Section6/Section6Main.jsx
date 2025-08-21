import { Link } from "react-router-dom";

export const Section6Main = () => {
  return (
    <div className="h-full w-full bg-black pt-4 flex justify-center ">
      <div className="relative bg-black md:px-12 text-white max-w-8xl mx-auto px-[4%] lg:px-[12%] py-8 sm:py-12 lg:py-20 w-[98%]">
        <div className="flex justify-between items-center mb-12 flex-col gap-4 sm:flex-row lg:gap-0">
          <div className="text-center lg:text-start">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Latest{" "}
              <span className="text-transparent bg-clip-text brightness-125 bg-gradient-to-r from-sky-500 to-pink-400">
                Blogs
              </span>
            </h2>
            <p className="text-gray-400 font-semibold text-base md:text-lg mt-2">
              Stay updated with the latest real estate tips, guides, and news.
            </p>
          </div>
          <Link
            to="/blogs"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Explore Blogs →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">3 Tips for First-Time Buyers</h3>
            <p className="text-gray-400 mb-4">
              Learn the essentials to make your first home purchase stress-free.
            </p>
            <Link to="/blogs" className="text-sky-400 font-semibold hover:underline">
              Read More
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">3 Rental Hacks to Save Money</h3>
            <p className="text-gray-400 mb-4">
              Discover how to save money and find the best rental deals.
            </p>
            <Link to="/blogs" className="text-sky-400 font-semibold hover:underline">
              Read More
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Luxury Living Guide</h3>
            <p className="text-gray-400 mb-4">
              Explore the world of premium homes and high-end amenities.
            </p>
            <Link to="/blogs" className="text-sky-400 font-semibold hover:underline">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
