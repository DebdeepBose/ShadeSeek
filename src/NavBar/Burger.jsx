import "../CSSMAIN/index.css";

export const Loader = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center mt-6 rotate-90 cursor-pointer relative w-[30px] h-[30px]"
    >

      <span
        className={`inline-block w-[3px] h-3 bg-blue-500 rounded-[10px] transition-all duration-300 origin-center
        ${isOpen ? "rotate-45 translate-x-[6px] h-[33px] bg-pink-400 duration-150" : "animate-scaleUp4"}`}
        style={{ animationDelay: isOpen ? "0s" : "0s" }}
      ></span>

      <span
        className={`inline-block w-[3px] h-[25px] bg-pink-400 rounded-[10px] mx-[5px] transition-all duration-300
        ${isOpen ? "opacity-0 w-0" : "animate-scaleUp4"}`}
        style={{ animationDelay: isOpen ? "0s" : "0.35s" }}
      ></span>

      <span
        className={`inline-block w-[3px] h-3 bg-blue-500 rounded-[10px] transition-all duration-300 origin-center
        ${isOpen ? "-rotate-45 -translate-x-[9px] h-[33px] bg-blue-500 duration-150" : "animate-scaleUp4"}`}
        style={{ animationDelay: isOpen ? "0s" : "0.7s" }}
      ></span>
    </div>
  );
};