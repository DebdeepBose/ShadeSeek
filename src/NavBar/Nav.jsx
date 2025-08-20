import "../NavBar/Nav.css";
import { Link } from "react-router-dom"; // 👈 Add this line

import {
 FaHome,
 FaInfoCircle,
 FaBlog,
 FaServicestack,
 FaEnvelope,
} from "react-icons/fa";

import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

export function Nav() {
 return (
  <>
   <div className="sticky top-0 z-40 bg-black pb-[3px] w-full max-w-[60%] md:max-w-[800px] h-[60px] md:h-[80px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden isolate animated-border flex-shrink">
    <div className="relative z-[1] h-full w-full bg-black rounded-bl-[24px] rounded-br-[24px] flex items-center justify-center">
     <ul className="flex cursor-pointer flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-20 text-white">
      {/* Home Link */}
            <Link to="/">
       <li
        className="flex items-center gap-2 px-1 sm:px-2 text-white/80 transition-transform hover:scale-125 hover:text-[#ceb1ec]"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
       >
        <FaHome className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
       </li>
            </Link>

      {/* About Link */}
            <Link to="/about">
       <li
        className="flex items-center gap-2 px-1 sm:px-2 text-white/80 transition-transform hover:scale-125 hover:text-[#12bcfe]"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About"
       >
        <FaInfoCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-76" />
       </li>
            </Link>

      {/* Blog Link */}
            <Link to="/blogs">
       <li
        className="flex items-center gap-2 px-1 sm:px-2 text-white/80 transition-transform hover:scale-125 hover:text-[#ff8ad4]"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Blog"
       >
        <FaBlog className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
       </li>
            </Link>

      {/* Services Link */}
            <Link to="/ChooseService">
       <li
        className="flex items-center gap-2 px-1 sm:px-2 text-white/80 transition-transform hover:scale-125 hover:text-[#b2e2f2]"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Services"
       >
        <FaServicestack className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
       </li>
            </Link>

      {/* Contact Link */}
            <Link to="/">
       <li
        className="flex items-center gap-2 px-1 sm:px-2 text-white/80 transition-transform hover:scale-125 hover:text-[#f5d2fb]"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
       >
        <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
       </li>
            </Link>
     </ul>
    </div>
   </div>

   <Tooltip
    id="my-tooltip"
    place="bottom"
    effect="solid"
    className="z-[999]"
   />
  </>
 );
}

export default Nav;