import { useState } from "react";
import { Section2 } from "./MainSection2File";
import { DropdownOptions } from "./dropDownArr";

export function Section2Main({ section2Ref }) {
  const [activeTab, setActiveTab] = useState("Rent");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for: ${searchValue} in ${selectedOption} (${activeTab})`
    );
  };

  return (
    <Section2
      section2Ref={section2Ref}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      handleSearch={handleSearch}
      DropdownOptions={DropdownOptions}
    />
  );
}