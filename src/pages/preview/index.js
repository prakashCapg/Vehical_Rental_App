import React from "react";
import Popup from "../../components/PopUp/Popup";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
<<<<<<< HEAD
import InputFieldDate from "../../components/InputField_Date/InputField_Date";
=======
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
>>>>>>> 03036c109bc59366c8d2ae9563555ec7f26ff894

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
<<<<<<< HEAD

=======
      <ImageUpload />
>>>>>>> 03036c109bc59366c8d2ae9563555ec7f26ff894
      <Buttons></Buttons>
      <Dropdown></Dropdown>
      <Card1></Card1>
    </div>
  );
};

export default Preview;
