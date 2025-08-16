export const SearchTabs = ({ activeTab, setActiveTab, setSelectedOption, DropdownOptions }) => {
  return (
    <div className="flex space-x-6 text-white font-semibold text-sm mb-4 border-b border-white/20">
      {["Rent", "Buy", "Foreclosure"].map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            setSelectedOption(DropdownOptions[tab][0]);
          }}
          className={`uppercase pb-2 border-b-2 transition ${
            activeTab === tab
              ? `border-white text-white`
              : "border-transparent text-white/70 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
