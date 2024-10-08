import React, { useState } from "react";
import PopUp from "../../components/PopUp/Popup";
import img from "./img1.jpg";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import TestButton from "../../components/button/Buttons";
import TestCard1 from "./TestCard1";
import TestDropdown from "./TestDropdown";
import BookingHistory from "../BookingHistory/BookingHistory";
import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
import Accordion from "../../components/Accordion/Accordion";
import Workflow from "../../components/Workflow/index";
import Tracking from "../BookingHistory/Tracking";
import Buttons from "../../components/button/Buttons";

const Preview = () => {
  const cardData = [
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
      features: ["Automatic", "Air Conditioning", "Bluetooth", "Backup Camera"],
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
  ];

  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>

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

      <ImageUpload />
      <TestButton></TestButton>
      <TestCard1></TestCard1>
      <TestDropdown></TestDropdown>

      {/* <BookingHistory /> */}
      <Accordion />

      <Tracking />
    </div>
  );
};

export default Preview;
