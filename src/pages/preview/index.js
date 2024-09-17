import React from "react";
import Popup from "../../components/PopUp/Popup";
import InputField from "../../components/InputField/InputField";
import Tabs from "../../components/Tabs";
import TestButton from "../../components/button/TestButton";
import TestCard1 from "../../components/Card1/TestCard1";
import TestDropdown from "../../components/Dropdown/TestDropdown";
const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>
      <Popup />
      <InputField />
      <Tabs tabs={tabs} />
      <TestButton></TestButton>
      <TestDropdown></TestDropdown>
      <TestCard1></TestCard1>
    </div>
  );
};

export default Preview;
