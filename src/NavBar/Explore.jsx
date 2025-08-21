
export function Explore({ onExploreClick }) {
  return (
   <button
  onClick={onExploreClick}
  className="explore-button rounded-full px-6 py-3 border-r-pink-500 border-r-2 hover:scale-105 active:scale-95 transition-all duration-200 border-l-sky-500 border-l-2"
>
  <span className="relative z-10 font-extrabold text-md brightness-[1.25] hover:brightness-150 transition-all duration-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
    Explore
  </span>
</button>

  );
}
