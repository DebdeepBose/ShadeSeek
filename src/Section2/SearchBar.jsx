export const SearchBar = ({
  activeTab,
  selectedOption,
  setSelectedOption,
  searchValue,
  setSearchValue,
  handleSearch,
  DropdownOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-black/40 backdrop-blur-md rounded-lg border border-white/10 shadow-lg overflow-hidden w-full">
      {/* Dropdown */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="p-3 sm:p-4 text-white bg-transparent border-b md:border-b-0 md:border-r border-white/20 outline-none text-base sm:text-lg cursor-pointer appearance-none"
      >
        {DropdownOptions[activeTab].map((option, idx) => (
          <option key={idx} value={option} className="bg-black text-white">
            {option}
          </option>
        ))}
      </select>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter an address, state, city, area or zip code"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="flex-1 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 bg-transparent outline-none"
      />

      {/* Button */}
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-blue-600 to-pink-600 
          text-white px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold
          transform transition-transform duration-200 ease-in-out
          hover:scale-[1.02] active:scale-[0.95]"
      >
        <i className="fas fa-search"></i>
        <span>Search Listings</span>
      </button>
    </div>
  );
};
