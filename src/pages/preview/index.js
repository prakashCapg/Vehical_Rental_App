import React from "react";
import Popup from "../../components/PopUp/Popup";
import InputField from "../../components/InputField/InputField";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
import ImageUpload from "../../components/ImageUpload/Index";

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
    </div>
  );
};

export default Preview;
