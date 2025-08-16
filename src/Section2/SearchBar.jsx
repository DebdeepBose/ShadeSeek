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
    <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden">
      {/* Dropdown */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="p-[15px] text-[#5c727d] border-r outline-none text-lg cursor-pointer appearance-none"
      >
        {DropdownOptions[activeTab].map((option, idx) => (
          <option key={idx} value={option}>
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
        className="flex-1 px-5 py-3 text-base text-black outline-none"
      />

      {/* Button */}
      <button
        onClick={handleSearch}
        className="bg-violet-500 border border-violet-700 text-white relative btn px-6 py-5 flex items-center gap-2 text-lg font-semibold "
      >
        <i className="fas fa-search"></i>
        Search Listings
      </button>
    </div>
  );
};
