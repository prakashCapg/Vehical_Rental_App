import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

const TestDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const options = ["Option A", "Option B", "Option C", "Option D", "option E"];

  return (
    <div>
      <h1>Dropdown Example</h1>
      <Dropdown
        options={options}
        onSelect={handleSelect}
        placeholder="Select an option"
      />
      <p>Selected: {selectedOption}</p>
    </div>
  );
};

export default TestDropdown;
