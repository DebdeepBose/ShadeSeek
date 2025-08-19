import { Link } from "react-router-dom";
export const SidePanel = ({ isPanelOpen, onLinkClick }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-[500px] w-[200px] bg-gray-900 z-[49] transform transition-transform duration-500
      ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col items-center rounded-lg justify-center h-full space-y-8 text-white text-2xl font-bold">
        <div className="w-[200px] h-[400px] rounded-lg flex flex-col gap-6 items-center ">
          <a
            className="group mt-4 w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-blue-600 hover:text-white hover:bg-blue-600"
            href="#about"
            onClick={onLinkClick}>
            Home
          </a>
          <a
            className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-pink-400 hover:text-gray-900 hover:bg-pink-400"
            href="#services"
            onClick={onLinkClick}>
            About
          </a>
          <Link to="/blogs"
            className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-yellow-400 hover:text-gray-900 hover:bg-yellow-400"
            href="#contact"
            onClick={onLinkClick}>
            Blogs
          </Link>
          <a
            className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-pink-400 hover:text-gray-900 hover:bg-pink-400"
            href="#services"
            onClick={onLinkClick}>
            Services
          </a>
          <a
            className="group w-[150px] text-center py-2 rounded-lg transition-colors duration-300 text-blue-600 hover:text-white hover:bg-blue-600"
            href="#contact"
            onClick={onLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};