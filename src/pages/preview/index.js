import React from "react";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>
      <Tabs tabs={tabs} />
      <Buttons></Buttons>
      <Dropdown></Dropdown>
      <Card1></Card1>
    </div>
  );
};

export default Preview;
