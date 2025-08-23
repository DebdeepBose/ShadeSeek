import { FaFilter, FaSort } from "react-icons/fa";

export const PropertySidePanel = ({ properties, setProperties }) => {

  const handlePriceSort = (order) => {
    const sorted = [...properties];
    if (order === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setProperties(sorted);
  };

  const handleDateSort = (order) => {
    const sorted = [...properties];
    sorted.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("-");
      const [dayB, monthB, yearB] = b.date.split("-");
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
    setProperties(sorted);
  };

  return (
    <div className="py-8 px-6 h-[30%] md:h-full w-full md:w-[25%] rounded-2xl bg-gradient-to-b from-gray-900 to-black shadow-lg border border-gray-800">
      <div className="flex items-center justify-center gap-2 mb-6">
        <FaFilter className="text-pink-400" />
        <h2 className="text-xl font-bold text-white">Filter & Sort</h2>
      </div>

      <label className="block text-gray-300 font-medium mb-2">
        Sort by Price
      </label>
      <select
        onChange={(e) => handlePriceSort(e.target.value)}
        className="w-full rounded-lg bg-gray-800 text-white border-2 border-gray-800 transition-all hover:border-sky-400 outline-none px-3 py-2"
      >
        <option value="desc">High → Low</option>
        <option value="asc">Low → High</option>
      </select>

      <label className="block text-gray-300 font-medium mt-6 mb-2">
        Sort by Date
      </label>
      <select
        onChange={(e) => handleDateSort(e.target.value)}
        className="w-full rounded-lg bg-gray-800 text-white border-2 border-gray-800 transition-all hover:border-sky-400 outline-none px-3 py-2"
      >
        <option value="desc">Newest → Oldest</option>
        <option value="asc">Oldest → Newest</option>
      </select>
    </div>
  );
};
