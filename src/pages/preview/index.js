import React, { useState } from "react";
import PopUp from "../../components/PopUp/Popup";
import img from "./img1.jpg";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import TestButton from "../../components/button/Buttons";
import TestCard1 from "./TestCard1";
import TestDropdown from "./TestDropdown";
<<<<<<< HEAD
import Popup from '../../components/PopUp/Popup';

=======
import BookingHistory from "../BookingHistory/BookingHistory";
>>>>>>> develop
import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
<<<<<<< HEAD
import InputField_Search from "../../components/InputField_Search";

import { getVehicleDetailsByIdRef } from "../../services/booking-details.service";
import Calendar from "../../components/Calendar";

=======
import Accordion from "../../components/Accordion/Accordion";
import Workflow from "../../components/Workflow/index";
import Tracking from "../BookingHistory/Tracking";
import Buttons from "../../components/button/Buttons";

const Preview = () => {
  
<<<<<<< HEAD
  const tabs = ["Car", "Bike", "6 Seater"];

=======
>>>>>>> develop
  return (
    <div className="min-h-screen">
      <h1>Preview</h1>
<<<<<<< HEAD
       <Test />
        <UseDebounce />
=======

      <PopUp />
      {/*<LoginPopup />*/}

      <Workflow />

      <Buttons />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

<<<<<<< HEAD
     

=======
>>>>>>> develop
      <ImageUpload />
      <TestButton></TestButton>
      <TestCard1></TestCard1>
      <TestDropdown></TestDropdown>

<<<<<<< HEAD
      <InputField_Search apiEndPoint='http://localhost:3002/bookings' navigation='/employee/booking-details'/>
      
      <Calendar />
      
=======
      {/* <BookingHistory /> */}
      <Accordion />

      <Tracking />
>>>>>>> 919be28b4f4ccd158708e11889ff26be2e6f75fe
>>>>>>> develop
    </div>
  );
};

export default Preview;
