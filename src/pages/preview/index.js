import React from "react";
import PopUp from "../../components/PopUp/Popup";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import TestButton from "../../components/Buttons/Buttons";
import TestDropdown from "./TestDropdown";
import Popup from "../../components/PopUp/Popup";
import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
import InputField_Search from "../../components/InputField_Search";
import Calendar from "../../components/Calendar";
import Accordion from "../../components/Accordion/Accordion";
import Workflow from "../../components/Workflow/index";
import Tracking from "../BookingHistory/Tracking";
import Buttons from "../../components/Buttons/Buttons";
import InputFieldCheckbox from "../../components/InputField_checkbox";

const Preview = () => {
  const tabs = ["Car", "Bike", "6 Seater"];

  return (
    <div className="min-h-screen">
      <h1>Preview</h1>

      <Popup />

      <Workflow />

      <Buttons />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <ImageUpload />
      <TestButton></TestButton>
      {/* <TestCard1></TestCard1> */}
      <TestDropdown></TestDropdown>

      {/* <InputField_Search
        apiEndPoint="http://localhost:3002/bookings"
        navigation="/employee/booking-details"
      /> */}

      <Accordion />
      <Tracking />
      <Calendar />

      <InputFieldCheckbox />
    </div>
  );
};

export default Preview;
