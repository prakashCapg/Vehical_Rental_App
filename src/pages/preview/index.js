import React from "react";
import Popup from "../../components/PopUp/Popup";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
import InputFieldDate from "../../components/InputField_Date/InputField_Date";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>

      <Popup />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <Tabs tabs={tabs} />

      <Buttons></Buttons>
    </div>
  );
};

export default Preview;
