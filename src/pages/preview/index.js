import React from "react";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>
      <Tabs tabs={tabs} />
      <Buttons></Buttons>
    </div>
  );
};

export default Preview;
