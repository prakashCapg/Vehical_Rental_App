import React from "react";
import Tabs from "../../components/Tabs";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Preview;
