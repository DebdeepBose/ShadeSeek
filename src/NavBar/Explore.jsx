import "../NavBar/Explore.css";

export function Explore({onClick}) {
  return (
    <button onClick={onClick} className="explore-button relative rounded-full  px-6 py-3 text-white font-semibold overflow-hidden border-0 cursor-pointer transition-colors duration-300">
      <span className="relative z-10">Explore</span>
    </button>
  );
}
