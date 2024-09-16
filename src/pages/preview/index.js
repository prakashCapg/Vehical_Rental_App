import React from "react";
import Popup from "../../components/PopUp/Popup";
import InputField from "../../components/InputField/InputField";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>
      <Popup />
      <InputField />
      <Tabs tabs={tabs} />
      <ImageUpload />
      <Buttons></Buttons>
      <Dropdown></Dropdown>
      <Card1></Card1>
    </div>
  );
};

export default Preview;
