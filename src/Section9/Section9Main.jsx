import { Link } from "react-router-dom";
import Tooltip from "./TooltipBox"; 

export const Section9Main = () => {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-gray-800 select-none">
      <div className="max-w-8xl mx-auto px-[4%] lg:px-[12%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="select-none">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Shade
              <span className=" text-sky-500 ">Seek</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping you find your dream property with trust, transparency, and
              modern solutions.
            </p>
          </div>

    
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Quick <span className="text-pink-500">Links</span>
            </h3>
            <ul className="space-y-2 text-sm select-none">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-sky-400 font-semibold transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/AboutPage"
                  className="hover:text-sky-400 font-semibold transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-sky-400 font-semibold transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/ChooseService"
                  className="hover:text-sky-400 font-semibold transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactPage"
                  className="hover:text-sky-400 font-semibold transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center ">
            <h3 className="text-xl font-bold text-white -mb-12">
              Follow <span className="text-sky-500">Me</span>
            </h3>
            <Tooltip />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Made By Debdeep
        </div>
      </div>
    </footer>
  );
};
