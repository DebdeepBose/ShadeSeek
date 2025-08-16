import { CoverVidSec2 } from "./MainVid";
import { SearchBar } from "./SearchBar";
import { SearchTabs } from "./SearchTabs";

export const Section2 = ({
  section2Ref,
  activeTab,
  setActiveTab,
  selectedOption,
  setSelectedOption,
  searchValue,
  setSearchValue,
  handleSearch,
  DropdownOptions,
}) => {
  return (
    <div
      ref={section2Ref}
      className="relative h-[100vh] w-full bg-blue-950 flex justify-center items-center overflow-hidden"
    >
      <CoverVidSec2 />
      <div className="absolute inset-0 bg-gray-800/50 z-[2]"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Find Your Dream Home
        </h1>
        <p className="mb-6">Explore top properties</p>

        <div className="bg-[#15052da1] p-5 rounded-lg max-w-4xl w-full mx-auto">
          {/* Tabs Component */}
          <SearchTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSelectedOption={setSelectedOption}
            DropdownOptions={DropdownOptions}
          />

          {/* SearchBar Component */}
          <SearchBar
            activeTab={activeTab}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
            DropdownOptions={DropdownOptions}
          />
        </div>
      </div>
    </div>
  );
};
