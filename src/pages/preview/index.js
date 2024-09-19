import React, { useState } from "react";
import BookingPopup from "../../components/PopUp/Popup";
import img from "./img1.jpg";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import TestButton from "./TestButton";
import TestCard1 from "./TestCard1";
import TestDropdown from "./TestDropdown";

import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import BookingHistory from "../BookingHistory/BookingHistory";

import { useLocation } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";

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

  const location = useLocation();
  const selectedType = location.state?.selectedType || "Car"; // Default to Car if no state is passed

  const [activeTab, setActiveTab] = useState(selectedType);

  const tabs = ["Car", "Bike", "6-Seater"];
  return (
    <div>
      <h1>Preview</h1>

      <BookingPopup />
      {/*<LoginPopup />*/}

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <Tabs tabs={tabs} activeTab={activeTab} onTabSelect={setActiveTab} />

      <ImageUpload />
      <TestButton></TestButton>
      <TestCard1></TestCard1>
      <TestDropdown></TestDropdown>

      <BookingHistory />
      <Accordion />
    </div>
  );
};

export default Preview;
