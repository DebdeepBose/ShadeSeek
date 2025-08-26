import { Nav } from "./Nav";
import { Loader } from "./Burger";
import { LogOut } from "./LogOut";

export const Header = ({
  isMobile,
  isPanelOpen,
  onBurgerClick,
  onLogOutClick,
}) => {
  return (
    <div
      id="header"
      className="top-0 fixed z-50 w-full max-w-[1600px] px-4 flex items-center justify-between pl-4 pr-8 bg-black bg-opacity-0"
    >

      <div className="text-white flex justify-end text-2xl mt-3 font-bold ml-2 cursor-pointer"  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }>
        
        <span className="translate-y-[-1px] transition-all duration-300">
          Shade
        </span>
        <span className="text-pink-500 hover:text-blue-500 hover:translate-y-[-3px] transition-all duration-300 cursor-pointer">
          Seek
        </span>
      </div>

      {isMobile ? (
        <Loader isOpen={isPanelOpen} onClick={onBurgerClick} />
      ) : (
        <Nav />
      )}

      {!isMobile && (
        <div >
          <LogOut onLogOutClick={onLogOutClick}  />
        </div>
      )}
    </div>
  );
};
